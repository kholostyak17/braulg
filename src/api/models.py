from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Table, Enum
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

db = SQLAlchemy()

association_table = Table('association', db.Model.metadata,
    db.Column('traveler_id', db.Integer, db.ForeignKey('traveler.id')),
    db.Column('trip_id', db.Integer, db.ForeignKey('trip.id'))

)

class Traveler(db.Model):
    __tablename__ = 'traveler'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String,nullable=False)
    _password = db.Column(db.String)
    language = db.Column(db.Enum("english","spanish", name="language_enum"),nullable=False)
    age = db.Column(db.Integer, nullable=True)
    localization = db.Column(db.String, nullable=True)
    bio = db.Column(db.Text, nullable=True)
    trip = relationship("Trip",
        secondary=association_table)
    

class Trip(db.Model):
    __tablename__ = 'trip'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    country = db.Column(db.String)
    cities = db.Column(db.String) 
    activities = db.Column(db.String)
    done = db.Column(db.Boolean, default=False) 

class Share_Trip(db.Model):
    __tablename__ = 'share_trip'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    trip_id = db.Column(db.Integer, db.ForeignKey("trip.id"))
    traveler_id = db.Column(db.Integer, db.ForeignKey("traveler.id")) 

class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    title = db.Column(db.String)
    media = db.Column(db.String)
    text = db.Column(db.String)
    traveler_id = db.Column(db.Integer, db.ForeignKey("traveler.id"))
    traveler = db.relationship(Traveler)

class Comments(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    text = db.Column(db.String)
    traveler_id = db.Column(db.Integer, db.ForeignKey("traveler.id"))
    post_id = db.Column(db.Integer, db.ForeignKey("post.id"))
    traveler = db.relationship(Traveler)
    post = db.relationship(Post)



class Message(db.Model):
    __tablename__ = 'message'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    chat_id = db.Column(db.Integer, db.ForeignKey("chat.id"))
    traveler_id = db.Column(db.Integer, db.ForeignKey("traveler.id"))
    message = db.Column(db.String)

class Chat(db.Model):
    __tablename__ = 'chat'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    name = db.Column(db.String)



   

    def to_dict(self):
        return {}
