import { NextPageContext, NextComponentType } from "next";

import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { SVGProps } from "react";
import { Step, Trip } from "../types/data";


const TrainIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    height="800px"
    width="800px"
    version="1.1"
    id="_x32_"
    viewBox="0 0 512 512"
  >
    <g>
      <path
        fill="#000000"
        d="M437.575,351.629V89.868C437.575,40.233,397.351,0,347.707,0H164.293c-49.625,0-89.868,40.233-89.868,89.868   v261.761c0,37.628,27.383,68.98,63.269,75.221L81.334,512h50.11l23.132-34.961h202.867L380.574,512h50.101l-56.35-85.15   C410.201,420.601,437.575,389.257,437.575,351.629z M178.182,40.348h155.636v25.94H178.182V40.348z M131.355,124.186   c0-11.284,9.137-20.438,20.421-20.438h208.456c11.276,0,20.429,9.154,20.429,20.438v86.206c0,11.284-9.154,20.429-20.429,20.429   H151.777c-11.284,0-20.421-9.145-20.421-20.429V124.186z M150.808,374.004c-13.158,0-23.826-10.668-23.826-23.818   c0-13.167,10.668-23.836,23.826-23.836c13.159,0,23.827,10.668,23.827,23.836C174.635,363.336,163.967,374.004,150.808,374.004z    M169.618,454.312l17.41-26.318h137.953l17.41,26.318H169.618z M361.201,374.004c-13.158,0-23.826-10.668-23.826-23.818   c0-13.167,10.668-23.836,23.826-23.836c13.159,0,23.827,10.668,23.827,23.836C385.028,363.336,374.36,374.004,361.201,374.004z"
      />
    </g>
  </svg>
);

const CarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="-4 0 32 32"
    version="1.1"
  >
    <title>car</title>
    <path d="M19.938 7.188l3.563 7.156c0.063 0.094 0.094 0.219 0.125 0.313 0.219 0.563 0.375 1.344 0.375 1.844v3.406c0 1.063-0.719 1.938-1.719 2.188v2c0 0.969-0.781 1.719-1.719 1.719-0.969 0-1.719-0.75-1.719-1.719v-1.938h-13.688v1.938c0 0.969-0.75 1.719-1.719 1.719-0.938 0-1.719-0.75-1.719-1.719v-2c-1-0.25-1.719-1.125-1.719-2.188v-3.406c0-0.5 0.156-1.281 0.375-1.844 0.031-0.094 0.063-0.219 0.125-0.313l3.563-7.156c0.281-0.531 1.031-1.031 1.656-1.031h12.563c0.625 0 1.375 0.5 1.656 1.031zM5.531 9.344l-1.906 4.344c-0.094 0.156-0.094 0.344-0.094 0.469h16.938c0-0.125 0-0.313-0.094-0.469l-1.906-4.344c-0.25-0.563-1-1.063-1.594-1.063h-9.75c-0.594 0-1.344 0.5-1.594 1.063zM4.688 19.906c1 0 1.781-0.813 1.781-1.844 0-1-0.781-1.781-1.781-1.781s-1.844 0.781-1.844 1.781c0 1.031 0.844 1.844 1.844 1.844zM19.313 19.906c1 0 1.844-0.813 1.844-1.844 0-1-0.844-1.781-1.844-1.781s-1.781 0.781-1.781 1.781c0 1.031 0.781 1.844 1.781 1.844z" />
  </svg>
);
const WalkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 125"
    fill="none"
    x="0px"
    y="0px"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M59 27C65.0751 27 70 22.0751 70 16C70 9.92487 65.0751 5 59 5C52.9249 5 48 9.92487 48 16C48 22.0751 52.9249 27 59 27ZM49.2399 25.8104C47.5698 25.1416 45.6877 25.2575 44.1122 26.1261L31.439 33.1139C28.8084 34.5644 26.6691 36.765 25.2934 39.4354L20.6662 48.4177C19.1486 51.3635 20.3065 54.9818 23.2523 56.4993C26.1981 58.0168 29.8163 56.859 31.3339 53.9132L35.9611 44.9309C36.2459 44.3781 36.6887 43.9226 37.2332 43.6224L38.7987 42.7592L37.0618 52.1332C36.3643 55.8972 37.3599 59.7604 39.7516 62.7095L34.7932 72.3227L25.9403 85.6865C24.1102 88.4491 24.8661 92.1721 27.6287 94.0021C30.3912 95.8322 34.1142 95.0763 35.9443 92.3137L44.9778 78.6773C45.0981 78.4958 45.2084 78.3077 45.3082 78.1142L48.6317 71.6707L51.6121 74.5672C53.0901 76.0035 54.2328 77.7486 54.9585 79.6776L59.2603 91.1127C60.4271 94.2142 63.8872 95.7827 66.9887 94.6159C70.0902 93.4491 71.6586 89.989 70.4919 86.8875L66.19 75.4523C64.8423 71.8699 62.7202 68.6291 59.9753 65.9615L53.7665 59.9276L56.1032 51.7727C56.431 52.2527 56.8279 52.684 57.2826 53.0521L64.5719 58.9529C67.1474 61.0379 70.9255 60.6402 73.0105 58.0646C75.0955 55.4891 74.6978 51.7109 72.1222 49.626L65.9432 44.6239L60.2814 32.0421C59.6441 30.6258 58.4823 29.5118 57.0405 28.9344L49.2399 25.8104Z"
      fill="black"
    />
  </svg>
);
interface TripTimelineProps {
  trip: Trip;
}
const TripTimeline: NextComponentType<
  NextPageContext,
  {},
  TripTimelineProps
> = ({ trip }) => (

  <div className="py-4">
    <div className=" justify-between flex">
      <p className="text-sm font-medium">{trip.start_address}</p>
      <p className="text-sm font-medium">{trip.end_address}</p>

    </div>
    <ul role="list" className="relative flex gap-5 justify-between items-center w-full">
      <div
        className="absolute inset-0 top-1/2 -translate-y-1/2   w-full h-0.5 bg-gray-200"
        aria-hidden="true"
      />

      {trip.steps
        .map((item: any) => JSON.parse(item))
        .map(({ travel_mode, duration, html_instructions, distance }: Step) => (
          <>
            <li key={html_instructions} className="relative z-10 bg-white py-4">
              <div className="relative flex justify-between items-center space-x-3 w-full">
                <div className="absolute inset-0 w-full h-full bg-white blur z-0 scale-x-125"></div>
                <div className="z-10 relative">
                  <span
                    className={clsx(
                      travel_mode === "DRIVING"
                        ? "bg-blue-500"
                        : travel_mode === "WALKING"
                        ? "bg-gray-500"
                        : "bg-green-500",
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-blue-500"
                    )}
                  >
                    {travel_mode === "DRIVING" ? (
                      <CarIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    ) : travel_mode === "TRANSIT" ? (
                      <TrainIcon
                        className="h-4 w-4 text-white"
                        aria-hidden="true"
                      />
                    ) : (
                      <WalkIcon
                        className="h-6 w-6 text-white mt-0.5"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </div>
               
              </div>
            </li>
            <li key={html_instructions} className="relative z-10 bg-white py-4">
              <div className="relative flex justify-between items-center space-x-3 w-full">
                <div className="absolute inset-0 w-full h-full bg-white blur z-0 scale-x-125"></div>
          
                <div className="relative z-10 ">
                  <p className="text-sm text-gray-500">{distance} </p>
                </div>
              </div>
            </li>
          </>
        ))}
    </ul>
  </div>
);
export default TripTimeline;
