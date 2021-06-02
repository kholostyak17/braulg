"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

#-------Get de todos los usuarios
@app.route('/user', methods=['GET'])
def get_user():
    all_users = User.get_all() 

    if all_users:
        return jsonify(all_users), 200
    return jsonify({'message': 'No users yet'}), 200

#-------Get de todos los id de los usuarios
@app.route('/user/<id>', methods=['GET'])
def get_users_by_id(id):
    user = User.get_by_id(id) 
    
    if user:
        return jsonify(user.to_dict()), 200
    return jsonify({'error':'User not found'}), 404