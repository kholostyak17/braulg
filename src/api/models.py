from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Table, Enum
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

db = SQLAlchemy()



class Traveler(db.Model):
    __tablename__ = 'traveler'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    _password = db.Column(db.String)
    language = db.Column(db.String)
    age = db.Column(db.Integer, nullable=True)
    localization = db.Column(db.String, nullable=True)
    bio = db.Column(db.Text, nullable=True)
    
    def _repr_(self):
        return f'Traveler {self.name} with mail {self.email}'

    def to_dict(self):
        return{
            "id":self.id,
            "name": self.name,
            "email": self.email,
            "age": self.age,
            "language": self.language,
            "localization": self.localization,
            "bio": self.bio,
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_email(cls, email):
        traveler = cls.query.filter_by(email=email).one_or_none()
        return traveler

class Trip(db.Model):
    __tablename__ = 'trip'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    country = db.Column(db.String)
    cities = db.Column(db.String) 
    activities = db.Column(db.String)
    done = db.Column(db.Boolean, default=False) 

class Shared_Trip(db.Model):
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
    traveler = db.relationship("Traveler")

    def _repr_(self):
        return f'Post {self.id}, {self.title}, {self.media}, {self.text}{self.traveler_id}, '

    def to_dict(self):
        return{
            "id":self.id,
            "title": self.title,
            "media": self.media,
            "text": self.text,
            "traveler_id": self.traveler_id,
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

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
