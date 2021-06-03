"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from api.models import db, User, Post

from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


CORS(api)

@api.route('/user/<id>', methods=['GET'])
def get_user_by_id(id):
    user = User.get_by_id(id)
    if user:
        return jsonify(user.to_dict()), 200
    

    return jsonify({'error': "User not found"}), 404


@api.route('/blog', methods=['GET'])
def get_all_posts():
    post = Post(
        title = "Mi viaje a España",
        text = "Día 1: Madrid"
    )
    print("Antes de create")
    post = post.create()
    print("Después del create")
    posts = Post.get_all_post()
    print(posts) 
    if posts:
        return jsonify(posts.to_dict()), 200
    

    return jsonify({'error': "Posts not found"}), 404

 

