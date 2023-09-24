import type { Trip } from "../types/data";

const CO_PER_MILE = 0.367; //IN KG
export default function getDaysArr(trips: Trip[]) {
  // today, yesterday, within a week, everything else
  let days:Trip[][] = [[],[],[],[]]
  trips.map((trip) => {
    if (Date.now() / 1000 - trip.date <= 24 * 60 * 60) { days[0].push(trip) }
    else if (Date.now() / 1000 - trip.date <=  2 * 24 * 60 * 60) { days[1].push(trip) }
    else if (Date.now() / 1000 - trip.date <=  7 * 24 * 60 * 60) { days[2].push(trip) }
    else days[3].push(trip)
  });
  return days;
}

export function getEmissionsSaved(trips: Trip[], interval: number) {
  let mileage = 0.0;
  for (
    let i = trips.length - 1;
    i >= 0 &&
    trips[i].date >= trips[trips.length - 1].date - interval * 24 * 60 * 60;
    i--
  ) {
    mileage += parseFloat(trips[i].distance.split(" ")[0]);
  }
  //   for (let i = 0; i < trips.length; i++) {
  //     mileage += parseFloat(trips[i].distance);
  //     console.log(mileage)
  //   }

  return 0.95 * CO_PER_MILE * mileage;
}

    export function getMoneySaved(trips: Trip[], interval: number) {
      let mileage = 0.0;
      for (
        let i = trips.length - 1;
        i >= 0 &&
        trips[i].date >= trips[trips.length - 1].date - interval * 24 * 60 * 60;
        i--
      ) {
        console.log(interval, i)
        mileage += parseFloat(trips[i].distance.split(" ")[0]);
      }
      if ((mileage * 0.65) - (3 * trips.length) < (3 * .65)) {
        return 0;
      } else {
        return mileage * 0.65 - (3 * trips.length);
      }
    }

export function getTimeSaved(trips: Trip[], interval: number) {
  let time = 0.0;
  for (
    let i = trips.length - 1;
    i >= 0 &&
    trips[i].date >= trips[trips.length - 1].date - interval * 24 * 60 * 60;
    i--
  ) {
    time += trips[i].duration;
  }
  const duration = 0.66 * time;
  const hours = Math.floor(duration / (60 * 60));
  const minutes = Math.floor((duration % (60 * 60)) / 60);
  const seconds = Math.floor(duration % 60);

  return (
    (hours ? `${hours} hrs ` : "") +
    (minutes ? `${minutes} min` : "") +
    ` ${seconds} sec`
  ); //Let's assume, for the sake of this argument, that non commute takes 5/3 time
}

export function epochToJsDate(ts: number) {
  // ts = epoch timestamp
  // returns date obj
  return new Date(ts*1000);
}