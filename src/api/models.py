from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Table, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from werkzeug.security import check_password_hash

db = SQLAlchemy()


class Traveler(db.Model):
    __tablename__ = 'traveler'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    _password = db.Column(db.String)
    language = db.Column(db.String)
    age = db.Column(db.Integer, nullable=True)
    media = db.Column(db.String)
    localization = db.Column(db.String, nullable=True)
    bio = db.Column(db.Text, nullable=True)
    is_active=db.Column(db.Boolean, default=True)
    
    def _repr_(self):
        return f'Traveler {self.name} with mail {self.email}'

    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "age": self.age,
            "language": self.language,
            "localization": self.localization,
            "bio": self.bio,
        }

    def traveler_with_token(self, token):
        traveler = self.to_dict()
        traveler['token'] = token
        return traveler

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        traveler = cls.query.filter_by(id=id).one_or_none()
        return traveler
        
    @classmethod
    def get_by_email(cls, email):
        traveler = cls.query.filter_by(email=email).one_or_none()
        return traveler

    def update(self, **kwargs):
        for key, value in kwargs.items():
            if key == "_password" and not value:
                continue            
            setattr(self, key, value)
        db.session.commit()
        return self

    def validate_password(self,password):
        is_valid = check_password_hash(self._password,password)
        print(is_valid)
        return is_valid
        
    def validate_email(self, email):
        if self.email == email:
            return True
        else:
            return False
 
    def delete(self):
        self.is_active = False
        db.session.commit()
    
    def reactive_account(self, name, age, password,language):
        self.name = name
        self.age = age
        self.language = language
        self._password = password
        self.is_active = True
        db.session.commit()
        

class Trip(db.Model):
    __tablename__ = 'trip'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    country = db.Column(db.String)
    cities = db.Column(db.String)
    activities = db.Column(db.String)
    date_time_start = db.Column(db.DateTime, nullable=False)
    date_time_end = db.Column(db.DateTime, nullable=False)
    done = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return{
            "id": self.id,
            "country": self.country,
            "cities": self.cities,
            "activities": self.activities,
            "date_time_start": self.date_time_start,
            "date_time_end": self.date_time_end,
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self
        
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
    is_active=db.Column(db.Boolean, default=True)

    def _repr_(self):
        return f'Post {self.id}, {self.title}, {self.media}, {self.text}{self.traveler_id}, '

    def to_dict(self):
        return{
            "id": self.id,
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
