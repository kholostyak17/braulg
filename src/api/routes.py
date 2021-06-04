"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from api.models import db, Traveler, Post

from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


CORS(api)

@api.route('/traveler/<id>', methods=['GET'])
def get_traveler_by_id(id):
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

