import { Fragment } from "react";
import type { NextPage } from "next";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { User } from "firebase/auth";
import { useLocations, useTrips } from "@/common/hooks/data";
import getDaysArr from "@/common/utils/tripUtil";
import epochToJsDate from "@/common/utils/tripUtil";
import TripTimeline from "@/common/components/TripTimeline";

interface PageProps {
  user: User;
}

function convertEpochToSpecificTimezone(timeEpoch: number, offset: number) {
  var d = new Date(timeEpoch);
  var utc = d.getTime() + d.getTimezoneOffset() * 60000; //This converts to UTC 00:00
  var nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
}

const Page: NextPage<PageProps> = ({ user }) => {
  const { isLoadingTrips, trips, tripsError } = useTrips({
    id: user.uid,
    interval: 5,
  });
  const days = getDaysArr(trips);

  console.log("Days", days);

  return (
    <main className="bg-white flex min-h-screen flex-col justify-between">
      {/* Recent activity table */}
      <div className="relative isolate overflow-hidden pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
            Recent trips
          </h2> */}
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
                      {day
                        // .filter((item) => item.steps && item.steps.length < 6)
                        .map((trip) => (
                          <div className="flex flex-row justify-between">
                            <tr className="flex flex-col" key={trip.date}>
                              {trip.steps && <TripTimeline trip={trip} />}
                            </tr>
                            <div className="px-8 pb-6 pt-14">
                            {(new Date(trip.date* 1000).toLocaleDateString("en-US")).concat("\n", convertEpochToSpecificTimezone(trip.date*1000, -5).slice(11, 11))}
                            </div>
                          </div>
                        ))}
                    </Fragment>
                    // <Fragment key={idx} >
                    //   <tr className="text-sm leading-6 text-gray-900">
                    //     <th
                    //       scope="colgroup"
                    //       colSpan={3}
                    //       className="relative isolate py-2 font-semibold"
                    //     >

                    //       <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                    //       <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                    //     </th>
                    //   </tr>
                    //   {[...day].toReversed().map((trip) => (
                    //     <tr key={trip.date} >
                    //       <td className="relative py-5 pr-6">
                    //         <div className="flex gap-x-6">
                    //         {(new Date(trip.date* 1000).toLocaleDateString("en-US")).concat("\n", convertEpochToSpecificTimezone(trip.date*1000, -5).slice(11, 22))}
                    //           <div className="flex-auto">
                    //             <div className="flex items-start gap-x-3">
                    //               <div className="text-sm font-medium leading-6 text-gray-900">
                    //                 {trip.distance}
                    //               </div>
                    //               {/* <div
                    //                     className={clsx(
                    //                       statuses[trip.status], // this error not sure
                    //                       'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                    //                     )}
                    //                   >
                    //                     {trip.status}
                    //                   </div> */}
                    //             </div>

                    //           </div>
                    //         </div>
                    //         <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                    //         <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                    //       </td>
                    //       <td className="hidden py-5 pr-6 sm:table-cell">
                    //         <div className="text-sm leading-6 text-gray-900">
                    //           Start: {' '}{' '}
                    //           <span className="font-bold">{trip.start_address}</span>
                    //         </div>
                    //         <div className="text-sm leading-6 text-gray-900">
                    //           End: {' '}{' '}
                    //           <span className="font-bold">{trip.end_address}</span>
                    //         </div>
                    //       </td>
                    //       <td className="py-5 text-right">
                    //         <div className="flex justify-end">

                    //         </div>
                    //         {/* <div className="mt-1 text-xs leading-5 text-gray-500">
                    //               Invoice <span className="text-gray-900">#{transaction.invoiceNumber}</span>
                    //             </div> */}
                    //       </td>
                    //     </tr>
                    //   ))}
                    // </Fragment>
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
