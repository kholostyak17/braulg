import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			traveler: {},
			base_url: "https://3001-blush-chinchilla-vzpoa79i.ws-eu08.gitpod.io/",
			profilePicture: "https://img.icons8.com/bubbles/2x/user-male.png",
			trips: [],
			trip: [],
			posts: [],
			post_by_id: []
		},
		actions: {
			getUser: () => {
				fetch(getStore().base_url.concat("api/profile/", localStorage.getItem("tokenID")))
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load User!");
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
			getLogin: credentials => {
				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					return decoded;
				};
				const setTravelerFromToken = token => {
					localStorage.setItem("tokenID", token.sub.id);
				};
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./user/".concat(localStorage.getItem("tokenID")));
					}
				};
				fetch(getStore().base_url.concat("api/login"), {
					method: "POST",
					body: credentials,
					headers: { "Content-Type": "application/json" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load User!");
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
					console.log(token.sub);
				};
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./user/".concat(localStorage.getItem("tokenID")));
					}
				};
				fetch(getStore().base_url.concat("api/register"), {
					method: "POST",
					body: credentials,
					headers: { "Content-Type": "application/json" }
				})
					.then(function(response) {
						console.log(response);
						if (!response.ok) {
							throw Error("I can't load User!");
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
				fetch(getStore().base_url.concat("api/trip/"))
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
				fetch(
					getStore()
						.base_url.concat("api/trip/")
						.concat(id)
				)
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
				fetch(getStore().base_url.concat("api/blog/"))
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
				fetch(
					getStore()
						.base_url.concat("api/blog/")
						.concat(id)
				)
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
			}
		}
	};
};

export default getState;
