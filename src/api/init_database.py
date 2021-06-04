import os
from flask import Flask
from flask_migrate import Migrate
from sqlalchemy import Table, insert
from sqlalchemy.exc import IntegrityError
import models
from seed_data import data


def load_seed_data():
    for table, rows in data.items():
        ModelClass = getattr(models, table)
        for row in rows:
            inserted = insert(ModelClass).values(**row)
            try:
                models.db.session.execute(inserted)
                models.db.session.commit()
            except IntegrityError as e:
                print(f'ERROR: inserting row {row} in "{table}". IGNORING')
                print(e)


if __name__ == "__main__":
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
    models.db.init_app(app)
    MIGRATE = Migrate(app, models.db)
    models.db.init_app(app)
    with app.app_context():
        load_seed_data()
