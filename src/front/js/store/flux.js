const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {}
		},
		actions: {
			getUser: async () => {
				fetch("https://3001-peach-thrush-fz0ejvyt.ws-eu08.gitpod.io/api/user/persefone@gmail", {
					method: "GET"
				})
					.then(function(response) {
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ user: responseAsJson });
						console.log(responseAsJson);
						console.log(responseAsJson.user);
						console.log(responseAsJson.age);
					});
			}
		}
	};
};

export default getState;
