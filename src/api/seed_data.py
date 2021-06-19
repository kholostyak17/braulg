data = {
    "Traveler": [
        {
            "id": 0,
            "name": "Persefone",
            "email": "persefone@gmail.com",
            "_password": "pbkdf2:sha256:260000$j7pcevHanlLByBzx$342fe2aa15a125d56514457636c1e2878c4027083340dc7b9d29d26717505259",
            "language": "english and little sumerian",
            "age": "30",
            "localization": "Colonia (Alemania)",
            "bio": "Aenean laoreet malesuada purus vitae imperdiet. Praesent id ligula quis leo ornare venenatis id sit amet erat.Aenean laoreet malesuada purus vitae imperdiet. Praesent id ligula quis leo ornare venenatis id sit amet erat.",
            "profile_picture":""
        },
        {
            "id": 1,
            "name": "Jacques",
            "email": "jacques@gmail.com",
            "_password": "pbkdf2:sha256:260000$j7pcevHanlLByBzx$342fe2aa15a125d56514457636c1e2878c4027083340dc7b9d29d26717505259",
            "language": "french",
            "age": "25",
            "localization": "Paris (Francia)",
            "bio": "Aenean laoreet malesuada purus vitae imperdiet. Praesent id ligula quis leo ornare venenatis id sit amet erat.Aenean laoreet malesuada purus vitae imperdiet. Praesent id ligula quis leo ornare venenatis id sit amet erat.",
            "profile_picture": "https://img.icons8.com/bubbles/2x/ffffff/administrator-male.png"
        },
        {
            "id": 2,
            "name": "Manuela",
            "email": "manuela@gmail.com",
            "_password": "pbkdf2:sha256:260000$j7pcevHanlLByBzx$342fe2aa15a125d56514457636c1e2878c4027083340dc7b9d29d26717505259",
            "language": "spanish",
            "age": "26",
            "localization": "Madrid (España)",
            "bio": "Aenean laoreet malesuada purus vitae imperdiet. Praesent id ligula quis leo ornare venenatis id sit amet erat.Aenean laoreet malesuada purus vitae imperdiet. Praesent id ligula quis leo ornare venenatis id sit amet erat.",
            "profile_picture": "https://img.icons8.com/bubbles/452/flag-person-female.png"
        },
        {
            "id": 3,
            "name": "Ricardo",
            "email": "ricardo@gmail.com",
            "_password": "pbkdf2:sha256:260000$j7pcevHanlLByBzx$342fe2aa15a125d56514457636c1e2878c4027083340dc7b9d29d26717505259",
            "language": "spanish and english",
            "age": "31",
            "localization": "Sevilla (España)",
            "bio": "Me gusta mucho la pesca, me he criado siempre cerca del rio y soy muy sociable.",
            "profile_picture": "https://img.icons8.com/bubbles/2x/user-male.png"
        },
        {
            "id": 4,
            "name": "Daisy",
            "email": "daisy@gmail.com",
            "_password": "pbkdf2:sha256:260000$CWol9qhle664ghiD$fbe7d97fb62c6cf7529aba392cfb1fbe649a0bd3cd8e9b381b43496de1c164f2",
            "language": "Gatuno",
            "age": "20",
            "localization": "",
            "bio": "miauuuu))) 🐈",
            "profile_picture": "https://res.cloudinary.com/travelling-together/image/upload/v1624013126/rs9prtryqslopgtiq4kf.jpg"
        },

    ],
    "Post": [
        {
            "id": 0,
            "traveler_id": 1,
            "title": "Viaje a Jerusalen",
            "media": "https://www.vaticannews.va/content/dam/vaticannews/images-multimedia/medio-oriente/Gerusalemme%20panorama%20con%20Moschea%20della%20Rocca.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1000.563.jpeg",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            "id": 1,
            "traveler_id": 2,
            "title": "Viaje a Bogotá",
            "media": "https://www.avianca.com/content/dam/avianca_new/destinos/bog/co_bog_porquevisitar2.jpg?lazy=true",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            "id": 2,
            "traveler_id": 0,
            "title": "Viaje a Hong Kong",
            "media": "https://img.static-kl.com/images/media/4EA8CE28-6BF4-4503-88618BAEF81EE29C?aspect_ratio=1:1&min_width=456",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }
    ],
    "Trip": [
        {
            "id": 0,
            "traveler_id": 3,
            "country": "Portugal",
            "cities": "Lisboa, Porto",
            "start_date": "2022-02-21",
            "end_date": "2022-02-28",
            "activities": "Quiero ir a pasear por el rio y pescar, tambien podemos ir a caminar por la montaña",
        },
        {
            "id": 1,
            "traveler_id": 1,
            "country": "Alemania",
            "cities": "Berlin",
            "start_date": "2021-08-17",
            "end_date": "2021-08-17",
            "activities": "Tour por la ciudad e ir a cenar. Quiero visitar museos.",
        },
        {
            "id": 2,
            "traveler_id": 1,
            "country": "Chile",
            "cities": "Santiago",
            "start_date": "2021-12-03",
            "end_date": "2021-12-15",
            "activities": "Me gustaría ir a tomar cervezas con amigos y pasear por los lugares mas chulos de la capital.",
        },
    ],
}