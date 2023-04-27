"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BookOpenIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { Container } from "./Container";
import { Poem, poems } from "@/poems";

const popularPoems = [
  "Acrostic Poem",
  "Haiku",
  "Limerick",
  "Sonnet",
  "Villanelle",
]
  .map((theme) => poems.find((poem) => poem.name === theme))
  .filter((poem): poem is Poem => poem !== undefined);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <Container>
        <nav
          className="flex items-center justify-between py-6 lg:backdrop-blur-lg"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a
              href="/"
              className="-m-1 p-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800"
            >
              <span className="sr-only">Poem Generator</span>
              <BookOpenIcon className="w-6 h-6" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 -m-1 p-1 text-sm font-semibold leading-6 text-gray-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800">
                Popular themes
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                  <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                    {popularPoems.map((poem) => (
                      <a
                        key={poem.name}
                        href={poem.href}
                        className="block px-2 py-1 my-1 hover:text-gray-500 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800"
                      >
                        {poem.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <a
              href="/"
              className="-m-1 p-1 text-sm font-semibold leading-6 text-gray-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800"
            >
              All themes
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a
              href="#"
              className="-m-1 p-1 text-sm font-semibold leading-6 text-gray-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800"
            >
              Log in
            </a> */}
          </div>
        </nav>
      </Container>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1 p-1">
              <span className="sr-only">Poem Generator</span>
              <BookOpenIcon className="w-6 h-6" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Popular themes
                        <ChevronDownIcon
                          className={twMerge(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {popularPoems.map((poem) => (
                          <Disclosure.Button
                            key={poem.name}
                            as="a"
                            href={poem.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {poem.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  All themes
                </a>
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
