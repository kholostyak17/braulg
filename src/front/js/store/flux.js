const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			trips: [],
			trips_by_id: [],
			posts: [],
			post_by_id: [],
			user: {},
			email_test: "persefone@gmail",
			base_url: "https://3001-gold-shrimp-2h7qgm5l.ws-eu08.gitpod.io/"
		},
		actions: {
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
						setStore({ trips_by_id: responseAsJson });
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getUser: () => {
				fetch(getStore().base_url.concat("api/profile/", getStore().email_test))
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
			}
		}
	};
};

export default getState;
