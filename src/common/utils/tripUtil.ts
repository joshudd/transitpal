import { useLocations, useTrips } from "@/common/hooks/data";
// import { User } from "firebase/auth";

export default function getDaysArr({ user }) {
    const { isLoadingTrips, trips, tripsError, } = useTrips({
        id: user.uid,
        interval: 5,
    });

    let days = [...trips.map((trip) => trip.date)];
    console.log("Days", days);
    return days;
}

