import { useLocations } from "@/common/hooks/data";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { User } from "firebase/auth";
import type { NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
interface PageProps {
  user: User;
}
const Page: NextPage<PageProps> = ({ user }) => {
  const { isLoadingLocations, locations, locationsError } = useLocations({
    id: user.uid,
  });
  return (
    <main className="flex flex-col bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 pt-28">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Locations
            </h2>
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
                              <span className="sr-only">, {location.name}</span>
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
                              <span className="sr-only">, {location.name}</span>
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
    </main>
  );
};
export default Page;
