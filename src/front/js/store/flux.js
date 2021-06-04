const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			posts: [],
			base_url: "https://3001-amaranth-rook-sb7bs071.ws-eu08.gitpod.io/"
		},
		actions: {
			getPosts: () => {
				fetch(getStore().base_url.concat("api/blog"))
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load Traveler!");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ posts: responseAsJson });
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
