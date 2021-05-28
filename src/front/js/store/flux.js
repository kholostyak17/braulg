const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {}
		},
		actions: {
			getUser: async () => {
				fetch("https://3001-turquoise-bass-yo0snsng.ws-eu08.gitpod.io/api/user/persefone@gmail.com", {
					method: "GET"
				})
					.then(function(response) {
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ user: responseAsJson });
						console.log(responseAsJson);
					});
			}
		}
	};
};

export default getState;
