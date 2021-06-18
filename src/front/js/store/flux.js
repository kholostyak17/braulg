import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// URL_API: "https://travelling-together-prueba.herokuapp.com/api/",
			// URL: "https://travelling-together-prueba.herokuapp.com/",
			URL_API: "https://3001-rose-constrictor-1o1n9726.ws-eu09.gitpod.io/api/",
			URL: "https://3000-rose-constrictor-1o1n9726.ws-eu09.gitpod.io/",
			currentUser: {},
			user: {},
			profilePicture: "https://img.icons8.com/bubbles/2x/user-male.png",
			trips: [],
			trip: [],
			posts: [],
			post_by_id: [],
			shared_trips: []
		},
		actions: {
			verifyLogin: () => {
				if (!localStorage.getItem("token")) {
					location.replace(getStore().URL.concat("login"));
				}
			},
			getUser: id => {
				fetch(getStore().URL_API.concat("profile/", id))
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load user!");
						}
						return response.json();
						console.log(response);
					})
					.then(function(responseAsJson) {
						setStore({ user: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getUpdate: (dataUpdated, picture) => {
				const token = localStorage.getItem("token");
				const tokenID = localStorage.getItem("tokenID");
				const changeProfilePicture = picture => {
					console.log("This are the files", picture);
					let mybody = new FormData();
					mybody.append("profile_picture", picture[0]);
					fetch(getStore().URL_API.concat("profilepicture/", localStorage.getItem("tokenID")), {
						body: mybody,
						method: "POST"
					})
						.then(function(response) {
							if (!response.ok) {
								throw Error("I can't upload picture!");
							}
							return response.json();
							console.log(response);
						})
						.catch(function(error) {
							console.log("Looks like there was a problem: \n", error);
						});
				};
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./user/".concat(localStorage.getItem("tokenID")));
					}
				};
				console.log(dataUpdated, "datos");
				fetch(getStore().URL_API.concat("settings/", localStorage.getItem("tokenID")), {
					method: "PATCH",
					body: dataUpdated,
					headers: {
						"Sec-Fetch-Mode": "no-cors",
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't update this traveler!");
						}
						return response.json();
						console.log(response);
					})
					.then(function(responseAsJson) {
						setStore({ user: responseAsJson });
						changeProfilePicture(picture);
						redirectToProfile();
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getDelete: () => {
				const token = localStorage.getItem("token");
				const tokenID = localStorage.getItem("tokenID");
				const redirectToHome = () => {
					localStorage.clear(), location.replace("./");
				};
				fetch(getStore().URL_API.concat("settings/", localStorage.getItem("tokenID")), {
					method: "DELETE",
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't delete this traveler!");
						}
						return response.json();
						console.log(response);
					})
					.then(function(responseAsJson) {
						redirectToHome();
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			getLogin: credentials => {
				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					return decoded;
				};

				const setTravelerFromToken = token => {
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
					headers: { "Content-Type": "application/json" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't get login!");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						localStorage.setItem("token", responseAsJson);
						const tokenDecoded = tokenDecode(responseAsJson);
						setTravelerFromToken(tokenDecoded);
						redirectToProfile();
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			getRegister: credentials => {
				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					return decoded;
				};
				const setTravelerFromToken = token => {
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
						"Sec-Fetch-Mode": "no-cors"
					}),
					body: credentials
				})
					.then(function(response) {
						console.log(response);
						if (!response.ok) {
							throw Error("I can't register this traveler!");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						localStorage.setItem("token", responseAsJson);
						const tokenDecoded = tokenDecode(responseAsJson);
						setTravelerFromToken(tokenDecoded);
						redirectToProfile();
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getTrips: () => {
				fetch(getStore().URL_API.concat("trips"), {
					method: "GET",
					headers: new Headers({ "Content-Type": "application/json", "Sec-Fetch-Mode": "no-cors" })
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load Trip!");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ trips: responseAsJson });
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getTrip: id => {
				fetch(getStore().URL_API.concat("trips/", id), {
					method: "GET",
					headers: new Headers({ "Content-Type": "application/json", "Sec-Fetch-Mode": "no-cors" })
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load Trip!");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ trip: responseAsJson });
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getPosts: () => {
				fetch(getStore().URL_API.concat("blog/"), {
					method: "GET",
					headers: new Headers({ "Content-Type": "application/json", "Sec-Fetch-Mode": "no-cors" })
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load Traveler!");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ posts: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getPost: id => {
				fetch(getStore().URL_API.concat("blog/", id), {
					method: "GET",
					headers: new Headers({ "Content-Type": "application/json", "Sec-Fetch-Mode": "no-cors" })
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load Traveler!");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ post_by_id: responseAsJson });
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getNewTrip: credentials => {
				const token = localStorage.getItem("token");
				const tokenID = localStorage.getItem("tokenID");
				const redirectToTrips = () => {
					location.replace("./trips/");
				};
				fetch(getStore().URL_API.concat("newtrip/", localStorage.getItem("tokenID")), {
					method: "POST",
					body: credentials,
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't register this trip!");
						}
						return response.json();
						console.log(response);
					})
					.then(function(responseAsJson) {
						setStore({ trips: responseAsJson });
						redirectToTrips();
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getSharedTrip: id_trip => {
				console.log(id_trip);
				const token = localStorage.getItem("token");
				const tokenID = localStorage.getItem("tokenID");
				const redirectToTrips = () => {
					location.replace("./trips/");
				};
				fetch(getStore().URL_API.concat("traveler/", tokenID, "/trip/", id_trip), {
					method: "POST",
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't share this trip!");
						}
						return response.json();
						console.log(response);
					})
					.then(function(responseAsJson) {
						setStore({ shared_trips: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			getNewPost: credentials => {
				const redirectToBlog = () => {
					location.replace("./blog/");
				};
				fetch(getStore().URL_API.concat("newpost"), {
					method: "POST",
					body: credentials,
					headers: { "Content-Type": "application/json" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't register this post!");
						}
						return response.json();
						console.log(response);
					})
					.then(function(responseAsJson) {
						setStore({ posts: responseAsJson });
						redirectToBlog();
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};
export default getState;
