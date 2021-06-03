from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, insert

import models
from seed_data import data

def insert_data():
    for table,rows in data.items():
        ModelClass = getattr(models,table)
        print(ModelClass)
        print(data)

        for row in rows:
            insert = ModelClass.insert().values(**row)
            models.db.session.execute(insert)
            models.db.session.commit()

if __name__ == '__main__':
    insert_data()
