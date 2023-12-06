"use client";

import { Icons } from "./Icons";

export default function FindYourParts({ pageSetup }) {
  return (
    <div className="container">
      <h2 className="text-center uppercase">
        FIND YOUR {pageSetup.brandName} PARTS HERE
      </h2>
      <p className="text-center">
        Find the {pageSetup.brandName} original equipment parts and accessories
        you need to keep your lawn mower, snow blower and other outdoor power
        equipment performing strong. These parts and accessories are designed
        and engineered to exact standards to provide reliability, safety and top
        performance. Protect your {pageSetup.brandName} outdoor power product
        investment with {pageSetup.brandName} original equipment parts and
        accessories.
      </p>

      <ul className="grid gap-4 lg:grid-cols-2">
        <li className="h-full">
          <div
            className="text-center p-2"
            style={{
              backgroundColor: pageSetup.colors.primary,
              color: pageSetup.colors.fontOnPrimary,
            }}
          >
            <strong className="text-lg">Search by Model Number</strong>
            <p className="mb-0">Search using your factory model number.</p>
          </div>
          <div className="bg-white p-2 part_num-container">
            <form
              action="/s/mtdparts/en_US/search"
              name="simpleSearch"
              role="search"
            >
              <div className="relative">
                <input
                  aria-label="Model Number (e.g 13AJ606G790)"
                  autoComplete="off"
                  className="form-control search-field"
                  name="q"
                  placeholder="Model Number (e.g 13AJ606G790)"
                  type="search"
                  defaultValue=""
                />
                <Icons
                  icon="search"
                  className="absolute z-0 top-1/2 -translate-y-1/2 right-0 w-[28px]"
                />
                <div
                  className="suggestions-container"
                  data-url="/on/demandware.store/Sites-mtdparts-Site/en_US/SearchServices-GetSuggestions?q="
                />
                <input
                  name="lang"
                  type="hidden"
                  defaultValue="en_US"
                />
              </div>
            </form>
            <a
              href="https://www.mtdparts.com/en_US/how-to-find-model-number.html"
              className="text-black text-center mt-1 block"
            >
              Don’t know your model number?
            </a>
          </div>
        </li>
        <li className="h-full flex flex-col items-stretch">
          <div
            className="text-center p-2"
            style={{
              backgroundColor: pageSetup.colors.primary,
              color: pageSetup.colors.fontOnPrimary,
            }}
          >
            <strong className="text-lg">Search by Part Number</strong>
            <p className="mb-0">
              Search using the part number you are looking to replace.
            </p>
          </div>
          <div className="bg-white px-2 pt-2 pb-[34px]">
            <form
              action="/s/mtdparts/en_US/search"
              name="simpleSearch"
              role="search"
            >
              <div className="relative">
                <input
                  aria-label="Part Number (e.g 942-0741A)"
                  autoComplete="off"
                  className="form-control search-field"
                  name="q"
                  placeholder="Part Number (e.g 942-0741A)"
                  type="search"
                  defaultValue=""
                />
                <div
                  className="suggestions-container"
                  data-url="/on/demandware.store/Sites-mtdparts-Site/en_US/SearchServices-GetSuggestions?q="
                />
                <Icons
                  icon="search"
                  className="absolute z-0 top-1/2 -translate-y-1/2 right-0 w-[28px]"
                />
                <input
                  name="lang"
                  type="hidden"
                  defaultValue="en_US"
                />
              </div>
            </form>
          </div>
        </li>
      </ul>
      <div className="text-center mt-4">
        <hr />
        <p className="text-lg mb-0">
          Can’t find your part? Customer Service can help.
        </p>
        <p className="text-3xl font-bold mb-1">
          <strong>CALL 1-855-971-2271</strong>
        </p>
        <p className="text-xl">Monday - Friday, 8:30 am - 5:00 pm EST</p>
        <a
          className="btn px-20 grid-cols-[24px_1fr] gap-3 items-center text-base inline-grid"
          style={{
            backgroundColor: pageSetup.colors.primary,
            color: pageSetup.colors.fontOnPrimary,
          }}
          onclick="openChat();"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.986"
            height="24.986"
          >
            <path
              d="M2.5 2.5h19.987v14.99H3.96L2.5 18.952V2.5m0-2.5A2.5 2.5 0 0 0 .012 2.5L0 24.986l5-5h17.49a2.506 2.506 0 0 0 2.5-2.5V2.5a2.506 2.506 0 0 0-2.5-2.5ZM5 12.493h9.994v2.5H5Zm0-3.748h14.989v2.5H5ZM5 5h14.989v2.5H5Z"
              fill="#000"
            />
          </svg>
          CHAT WITH US
        </a>
      </div>
    </div>
  );
}
