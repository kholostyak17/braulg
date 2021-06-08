import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			token: {},
			traveler: {},
			email_test: "persefone@gmail",
			base_url: "https://3001-maroon-rook-jo1g273f.ws-eu08.gitpod.io/"
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
			getLogin: () => {
				const body = { email: "emaildeprueba@gmail", password: "1234" };
				fetch(
					getStore().base_url.concat("api/login", {
						methods: ["POST"],
						body: body
					})
				)
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load User!");
						}
						return response.json();
						console.log(response);
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
			tokenDecode: token => {
				let decoded = jwt_decode(token);
				console.log(decoded);
				return decoded;
			},
			// getTravelerById fetch a backend que devuelve todos los datos del usuario by id/email
			setTravelerFromToken: token => {
				setStore({ traveler: token.sub });
			}
		}
	};
};

export default getState;
