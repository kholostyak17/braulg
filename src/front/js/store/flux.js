const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {}
		},
		actions: {
			getUser: async () => {
				fetch("https://3001-purple-cheetah-2623lbh4.ws-eu08.gitpod.io/api/user/persefone@gmail", {
					method: "GET"
				})
					.then(function(response) {
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ user: responseAsJson });
					});
			}
		}
	};
};

export default getState;
