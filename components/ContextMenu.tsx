import { Menu, Transition } from "@headlessui/react";
import { FunctionComponent, useState } from "react";

export function ContextMenu<FunctionComponent>({ children = null }) {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <div className="absolute top-0 right-0 z-10 hidden mt-6 mr-6 md:flex md:visible">
        <span className="rounded-md shadow">
          <a
            className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700"
            href="/login"
          >
            Log In
          </a>
        </span>
      </div>
    );
  }

  return (
    <div className="absolute top-0 right-0 z-10 hidden mt-6 mr-6 md:flex md:visible">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow">
              <Menu.Button className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700">
                <span>Log In</span>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none w-96 mt-13"
              >
                <div className="px-4 py-3">
                  <p className="text-sm leading-5">Signed in as</p>
                  <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                    tom@example.com
                  </p>
                </div>

                {children && <div className="py-1">{children}</div>}

                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#account-settings"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
