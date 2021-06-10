const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			id_test: "0",
			base_url: "https://3001-gold-woodpecker-w067clzd.ws-eu08.gitpod.io/"
		},
		actions: {
			getUser: () => {
				fetch(getStore().base_url.concat("api/profile/", getStore().id_test))
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
