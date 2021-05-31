import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";

import "../../styles/home.scss";

export const People = () => {
	const { store, actions } = useContext(Context);
	const [peopleCards, setPeopleCards] = useState([]);

	console.log(store.people.results);
	useEffect(
		() => {
			if (store.people.results != undefined) {
				setPeopleCards(
					store.people.results.map((elem, index) => {
						return (
							<Card
								key={index.toString()}
								title={elem.name}
								uid={elem.uid}
								type="people"
								description="A person within the Star Wars universe"
								image="https://www.toplessrobot.com/wp-content/uploads/2008/10/Episode_4_Luke_Skywalker_1.jpg"
							/>
						);
					})
				);
			}
		},
		[store.people]
	);
	console.log("People Cards:", peopleCards);


	return <div className=" d-flex flex-wrap justify-content-around">{peopleCards}</div>;
};
