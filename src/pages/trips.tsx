import { Fragment } from "react";
import type { NextPage } from "next";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { User } from "firebase/auth";
import { useLocations, useTrips } from "@/common/hooks/data";
import getDaysArr from "@/common/utils/tripUtil";


interface PageProps {}
const Page: NextPage<PageProps> = () => {

  const { isLoadingTrips, trips, tripsError } = useTrips({
    id: user.uid,
    interval: 5,
  });
  const days = getDaysArr(trips);

  
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* Recent activity table */}
      <div className="relative isolate overflow-hidden pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
            Recent trips
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
                      {day.trips.map((trip) => (
                        <tr key={trip.id}>
                          <td className="relative py-5 pr-6">
                            <div className="flex gap-x-6">
                              <trip.icon
                                className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                aria-hidden="true"
                              />
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
                                {trip.description ? (
                                  <div className="mt-1 text-xs leading-5 text-gray-500">
                                    {trip.description}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                            <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                          </td>
                          <td className="hidden py-5 pr-6 sm:table-cell">
                            <div className="text-sm leading-6 text-gray-900">
                              {trip.start_location}
                            </div>
                            <div className="text-sm leading-6 text-gray-900">
                              {trip.end_location}
                            </div>
                          </td>
                          <td className="py-5 text-right">
                            <div className="flex justify-end">
                              <a
                                href={trip.href}
                                className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                              >
                                View
                                <span className="hidden sm:inline"> trip</span>
                                {/* <span className="sr-only">
                                      , invoice #{transaction.invoiceNumber}, {transaction.client}
                                    </span> */}
                              </a>
                            </div>
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
