# Braulg - Travel social app

- Authors:
  - Iván Jaén Trujillo ( [@kholostyak17](https://github.com/kholostyak17) )
  - Sergio Carrascal Sánchez ( [@scsanchez](https://github.com/scsanchez) )
## **FRONTEND**

### Technologies used:
- [X] Javascript
- [X] Bootstrap
- [X] Sass
- [X] React
- [X] React Router
- [X] API Context
- [X] Firebase
- [X] Webpack
- [X] NPM

### Frontend Manual Installation:

- Make sure you are using node version 16+.

1. Install the packages: `$ npm install`
2. Start the webpack dev server `$ npm run start`

### Context

This project comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store.

React Context [docs](https://reactjs.org/docs/context.html)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>;
};
```

## **BACKEND**

### Technologies used:
- [X] Python
- [X] Flask
- [X] PostgreSQL
- [X] alembic
- [X] werkzeug
- [X] JWT
- [X] Cloudinary

### Backend Manual Installation:

Make sure you have Python 3.8, Pipenv and a database engine (Postgres recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the values with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| PostgreSQL| postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`