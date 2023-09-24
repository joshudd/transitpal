import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@modules/auth/client";
import { Trip } from "../types/data";
type Location = {
  address: string;
  color: string;
  created_at: string;
  name: string;
}
export const useTrips = ({
  id,
  interval,
}: {
  id: string;
  interval: number;
}) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoadingTrips, setIsLoadingTrips] = useState(true);
  const [tripsError, setTripsError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchTrips = async () => {
      const q = query(
        collection(db, "users", id, "trips"),
        where("date", ">=", interval)
      );
      const querySnapshot = await getDocs(q);
      const docs: Trip[] = [];
      await querySnapshot.forEach((doc) => {
        docs.push(doc.data() as Trip);
      });
      setTrips(docs);
      setIsLoadingTrips(false);
      console.log(querySnapshot);
    };
    fetchTrips();
  }, []);
  return { isLoadingTrips, trips, tripsError };
};
export const useLocations = ({
  id,
}: {
  id: string;
}) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoadingLocations, setIsLoadingLocations] = useState(true);
  const [locationsError, setLocationsError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchLocations = async () => {
      const q = query(
        collection(db, "users", id, "locations"),
      );
      const querySnapshot = await getDocs(q);
      const docs: Location[] = [];
      await querySnapshot.forEach((doc) => {
        docs.push(doc.data() as Location);
      });
      setLocations(docs);
      setIsLoadingLocations(false);
      console.log(querySnapshot);
    };
    fetchLocations();
  }, []);
  return { isLoadingLocations, locations, locationsError };
};
