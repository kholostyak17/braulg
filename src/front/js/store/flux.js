const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {}
		},
		actions: {
			getUser: async () => {
				fetch("https://3001-azure-haddock-u9yq6ojj.ws-eu08.gitpod.io/api/user/persefone@gmail", {
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
