"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from api.models import db, Traveler, Post, Trip, Shared_Trip
from datetime import timedelta
from werkzeug.security import generate_password_hash, check_password_hash

from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_jwt_extended import JWTManager

import cloudinary
import cloudinary.uploader

from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

CORS(api)


@api.route('/login', methods=['POST'])
def login():
    email, password = request.json.get(
        "email", None
    ), request.json.get(
        "password", None
    )

    if email and password:
        traveler = Traveler.get_by_email(email)
        if traveler:
            if traveler.validate_password(password) and traveler.is_active:
                access_token = create_access_token(
                    identity=traveler.to_dict(), expires_delta=timedelta(minutes=43800))
                return jsonify(access_token), 200

    return ({'error': "User and password don't match"}), 201


@api.route('/register', methods=['POST'])
def create_traveler():
    name, email, password, age, language = request.json.get(
        "name", None
    ), request.json.get(
        "email", None
    ), request.json.get(
        "password", None
    ), request.json.get(
        "age", None
    ), request.json.get(
        "language", None
    )

    if email:
        traveler = Traveler.get_by_email(email)
        if traveler:
            if traveler.validate_email(email):
                password = generate_password_hash(
                    password, method='pbkdf2:sha256', salt_length=16)
                traveler.reactive_account(name, age, password, language)
                access_token = create_access_token(
                    identity=traveler.to_dict(), expires_delta=timedelta(minutes=43800))
                return jsonify(access_token), 200
        else:
            password = generate_password_hash(
                password, method='pbkdf2:sha256', salt_length=16)
            new_traveler = Traveler(
                name=name, email=email, _password=password, language=language, age=age)
            new_traveler_created = new_traveler.create()
            access_token = create_access_token(
                identity=new_traveler_created.to_dict(), expires_delta=timedelta(minutes=43800))

            if access_token:
                return jsonify(access_token), 201
            else:
                return ({'error': "Missing info"}), 404


@api.route('/newtrip/<int:id>', methods=['POST'])
@jwt_required()
def create_trip(id):
    traveler_id = get_jwt_identity()
    country = request.json.get('country', None)
    cities = request.json.get('cities', None)
    activities = request.json.get('activities', None)
    start_date = request.json.get('start_date', None)
    end_date = request.json.get('end_date', None)

    new_trip = Trip(
        traveler_id=traveler_id["id"],
        country=country,
        cities=cities,
        activities=activities,
        start_date=start_date,
        end_date=end_date,

    )
    if new_trip:
        new_trip.create()
        return jsonify(new_trip.to_dict()), 201

    else:
        return {'error': 'Something went wrong'}, 409


@api.route('/traveler/<int:id_traveler>/trip/<int:id_trip>', methods=['POST'])
@jwt_required()
def share_trip(id_traveler, id_trip):

    trip = Trip.get_by_id(id_trip)
    traveler_id = get_jwt_identity()

    if traveler_id == id_traveler:
        return {'error': 'Something went wrong'}, 405
    elif trip:
        shared = Shared_Trip.get_by_trip_id(trip.id).first()
        if shared is not None and id_traveler == shared.traveler_id:
            return {'error': 'You are on this trip'}, 405
        else:
            new_shared_trip = Shared_Trip(
                trip_id=trip.id,
                traveler_id=id_traveler
            )
            new_shared_trip.create()

            return jsonify(new_shared_trip.to_dict()), 201

        return {'error': 'Something went wrong'}, 404


# @api.route('/partner/<int:id_partner>/trip/<int:id_trip>', methods=['DELETE'])
# @jwt_required()
# def delete_partner(id_partner, id_trip):

#     trip = Trip.get_by_id(id_trip)
#     partner_id = get_jwt_identity()

#     shared = Shared_Trip.get_by_trip_id(trip.id).first()

#     if shared is not None and partner_id['id'] == shared.traveler_id:
#         partner = Shared_Trip.get_by_id(id_partner)
#         if partner:
#             partner.delete_partner()
#             return {'Bien': 'Something went wrong'},200       
#     return {'error': 'Something went wrong'}, 400


@api.route('/newpost/<int:id>', methods=['POST'])
@jwt_required()
def create_post(id):
    traveler_id = get_jwt_identity()
    title = request.json.get('title',None)
    text = request.json.get('text',None)
    media = ""
    
    new_post = Post(
                traveler_id=traveler_id["id"],
                title=title,
                text=text,
                media=media
            )
    if new_post: 
        new_post.create()
        return jsonify(new_post.to_dict()),201

    else:
        return {'error':'Something went wrong'},409


@api.route('/newmediapost/<int:id>', methods=['POST'])
def update_media_post(id):
    
    print(request.files,"FILEEEEEEEEEEEEEEEEEEEEEEES")

    if 'media' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['media'])
        # fetch for the user
        post = Post.get_by_id(id)
        # update the user with the given cloudinary image URL
        post.media = result['secure_url']
        print(result['secure_url'], "RESUUUUUUUUUUUUUUUUULT")

        db.session.add(post)
        db.session.commit()

        return jsonify(post.to_dict()), 200

    else:
        raise APIException('Missing profile_image on the FormData')

    
@api.route('/users', methods=['GET'])
def get_all_users():

    users = Traveler.get_all()
    print(users)
    if users:
        users_dict = [user.to_dict() for user in users]
        return jsonify(users_dict), 200

    return jsonify({'error': "Users not found"}), 404

@api.route('/users/<id>', methods=['GET'])
def get_user_by_id(id):
    traveler = Traveler.get_by_id(id)
    if traveler:
        return jsonify(traveler.to_dict()), 200

    return jsonify({'error': "Traveler not found"}), 404


@api.route('/blog', methods=['GET'])
def get_all_posts():

    posts = Post.get_all()
    print(posts)
    if posts:
        posts_dict = [post.to_dict() for post in posts]
        return jsonify(posts_dict), 200

    return jsonify({'error': "Posts not found"}), 404


@api.route('/blog/<id>', methods=['GET'])
def get_post_by_id(id):
    post = Post.get_by_id(id)
    if post:
        return jsonify(post.to_dict()), 200

    return jsonify({'error': "Post not found"}), 404


@api.route('/trips', methods=['GET'])
def get_all_trips():

    trips = Trip.get_all()
    print(trips)
    if trips:
        trips_dict = [trip.to_dict() for trip in trips]
        return jsonify(trips_dict), 200

    return jsonify({'error': "Trips not found"}), 404


@api.route('/trips/<id>', methods=['GET'])
def get_trip_by_id(id):
    trip = Trip.get_by_id(id)
    if trip:

        return jsonify(trip.to_dict()), 200

    return jsonify({'error': "Trips not found"}), 404


@api.route('/settings/<int:id>', methods=['PATCH'])
@jwt_required()
def update_traveler(id):

    current_traveler = get_jwt_identity()
    if current_traveler["id"] != id:
        return {'error': 'Invalid action'}, 400

    update_info = {
        'email': request.json.get('email', None),
        '_password': request.json.get("password", None),
        'name': request.json.get('name', None),
        # 'profile_picture': request.json.get('profile_picture', None),
        'age': request.json.get('age', None),
        'language': request.json.get('language', None),
        'localization': request.json.get('localization', None),
        'bio': request.json.get('bio', None),

    }
    if update_info["_password"]:
        password = generate_password_hash(
            update_info["_password"], method='pbkdf2:sha256', salt_length=16),
        update_info["_password"] = password

    traveler = Traveler.get_by_id(id)

    if traveler:
        updated_traveler = traveler.update(**{
            key: value for key, value in update_info.items()
            if value is not None
        })

        return jsonify(updated_traveler.to_dict()), 200

    return {'error': 'User not found'}, 400


@api.route('/profilepicture/<int:id>', methods=['POST'])
def update_profile_picture(id):
    
    print(request.files,"FILEEEEEEEEEEEEEEEEEEEEEEES")

    if 'profile_picture' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['profile_picture'])
        # fetch for the user
        traveler = Traveler.get_by_id(id)
        # update the user with the given cloudinary image URL
        traveler.profile_picture = result['secure_url']
        print(result['secure_url'], "RESUUUUUUUUUUUUUUUUULT")

        db.session.add(traveler)
        db.session.commit()

        return jsonify(traveler.to_dict()), 200

    else:
        raise APIException('Missing profile_image on the FormData')


@api.route('/settings/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_traveler(id):
    current_traveler = get_jwt_identity()
    if current_traveler["id"] != id:
        return {'error': 'Invalid action'}, 400

    traveler = Traveler.get_by_id(id)
    if traveler:
        traveler.delete()
        return jsonify(traveler.to_dict()), 200

    return {'error': 'traveler not found'}, 400

@api.route('/deletetrip/<int:id>/user/<int:id_user>', methods=['DELETE'])
@jwt_required()
def delete_trip(id,id_user):
    current_traveler = get_jwt_identity()
    if current_traveler["id"] != id_user:
        return {'error': 'Invalid action'}, 400

    trip = Trip.get_by_id(id)
    if trip:
        trip.delete()
        return jsonify(trip.to_dict()), 200

    return {'error': 'trip not found'}, 400

@api.route('/deletepost/<int:id>/user/<int:id_user>', methods=['DELETE'])
@jwt_required()
def delete_post(id,id_user):
    current_traveler = get_jwt_identity()
    if current_traveler["id"] != id_user:
        return {'error': 'Invalid action'}, 400

    post = Post.get_by_id(id)
    if post:
        post.delete()
        return jsonify(post.to_dict()), 200

    return {'error': 'post not found'}, 400
