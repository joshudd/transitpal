import Modal from "@/common/components/Modal";
import { useLocations } from "@/common/hooks/data";
import { db } from "@/modules/auth/client";
import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisHorizontalIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { randomUUID } from "crypto";
import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import type { NextPage } from "next";
import Link from "next/link";
import { Fragment, useId, useState } from "react";
interface PageProps {
  user: User;
}
const Page: NextPage<PageProps> = ({ user }) => {
  const { isLoadingLocations, locations, locationsError } = useLocations({
    id: user.uid,
  });
  const [createLocationOpen, setCreateLocationOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const createLocation = async () => {
    setCreateLocationOpen(false);
    await addDoc(collection(db, "users", user.uid, "locations"), {
      created_at: Date.now() / 1000,
      name,
      address,
      id: Math.random() * 100000,
    });
  };
  const deleteLocation = async (id: string) => {
    const q = await query(
      collection(db, "users", user.uid, "locations"),
      where("id", "==", id)
    );
    const querySnapshot = await getDocs(q);
    const docs: Location[] = [];
    await querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    await deleteDoc(doc(db, "users", user.uid, "locations", docs[0].id));
  };
  return (
    <main className="flex  flex-col ">
      <Modal open={createLocationOpen} setOpen={setCreateLocationOpen}>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            createLocation();
          }}
        >
          <h2 className="font-medium text-lg">Create Trip</h2>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                placeholder="Work"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                required
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                type="text"
                name="address"
                id="address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                placeholder="123 Elm St."
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3 w-full">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              onClick={() => setCreateLocationOpen(false)}
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 pt-28 w-full">
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Locations
            </h2>
            <button
              onClick={() => setCreateLocationOpen(true)}
              className="ml-auto flex items-center gap-x-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
              New Location
            </button>
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
                        {/* <Menu.Item>
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
                        </Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => deleteLocation(location.id)}
                              className={clsx(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              Delete
                              <span className="sr-only">, {location.name}</span>
                            </button>
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
