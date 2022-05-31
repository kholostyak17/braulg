import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => ({
  store: {
    URL_API: process.env.API_URL || "https://braulg-api-production.up.railway.app/",
    URL: process.env.FRONT_URL || "https://braulg.herokuapp.com/",
    profilePicture: "https://res.cloudinary.com/braulg/image/upload/v1624454265/airfaohxepd3ncf5tnlf.png",
    currentUser: {},
    users: [],
    user: {},
    trips: [],
    trip: {},
    posts: [],
    post_by_id: {},
    shared_trips: [],
  },
  actions: {
    verifyLogin: () => {
      if (!localStorage.getItem("token")) {
        location.replace(getStore().URL.concat("login"));
      }
    },
    checkIfIsSignedIn: () => {
      if (localStorage.getItem("token")) {
        location.replace(getStore().URL.concat("user/", localStorage.getItem("tokenID")));
      }
    },
    signIn: (credentials) => {
      const tokenDecode = (token) => {
        const decoded = jwt_decode(token);
        return decoded;
      };
      const setTravelerFromToken = (token) => {
        localStorage.setItem("tokenID", token.sub.id);
        localStorage.setItem("tokenName", token.sub.name);
      };
      const redirectToProfile = () => {
        if (localStorage.getItem("tokenID") != null) {
          location.replace("./user/".concat(localStorage.getItem("tokenID")));
        }
      };
      fetch(getStore().URL_API.concat("login"), {
        method: "POST",
        body: credentials,
        headers: { "Content-Type": "application/json" },
      })
        .then(function (response) {
          if (!response.ok) {
            throw Error("I can't login!");
          }
          return response.json();
        })
        .then(function (responseAsJson) {
          localStorage.setItem("token", responseAsJson);
          const tokenDecoded = tokenDecode(responseAsJson);
          setTravelerFromToken(tokenDecoded);
          redirectToProfile();
        })
        .catch(function (error) {
          alert("Usuario o contraseña incorrectos");
          localStorage.removeItem("token");
          console.log("Looks like there was a problem: \n", error);
        });
    },
    signUp: (credentials) => {
      const tokenDecode = (token) => {
        const decoded = jwt_decode(token);
        return decoded;
      };
      const setTravelerFromToken = (token) => {
        localStorage.setItem("tokenID", token.sub.id);
        localStorage.setItem("tokenName", token.sub.name);
      };
      const redirectToProfile = () => {
        if (localStorage.getItem("tokenID") != null) {
          location.replace("./user/".concat(localStorage.getItem("tokenID")));
        }
      };
      fetch(getStore().URL_API.concat("register"), {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "Sec-Fetch-Mode": "no-cors",
        }),
        body: credentials,
      })
        .then(function (response) {
          console.log(response);
          if (!response.ok) {
            throw Error("I can't register this traveler!");
          }
          return response.json();
        })
        .then(function (responseAsJson) {
          localStorage.setItem("token", responseAsJson);
          const tokenDecoded = tokenDecode(responseAsJson);
          setTravelerFromToken(tokenDecoded);
          redirectToProfile();
        })
        .catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    },

    updateProfileData: (dataUpdated, picture) => {
      const token = localStorage.getItem("token");
      const tokenID = localStorage.getItem("tokenID");
      const redirectToProfile = () => {
        if (localStorage.getItem("tokenID") != null) {
          location.replace("./user/".concat(localStorage.getItem("tokenID")));
        }
      };
      fetch(getStore().URL_API.concat("settings/", localStorage.getItem("tokenID")), {
        method: "PATCH",
        body: dataUpdated,
        headers: {
          "Sec-Fetch-Mode": "no-cors",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(function (response) {
          if (!response.ok) {
            throw Error("I can't update this traveler!");
          }
          return response.json();
        })
        .then(function (responseAsJson) {
          setStore({ user: responseAsJson });
          if (picture[0]) {
            setTimeout(() => {
              redirectToProfile();
            }, 2000);
          } else {
            redirectToProfile();
          }
        })
        .catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    },
    setNewPicture: (picture) => {
      const token = localStorage.getItem("token");
      const tokenID = localStorage.getItem("tokenID");
      console.log("This are the files", picture);
      const mybody = new FormData();
      mybody.append("profile_picture", picture[0]);
      fetch(getStore().URL_API.concat("profilepicture/", localStorage.getItem("tokenID")), {
        body: mybody,
        method: "POST",
      })
        .then(function (response) {
          if (!response.ok) {
            throw Error("I can't upload picture!");
          }
          return response.json();
        })
        .catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    },


    fetchRequest: (init, endpoint, errorMessage, action) => {
      const apiUrl = getStore().URL_API;
      const token = localStorage.getItem("token");
      let fetchConfig;
      switch (init) {
        case 'GET':
          fetchConfig = {
            method: "GET",
            headers: new Headers({ "Content-Type": "application/json", "Sec-Fetch-Mode": "no-cors" }),
          }
          break;
        case 'DELETE':
          fetchConfig = {
            method: "DELETE",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          }
          break;
        case 'POST':
          fetchConfig = {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          }
          break;
        default:
          break;
      }

      fetch(apiUrl.concat(endpoint), fetchConfig)
        .then( response => {
          if (!response.ok) {
            throw Error(errorMessage);
          }
          return response.json();
        })
        .then( responseAsJson => action(responseAsJson) )
        .catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    },

    getUsers: () => {
      const endpoint = `users/`;
      const errorMessage = "I can't load users!";
      const action = data => setStore({ users: data });
      getActions().fetchRequest('GET', endpoint, errorMessage, action);
    },
    getUser: (id, currentUser) => {
      const endpoint = `users/${id}`;
      const errorMessage = "I can't load user!";
      const action = data => currentUser ? setStore({ currentUser: data }) : setStore({ user: data });
      getActions().fetchRequest('GET', endpoint, errorMessage, action);
    },
    getTrips: () => {
      const endpoint = `trips/`;
      const errorMessage = "I can't load trips!";
      const action = data => setStore({ trips: data });
      getActions().fetchRequest('GET', endpoint, errorMessage, action);
    },
    getTrip: (id) => {
      const endpoint = `trips/${id}`;
      const errorMessage = "I can't load trip!";
      const action = data => setStore({ trip: data });
      getActions().fetchRequest('GET', endpoint, errorMessage, action);
    },
    getPosts: () => {
      const endpoint = `blog/`;
      const errorMessage = "I can't load posts!";
      const action = data => setStore({ posts: data });
      getActions().fetchRequest('GET', endpoint, errorMessage, action);
    },
    getPost: (id) => {
      const endpoint = `blog/${id}`;
      const errorMessage = "I can't load post!";
      const action = data => setStore({ post_by_id: data });
      getActions().fetchRequest('GET', endpoint, errorMessage, action);
    },

    deleteUser: () => {
      const endpoint = `settings/${localStorage.getItem("tokenID")}`;
      const errorMessage = "I can't delete this user!";
      const action = () => {
        localStorage.clear();
        location.replace("./");
      };
      getActions().fetchRequest('DELETE', endpoint, errorMessage, action);
    },
    deleteTrip: (tripId) => {
      const endpoint = `deletetrip/${tripId}/user/${localStorage.getItem("tokenID")}`;
      const errorMessage = "I can't delete this trip!";
      const action = () => location.replace("../trips");
      getActions().fetchRequest('DELETE', endpoint, errorMessage, action);
    },
    deletePost: (postId) => {
      const endpoint = `deletepost/${postId}/user/${localStorage.getItem("tokenID")}`;
      const errorMessage = "I can't delete this post!";
      const action = () => location.replace("../blog");
      getActions().fetchRequest('DELETE', endpoint, errorMessage, action);
    },


    createTrip: (tripData) => {
      const token = localStorage.getItem("token");
      const tokenID = localStorage.getItem("tokenID");
      const redirectToTrips = () => {
        location.replace("./trips/");
      };
      fetch(getStore().URL_API.concat("newtrip/", tokenID), {
        method: "POST",
        body: tripData,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      })
        .then(function (response) {
          if (!response.ok) {
            throw Error("I can't create this trip!");
          }
          return response.json();
        })
        .then(function (responseAsJson) {
          setStore({ trips: responseAsJson });
          redirectToTrips();
        })
        .catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    },
    createPost: (postData, media) => {
      const token = localStorage.getItem("token");
      const createMediaPost = (media, id) => {
        const mybody = new FormData();
        mybody.append("media", media[0]);
        fetch(getStore().URL_API.concat("newmediapost/", id), {
          body: mybody,
          method: "POST",
        })
          .then(function (response) {
            if (!response.ok) {
              throw Error("I can't upload media!");
            }
            return response.json();
          })
          .catch(function (error) {
            console.log("Looks like there was a problem: \n", error);
          });
      };
      const redirectToBlog = () => {
        location.replace("/blog/");
      };
      fetch(getStore().URL_API.concat("newpost/", localStorage.getItem("tokenID")), {
        method: "POST",
        body: postData,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      })
        .then(function (response) {
          if (!response.ok) {
            throw Error("I can't create this post!");
          }
          return response.json();
        })
        .then(function (responseAsJson) {
          createMediaPost(media, responseAsJson.id);
          setStore({ posts: responseAsJson });
          if (media[0]) {
            setTimeout(() => {
              redirectToBlog();
            }, 2500);
          } else {
            redirectToBlog();
          }
        })
        .catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    },

    joinTrip: (id_trip) => {
      const token = localStorage.getItem("token");
      const tokenID = localStorage.getItem("tokenID");
      const redirectToTrips = () => {
        location.replace("./trips/");
      };
      fetch(getStore().URL_API.concat("traveler/", tokenID, "/trip/", id_trip), {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      })
        .then(function (response) {
          if (!response.ok) {
            throw Error("I can't share this trip!");
          }
          return response.json();
        })
        .then(function (responseAsJson) {
          setStore({ shared_trips: responseAsJson });
          location.replace("../trips");
        })
        .catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    },
  }
});

export default getState;
