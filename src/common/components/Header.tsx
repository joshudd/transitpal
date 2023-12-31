import { NextPageContext, NextComponentType } from "next";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/solid";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { User } from "firebase/auth";
import clsx from "clsx";
import Link from "next/link";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Trips", href: "/trips" },
  { name: "Locations", href: "/locations" },
  //   { name: "Expenses", href: "#" },
];
interface HeaderProps {
  user: User;
  signOut: () => void;
}
const Header: NextComponentType<NextPageContext, {}, HeaderProps> = ({
  signOut,
  user,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-x-2">
          <button
            type="button"
            className="-m-3 p-3 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
          <Link className="bg-red-500 rounded-md" href="/">
            <svg
              className="h-8 w-10 mt-1"
              viewBox="0 0 191 376.25"
              x="0px"
              y="0px"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <g>
                <circle cx="78" cy="11" r="11" />
                <circle cx="113" cy="11" r="11" />
                <path
                  fill="#000000"
                  d="M54 27l83 0c30,0 54,26 54,57l0 107c0,25 -15,46 -37,53l21 57 -15 0 -10 -27 -108 0 -10 27 -16 0 21 -57c-22,-7 -37,-28 -37,-53l0 -107c0,-31 24,-57 54,-57zm90 232l-4 -12 -89 0 -4 12 97 0zm-76 -219l55 0c3,0 5,2 5,4l0 8c0,3 -2,5 -5,5l-55 0c-2,0 -5,-2 -5,-5l0 -8c0,-2 3,-4 5,-4zm82 146c-7,0 -12,5 -12,12 0,7 5,13 12,13 6,0 12,-6 12,-13 0,-7 -6,-12 -12,-12zm-109 0c7,0 12,5 12,12 0,7 -5,13 -12,13 -6,0 -12,-6 -12,-13 0,-7 6,-12 12,-12zm1 -113l107 0c12,0 21,10 21,23l0 34c0,13 -9,23 -21,23l-107 0c-12,0 -21,-10 -21,-23l0 -34c0,-13 9,-23 21,-23z"
                />
              </g>
            </svg>
          </Link>

          <h1 className="text-xl font-medium leading-6 text-gray-900">
            transit
            <span className="font-bold">pal</span>
          </h1>
        </div>
        <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
          {navigation.map((item, itemIdx) => (
            <Link key={itemIdx} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end ">
          <div className="flex gap-5">
            <Menu as="div" className="relative ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <button href="#" className="">
                  <span className="sr-only">Your profile</span>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-800"
                    src={user.photoURL}
                    alt=""
                  />
                </button>
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
                      <Link
                        href="/locations"
                        className={clsx(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        Locations
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={signOut}
                        className={clsx(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="-ml-0.5 flex h-16 items-center gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="-ml-0.5">
              <a href="#" className="-m-1.5 block p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="mt-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Header;
