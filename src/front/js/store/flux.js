import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			token: {},
			traveler: {},
			email_test: "persefone@gmail",
			base_url: "https://3001-yellow-porcupine-x74bosv8.ws-eu08.gitpod.io/"
		},
		actions: {
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
			},
			getLogin: credentials => {
				console.log(credentials);
				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					console.log(decoded);
					return decoded;
				};
				const setTravelerFromToken = token => {
					setStore({ traveler: token.sub });
					console.log(token.sub);
				};
				fetch(getStore().base_url.concat("api/login"), {
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
						setStore({ token: responseAsJson });
						const tokenDecoded = tokenDecode(responseAsJson);
						setTravelerFromToken(tokenDecoded);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getRegister: credentials => {
				console.log(credentials);
				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					console.log(decoded);
					return decoded;
				};
				const setTravelerFromToken = token => {
					setStore({ traveler: token.sub });
					console.log(token.sub);
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
						setStore({ token: responseAsJson });
						const tokenDecoded = tokenDecode(responseAsJson);
						setTravelerFromToken(tokenDecoded);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
