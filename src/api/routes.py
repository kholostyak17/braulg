"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/user/<email>', methods=['GET'])
def get_user_by_email(email):
    # user = User(
    #         id= 0,
    #         name= "Persefone", 
    #         email= "persefone@gmail.com", 
    #         _password= "1234",
    #         language= "English, Spanish and a little sumerian",
    #         age= "30",
    #         localization = "Cologne (Germany)",
    #         bio= "Aenean laoreet malesuada purus vitae imperdiet. Praesent id ligula quis leo ornare venenatis id sit amet erat.Aenean laoreet malesuada purus vitae imperdiet. Praesent id ligula quis leo ornare venenatis id sit amet erat.",
    # )
    # user = user.create()
    user = User.get_by_email(email)
    print(user)

    return jsonify(user.to_dict()), 200


    