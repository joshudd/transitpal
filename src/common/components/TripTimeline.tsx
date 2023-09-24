import { NextPageContext, NextComponentType } from "next";

import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { SVGProps } from "react";

const timeline = [
  {
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: (props) => (
      <svg
      {...props}
        
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M6 24h-2c-.552 0-1-.448-1-1v-1c-.53 0-1.039-.211-1.414-.586s-.586-.884-.586-1.414v-8c-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1v-4c0-1.657 1.343-3 3-3h16c1.657 0 3 1.343 3 3v4c.552 0 1 .448 1 1v3c0 .552-.448 1-1 1v8c0 .53-.211 1.039-.586 1.414s-.884.586-1.414.586v1c0 .552-.448 1-1 1h-2c-.552 0-1-.448-1-1v-1h-10v1c0 .552-.448 1-1 1zm-1.5-7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm15 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-5 1h-5c-.276 0-.5.224-.5.5s.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm6.5-12.5c0-.276-.224-.5-.5-.5h-17c-.276 0-.5.224-.5.5v8.5s3.098 1 9 1 9-1 9-1v-8.5zm-5-3.5h-8v1h8v-1z" />
      </svg>
    ),
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Bus",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: (props) => (
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
    ),
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Walk",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: (props) => (
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
    ),
    iconBackground: "bg-green-500",
  },
];

interface TripTimelineProps {}
const TripTimeline: NextComponentType<
  NextPageContext,
  {},
  TripTimelineProps
> = ({timeline}) => (
  <div className="">
    <ul role="list" className="relative flex gap-10 justify-between">
      <div
        className="absolute inset-0 top-1/2 -translate-y-1/2   w-full h-0.5 bg-gray-200"
        aria-hidden="true"
      />

      {timeline.map(item => JSON.parse(item)).map((event, eventIdx) => (
        <li className="relative z-10 bg-white py-5" >
          <div className="relative flex items-center space-x-3 ">
            <div className="absolute inset-0 w-full h-full bg-white blur z-0 scale-x-125"></div>
            <div className="z-10 relative">
              <span
                className={clsx(
                  // event.iconBackground,
                  "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-blue-500"
                )}
              >
                {/* <event.icon className="h-5 w-5 text-white" aria-hidden="true" /> */}
              </span>
            </div>
            <div className="flex   items-center relative z-10 ">
              <div>
                <p className="text-sm text-gray-500">
                  {event.date}{" "}
                  <a
                    // href={event.href}
                    className="font-medium text-gray-900 text-center"
                  >
                    {event.travel_mode}
                  </a>
                </p>
              </div>
              <div className="whitespace-nowrap text-right text-sm text-gray-500">
                {/* <time dateTime={event.datetime}>{event.date}</time> */}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
export default TripTimeline;
