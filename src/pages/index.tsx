import EmissionsChart from "@components/charts/EmissionsChart";
import SavingsChart from "@components/charts/SavingsChart";
import { Fragment, useMemo, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Client } from "@googlemaps/google-maps-services-js";
import {
  ArrowUpCircleIcon,
  EllipsisHorizontalIcon,
  PlusSmallIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import Modal from "@components/Modal";
import Link from "next/link";
import { useLocations, useTrips } from "@/common/hooks/data";
import { User } from "firebase/auth";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "@/modules/auth/client";
import TripTimeline from "@/common/components/TripTimeline";
import { getTransitInfo } from "@/common/utils/mapsUtil";
import getDaysArr, {
  getEmissionsSaved,
  getMoneySaved,
  getTimeSaved,
} from "@/common/utils/tripUtil";

export const timeIntervals = [
  { name: "Today", id: "today", interval: 1 },
  { name: "Yesterday", id: "yesterday", interval: 2},
  { name: "Last 7 days", id: "week", interval: 7 },
  { name: "Last 30 days", id: "month", interval: 30 },
  { name: "All-time", id: "all", interval: 10000000000 },
];


export default function Example({ user }: { user: User }) {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeInterval, setTimeInterval] = useState(7);
  const [createTripOpen, setCreateTripOpen] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const { isLoadingTrips, trips, tripsError } = useTrips({
    id: user.uid,
    interval: 5,
  });
  const { isLoadingLocations, locations, locationsError } = useLocations({
    id: user.uid,
  });
  const value = useMemo(() => {
    if (timeInterval === 1) {
      return 1;
    }
    if (timeInterval === 2) {
      return 2;
    }
    if (timeInterval === 7) {
      return 7;
    }
    if (timeInterval === 30) {
      return 30;
    }
    if (timeInterval === 10000000000) {
      return 100;
    }
  }, [timeInterval]);

  const charts = [
    {
      name: "Emissions Saved",
      value: 30,
      change: "+4.75%",
      changeType: "positive",
    },
    {
      name: "Money Saved",
      value: 40,
      change: "+54.02%",
      changeType: "negative",
    },
    {
      name: "Time Saved",
      value: 70,
      change: "+54.02%",
      changeType: "negative",
    },
  ];

  const days = getDaysArr(trips);

  const stats = useMemo(
    () => [
      {
        name: "Emissions Saved",
        value: `${getEmissionsSaved(trips, timeInterval).toFixed(2)} kg`,
        // change: "+4.75%",
        changeType: "positive",
      },
      {
        name: "Money Saved",
        value: `$ ${getMoneySaved(trips, timeInterval).toFixed(2)}`,
        // change: "+54.02%",
        changeType: "negative",
      },
      {
        name: "Productivity Saved",
        value: `${getTimeSaved(trips, timeInterval)}`,
        // change: "+54.02%",
        changeType: "negative",
      },
    ],
    [trips, value]
  );

  const createTrip = async () => {
    setCreateTripOpen(false);
    let response = await getTransitInfo(origin, destination);
    console.log("Log!!", response);

    await addDoc(collection(db, "users", user.uid, "trips"), {
      ...response[0],
      date: Date.now() / 1000 - (Math.floor(Math.random() * 60 * 24 * 28)),
    });
  };
  return (
    <div className="bg-white h-[100vh]">
      <Modal open={createTripOpen} setOpen={setCreateTripOpen}>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            createTrip();
          }}
        >
          <h2 className="font-medium text-lg">Create Trip</h2>
          <div>
            <label
              htmlFor="origin"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Origin
            </label>
            <div className="mt-2">
              <input
                required
                onChange={(e) => setOrigin(e.target.value)}
                value={origin}
                type="text"
                name="origin"
                id="origin"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                placeholder="123 Elm St."
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="origin"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Destination
            </label>
            <div className="mt-2">
              <input
                required
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
                type="text"
                name="origin"
                id="origin"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                placeholder="123 Elm St."
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3 w-full">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              onClick={() => setCreateTripOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:col-start-2"
            >
              Create
            </button>
          </div>
        </form>
      </Modal>
      <div className="relative isolate overflow-hidden pt-16">
        {/* Secondary navigation */}
        <div className="pb-4 pt-6 sm:pb-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
            <h1 className="text-base font-semibold leading-7 text-gray-900">
              Overview
            </h1>
            <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
              {timeIntervals.map(({ name, id, interval }) => (
                <button
                  key={id}
                  className={
                    interval === timeInterval ? "text-primary" : "text-gray-700"
                  }
                  onClick={() => setTimeInterval(interval)
                            }
                >
                  {name}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCreateTripOpen(true)}
              className="ml-auto flex items-center gap-x-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
              New trip
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
          <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-2 xl:px-0">
            {stats.map((stat, statIdx) => (
              <div
                key={stat.name}
                className={clsx(
                  statIdx % 2 === 1
                    ? "sm:border-l"
                    : statIdx === 2
                    ? "lg:border-l"
                    : "",
                  "flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8"
                )}
              >
                <dt className="text-sm font-medium leading-6 text-gray-500">
                  {stat.name}
                </dt>
                {/* <dd
                  className={clsx(
                    stat.changeType === "negative"
                      ? "text-rose-600"
                      : "text-gray-700",
                    "text-xs font-medium"
                  )}
                >
                  {stat.change}
                </dd> */}
                <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
          aria-hidden="true"
        ></div>
      </div>
      <div className="space-y-8">
        {/* Recharts */}

        <div className="relative isolate overflow-hidden">
          {/* Secondary navigation */}

          {/* Stats */}
          {/* <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
            <ul className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-2 xl:px-0">
              {charts.map(({ name, value }, statIdx) => (
                <li
                  key={name}
                  className={clsx(
                    "relative w-full px-6 pt-6 border-gray-900/5",
                    statIdx % 2 === 1
                      ? "sm:border-l"
                      : statIdx === 2
                      ? "lg:border-l"
                      : ""
                  )}
                >
                  <EmissionsChart id={name} value={value || 0} />
                </li>
              ))}
            </ul>
          </div> */}

          <div
            className="absolute left-0 top-full -z-10  origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
            aria-hidden="true"
          ></div>
        </div>
        {/* Recent activity table */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
              Recent activity
            </h2>
          </div>
          <div className="mt-6 overflow-hidden border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <table className="w-full text-left">
                  <thead className="sr-only">
                    <tr>
                      <th>Amount</th>
                      <th className="hidden sm:table-cell">Client</th>
                      <th>More details</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {days.map((day, idx) => (
                      <Fragment key={idx}>
                        {day.length !== 0 && (
                          <tr className="text-sm leading-6 text-gray-900">
                            <th
                              scope="colgroup"
                              colSpan={3}
                              className="relative isolate py-2 font-semibold"
                            >
                              {idx === 0
                                ? "Today"
                                : idx === 1
                                ? "Yesterday"
                                : idx === 2
                                ? "This week"
                                : "This month"}

                              <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-zinc-50" />
                              <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-zinc-50" />
                            </th>
                          </tr>
                        )}
                        {day.filter((item) => item.steps && item.steps.length < 6).map((trip) => (
                          <tr className="" key={trip.date}>
                            {trip.steps && <TripTimeline trip={trip} />}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Recent client list*/}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Recent locations
              </h2>
              <Link
                href="/locations"
                className="text-sm font-semibold leading-6 text-primary hover:text-secondary"
              >
                View all<span className="sr-only">, locations</span>
              </Link>
            </div>
            <ul
              role="list"
              className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
            >
              {locations.map((location) => (
                <li
                  key={location.name}
                  className="overflow-hidden rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                    {/* <img
                      src={location.imageUrl}
                      alt={location.name}
                      className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                    /> */}
                    <div className="text-sm font-medium leading-6 text-gray-900">
                      {location.name}
                    </div>
                    <Menu as="div" className="relative ml-auto">
                      <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={clsx(
                                  active ? "bg-gray-50" : "",
                                  "block px-3 py-1 text-sm leading-6 text-gray-900"
                                )}
                              >
                                View
                                <span className="sr-only">
                                  , {location.name}
                                </span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={clsx(
                                  active ? "bg-gray-50" : "",
                                  "block px-3 py-1 text-sm leading-6 text-gray-900"
                                )}
                              >
                                Edit
                                <span className="sr-only">
                                  , {location.name}
                                </span>
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                    <div className="flex justify-between gap-x-4 py-3">
                      <dt className="text-gray-500">Address</dt>
                      <dd className="flex items-start gap-x-2">
                        <div className="font-medium text-gray-900">
                          {location.address}
                        </div>{" "}
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
