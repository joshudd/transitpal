const CO_PER_MILE = 0.367; //IN KG
export default function getDaysArr(trips: Trip[]) {
  return trips.map((trip) => trip.date);
}
export function getEmissionsSaved(trips: Trip[], interval: number) {
  let mileage = 0.0;
    for (
      let i = trips.length - 1;
      i >= 0 &&
      trips[i].date >= trips[trips.length - 1].date - interval * 24 * 60 * 60;
      i--
    ) {
      mileage += parseFloat(trips[i].distance);
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
    mileage += parseFloat(trips[i].distance);
  }
  if (mileage * 0.14 - 3 * interval < 0) {
    return 0;
  } else {
    return mileage * 0.14 - 3 * interval;
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
    for (let j = 0; j < trips[i].legs.length; j++)
      time += trips[i].legs[j].duration.value;
  }

  return 0.66 * time; //Let's assume, for the sake of this argument, that non commute takes 5/3 time
}
