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
    localization = db.Column(db.String, nullable=True)
    bio = db.Column(db.Text, nullable=True)
    profile_picture = db.Column(db.String, unique=False, nullable=True)
    is_active=db.Column(db.Boolean, default=True)
    
    def _repr_(self):
        return f'Traveler {self.name} with mail {self.email}'

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
            "profile_picture": self.profile_picture
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
    def get_all(cls):
        users = cls.query.all()
        return users

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
    traveler_id = db.Column(db.Integer, db.ForeignKey("traveler.id"))
    country = db.Column(db.String)
    cities = db.Column(db.String)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    activities = db.Column(db.String)
    traveler = db.relationship("Traveler")
    is_active=db.Column(db.Boolean, default=True)

    def _repr_(self):
        return f'Trip {self.id}, {self.traveler_id}, {self.country}, {self.cities}, {self.start_date}, {self.end_date}, {self.activities}, '

    def to_dict(self):
        traveler = Traveler.get_by_id(self.traveler_id)
        partners = Shared_Trip.get_by_trip_id(self.id)
        partners_info = [Traveler.get_by_id(partner.traveler_id) for partner in partners]
        partners_dict = [partner_info.to_dict() for partner_info in partners_info]
        return{
            "id": self.id,
            "traveler_id": self.traveler_id,
            "traveler_name":traveler.name,
            "traveler_picture":traveler.profile_picture,
            "partners": partners_dict,
            "country": self.country,
            "cities": self.cities,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "activities": self.activities,
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_all(cls):
        trips = cls.query.all()
        return trips
    
    @classmethod
    def get_by_id(cls, id):
        trips_by_id = cls.query.filter_by(id=id).one_or_none()
        return trips_by_id


        
class Shared_Trip(db.Model):
    __tablename__ = 'shared_trip'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    trip_id = db.Column(db.Integer, db.ForeignKey("trip.id"))
    traveler_id = db.Column(db.Integer, db.ForeignKey("traveler.id"))

    def _repr_(self):
        return f'Shared_trip {self.id}, {self.trip_id}, {self.traveler_id}'

    def to_dict(self):
        return{
            "id": self.id,
            "trip_id": self.trip_id,
            "traveler_id": self.traveler_id,
        }
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        shared_trips_by_id = cls.query.filter_by(id=id).one_or_none()
        return 

    @classmethod  
    def get_by_trip_id(cls,id_trip):
        travelers = cls.query.filter_by(trip_id=id_trip)
        return travelers


 

class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    traveler_id = db.Column(db.Integer, db.ForeignKey("traveler.id"))
    title = db.Column(db.String)
    media = db.Column(db.String)
    text = db.Column(db.String)
    traveler = db.relationship("Traveler")
    is_active=db.Column(db.Boolean, default=True)

    def _repr_(self):
        return f'Post {self.id}, {self.traveler_id}, {self.title}, {self.text}, {self.media},'

    def to_dict(self):
        return{
            "id": self.id,
            "traveler_id": self.traveler_id,
            "title": self.title,
            "text": self.text,
            "media": self.media,
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_all(cls):
        posts = cls.query.all()
        return posts
    
    @classmethod
    def get_by_id(cls, id):
        post_by_id = cls.query.filter_by(id=id).one_or_none()
        return post_by_id


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
