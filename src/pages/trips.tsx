import { Fragment, useState } from "react";
import type { NextPage } from "next";
import { ArrowUpCircleIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import { User } from "firebase/auth";
import { useLocations, useTrips } from "@/common/hooks/data";
import getDaysArr from "@/common/utils/tripUtil";
import getDate from "@/common/utils/tripUtil";


interface PageProps {user: User}
const Page: NextPage<PageProps> = ({user}) => {

  const { isLoadingTrips, trips, tripsError } = useTrips({
    id: user.uid,
    interval: 5,
  });
  const days = getDaysArr(trips);
  console.log("Days", days);
  const createTrip = async () => {
    setCreateTripOpen(false);
    let response = await getTransitInfo(origin, destination);
    console.log("Log", response);

  
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* Recent activity table */}
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
              className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
            >
              Create
            </button>
          </div>
        </form>
      </Modal>
      <div className="relative isolate overflow-hidden pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">
          <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
            Recent trips
          </h2>
          <button
            onClick={() => setCreateTripOpen(true)}
            className="ml-auto flex items-center gap-x-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
            New trip
          </button>
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
                    <Fragment>
                      <tr className="text-sm leading-6 text-gray-900">
                        <th
                          scope="colgroup"
                          colSpan={3}
                          className="relative isolate py-2 font-semibold"
                        >
                          <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                          <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                        </th>
                      </tr>
                      {day.map((trip) => (
                        <tr>
                          <td className="relative py-5 pr-6">
                            <div className="flex gap-x-6">
                            {trip.date}
                              <div className="flex-auto">
                                <div className="flex items-start gap-x-3">
                                  <div className="text-sm font-medium leading-6 text-gray-900">
                                    {trip.distance}
                                  </div>
                                  {/* <div
                                        className={clsx(
                                          statuses[trip.status], // this error not sure
                                          'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                        )}
                                      >
                                        {trip.status}
                                      </div> */}
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                            <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                          </td>
                          <td className="hidden py-5 pr-6 sm:table-cell">
                            <div className="text-sm leading-6 text-gray-900">
                              Start: {' '}{' '}
                              <span className="font-bold">{trip.start_address}</span>
                            </div>
                            <div className="text-sm leading-6 text-gray-900">
                              End: {' '}{' '}
                              <span className="font-bold">{trip.end_address}</span>
                            </div>
                          </td>
                          <td className="py-5 text-right">
                            <div className="flex justify-end"></div>
                            {/* <div className="mt-1 text-xs leading-5 text-gray-500">
                                  Invoice <span className="text-gray-900">#{transaction.invoiceNumber}</span>
                                </div> */}
                          </td>
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
    </main>
  );
};
export default Page;
