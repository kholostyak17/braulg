"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


CORS(api)

@api.route('/user/<id>', methods=['GET'])
def get_user_by_id(id):
    user = User.get_by_id(id)
    if user:
        return jsonify(user.to_dict()), 200
    

    return jsonify({'error': "User not found"}), 404 
