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
import getDaysArr from "@/common/utils/tripUtil";




export const timeIntervals = [
  { name: "Last 7 days", id: "week" },
  { name: "Last 30 days", id: "month" },
  { name: "All-time", id: "all" },
];

const stats = [
  {
    name: "Emissions Saved",
    value: "405,091.00 lbs",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Money Saved",
    value: "$12,787.00",
    change: "+54.02%",
    changeType: "negative",
  },
  {
    name: "Time Saved",
    value: "34hrs 12min",
    change: "+54.02%",
    changeType: "negative",
  },
];

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

const locations = [
  {
    id: 1,
    name: "Home",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    address: "1234 Main St",
  },
  {
    id: 2,
    name: "Work",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    address: "1234 Main St",
  },
  {
    id: 3,
    name: "School",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    address: "1234 Main St",
  },
];



export default function Example({ user }: { user: User }) {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeInterval, setTimeInterval] = useState("week");
  const [createTripOpen, setCreateTripOpen] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const { isLoadingTrips, trips, tripsError } = useTrips({
    id: user.uid,
    interval: 5,
  });

  const days = getDaysArr(trips);
  console.log(getTransitInfo("Minneapolis, MN", "Saint Paul, MN"));

  const { isLoadingLocations, locations, locationsError } = useLocations({
    id: user.uid,
  });
  const value = useMemo(() => {
    if (timeInterval === "week") {
      return 7;
    }
    if (timeInterval === "month") {
      return 30;
    }
    if (timeInterval === "all") {
      return 100;
    }
  }, [timeIntervals]);
  const createTrip = async () => {

    let response = await getTransitInfo(origin, destination);
    console.log("Log", response)

    await addDoc(collection(db, "users", user.uid, "trips"), {
      response
    });

  };
  return (
    <div>
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
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
              {timeIntervals.map(({ name, id }) => (
                <button
                  key={id}
                  className={
                    id === timeInterval ? "text-indigo-600" : "text-gray-700"
                  }
                  onClick={() => setTimeInterval(id)}
                >
                  {name}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCreateTripOpen(true)}
              className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                <dd
                  className={clsx(
                    stat.changeType === "negative"
                      ? "text-rose-600"
                      : "text-gray-700",
                    "text-xs font-medium"
                  )}
                >
                  {stat.change}
                </dd>
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
        >
          <div
            className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
            style={{
              clipPath:
                "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
            }}
          ></div>
        </div>
      </div>
      <div className="space-y-8">
        {/* Recharts */}

        <div className="relative isolate overflow-hidden">
          {/* Secondary navigation */}

          {/* Stats */}
          <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
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
          </div>

          <div
            className="absolute left-0 top-full -z-10  origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
            aria-hidden="true"
          >
            <div
              className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
              style={{
                clipPath:
                  "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
              }}
            ></div>
          </div>
        </div>
        {/* Recent activity table */}
        <div>
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
                  <tbody>
                    {days.map((day) => (
                      <Fragment key={day.dateTime}>
                        <tr className="text-sm leading-6 text-gray-900">
                          <th
                            scope="colgroup"
                            colSpan={3}
                            className="relative isolate py-2 font-semibold"
                          >
                            <time dateTime={day.dateTime}>{day.date}</time>
                            <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                            <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                          </th>
                        </tr>
                        {[1,2].map((trip) => (
                          // <tr key={trip.id}>
                          //   <td className="relative py-5 pr-6">
                          //     <div className="flex gap-x-6">
                          //       {/* <trip.icon
                          //         className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                          //         aria-hidden="true"
                          //       /> */}
                          //       <div className="flex-auto">
                          //         <div className="flex items-start gap-x-3">
                          //           <div className="text-sm font-medium leading-6 text-gray-900">
                          //             {trip.distance}
                          //           </div>
                          //           {/* <div
                          //               className={clsx(
                          //                 statuses[trip.status], // this error not sure
                          //                 'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                          //               )}
                          //             >
                          //               {trip.status}
                          //             </div> */}
                          //         </div>

                          //         <div className="mt-1 text-xs leading-5 text-gray-500">
                          //           {trip.origin}
                          //         </div>
                          //       </div>
                          //     </div>
                          //     <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                          //     <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                          //   </td>
                          //   <td className="hidden py-5 pr-6 sm:table-cell">
                          //     <div className="text-sm leading-6 text-gray-900">
                          //       {trip.start_location}
                          //     </div>
                          //     <div className="text-sm leading-6 text-gray-900">
                          //       {trip.end_location}
                          //     </div>
                          //   </td>
                          //   <td className="py-5 text-right">
                          //     <div className="flex justify-end">
                          //       <a
                          //         href={trip.href}
                          //         className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                          //       >
                          //         View
                          //         <span className="hidden sm:inline">
                          //           {" "}
                          //           trip
                          //         </span>
                          //         {/* <span className="sr-only">
                          //             , invoice #{transaction.invoiceNumber}, {transaction.client}
                          //           </span> */}
                          //       </a>
                          //     </div>
                          //     {/* <div className="mt-1 text-xs leading-5 text-gray-500">
                          //         Invoice <span className="text-gray-900">#{transaction.invoiceNumber}</span>
                          //       </div> */}
                          //   </td>
                          // </tr>
                          <TripTimeline/>
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
                href="/settings"
                className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
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
