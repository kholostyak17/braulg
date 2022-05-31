import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { TripCard } from "../components/trip-card";

export const Trips = () => {
  const { store, actions } = useContext(Context);
  const [tripsMap, setTripsMap] = useState("");

  useEffect(() => {
    actions.verifyLogin();
    actions.getTrips();
  }, []);

  useEffect(() => {
    if (store.trips != undefined || store.trip.user != undefined) {
      setTripsMap(
        store.trips.map((trip, index) => {
          if (trip.is_active == true) {
            return (
              <TripCard
                key={index.toString()}
                tripID={trip.id}
                username={trip.traveler_name}
                userpicture={trip.traveler_picture}
                userID={trip.traveler_id}
                country={trip.country}
                cities={trip.cities}
                startDate={trip.start_date}
                endDate={trip.end_date}
                activities={trip.activities}
                partners={trip.partners}
              />
            );
          }
        })
      );
    }
  }, [store.trips]);

  return (
    <div className="trips-background py-0">
      <div className="trips-body container my-0 pb-2">
        <h1 className="text-center pt-4">Últimos viajes propuestos</h1>
        <div className="d-flex flex-column-reverse">
          {tripsMap != "" ? (
            tripsMap
          ) : (
            <div className="d-flex justify-content-center ">
              <div className="spinner-border text-warning my-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
