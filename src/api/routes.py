"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from api.models import db, Traveler, Post, Trip
from datetime import timedelta
from werkzeug.security import generate_password_hash, check_password_hash

from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_jwt_extended import JWTManager


from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)


CORS(api)

@api.route('/login', methods=['POST'])
def login():
    email,password = request.json.get(
            "email", None
    ), request.json.get(
            "password", None
    )

    if email and password: 
        traveler = Traveler.get_by_email(email)
        if traveler:
            if traveler.validate_password(password) and traveler.is_active: 
                access_token = create_access_token(identity=traveler.to_dict(), expires_delta=timedelta(minutes=100))
                return jsonify(access_token),200
   
    return ({'error':"User and password don't match"}),201


@api.route('/register', methods=['POST'])
def create_traveler():
    name,email,password,age,language = request.json.get(
            "name",None
    ), request.json.get(        
            "email", None
    ), request.json.get(
            "password",None
    ), request.json.get(
            "age",None
    ), request.json.get(
            "language",None
    )
    
    if email:
        traveler = Traveler.get_by_email(email)
        if traveler:
            if traveler.validate_email(email):
                password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=16)
                traveler.reactive_account(name, age, password,language)
                access_token = create_access_token(identity=traveler.to_dict(), expires_delta=timedelta(minutes=100))
                return jsonify(access_token), 200
        else:
            password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=16)
            new_traveler = Traveler(name=name,email=email, _password=password, language=language, age=age)  
            new_traveler_created= new_traveler.create()            
            access_token = create_access_token(identity=new_traveler_created.to_dict(), expires_delta=timedelta(minutes=100))

            if access_token: 
                return jsonify(access_token),201
            else:
                return ({'error':"Missing info"}), 404

 
@api.route('/newtrip', methods=['POST'])
def create_trip():
    country = request.json.get('country',None)
    cities = request.json.get('cities',None)
    activities = request.json.get('activities',None)
    date_time_start =  request.json.get('date_time_start',None)
    date_time_end =  request.json.get('date_time_end',None)
    
    new_trip = Trip(
                country=country,
                cities=cities,
                activities=activities,
                date_time_start=date_time_start,
                date_time_end=date_time_end
            )
    if new_trip: 
        new_trip.create()
        return jsonify(new_trip.to_dict()),201

    else:
        return {'error':'Something went wrong'},409
    

@api.route('/profile/<id>', methods=['GET'])
def get_user_by_id(id):
    traveler = Traveler.get_by_id(id)
    if traveler:
        return jsonify(traveler.to_dict()), 200
    
    return jsonify({'error': "Profile not found"}), 404 



@api.route('/blog', methods=['GET'])
def get_all_posts():

    posts = Post.get_all_post()
    if posts:
        posts_dict = [post.to_dict() for post in posts]
        return jsonify(posts_dict), 200

    return jsonify({'error': "Posts not found"}), 404

 
@api.route('/settings/<int:id>', methods=['PATCH'])
@jwt_required()
def update_traveler(id):
  
    current_traveler = get_jwt_identity() 
    if current_traveler["id"] != id:
        return {'error': 'Invalid action'}, 400
           
    update_info = {
        'email': request.json.get('email', None),
        '_password': request.json.get("password",None),
        'name': request.json.get('name', None),
        # 'media': request.json.get('media', None),
        'age': request.json.get('age', None),
        'language': request.json.get('language', None),
        'localization': request.json.get('localization', None),
        'bio': request.json.get('bio', None),

    }
    if update_info["_password"]:
        password = generate_password_hash(update_info["_password"], method='pbkdf2:sha256', salt_length=16),
        update_info["_password"] = password

    traveler = Traveler.get_by_id(id)

    if traveler:
        updated_traveler =  traveler.update(**{
                            key:value for key, value in update_info.items() 
                            if value is not None
                        })
        
        return jsonify(updated_traveler.to_dict()), 200

    return {'error': 'User not found'}, 400


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
