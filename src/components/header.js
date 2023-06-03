import * as React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const navigation = [
  { name: "Product", href: "/" },
  { name: "Features", href: "/" },
  { name: "Marketplace", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-gradient-to-br from-[#9089fc]/40 via-white/80 to-white/40 lg:bg-gradient-to-r lg:from-white/60 lg:via-white/70 lg:to-white/80 border-b-2">
      {/*  */}
      <nav
        className="flex items-center mx-auto justify-between p-6 lg:px-16 h-20 max-w-7xl"
        aria-label="Global"
      >
        <div className="flex lg:flex-">
          <Link to="/" className="-m-1.5 p-1.5 sm:hidden lg:flex">
            {/* <span className="sr-only">Your Company</span> */}
            <Link to="/">
              <StaticImage
                className="w-8"
                src="../images/icongatsbyjs.svg"
                alt="GatsbyJS"
                width={32}
                height={32}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </Link>
          </Link>
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={
                "text-md font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto backdrop-blur-lg bg-gradient-to-tl from-[#ff80b5]/70 to-[#9089fc]/80 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <StaticImage
                className="w-8 bg-white rounded-full"
                src="../images/icongatsbyjs.svg"
                alt="GatsbyJS"
                width={32}
                height={32}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root">
            <div className="my-24 divide-y divide-gray-500/10">
              <div className="grid place-content-center text-center gap-12">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={
                      "-mx-3 rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* <div className="py-6">
                    <a
                      href="/"
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
