"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from api.models import db, Traveler, Post

from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


CORS(api)


@api.route('/profile/<id>', methods=['GET'])
def get_user_by_id(id):
    print("Soy id", id)
    traveler = Traveler.get_by_id(id)
    if traveler:
        return jsonify(traveler.to_dict()), 200
    
    return jsonify({'error': "Profile not found"}), 404 



@api.route('/blog', methods=['GET'])
def get_all_posts():
    
    posts = Post.get_all_post()
    print(posts) 
    if posts:
        posts_dict = [post.to_dict() for post in posts]
        return jsonify(posts_dict), 200

    return jsonify({'error': "Posts not found"}), 404

 

