import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Menu, Transition } from "@headlessui/react";
import { useUser } from "hooks/useUser";

export function ContextMenu<FunctionComponent>({ children = null }) {
  const user = useUser();

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
                <span>Options</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
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
                    {user.attributes.email}
                  </p>
                </div>

                {children && <div className="py-1">{children}</div>}

                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        <AmplifySignOut />
                      </div>
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
