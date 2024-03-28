import BannerAd from "@/components/BannerAd";

export default function Home() {
  return (
    <main>
      <main className="mtd-home" role="main">
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n    .site-search,\n    .suggestions {\n      width: 100%;\n    }\n\n    .nav-tabs .nav-link.active {\n      background-color: #e0f4ed !important;\n    }\n\n    .fs-7 {\n      font-size: 13.6px;\n    }\n\n    .fs-8 {\n      font-size: 10.4px;\n    }\n\n    .fs-9 {\n      font-size: 7.2px;\n    }\n\n    .mh-0 {\n      max-height: 0;\n    }\n\n    .border-footer {\n      border-bottom: 1px solid #4c4c4c;\n    }\n\n    a.text-white:hover {\n      color: #cbcbcb !important;\n    }\n\n    .max-w-20 {\n      max-width: 1.25em;\n    }\n\n    .max-w-25 {\n      max-width: 1.5625em;\n    }\n\n    .max-w-48 {\n      max-width: 3em;\n    }\n\n    .max-w-120 {\n      max-width: 7.5em;\n    }\n\n    .max-w-160 {\n      max-width: 10em;\n    }\n\n    .max-h-25 {\n      max-height: 1.5625em;\n    }\n\n    .max-h-48 {\n      max-height: 3em;\n    }\n\n    .min-h-48 {\n      min-height: 3em;\n    }\n\n    .max-vh-100 {\n      max-height: 100vh;\n    }\n\n    .mh-0 {\n      max-height: 0;\n    }\n\n    .min-vh-0 {\n      min-height: 0 !important;\n    }\n\n    .mtd-home svg {\n      width: 100%;\n      height: auto;\n    }\n\n    .mtd-home svg.fill-white * {\n      fill: #fff;\n    }\n\n    .mtd-home svg.fill-black * {\n      fill: #000;\n    }\n\n    .box-shadow {\n      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);\n    }\n\n    .container,\n    .container-fluid,\n    .container-lg,\n    .container-md,\n    .container-sm,\n    .container-xl,\n    .container-xxl {\n      --bs-gutter-x: 1.5rem;\n      --bs-gutter-y: 0;\n      margin-left: auto;\n      margin-right: auto;\n      padding-left: 0;\n      padding-right: 0;\n      width: 100%;\n    }\n\n    .text-black {\n      color: #000;\n    }\n\n    @media (min-width: 768px) {\n      .border-md-bottom-0 {\n        border-bottom: 0 !important;\n      }\n    }\n\n    @media (min-width: 992px) {\n      .border-lg-bottom-0 {\n        border-bottom: 0 !important;\n      }\n\n      .border-lg-right {\n        border-right: 1px solid #d2d2d2 !important;\n      }\n\n      .border-lg-right-0 {\n        border-right: 0 !important;\n      }\n    }\n\n    @media (min-width: 1200px) {\n      .border-xl-right {\n        border-right: 1px solid #d2d2d2 !important;\n      }\n\n      .border-xl-right-0 {\n        border-right: 0 !important;\n      }\n    }\n\n    @media (min-width: 1400px) {\n      .container,\n      .container-lg,\n      .container-md,\n      .container-sm,\n      .container-xl,\n      .container-xxl {\n        max-width: 1320px;\n      }\n    }\n\n    .visually-hidden,\n    .visually-hidden-focusable:not(:focus):not(:focus-within),\n    .hero.slant-down.content-page-image,\n    .footer-email-signup {\n      clip: rect(0, 0, 0, 0) !important;\n      border: 0 !important;\n      height: 1px !important;\n      margin: -1px !important;\n      overflow: hidden !important;\n      padding: 0 !important;\n      position: absolute !important;\n      white-space: nowrap !important;\n      width: 1px !important;\n    }\n\n    .container.content-asset-container {\n      padding-left: 0;\n      padding-right: 0;\n      max-width: initial;\n    }\n  ",
          }}
        />
        <h1 className="visually-hidden">MTD Parts</h1>
        
        <BannerAd />

        <section
          className="border-bottom"
          style={{ backgroundColor: "#e8e8e8" }}
        >
          <ul className="list-unstyled container-xxl g-0 d-flex flex-wrap mb-0 no-gutters p-0">
            <li
              className="order-0 col-12 col-md-6 text-white p-4 py-md-4 px-md-3"
              style={{ backgroundColor: "rgb(6, 101, 58)" }}
            >
              <h2 className="fs-4 text-center text-uppercase">Part Finder</h2>
              <p className="fs-8 text-center w-md-75 mx-auto">
                Search for parts using your model number, or the part number you
                are replacing.
              </p>
              <div className="input-group min-h-48 mb-2">
                {/*- SF BS START*/}
                {/* dwMarker="linclude" dwTemplateTitle="/default/components/header/search.isml (org_mtd)" dwTemplateURL="http://localhost:60606/target=/org_mtd/cartridge/templates/default/components/header/search.isml" */}
                <div className="site-search">
                  <form
                    action="/s/mtdparts/en_US/search"
                    method="get"
                    name="simpleSearch"
                    role="search"
                  >
                    <span className="close-icon d-none">
                      {/* dwMarker="linclude" dwTemplateTitle="/default/util/svg.isml (app_lyonscg_mfra)" dwTemplateURL="http://localhost:60606/target=/app_lyonscg_mfra/cartridge/templates/default/util/svg.isml" */}
                      <img
                        alt="Close"
                        className="icon close-dark"
                        src="/on/demandware.static/Sites-mtdparts-Site/-/default/dw89ba1e5b/images/svg-icons/close-dark.svg"
                      />
                    </span>
                    <span className="search-icon">
                      {/* dwMarker="linclude" dwTemplateTitle="/default/util/svg.isml (app_lyonscg_mfra)" dwTemplateURL="http://localhost:60606/target=/app_lyonscg_mfra/cartridge/templates/default/util/svg.isml" */}
                      <img
                        alt="Search"
                        className="icon search"
                        src="/on/demandware.static/Sites-mtdparts-Site/-/default/dw72b40711/images/svg-icons/search.svg"
                      />
                    </span>
                    <input
                      aria-label="Model Number (e.g 12A-B2SD500)"
                      autoComplete="off"
                      className="form-control search-field w-100"
                      name="q"
                      placeholder="Model Number (e.g 13A277BS066)"
                      type="search"
                      defaultValue=""
                    />
                    <div
                      className="suggestions-wrapper"
                      data-url="/on/demandware.store/Sites-mtdparts-Site/en_US/SearchServices-GetSuggestions?q="
                    >
                      &nbsp;
                    </div>
                    <input name="lang" type="hidden" defaultValue="en_US" />
                    &nbsp;
                  </form>
                </div>
                <div className="search-button">
                  {/* dwMarker="linclude" dwTemplateTitle="/default/util/svg.isml (app_lyonscg_mfra)" dwTemplateURL="http://localhost:60606/target=/app_lyonscg_mfra/cartridge/templates/default/util/svg.isml" */}
                  <img
                    alt="Search"
                    className="icon search"
                    src="/on/demandware.static/Sites-mtdparts-Site/-/default/dw72b40711/images/svg-icons/search.svg"
                  />
                </div>
                {/*- SF BS END*/}
              </div>
              <p className="fs-8 text-center mb-0 d-md-none">
                <button
                  className="border-0 bg-transparent text-white min-h-48"
                  onclick="moreHelp()"
                >
                  Don’t know your model number? Click here for help.
                </button>
              </p>
            </li>
            <li className="order-2 order-md-1 col-12 col-md-6 bg-secondary text-white p-4 py-md-4 px-md-3">
              <h2 className="fs-4 text-center text-uppercase">
                Parts Diagrams
              </h2>
              <p className="fs-8 text-center w-md-75 mx-auto">
                Browse illustrated parts diagrams to find the part you need.
              </p>
              <a
                className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 bg-white min-h-48"
                href="https://www.mtdparts.com/en_US/ari-partstream.html"
              >
                Search Diagrams
                <svg
                  className="max-w-20 ml-1"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                </svg>
              </a>
              <p className="fs-8 text-center mb-0 mt-2">
                For equipment 1995-present
              </p>
            </li>
            <li className="order-1 order-md-2 col-12">
              <div
                className="p-1 d-none d-md-block border-left border-right bg-white"
                id="more-info"
              >
                <div className="container-xxl g-0 d-flex flex-column">
                  <ul className="d-flex flex-column flex-md-row list-unstyled mb-0">
                    <li className="col-12 col-md-6 col-xl-3 p-3">
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <img
                          alt=""
                          className="w-100"
                          src="https://www.mtdparts.com/on/demandware.static/-/Sites-mtdparts-Library/default/dw81188c99/Model-Plates/Web/Find_Model_Number_MTD.jpg"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                    </li>
                    <li className="col-12 col-md-6 col-xl-9 p-3">
                      <div className="d-flex flex-column align-items-start">
                        <h2
                          className="h2 text-uppercase mb-0 border-bottom w-100 pb-1"
                          style={{ fontSize: "1.25rem" }}
                        >
                          Model Number Example:
                        </h2>
                        <p className="fs-7 mb-0 mt-2">
                          Your machine’s serial number is essential to
                          establishing extended warranty eligibility status for
                          your outdoor power equipment. The serial number is
                          eleven characters printed on the left side of the
                          Product Identification Label. Characters can include
                          numbers, letters or hyphens.
                        </p>
                        <a
                          className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 bg-white border mt-2 d-md-inline-flex w-auto px-4 min-h-48"
                          href="https://www.mtdparts.com/en_US/how-to-find-model-number.html"
                        >
                          Need More Help?
                          <svg
                            className="max-w-20 ml-1"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                          </svg>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <div className="container-xxl g-0 d-flex flex-column py-3">
            <h2 className="text-uppercase text-center">Shop By...</h2>
          </div>
          <div className="container-xxl g-0 d-flex flex-column p-0">
            <ul className="nav nav-tabs no-gutters list-unstyled">
              <li className="col-4">
                <button
                  className="d-flex justify-content-center align-items-center nav-link w-100 text-uppercase p-2 p-lg-3 min-h-48 max-h-48 border-bottom rounded-0 active"
                  aria-current="page"
                  href="#top"
                  id="brand"
                  style={{ backgroundColor: "transparent" }}
                  onclick="changeTab(this)"
                >
                  <div className="tab-arrows pe-none max-w-25">
                    <span className="arrow-up d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        aria-disabled="true"
                        className=""
                      >
                        <path d="m14 28 10-10.05L34 28Z" />
                      </svg>
                    </span>
                    <span className="arrow-down d-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        aria-disabled="true"
                        className=""
                      >
                        <path d="m24 30-10-9.95h20Z" />
                      </svg>
                    </span>
                  </div>
                  Brand
                </button>
              </li>
              <li className="col-4">
                <button
                  className="d-flex justify-content-center align-items-center nav-link w-100 text-uppercase p-2 p-lg-3 min-h-48 max-h-48 border-bottom rounded-0 undefined"
                  aria-current="page"
                  href="#top"
                  id="part-type"
                  style={{ backgroundColor: "transparent" }}
                  onclick="changeTab(this)"
                >
                  <div className="tab-arrows pe-none max-w-25">
                    <span className="arrow-up d-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        aria-disabled="true"
                        className=""
                      >
                        <path d="m14 28 10-10.05L34 28Z" />
                      </svg>
                    </span>
                    <span className="arrow-down d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        aria-disabled="true"
                        className=""
                      >
                        <path d="m24 30-10-9.95h20Z" />
                      </svg>
                    </span>
                  </div>
                  Part Type
                </button>
              </li>
              <li className="col-4">
                <button
                  className="d-flex justify-content-center align-items-center nav-link w-100 text-uppercase p-2 p-lg-3 min-h-48 max-h-48 border-bottom rounded-0 undefined"
                  aria-current="page"
                  href="#top"
                  id="machine-type"
                  style={{ backgroundColor: "transparent" }}
                  onclick="changeTab(this)"
                >
                  <div className="tab-arrows pe-none max-w-25">
                    <span className="arrow-up d-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        aria-disabled="true"
                        className=""
                      >
                        <path d="m14 28 10-10.05L34 28Z" />
                      </svg>
                    </span>
                    <span className="arrow-down d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        aria-disabled="true"
                        className=""
                      >
                        <path d="m24 30-10-9.95h20Z" />
                      </svg>
                    </span>
                  </div>
                  Machine Type
                </button>
              </li>
            </ul>
            <div className="tabs">
              <div className="tab" id="tab-brand">
                <ul className="d-flex flex-wrap list-unstyled">
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/ourbrands-yardman.html"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 507.6 75.2"
                          xmlSpace="preserve"
                          style={{ width: "100%" }}
                        >
                          <path
                            d="M45.9 1 32.5 26.1 17.9 1H0l24.3 40.6v31.6h15.9V40.5L62.1 1H45.9z"
                            fill="#face04"
                          />
                          <path
                            d="M100.5 45.6c0 4.3-1.5 17.6-16.8 17.6-6.3 0-11.9-1.9-12-10.2-.1-7.2 5.5-9.2 11.6-10.5 6.1-1.1 13.9-1.2 17.2-4.1v7.2zm17.7 27.7v-53C118.2 3.2 102 0 87.8 0c-16 0-29.3 5.5-30.4 21.9h16.5c.7-5.8 5.5-10.4 13-10.4 6.9 0 12.7 1.2 12.7 9.7 0 8-11.2 7.2-23.2 9-12.1 1.7-22 7-22 23.2 0 14.6 8.5 21.8 22 21.8 8.7 0 17.4 0 23.6-6.5.1 2.3 1.1 2.4 1.8 4.6h16.4zm285.1-27.7c0 4.3-1.5 17.6-16.8 17.6-6.3 0-11.9-1.9-12-10.2-.1-7.2 5.5-9.2 11.6-10.5 6.1-1.1 13.9-1.2 17.2-4.1v7.2zM421 73.3v-53C421 3.2 404.8 0 390.6 0c-16 0-29.3 5.5-30.4 21.9h16.5c.7-5.8 5.5-10.4 13-10.4 6.9 0 12.7 1.2 12.7 9.7 0 8-11.2 7.2-23.2 9-12.1 1.7-22 7-22 23.2 0 14.6 8.5 21.8 22 21.8 8.7 0 17.4 0 23.6-6.5.1 2.3 1.1 2.4 1.8 4.6H421zM139.7 45h13.2c8 0 10.9 3.3 12 10.9.8 5.8.6 12.7 2.5 17.3h15.9c-2.8-4-2.7-12.5-3-17.1-.5-7.3-2.7-14.9-10.5-16.9V39c8-3.2 11.4-9.6 11.4-18.1C181.2 10 173 1 160.1 1h-36.3v72.2h15.9V45zm0-31.7h14.7c7.1 0 11 3 10.9 10-.1 5.2-3.8 9-10.9 9h-14.7v-19zm62.7 46.6h14.2c9.2 0 18-5.7 18-21.6 0-14.6-5.1-23.9-20.8-23.9h-11.3v45.5zm-15.9 13.3V1h31.1c18.7 0 32.8 11.7 32.8 35.7 0 20.9-10.7 36.5-32.8 36.5h-31.1zm68.7-41.4h16.7v12.3h-16.7V31.8zM278.1 1h22.3L315 50.7h.2L329.3 1h22.4v72.2h-14.9V22h-.2l-15.8 51.2h-12.2l-15.4-50.7h-.2v50.7h-14.9V1zm149.5 0h15.8l30.1 48.4h.2V1h14.9v72.2h-15.9l-30-48.3h-.2v48.3h-14.9V1zm66.2.1h-2.9v-1h7v1H495v7.8h-1.2V1.1zm5.1-1h1.6l2.8 7.4 2.8-7.4h1.6v8.8h-1.1V1.6l-2.7 7.3h-1L500 1.6v7.3h-1.1V.1z"
                            fill="#face04"
                          />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Yard-Man
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/ourbrands-remington.html"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 617.1 214.3"
                          xmlSpace="preserve"
                          style={{ width: "100%" }}
                        >
                          <path
                            d="M246.4 91.6h30.9s7.2-50.6 7.4-51.9c1.7-9.8 7.4-10.2 12.6-10.2h29.4L330.9 0H285c-13 0-26.2 5.6-28.6 22.2-2.4 16.6-10 69.4-10 69.4"
                            fill="#f26311"
                          />
                          <path
                            d="M338.5 0h21.8s-6.7 46.8-7.3 50.9c-.6 4.1-2 10.1-8.4 10.1h-11l23.9 30.6h-31.2l-36.2-47.2h35.1c4.7 0 7.1-1.7 7.5-4.4s5.8-40 5.8-40M121.9 214.3h-53l8.6-61.1h53l-2 14.1H97.1l-1.3 9.4h31.4l-.8 6c-.6 3.9-4.6 7.1-9.1 7.1H93.9l-1.4 10.3h31.4l-2 14.2zm92.7 0h-20.3l5.2-37h-1l-17.3 33.5c-1.4 2.6-2.4 3.5-5 3.5H169c-2.6 0-3.5-1-4-3.5l-7.9-33.5h-1l-5.2 37H131l8.6-61.1h26.8c3.1 0 4.1.9 4.6 3.6l5.8 27.7h.9l13-27.7c1.3-2.7 2.5-3.6 5.6-3.6h26.8l-8.5 61.1zm8.5 0 8.6-61.1h13.4c4.5 0 7.7 3.2 7.2 7.1l-7.6 54h-21.6zm97.8 0H306c-4.6 0-6.7-1.1-8.6-4.4L280 179.4h-.5l-4.9 34.9h-20.3l8.6-61.1h18.3c4.6 0 6.8 1.1 8.6 4.4l14.5 26.8h.5l4.4-31.2h20.3l-8.6 61.1zm61.3-61.1c7.5 0 11.6.9 14 3.1 3.1 3 4.6 7.4 3.4 17.8H379c.6-4.9-.6-5.6-1.2-6.2-.4-.4-1.3-.7-4.3-.7h-9c-3.1 0-4 .2-4.7.7-1 .8-2.7 3.5-4.4 15.8s-.8 15.2 0 16c.5.5 1.4.7 4.5.7h9.5c2.8 0 3.9-.2 4.6-.7.8-.6 2.4-2.3 3-6.6l.1-.4h-6.9c-4.5 0-7.7-3.2-7.2-7.1l.8-5.5h35.7l-1 7.4c-2.1 14.7-5.9 19.9-10.3 23.3-3.3 2.5-8 3.6-14.5 3.6h-23.2c-7.3 0-11-1.1-13.3-3.5-3.6-3.5-6.2-10.2-3.8-27 2.4-16.8 6.8-23.6 11.4-27 3-2.4 7-3.5 14.3-3.5h23.1zm61.8 14.3-5.6 39.7c-.5 3.9-4.6 7.1-9.1 7.1h-13.4l6.6-46.8h-18.4l2-14.3h58.4l-2 14.3H444zm65.4-14.3c7.3 0 11 1.1 13.3 3.5 3.6 3.5 6.2 10.2 3.8 27-2.4 16.8-6.8 23.5-11.4 27-3 2.4-7 3.5-14.3 3.5h-21.2c-7.3 0-11-1.1-13.3-3.5-3.6-3.5-6.2-10.2-3.8-27 2.4-16.8 6.8-23.6 11.4-27 3-2.4 7-3.5 14.3-3.5h21.2zm-25 46.1c.5.5 1.5.7 4.5.7h6.7c3 0 4-.2 4.7-.7.8-.6 2.2-2.3 4.1-15.6s.9-15 .3-15.6c-.5-.5-1.5-.7-4.5-.7h-6.7c-3 0-4 .2-4.7.7-.8.6-2.2 2.3-4.1 15.6-1.9 13.5-.9 15-.3 15.6m110.4 15h-14.9c-4.6 0-6.6-1.1-8.6-4.4l-17.4-30.4h-.5l-4.9 34.9h-20.3l8.6-61.1h18.3c4.6 0 6.8 1.1 8.6 4.4l14.5 26.8h.5l4.4-31.2h20.3l-8.6 61zM63.9 155.9c-1.9-1.9-5.5-2.7-11-2.7H8.6L0 214.3h14.7c3.6 0 6.7-2.7 7.2-6.2l1.8-12.8h11.6l4 19h21L56 194c1-.4 2-.9 2.8-1.5 3.3-2.6 6.5-6.6 8.2-18.3s-.5-15.7-3.1-18.3m-36.3 11.2h14.7c3.4 0 4.3.2 4.8.7.8.8 1.1 1.9.5 6.4s-1.2 5.7-2.3 6.5c-.6.5-1.6.7-5 .7H25.6l2-14.3zm584-14c3 0 5.4 2.5 5.4 5.5s-2.5 5.4-5.5 5.4-5.4-2.5-5.4-5.4c.1-3.1 2.5-5.5 5.5-5.5m0 10c2.6.1 4.7-1.9 4.8-4.5.1-2.6-1.9-4.7-4.5-4.8-2.6-.1-4.7 1.9-4.8 4.5v.1c-.1 2.5 1.8 4.6 4.3 4.7h.2m-2.1-7.8h2.5c1.5 0 2.2.6 2.2 1.8.1.9-.6 1.7-1.5 1.7h-.1l1.8 2.8h-1.1l-1.7-2.7h-1v2.7h-1l-.1-6.3zm1 2.9h1c.9 0 1.7 0 1.7-1 0-.8-.7-1-1.4-1h-1.3v2z"
                            fill="#f26311"
                          />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Remington
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/ourbrands-whiteoutdoor.html"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 362.9 175.7"
                          xmlSpace="preserve"
                          style={{ width: "100%" }}
                        >
                          <path fill="#fff" d="M2 1.4h360v166H2z" />
                          <path
                            fill="none"
                            stroke="#c00000"
                            strokeWidth={2}
                            d="M1.9 2H361v164.7H1.9z"
                          />
                          <path
                            fill="#c00000"
                            d="M9 7.3h346.4v96.3H9zM8.9 111h346.4v48.1H8.9z"
                          />
                          <path
                            fill="none"
                            stroke="#c00000"
                            strokeWidth="0.688"
                            d="M8.9 111h346.4v48.1H8.9z"
                          />
                          <path fill="none" d="M0 0h362.9v175.7H0z" />
                          <path
                            d="m57.8 56.1.2.2L73 26l26.8.1 13.5 30.8 13.9-30.8h44.5v18.3h19.7V26H213v58.2h-20.9l-.1-22h-20.2v21.9h-22.9l-.1-45-22 44.9h-27l-15-27.1S71.5 84.4 71.9 84.3c.4-.2-27.1-.2-27.1-.2S19.3 26.5 19.3 25.9h27.4l11.1 30.2zm159.3-30h21.4v58.1h-21.4zm24.8 0h45.7v16.1h-12.3v42h-21.6v-42h-11.8V26.1zm48.8 0h48v16.1h-25.9V48h23.6v13.6h-23.6v6.5h25.9v16.1h-48V26.1z"
                            fill="#fff"
                          />
                          <path
                            d="m62.1 173.8-.4-2.5-2-2.3c-6.6-12.6-8.9-12.6-8.9-12.6-.6-.2-.6-2.6-.6-2.6 3.2-3.1-1.2-9.3-1.2-9.3l-.7-.8-1.7.8c-.3.1-2.8 1.2-2.8 1.2l-1.9 1.1-.2.9c.5 3.8 1.7 7.4 3.5 10.8l1 .9.1.9c.1.9.5 1.8 1.2 2.5.2.2.5.3.8.4.5.1.9.4 1.3.8l1.2 3.4c-2.1.6-5.5-.1-5.5-.1l-.7-2.6.3-1.4s-.3-1.2-1.2-1.5c-.5-.2-1-.4-1.4-.8-.6-.4-.7-2.3-.7-2.3.3-1.1-3.3-9.8-3.3-9.8L37 146l-.5-1.6c-.1-.2-.1-.5 0-.8.8-1 1.2-1 1.2-1 .1-.5 3.5-3.2 3.5-3.2s1.8-1.1 1.7-1.8v-.2c-3.9-5.8-2.7-10.5-1.7-12.7.2-.3.3-.6.3-.9.1-2.3-.6-1.8-.6-1.8-2.2.1-2.4 2-2.9 3-.3.7-.6 1.3-.9 2 .3 1.3-1.4 4.8-1.4 4.8-4 4.4-6.3 3.7-6.3 3.7 6-9.7 1.3-5.1 1.3-5.1-.5-1.4 1.8-3 1.8-3-2.4-1.3-4.7 4-4.7 4-.8 1.9-2 3.5-3.5 4.7-5.6 2.6-6.4-1-6.4-1 3.9 1.8 5.5-4.1 5.5-4.1-3 4.1-9.8 1.1-9.8 1.1-5.6-4-.7-6.7 1.6-7.7-1.2 1-2.8 3.8 4.4 4.6 4.3.4 5.1-3.2 5.4-4.4l-.1.1c-1.3.9-2.8-1.6-2.8-1.6 1.2.3 2.4-.1 3.1-1 .7-1.5 5.3-6 5.3-6 8.7-7.2 11.2-1 11.2-1 .3 1.6.8 3 1.7 4.4 1.6-2.1 3.9-3.6 6.5-4.1 1.2-.2 2.4-.2 3.6-.1l2.9.1c2.7 0 7.6-.3 10.2-3.1-.4.1-.9.2-1.4.2-.4.1-.9.1-1.3.1-1.6.1-3.5-2.1-3.8-2.7-.3-.6 1.2 0 1.2 0 2.3-.1 4.6-.8 6.6-2 .5-.2 1.5-.8.4-.5-1.1.3-5.3-1.1-5.3-1.1 1.2-.2 2.3-.7 3.3-1.5 1.1-.7 2.3-1 3.6-.9 2.2-.2 2.6-1.6 2.6-1.6-.4.3-1 .2-1.5.4-.6.2-1.2.4-1.9.3-1.2.1-2.5 0-3.7-.3.6 0 1.1-.2 1.5-.6 1.1-.6 2-1.5 2.6-2.6l.2-.3c.8-.8 1.9-1.3 3-1.3-.3-.9-1.8-.5-1.8-.5-1.8.6-4 1.1-5.4-.3-.3-.4-.5-.9-.5-1.4l.5.4c1 .7 2.4.5 3.1-.5l.3-.3c.9-.9 2-1.6 3.1-2 .8-.3 1.4-1.2 2.2-1.5-.6-.3-1.4-.3-1.9-.7-.3-.1-.5-.4-.7-.6-.2-.4-.3-.8-.2-1.2.6.5 1.5.6 2.2.3 1.7-.8 2.8-2.1 4.4-3.1.6-.4 1.2-.6 1.8-.9 0 0 0-.2-.1-.2-1-.1-2 0-2.9.2.9-.6 1.3-1.6 2.3-2.2.5-.4 1.2-.6 1.8-.7 1.5-.1 3 0 4.5.2h2c-.1-.1-.2-.2-.1-.4.1-.4.3-.7.6-.9.3-.2.5-.4.8-.7.4-.4.8-.7 1.2-1.1.2-.2.4-.5.6-.7l.2-.2.1-.2c.1-.2.2-.2.4-.1l.1.1c.1.3.1.5.1.8.1.4.1.9.1 1.3v.6l.3.6-.1.2c-.2.4-.4.8-.6 1.1-.1.1-.2.2-.3.2.5-.1.9 0 1.3.3.1-.3.2-.5.3-.8.1-.2.3-.5.4-.7l.3-.3c.2-.2.3-.4.5-.5l.4-.4c.4-.2.7-.4 1-.8 0-.1.1-.2.3-.2.1.1.1.2.2.3v.6c0 .9 0 1.8.1 2.6 0 .3-.1.6-.3.9l-.3.3c-.1.1-.2.2-.4.3h-.1c.3.1.5.4.7.7.3.2.6.4 1 .5.5.2 1 .6 1.4.9.2.2.3.4.3.6.1 1.1.4 2.1.9 3 .2.3.4.6.6.8.4.6.6 1.2 1.1 1.8.3.4.6.8.9 1.3.2.2.2.5.4.8l.2.3c.2.3.3.6.4.9.1.2.2.4.4.5.5.3 1 .6 1.2 1.1.1.5 0 1.1-.2 1.6v.2c.1.3-.1.5-.3.8-.2.2-.3.4-.6.6l-1.5 1.2-.3.3c-.2.2-.5.2-.7.1-.5-.1-.8-.4-1.2-.5-.4-.1-.8 0-1.1-.2s-.5-.6-.7-.9c-.4-.3-.9-.6-1.4-.8-.2-.1-.4-.1-.7-.2-.7-.2-1.4-.5-2.1-.8-2.7.7-4-.5-4-.5V99H89v.2c.1 1.8.4 3.5.9 5.2l1.6 3.9c.5 1.2 1.6 2.6 1.6 3.1l.1 1.1.3.1.6.3c.9.4 1.8.7 2.8.9.8.1 1.4.6 2.1.7.7 0 1.3.1 2 .2 1.1.4 1.9 1.4 1.8 2.6 0 0 0 .8.1.9h.1c.4-.2.8 0 1.1.3.8 1.2 1.5 2.6.9 4l-.2.1c0 .1-.1.2-.2.3l-1.8 1.8c-.8.8-1.5 1.7-2.1 2.8-.6 1.1-1.2 2.1-1.8 3.2-.4.8-.8 1.5-1.4 2.3-.2.4-.5.7-.9.9-.4.2-.9.3-1.3.3-.2 0-.5.1-.7.3-.3.2-.6.4-.9.7-.3.4-.2.9-.3 1.4-.3.8-.8 1.3-1.6 1.6l-3.4 1c-.3-.2-.3-.6-.4-1-.2-1-.4-2-.6-3.1-.1-.7.2-1.4.7-1.9.9-.6 2-.7 2.9-.3.2.1.5.3.7.1.5-.3.9-.8 1-1.4.2-.5.1-1.1.4-1.5.9-1.1 2-1.8 3-2.9l.1-.1c.2-.5.5-.9.7-1.4l.4-1c.2-.5.5-1.1.5-1.1s-2.5.8-4.4 1.3l-2.5.6-.2.1c-5.8 8.7-19 7.3-19 7.3-7.7.3-6.7 2.1-6.7 2.1l-.7 1.7-1 .6-2 .5c1 1.7 1 3.7.3 5.4-1.8 4.3-5.1 10-5.1 10l.3 2.8c2.5 6.9 4.6 8.1 4.6 8.1 2.2 1.7 1.3 2.7 1.3 2.7.9 1.4 2.3 2.4 3.9 2.7l2 3c-1.7.8-3.6 1.2-5.5 1.1-.4.2-1 .2-1 .2m0 0-.4-2.5-2-2.3c-6.6-12.6-8.9-12.6-8.9-12.6-.6-.2-.6-2.6-.6-2.6 3.2-3.1-1.2-9.3-1.2-9.3l-.7-.8-1.7.8c-.3.1-2.8 1.2-2.8 1.2l-1.9 1.1-.2.9c.5 3.8 1.7 7.4 3.5 10.8l1 .9.1.9c.1.9.5 1.8 1.2 2.5.2.2.5.3.8.4.5.1.9.4 1.3.8l1.2 3.4c-2.1.6-5.5-.1-5.5-.1l-.7-2.6.3-1.4s-.3-1.2-1.2-1.5c-.5-.2-1-.4-1.4-.8-.6-.4-.7-2.3-.7-2.3.3-1.1-3.3-9.8-3.3-9.8L37 146l-.5-1.6c-.1-.2-.1-.5 0-.8.8-1 1.2-1 1.2-1 .1-.5 3.5-3.2 3.5-3.2s1.8-1.1 1.7-1.8v-.2c-3.9-5.8-2.7-10.5-1.7-12.7.2-.3.3-.6.3-.9.1-2.3-.6-1.8-.6-1.8-2.2.1-2.4 2-2.9 3-.3.7-.6 1.3-.9 2 .3 1.3-1.4 4.8-1.4 4.8-4 4.4-6.3 3.7-6.3 3.7 6-9.7 1.3-5.1 1.3-5.1-.5-1.4 1.8-3 1.8-3-2.4-1.3-4.7 4-4.7 4-.8 1.9-2 3.5-3.5 4.7-5.6 2.6-6.4-1-6.4-1 3.9 1.8 5.5-4.1 5.5-4.1-3 4.1-9.8 1.1-9.8 1.1-5.6-4-.7-6.7 1.6-7.7-1.2 1-2.8 3.8 4.4 4.6 4.3.4 5.1-3.2 5.4-4.4l-.1.1c-1.3.9-2.8-1.6-2.8-1.6 1.2.3 2.4-.1 3.1-1 .7-1.5 5.3-6 5.3-6 8.7-7.2 11.2-1 11.2-1 .3 1.6.8 3 1.7 4.4 1.6-2.1 3.9-3.6 6.5-4.1 1.2-.2 2.4-.2 3.6-.1l2.9.1c2.7 0 7.6-.3 10.2-3.1-.4.1-.9.2-1.4.2-.4.1-.9.1-1.3.1-1.6.1-3.5-2.1-3.8-2.7-.3-.6 1.2 0 1.2 0 2.3-.1 4.6-.8 6.6-2 .5-.2 1.5-.8.4-.5-1.1.3-5.3-1.1-5.3-1.1 1.1 0 3.3-1.5 3.3-1.5 1.1-.7 2.3-1 3.6-.9 2.2-.2 2.6-1.6 2.6-1.6-.4.3-1 .2-1.5.4-.6.2-1.2.4-1.9.3-1.2.1-2.5 0-3.7-.3.6 0 1.1-.2 1.5-.6 1.1-.6 2-1.5 2.6-2.6l.2-.3c.8-.8 1.9-1.3 3-1.3-.3-.9-1.8-.5-1.8-.5-1.8.6-4 1.1-5.4-.3-.3-.4-.5-.9-.5-1.4l.5.4c1 .7 2.4.5 3.1-.5l.3-.3c.9-.9 2-1.6 3.1-2 .8-.3 1.4-1.2 2.2-1.5-.6-.3-1.4-.3-1.9-.7-.3-.1-.5-.4-.7-.6-.2-.4-.3-.8-.2-1.2.6.5 1.5.6 2.2.3 1.7-.8 2.8-2.1 4.4-3.1.6-.4 1.2-.6 1.8-.9 0 0 0-.2-.1-.2-1-.1-2 0-2.9.2.9-.6 1.3-1.6 2.3-2.2.5-.4 1.2-.6 1.8-.7 1.5-.1 3 0 4.5.2h2c-.1-.1-.2-.2-.1-.4.1-.4.3-.7.6-.9.3-.2.5-.4.8-.7.4-.4.8-.7 1.2-1.1.2-.2.4-.5.6-.7l.2-.2.1-.2c.1-.2.2-.2.4-.1l.1.1c.1.3.1.5.1.8.1.4.1.9.1 1.3v.6l.3.6-.1.2c-.2.4-.4.8-.6 1.1-.1.1-.2.2-.3.2.5-.1.9 0 1.3.3.1-.3.2-.5.3-.8.1-.2.3-.5.4-.7l.3-.3c.2-.2.3-.4.5-.5l.4-.4c.4-.2.7-.4 1-.8 0-.1.1-.2.3-.2.1.1.1.2.2.3v.6c0 .9 0 1.8.1 2.6 0 .3-.1.6-.3.9l-.3.3c-.1.1-.2.2-.4.3h-.1c.3.1.5.4.7.7.3.2.6.4 1 .5.5.2 1 .6 1.4.9.2.2.3.4.3.6.1 1.1.4 2.1.9 3 .2.3.4.6.6.8.4.6.6 1.2 1.1 1.8.3.4.6.8.9 1.3.2.2.2.5.4.8l.2.3c.2.3.3.6.4.9.1.2.2.4.4.5.5.3 1 .6 1.2 1.1.1.5 0 1.1-.2 1.6v.2c.1.3-.1.5-.3.8-.2.2-.3.4-.6.6l-1.5 1.2-.3.3c-.2.2-.5.2-.7.1-.5-.1-.8-.4-1.2-.5-.4-.1-.8 0-1.1-.2s-.5-.6-.7-.9c-.4-.3-.9-.6-1.4-.8-.2-.1-.4-.1-.7-.2-.7-.2-1.4-.5-2.1-.8-2.7.7-4-.5-4-.5V99H89v.2c.1 1.8.4 3.5.9 5.2l1.6 3.9c.5 1.2 1.6 2.6 1.6 3.1l.1 1.1.3.1.6.3c.9.4 1.8.7 2.8.9.8.1 1.4.6 2.1.7.7 0 1.3.1 2 .2 1.1.4 1.9 1.4 1.8 2.6 0 0 0 .8.1.9h.1c.4-.2.8 0 1.1.3.8 1.2 1.5 2.6.9 4l-.2.1c0 .1-.1.2-.2.3l-1.8 1.8c-.8.8-1.5 1.7-2.1 2.8-.6 1.1-1.2 2.1-1.8 3.2-.4.8-.8 1.5-1.4 2.3-.2.4-.5.7-.9.9-.4.2-.9.3-1.3.3-.2 0-.5.1-.7.3-.3.2-.6.4-.9.7-.3.4-.2.9-.3 1.4-.3.8-.8 1.3-1.6 1.6l-3.4 1c-.3-.2-.3-.6-.4-1-.2-1-.4-2-.6-3.1-.1-.7.2-1.4.7-1.9.9-.6 2-.7 2.9-.3.2.1.5.3.7.1.5-.3.9-.8 1-1.4.2-.5.1-1.1.4-1.5.9-1.1 2-1.8 3-2.9l.1-.1c.2-.5.5-.9.7-1.4l.4-1c.2-.5.5-1.1.5-1.1s-2.5.8-4.4 1.3l-2.5.6-.2.1c-5.8 8.7-19 7.3-19 7.3-7.7.3-6.7 2.1-6.7 2.1l-.7 1.7-1 .6-2 .5c1 1.7 1 3.7.3 5.4-1.8 4.3-5.1 10-5.1 10l.3 2.8c2.5 6.9 4.6 8.1 4.6 8.1 2.2 1.7 1.3 2.7 1.3 2.7.9 1.4 2.3 2.4 3.9 2.7l2 3c-1.7.8-3.6 1.2-5.5 1.1-.4.2-1 .2-1 .2"
                            fill="#c00000"
                          />
                          <path
                            d="m62.1 173.8-.4-2.5-2-2.3c-6.6-12.6-8.9-12.6-8.9-12.6-.6-.2-.6-2.6-.6-2.6 3.2-3.1-1.2-9.3-1.2-9.3l-.7-.8-1.7.8c-.3.1-2.8 1.2-2.8 1.2l-1.9 1.1-.2.9c.5 3.8 1.7 7.4 3.5 10.8l1 .9.1.9c.1.9.5 1.8 1.2 2.5.2.2.5.3.8.4.5.1.9.4 1.3.8l1.2 3.4c-2.1.6-5.5-.1-5.5-.1l-.7-2.6.3-1.4s-.3-1.2-1.2-1.5c-.5-.2-1-.4-1.4-.8-.6-.4-.7-2.3-.7-2.3.3-1.1-3.3-9.8-3.3-9.8L37 146l-.5-1.6c-.1-.2-.1-.5 0-.8.8-1 1.2-1 1.2-1 .1-.5 3.5-3.2 3.5-3.2s1.8-1.1 1.7-1.8v-.2c-3.9-5.8-2.7-10.5-1.7-12.7.2-.3.3-.6.3-.9.1-2.3-.6-1.8-.6-1.8-2.2.1-2.4 2-2.9 3-.3.7-.6 1.3-.9 2 .3 1.3-1.4 4.8-1.4 4.8-4 4.4-6.3 3.7-6.3 3.7 6-9.7 1.3-5.1 1.3-5.1-.5-1.4 1.8-3 1.8-3-2.4-1.3-4.7 4-4.7 4-.8 1.9-2 3.5-3.5 4.7-5.6 2.6-6.4-1-6.4-1 3.9 1.8 5.5-4.1 5.5-4.1-3 4.1-9.8 1.1-9.8 1.1-5.6-4-.7-6.7 1.6-7.7-1.2 1-2.8 3.8 4.4 4.6 4.3.4 5.1-3.2 5.4-4.4l-.1.1c-1.3.9-2.8-1.6-2.8-1.6 1.2.3 2.4-.1 3.1-1 .7-1.5 5.3-6 5.3-6 8.7-7.2 11.2-1 11.2-1 .3 1.6.8 3 1.7 4.4 1.6-2.1 3.9-3.6 6.5-4.1 1.2-.2 2.4-.2 3.6-.1l2.9.1c2.7 0 7.6-.3 10.2-3.1-.4.1-.9.2-1.4.2-.4.1-.9.1-1.3.1-1.6.1-3.5-2.1-3.8-2.7-.3-.6 1.2 0 1.2 0 2.3-.1 4.6-.8 6.6-2 .5-.2 1.5-.8.4-.5-1.1.3-5.3-1.1-5.3-1.1 1.2-.2 2.3-.7 3.3-1.5 1.1-.7 2.3-1 3.6-.9 2.2-.2 2.6-1.6 2.6-1.6-.4.3-1 .2-1.5.4-.6.2-1.2.4-1.9.3-1.2.1-2.5 0-3.7-.3.6 0 1.1-.2 1.5-.6 1.1-.6 2-1.5 2.6-2.6l.2-.3c.8-.8 1.9-1.3 3-1.3-.3-.9-1.8-.5-1.8-.5-1.8.6-4 1.1-5.4-.3-.3-.4-.5-.9-.5-1.4l.5.4c1 .7 2.4.5 3.1-.5l.3-.3c.9-.9 2-1.6 3.1-2 .8-.3 1.4-1.2 2.2-1.5-.6-.3-1.4-.3-1.9-.7-.3-.1-.5-.4-.7-.6-.2-.4-.3-.8-.2-1.2.6.5 1.5.6 2.2.3 1.7-.8 2.8-2.1 4.4-3.1.6-.4 1.2-.6 1.8-.9 0 0 0-.2-.1-.2-1-.1-2 0-2.9.2.9-.6 1.3-1.6 2.3-2.2.5-.4 1.2-.6 1.8-.7 1.5-.1 3 0 4.5.2h2c-.1-.1-.2-.2-.1-.4.1-.4.3-.7.6-.9.3-.2.5-.4.8-.7.4-.4.8-.7 1.2-1.1.2-.2.4-.5.6-.7l.2-.2.1-.2c.1-.2.2-.2.4-.1l.1.1c.1.3.1.5.1.8.1.4.1.9.1 1.3v.6l.3.6-.1.2c-.2.4-.4.8-.6 1.1-.1.1-.2.2-.3.2.5-.1.9 0 1.3.3.1-.3.2-.5.3-.8.1-.2.3-.5.4-.7l.3-.3c.2-.2.3-.4.5-.5l.4-.4c.4-.2.7-.4 1-.8 0-.1.1-.2.3-.2.1.1.1.2.2.3v.6c0 .9 0 1.8.1 2.6 0 .3-.1.6-.3.9h0l-.3.3c-.1.1-.2.2-.4.3h-.1c.3.1.5.4.7.7.3.2.6.4 1 .5.5.2 1 .6 1.4.9.2.2.3.4.3.6.1 1.1.4 2.1.9 3 .2.3.4.6.6.8.4.6.6 1.2 1.1 1.8.3.4.6.8.9 1.3.2.2.2.5.4.8l.2.3c.2.3.3.6.4.9.1.2.2.4.4.5.5.3 1 .6 1.2 1.1.1.5 0 1.1-.2 1.6v.2c.1.3-.1.5-.3.8-.2.2-.3.4-.6.6l-1.5 1.2-.3.3c-.2.2-.5.2-.7.1-.5-.1-.8-.4-1.2-.5-.4-.1-.8 0-1.1-.2s-.5-.6-.7-.9c-.4-.3-.9-.6-1.4-.8-.2-.1-.4-.1-.7-.2-.7-.2-1.4-.5-2.1-.8-2.7.7-4-.5-4-.5V99H89h0v.2c.1 1.8.4 3.5.9 5.2l1.6 3.9c.5 1.2 1.6 2.6 1.6 3.1l.1 1.1.3.1.6.3c.9.4 1.8.7 2.8.9.8.1 1.4.6 2.1.7.7 0 1.3.1 2 .2 1.1.4 1.9 1.4 1.8 2.6 0 0 0 .8.1.9h.1c.4-.2.8 0 1.1.3.8 1.2 1.5 2.6.9 4l-.2.1c0 .1-.1.2-.2.3l-1.8 1.8c-.8.8-1.5 1.7-2.1 2.8-.6 1.1-1.2 2.1-1.8 3.2-.4.8-.8 1.5-1.4 2.3-.2.4-.5.7-.9.9-.4.2-.9.3-1.3.3-.2 0-.5.1-.7.3-.3.2-.6.4-.9.7-.3.4-.2.9-.3 1.4-.3.8-.8 1.3-1.6 1.6l-3.4 1c-.3-.2-.3-.6-.4-1-.2-1-.4-2-.6-3.1-.1-.7.2-1.4.7-1.9.9-.6 2-.7 2.9-.3.2.1.5.3.7.1.5-.3.9-.8 1-1.4.2-.5.1-1.1.4-1.5.9-1.1 2-1.8 3-2.9l.1-.1c.2-.5.5-.9.7-1.4l.4-1c.2-.5.5-1.1.5-1.1s-2.5.8-4.4 1.3l-2.5.6-.2.1c-5.8 8.7-19 7.3-19 7.3-7.7.3-6.7 2.1-6.7 2.1l-.7 1.7-1 .6-2 .5c1 1.7 1 3.7.3 5.4-1.8 4.3-5.1 10-5.1 10l.3 2.8c2.5 6.9 4.6 8.1 4.6 8.1 2.2 1.7 1.3 2.7 1.3 2.7.9 1.4 2.3 2.4 3.9 2.7l2 3c-1.7.8-3.6 1.2-5.5 1.1-.4.2-1 .2-1 .2m0 0-.4-2.5-2-2.3c-6.6-12.6-8.9-12.6-8.9-12.6-.6-.2-.6-2.6-.6-2.6 3.2-3.1-1.2-9.3-1.2-9.3l-.7-.8-1.7.8c-.3.1-2.8 1.2-2.8 1.2l-1.9 1.1-.2.9c.5 3.8 1.7 7.4 3.5 10.8l1 .9.1.9c.1.9.5 1.8 1.2 2.5.2.2.5.3.8.4.5.1.9.4 1.3.8l1.2 3.4c-2.1.6-5.5-.1-5.5-.1l-.7-2.6.3-1.4s-.3-1.2-1.2-1.5c-.5-.2-1-.4-1.4-.8-.6-.4-.7-2.3-.7-2.3.3-1.1-3.3-9.8-3.3-9.8L37 146l-.5-1.6c-.1-.2-.1-.5 0-.8.8-1 1.2-1 1.2-1 .1-.5 3.5-3.2 3.5-3.2s1.8-1.1 1.7-1.8v-.2c-3.9-5.8-2.7-10.5-1.7-12.7.2-.3.3-.6.3-.9.1-2.3-.6-1.8-.6-1.8-2.2.1-2.4 2-2.9 3-.3.7-.6 1.3-.9 2 .3 1.3-1.4 4.8-1.4 4.8-4 4.4-6.3 3.7-6.3 3.7 6-9.7 1.3-5.1 1.3-5.1-.5-1.4 1.8-3 1.8-3-2.4-1.3-4.7 4-4.7 4-.8 1.9-2 3.5-3.5 4.7-5.6 2.6-6.4-1-6.4-1 3.9 1.8 5.5-4.1 5.5-4.1-3 4.1-9.8 1.1-9.8 1.1-5.6-4-.7-6.7 1.6-7.7-1.2 1-2.8 3.8 4.4 4.6 4.3.4 5.1-3.2 5.4-4.4l-.1.1c-1.3.9-2.8-1.6-2.8-1.6 1.2.3 2.4-.1 3.1-1 .7-1.5 5.3-6 5.3-6 8.7-7.2 11.2-1 11.2-1 .3 1.6.8 3 1.7 4.4 1.6-2.1 3.9-3.6 6.5-4.1 1.2-.2 2.4-.2 3.6-.1l2.9.1c2.7 0 7.6-.3 10.2-3.1-.4.1-.9.2-1.4.2-.4.1-.9.1-1.3.1-1.6.1-3.5-2.1-3.8-2.7-.3-.6 1.2 0 1.2 0 2.3-.1 4.6-.8 6.6-2 .5-.2 1.5-.8.4-.5-1.1.3-5.3-1.1-5.3-1.1 1.1 0 3.3-1.5 3.3-1.5 1.1-.7 2.3-1 3.6-.9 2.2-.2 2.6-1.6 2.6-1.6-.4.3-1 .2-1.5.4-.6.2-1.2.4-1.9.3-1.2.1-2.5 0-3.7-.3.6 0 1.1-.2 1.5-.6 1.1-.6 2-1.5 2.6-2.6l.2-.3c.8-.8 1.9-1.3 3-1.3-.3-.9-1.8-.5-1.8-.5-1.8.6-4 1.1-5.4-.3-.3-.4-.5-.9-.5-1.4l.5.4c1 .7 2.4.5 3.1-.5l.3-.3c.9-.9 2-1.6 3.1-2 .8-.3 1.4-1.2 2.2-1.5-.6-.3-1.4-.3-1.9-.7-.3-.1-.5-.4-.7-.6-.2-.4-.3-.8-.2-1.2.6.5 1.5.6 2.2.3 1.7-.8 2.8-2.1 4.4-3.1.6-.4 1.2-.6 1.8-.9 0 0 0-.2-.1-.2-1-.1-2 0-2.9.2.9-.6 1.3-1.6 2.3-2.2.5-.4 1.2-.6 1.8-.7 1.5-.1 3 0 4.5.2h2c-.1-.1-.2-.2-.1-.4.1-.4.3-.7.6-.9.3-.2.5-.4.8-.7.4-.4.8-.7 1.2-1.1.2-.2.4-.5.6-.7l.2-.2.1-.2c.1-.2.2-.2.4-.1l.1.1c.1.3.1.5.1.8.1.4.1.9.1 1.3v.6l.3.6-.1.2c-.2.4-.4.8-.6 1.1-.1.1-.2.2-.3.2.5-.1.9 0 1.3.3.1-.3.2-.5.3-.8.1-.2.3-.5.4-.7l.3-.3c.2-.2.3-.4.5-.5l.4-.4c.4-.2.7-.4 1-.8 0-.1.1-.2.3-.2.1.1.1.2.2.3v.6c0 .9 0 1.8.1 2.6 0 .3-.1.6-.3.9h0l-.3.3c-.1.1-.2.2-.4.3h-.1c.3.1.5.4.7.7.3.2.6.4 1 .5.5.2 1 .6 1.4.9.2.2.3.4.3.6.1 1.1.4 2.1.9 3 .2.3.4.6.6.8.4.6.6 1.2 1.1 1.8.3.4.6.8.9 1.3.2.2.2.5.4.8l.2.3c.2.3.3.6.4.9.1.2.2.4.4.5.5.3 1 .6 1.2 1.1.1.5 0 1.1-.2 1.6v.2c.1.3-.1.5-.3.8-.2.2-.3.4-.6.6l-1.5 1.2-.3.3c-.2.2-.5.2-.7.1-.5-.1-.8-.4-1.2-.5-.4-.1-.8 0-1.1-.2s-.5-.6-.7-.9c-.4-.3-.9-.6-1.4-.8-.2-.1-.4-.1-.7-.2-.7-.2-1.4-.5-2.1-.8-2.7.7-4-.5-4-.5V99H89h0v.2c.1 1.8.4 3.5.9 5.2l1.6 3.9c.5 1.2 1.6 2.6 1.6 3.1l.1 1.1.3.1.6.3c.9.4 1.8.7 2.8.9.8.1 1.4.6 2.1.7.7 0 1.3.1 2 .2 1.1.4 1.9 1.4 1.8 2.6 0 0 0 .8.1.9h.1c.4-.2.8 0 1.1.3.8 1.2 1.5 2.6.9 4l-.2.1c0 .1-.1.2-.2.3l-1.8 1.8c-.8.8-1.5 1.7-2.1 2.8-.6 1.1-1.2 2.1-1.8 3.2-.4.8-.8 1.5-1.4 2.3-.2.4-.5.7-.9.9-.4.2-.9.3-1.3.3-.2 0-.5.1-.7.3-.3.2-.6.4-.9.7-.3.4-.2.9-.3 1.4-.3.8-.8 1.3-1.6 1.6l-3.4 1c-.3-.2-.3-.6-.4-1-.2-1-.4-2-.6-3.1-.1-.7.2-1.4.7-1.9.9-.6 2-.7 2.9-.3.2.1.5.3.7.1.5-.3.9-.8 1-1.4.2-.5.1-1.1.4-1.5.9-1.1 2-1.8 3-2.9l.1-.1c.2-.5.5-.9.7-1.4l.4-1c.2-.5.5-1.1.5-1.1s-2.5.8-4.4 1.3l-2.5.6-.2.1c-5.8 8.7-19 7.3-19 7.3-7.7.3-6.7 2.1-6.7 2.1l-.7 1.7-1 .6-2 .5c1 1.7 1 3.7.3 5.4-1.8 4.3-5.1 10-5.1 10l.3 2.8c2.5 6.9 4.6 8.1 4.6 8.1 2.2 1.7 1.3 2.7 1.3 2.7.9 1.4 2.3 2.4 3.9 2.7l2 3c-1.7.8-3.6 1.2-5.5 1.1-.4.2-1 .2-1 .2"
                            fill="none"
                            stroke="#c00000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="m62.1 173.8-.4-2.5-2-2.3c-6.6-12.6-8.9-12.6-8.9-12.6-.6-.2-.6-2.6-.6-2.6 3.2-3.1-1.2-9.3-1.2-9.3l-.7-.8-1.7.8c-.3.1-2.8 1.2-2.8 1.2l-1.9 1.1-.2.9c.5 3.8 1.7 7.4 3.5 10.8l1 .9.1.9c.1.9.5 1.8 1.2 2.5.2.2.5.3.8.4.5.1.9.4 1.3.8l1.2 3.4c-2.1.6-5.5-.1-5.5-.1l-.7-2.6.3-1.4s-.3-1.2-1.2-1.5c-.5-.2-1-.4-1.4-.8-.6-.4-.7-2.3-.7-2.3.3-1.1-3.3-9.8-3.3-9.8L37 146l-.5-1.6c-.1-.2-.1-.5 0-.8.8-1 1.2-1 1.2-1 .1-.5 3.5-3.2 3.5-3.2s1.8-1.1 1.7-1.8v-.2c-3.9-5.8-2.7-10.5-1.7-12.7.2-.3.3-.6.3-.9.1-2.3-.6-1.8-.6-1.8-2.2.1-2.4 2-2.9 3-.3.7-.6 1.3-.9 2 .3 1.3-1.4 4.8-1.4 4.8-4 4.4-6.3 3.7-6.3 3.7 6-9.7 1.3-5.1 1.3-5.1-.5-1.4 1.8-3 1.8-3-2.4-1.3-4.7 4-4.7 4-.8 1.9-2 3.5-3.5 4.7-5.6 2.6-6.4-1-6.4-1 3.9 1.8 5.5-4.1 5.5-4.1-3 4.1-9.8 1.1-9.8 1.1-5.6-4-.7-6.7 1.6-7.7-1.2 1-2.8 3.8 4.4 4.6 4.3.4 5.1-3.2 5.4-4.4l-.1.1c-1.3.9-2.8-1.6-2.8-1.6 1.2.3 2.4-.1 3.1-1 .7-1.5 5.3-6 5.3-6 8.7-7.2 11.2-1 11.2-1 .3 1.6.8 3 1.7 4.4 1.6-2.1 3.9-3.6 6.5-4.1 1.2-.2 2.4-.2 3.6-.1l2.9.1c2.7 0 7.6-.3 10.2-3.1-.4.1-.9.2-1.4.2-.4.1-.9.1-1.3.1-1.6.1-3.5-2.1-3.8-2.7-.3-.6 1.2 0 1.2 0 2.3-.1 4.6-.8 6.6-2 .5-.2 1.5-.8.4-.5-1.1.3-5.3-1.1-5.3-1.1 1.2-.2 2.3-.7 3.3-1.5 1.1-.7 2.3-1 3.6-.9 2.2-.2 2.6-1.6 2.6-1.6-.4.3-1 .2-1.5.4-.6.2-1.2.4-1.9.3-1.2.1-2.5 0-3.7-.3.6 0 1.1-.2 1.5-.6 1.1-.6 2-1.5 2.6-2.6l.2-.3c.8-.8 1.9-1.3 3-1.3-.3-.9-1.8-.5-1.8-.5-1.8.6-4 1.1-5.4-.3-.3-.4-.5-.9-.5-1.4l.5.4c1 .7 2.4.5 3.1-.5l.3-.3c.9-.9 2-1.6 3.1-2 .8-.3 1.4-1.2 2.2-1.5-.6-.3-1.4-.3-1.9-.7-.3-.1-.5-.4-.7-.6-.2-.4-.3-.8-.2-1.2.6.5 1.5.6 2.2.3 1.7-.8 2.8-2.1 4.4-3.1.6-.4 1.2-.6 1.8-.9 0 0 0-.2-.1-.2-1-.1-2 0-2.9.2.9-.6 1.3-1.6 2.3-2.2.5-.4 1.2-.6 1.8-.7 1.5-.1 3 0 4.5.2h2c-.1-.1-.2-.2-.1-.4.1-.4.3-.7.6-.9.3-.2.5-.4.8-.7.4-.4.8-.7 1.2-1.1.2-.2.4-.5.6-.7l.2-.2.1-.2c.1-.2.2-.2.4-.1l.1.1c.1.3.1.5.1.8.1.4.1.9.1 1.3v.6l.3.6-.1.2c-.2.4-.4.8-.6 1.1-.1.1-.2.2-.3.2.5-.1.9 0 1.3.3.1-.3.2-.5.3-.8.1-.2.3-.5.4-.7l.3-.3c.2-.2.3-.4.5-.5l.4-.4c.4-.2.7-.4 1-.8 0-.1.1-.2.3-.2.1.1.1.2.2.3v.6c0 .9 0 1.8.1 2.6 0 .3-.1.6-.3.9l-.3.3c-.1.1-.2.2-.4.3h-.1c.3.1.5.4.7.7.3.2.6.4 1 .5.5.2 1 .6 1.4.9.2.2.3.4.3.6.1 1.1.4 2.1.9 3 .2.3.4.6.6.8.4.6.6 1.2 1.1 1.8.3.4.6.8.9 1.3.2.2.2.5.4.8l.2.3c.2.3.3.6.4.9.1.2.2.4.4.5.5.3 1 .6 1.2 1.1.1.5 0 1.1-.2 1.6v.2c.1.3-.1.5-.3.8-.2.2-.3.4-.6.6l-1.5 1.2-.3.3c-.2.2-.5.2-.7.1-.5-.1-.8-.4-1.2-.5-.4-.1-.8 0-1.1-.2s-.5-.6-.7-.9c-.4-.3-.9-.6-1.4-.8-.2-.1-.4-.1-.7-.2-.7-.2-1.4-.5-2.1-.8-2.7.7-4-.5-4-.5V99H89v.2c.1 1.8.4 3.5.9 5.2l1.6 3.9c.5 1.2 1.6 2.6 1.6 3.1l.1 1.1.3.1.6.3c.9.4 1.8.7 2.8.9.8.1 1.4.6 2.1.7.7 0 1.3.1 2 .2 1.1.4 1.9 1.4 1.8 2.6 0 0 0 .8.1.9h.1c.4-.2.8 0 1.1.3.8 1.2 1.5 2.6.9 4l-.2.1c0 .1-.1.2-.2.3l-1.8 1.8c-.8.8-1.5 1.7-2.1 2.8-.6 1.1-1.2 2.1-1.8 3.2-.4.8-.8 1.5-1.4 2.3-.2.4-.5.7-.9.9-.4.2-.9.3-1.3.3-.2 0-.5.1-.7.3-.3.2-.6.4-.9.7-.3.4-.2.9-.3 1.4-.3.8-.8 1.3-1.6 1.6l-3.4 1c-.3-.2-.3-.6-.4-1-.2-1-.4-2-.6-3.1-.1-.7.2-1.4.7-1.9.9-.6 2-.7 2.9-.3.2.1.5.3.7.1.5-.3.9-.8 1-1.4.2-.5.1-1.1.4-1.5.9-1.1 2-1.8 3-2.9l.1-.1c.2-.5.5-.9.7-1.4l.4-1c.2-.5.5-1.1.5-1.1s-2.5.8-4.4 1.3l-2.5.6-.2.1c-5.8 8.7-19 7.3-19 7.3-7.7.3-6.7 2.1-6.7 2.1l-.7 1.7-1 .6-2 .5c1 1.7 1 3.7.3 5.4-1.8 4.3-5.1 10-5.1 10l.3 2.8c2.5 6.9 4.6 8.1 4.6 8.1 2.2 1.7 1.3 2.7 1.3 2.7.9 1.4 2.3 2.4 3.9 2.7l2 3c-1.7.8-3.6 1.2-5.5 1.1-.4.2-1 .2-1 .2m79.7-32.7c0 7.4-3.2 11.2-13.1 11.2-9.8 0-13.3-3.8-13.3-11.2v-13.3c0-6.3 4.7-9.8 13.2-9.8s13.1 3.5 13.1 9.7l.1 13.4zm-9.7-12.7c0-2-.2-4.4-3.4-4.4-3.1 0-3.5 2.4-3.5 4.4v13.4c0 1.9.4 4.7 3.5 4.7s3.4-2.8 3.4-4.7v-13.4zm17.3-9.6h9.7v24.6c0 1.6.6 2.9 3.4 2.9 1.6.2 3.1-1 3.3-2.7v-24.9h9.7v23.6c0 5.5-3.1 9.8-13.1 9.8-8.2 0-13-3.1-13.1-9.8l.1-23.5zm32.8 0h25.2v6.5h-7.8v26.1h-9.7v-26.1h-7.6l-.1-6.5zm32.2 32.6v-32.6H225c3.5 0 7.8.1 10.9 1.5 3.8 1.7 4.4 4.9 4.4 8v14.5c-.1 3.3-1.3 5.7-4.1 7.1-2.5 1.3-5.6 1.5-8.6 1.5h-13.2zm9.7-5.9c6.5.3 6.6-1.8 6.4-6.1v-10.7c-.1-3.8-1.7-4-6.4-4.1v20.9zm50.2-4.6c0 7.4-3.2 11.2-13.1 11.2-9.8 0-13.3-3.8-13.3-11.2v-13.3c0-6.3 4.7-9.8 13.2-9.8s13.1 3.5 13.1 9.7l.1 13.4zm-9.8-12.7c0-2-.2-4.4-3.4-4.4-3.1 0-3.5 2.4-3.5 4.4v13.4c0 1.9.4 4.7 3.5 4.7s3.4-2.8 3.4-4.7v-13.4zm43.6 12.6c0 7.4-3.2 11.2-13.1 11.2s-13.3-3.8-13.3-11.2v-13.3c0-6.3 4.7-9.8 13.2-9.8s13.1 3.5 13.1 9.7l.1 13.4zm-9.7-12.7c0-2-.2-4.4-3.4-4.4-3.1 0-3.5 2.4-3.5 4.4v13.4c0 1.9.4 4.7 3.5 4.7s3.4-2.8 3.4-4.7v-13.4zm27.1 23.1h-9.7v-32.6H330c8 0 11.9 2.5 11.9 9 0 3.5-1 6-5.1 7.4v.1c2.7.5 4.6 2 4.8 4.2.3 2.6.3 8.2.9 10.3.2.5.5.8.9 1.1v.4h-10.6c-.3-.6-.5-1.2-.6-1.9-.2-2.9 0-5.6-.2-7.6-.3-2-1.1-3.3-3.3-3.4h-3.2v13zm0-18.7h3.3c2.8 0 3.5-2 3.5-4.1 0-3.9-2.1-4-6.8-3.9v8z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        White Outdoor
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/ourbrands-yardmachines.html"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 619.3 133"
                          xmlSpace="preserve"
                          style={{ width: "100%" }}
                        >
                          <path
                            d="m371.7 34.8-1-1H361l-1 1v54.6l1 1h9.7l1-1V34.8zm-58.6 39.8-1-1h-9.7l-1 1V77l-1.6 1.9h-10l-1.7-1.9V47.6l.1-.1c2.2-2.3 2.3-2.3 2.5-2.3h8.3l2.5 2.4v2.1l1 1h9.7l1-1v-8.3c-.6-.6-4.7-4.8-7.6-7.6h-21.4l-7.5 7.4v41.7l7.5 7.4h21.4l7.6-6.8v-8.9zm103.3-39.9-1-1h-9.7l-1 1V69L393 34.7l-1.1-1h-12.2l-1 1v54.6l1 1h9.7l1-1v-29l10.8 28.9 1.3 1h13l1-1-.1-54.5zm-62.7.1-1-1H343l-1 1v21.6h-13.2V34.8l-1-1h-9.7l-1 1v54.6l1 1h9.7l1-1V67.8H342v21.6l1 1h9.7l1-1V34.8zm143.3 29-7.6-7.4h-15.7l-1.7-1.9v-6.9l.1-.1c2.2-2.3 2.3-2.3 2.5-2.3h10.7v4.3l1 1h9.6l1.1-1v-8.1l-7.6-7.5H468l-7.6 7.4v19.1l7.6 7.4h15.1l2.3 2.4v6.4l-.1.1c-2 2.3-2.2 2.3-2.3 2.3h-10.9v-3.9l-1-1h-9.6l-1.1 1v7.7l7.6 7.6h21.4L497 83V63.8zm-41.3 16.1-1-1h-19.5V67.8h15l1-1v-9.5l-1-1h-15V45.2h19.5l1-1v-9.5l-1-1h-30.2l-1 1v54.6l1 1h30.2l1-1v-9.4zM32 64.4l18-39.1-.8-1.9H36.7L35 24.6 25 49.4 15 24.6l-1.6-1.2H.9L0 25.3l18 39.2v24.6l1.2 1.2h11.6l1.2-1.2V64.4zm79.8 4.5L117 64l.8-2V41.4l-7.6-7.6H83.8l-1 1v54.6l1 1h9.7l1-1V45.2h9.2l2.5 2.4v8l-2.4 2.4h-9.2l12.6 31.4 1.4 1h11l.9-.9-8.7-20.6zM64 34.9l-1-1.1h-9.7l-1 1.1-16.6 54.5 1 .9H46l1.3-1L58.1 54l5.5 18.2H53.2v.1l1.1 10.3h12.4l2 6.7c.1.1.3.2.6.5.3.2.6.4.7.5h9.3l1-.9L64 34.9zm94.5 6.3-7.6-7.4h-26.4l-1 1v54.6l1 1h26.4l7.6-7.4V41.2zM146.8 77l-1.6 1.9h-10V45.2h9.2l2.5 2.4-.1 29.4zm112-42.1-1-1.1h-9.7l-1 1.1-16.5 54.5 1 .9h9.3l1.3-1L253 54l5.5 18.2H248v.1l1.1 10.3h12.4l2 6.7c.1.1.3.2.6.5.3.2.6.4.7.5h9.3l1-.9-16.3-54.5zm-30.6-10.4-.9-1.2h-13l-1.3 1.1-12 37.7h-2.4l-11.1-37.7-1.3-1.1h-13c-.2.2-.6.7-.9 1.2l-.3 64.7 1.2 1.2h11l1.2-1.2V58.9l8.6 30.4 1.7 1.2h8.3l1.6-1.2L215 59v30.1l1.3 1.2h10.8l1.2-1.2-.1-64.6z"
                            fill="#000"
                          />
                          <path
                            d="m608.5 13.6 3 3.1v71.8l-4.1 5.8-42 20.4-42-20.4-4.1-5.8V16.7l3.1-3.1h86.1z"
                            fill="#e50020"
                          />
                          <path
                            d="M611.7 5.9h-92.4l-7.6 7.6v77.4l6.6 9.5 46.2 22.5h1.8l46.3-22.4 6.6-9.5V13.5l-7.5-7.6zm-.1 82.6-4.1 5.8-42 20.4-42-20.4-4.1-5.8V16.7l3.1-3.1h86l3.1 3.1v71.8z"
                            fill="#1a1818"
                          />
                          <defs>
                            <path
                              id="a7019"
                              d="m523.5 94.3-4.1-5.8V16.7l3.1-3.1h86.1l3.1 3.1v71.8l-4.1 5.8-42 20.4-42.1-20.4zm-4.2-88.4-7.6 7.6v77.4l6.6 9.5 46.2 22.5h1.8l46.3-22.5 6.6-9.5V13.5l-7.6-7.6h-92.3z"
                            />
                          </defs>
                          <clipPath id="b2398">
                            <use xlinkHref="#a7019" overflow="visible" />
                          </clipPath>
                          <path
                            clipPath="url(#b2398)"
                            fill="none"
                            d="M565.5 0v133"
                          />
                          <path
                            clipPath="url(#b2398)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1.133"
                            d="M565.5 0v133"
                          />
                          <path
                            d="m608.5 13.6 3 3.1v71.8l-4.1 5.8-42 20.4-42-20.4-4.1-5.8V16.7l3.1-3.1h86.1z"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1.133"
                          />
                          <path
                            d="m535.2 38.5 11.5 17.6.2.6v31.6l-.9.9h-13.3L532 88l1.8-5.6V39l1.4-.5zm60.6 0-11.5 17.6-.2.6v31.6l.9.9h13.3l.7-1.2-1.8-5.6V39l-1.4-.5z"
                            fill="#fff"
                          />
                          <path
                            d="m567 48.5 13.8-23.1.8-.5h16.7l.5 1.4-5 4.5-21.7 33.1v24.4l-.9.9h-11.3l-.9-.9V63.9l-21.7-33.1-5-4.5.5-1.4h16.7l.8.5L564 48.5h3z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Yard-Machines
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/ourbrands-craftsman.html"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 476 115"
                          xmlSpace="preserve"
                          style={{ width: "100%" }}
                        >
                          <path d="M0 0h476v115H0V0z" fill="#fff" />
                          <path
                            d="M9.2 9.2h457.6v96.5H9.2V9.2z"
                            fill="#cf0013"
                          />
                          <path
                            d="m129.1 31.5-7.3 6.3v45.9h12.6V66.3h9.4v17.4h12.6V37.8l-7.3-6.3h-20zm14.6 23.2h-9.4V42.5h9.4v12.2zM32.2 38.9v37.5l7.3 7.4h21V72.1H45.8v-29h14.7V31.5h-21l-7.3 7.4zm74.9 18.4V37.8l-9.4-6.3H73v52.3h13.6V64.3l10.5 19.5h14.5L99.7 62.1l7.4-4.8zM94 54.2h-7.3V43.1H94v11.1zm268.2-22.7-7.3 6.3v45.9h12.6V66.3h9.4v17.4h12.6V37.8l-7.3-6.3h-20zm14.7 23.2h-9.4V42.5h9.4v12.2zm50.7 29L415.5 56v27.7h-12.4V31.5h12.1l12.1 27.7V31.5h12.4v52.3l-12.1-.1m25.1-12.1c3.4 0 6.1 2.7 6.1 6.1s-2.7 6.1-6.1 6.1-6.1-2.7-6.1-6.1c0-3.4 2.7-6.1 6.1-6.1m5 6c-.1-2.8-2.3-5-5.1-4.9s-5 2.3-4.9 5.1c.1 2.7 2.3 4.9 5 4.9 2.8 0 5-2.3 5-5.1 0 .1 0 0 0 0m-7.4-3.5h2.8c1.6 0 2.4.7 2.4 2.1 0 1-.8 1.9-1.8 2h-.1l2 3.1h-1.1l-2-3h-1.2v3h-1.1l.1-7.2zm2.2 3.2c1 0 1.9-.1 1.9-1.1 0-.9-.8-1-1.5-1h-1.5v2.2h1.1zm-248-33.2h11v39.6h13.6V44.1h8.6l3.9-12.7h-33.3l-3.8 12.7zm-34.6 39.6h14.2V65.3h10.7V53.6h-10.7v-10h12V31.5h-26.2v52.2zM281 31.5h-30.9l-3.2 13.2 18.9 27.5h-18.9l-3.7 11.6H277l3.9-12.1-20.4-28h16.8l3.7-12.2zm24.1 21.6 7.9 18.5h5.8l7.9-18.5v30.6h13.6V31.5H324l-8.1 19.1-8.1-19.1h-16.2v52.3h13.6V53.1z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Craftsman
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/ourbrands-troybilt.html"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 722 136.8"
                          xmlSpace="preserve"
                          style={{ width: "100%" }}
                        >
                          <path
                            d="M714.6 21.2c0 1.8-1.3 1.9-2.8 1.9h-2.1v-3.6h2.4c1.3 0 2.5.2 2.5 1.7m1.9.1c0-2.3-1.4-3.3-4.1-3.3H708v11.5h1.8v-5h2l3 5h2l-3.3-5.1c1.7-.1 3-1 3-3.1"
                            fill="#d70029"
                          />
                          <path
                            d="M720 23.8c.1 4.5-3.4 8.2-7.9 8.4-4.5.1-8.2-3.4-8.4-7.9v-.5c-.1-4.5 3.4-8.2 7.9-8.4 4.5-.1 8.2 3.4 8.4 7.9v.5m2 0c.1-5.6-4.4-10.2-10-10.2-5.6-.1-10.2 4.4-10.2 10s4.4 10.2 10 10.2h.1c5.5.1 10.1-4.4 10.1-9.9v-.1M42.6 89.4S37 90.5 33.5 84L16.6 58.4 13.8 63s-3.7-4.3.1-10.6l14.3-28.1h-5.4s1.7-5.4 9.1-5.4h31.6L61 14.1s5.6-1 9 5.5l17.7 27.1 3.3-4.8s3.7 4.3-.2 10.6l-16.4 29H95c16.4-23.8 10.4-56.3-13.4-72.6S25.3-1.5 9 22.3-1.4 78.5 22.4 94.9c22.5 15.5 53.1 11 70.3-10.3H40l2.6 4.8zm190.2 2.4h30.6l-4.3-7.2h-30.9l4.6 7.2zm-58.2.7h31.7l1.8-7.9h-31.7l-1.8 7.9zm270.2 0h63.7c8.9 0 14.4-3.9 17.6-7.9h-79.5l-1.8 7.9zm136.9-77.6h-32.4l-15.5 66.6h32.4l15.5-66.6zm-50.4 77.6h32.4l1.8-7.9h-32.4l-1.8 7.9zm101.6-22.4h-25.8L620 14.9h-32.4l-15.5 66.6h58.2l2.6-11.4zm-63.3 22.4h58.2l1.8-7.9h-58.2l-1.8 7.9zM168.1 33.3h16.6l4.3-18.4h-68.8l-4.3 18.4H135l-11.2 48.2h33.1l11.2-48.2zm-46.8 59.2h33.1l1.8-7.9h-33.1l-1.8 7.9zm573.8-56.2 4.8-21.4h-67.1L628 36.3h17.4l-10.7 45.2h33.1l10.7-45.2h16.6zm-63 56.2h33.1l1.9-7.9H634l-1.9 7.9zm-290 0h34.6l7.1-7.9H349l-6.9 7.9zm104.5-78H410l-26.3 29.1-4.4-29.1h-26.5l7.7 57-8.7 9.9h34.8l60-66.9zm-163.4 78h39.4s8.6 1.3 15.9-7.9h-71.4c2.7 4.2 7.5 7.9 16.1 7.9M413.7 64h32.2l3.7-15.9h-22.3L413.7 64zm116.9 12.3c-.5 1.8-1.3 3.5-2.2 5.2h-81l15.5-66.6h60.7s19.5-.7 18 21c0 0-1.8 18.4-21 18.4 0 0 14.4 2.5 10 22M502 66s.7-4.8-5.7-4.8h-10.9l-2.2 9.6h12.5c.1 0 6.3.2 6.3-4.8m-11-30.1-2.2 9.6h12.5s6.3.2 6.3-4.8c0 0 .7-4.8-5.7-4.8H491zm-277.6 26-4.5 19.6h-31.7l15.5-66.6h58.5s17.3-2 17.7 14.4c0 0-.7 21.3-8.1 26.5 0 0-4 4.4-16.6 4.1l13 21.7h-31.1l-12.7-19.7zm6.7-28.6-2.8 12.1h15.2s6.6-.1 7.2-6c0 0 1.7-6.1-6.6-6.1h-13z"
                            fill="#d70029"
                          />
                          <path
                            d="M342.1 78.9c-.5.9-.9 1.8-1.4 2.6h-75.2c-1.1-2.8-1.8-5.8-1.8-8.8 1.9-15 5.6-29.7 11-43.8C278.2 20.6 286 15 295 14.5h35c20.6.7 22.3 15.6 22.3 15.6 3.2 23.1-10.2 48.8-10.2 48.8M315 36.6h-6.6c-2.6.1-4.8 1.9-5.5 4.4l-6.2 25.4c-.6 1.8.4 3.7 2.1 4.2.4.1.8.2 1.2.2h6.6c2.6-.1 4.8-1.9 5.5-4.4l6.2-25.4c.6-1.8-.4-3.7-2.1-4.2-.3-.2-.7-.2-1.2-.2m115.7 97c.5.1 1.1.1 1.6.1 1.9 0 3.5-.7 3.5-2.7 0-1.8-1.7-2.6-3.7-2.6h-1.4v5.2zm0-8.1h1.4c2.2 0 3.3-.9 3.3-2.3s-1.1-2.1-2.9-2.1c-.6 0-1.2 0-1.8.1v4.3zm-4.1-7c1.8-.3 3.6-.4 5.3-.4 2.5 0 4.1.2 5.4 1 1.4.7 2.2 2.1 2.2 3.6 0 1.8-1.3 3.4-3 3.9v.1c2.1.4 3.7 2.3 3.6 4.5 0 1.5-.7 3-1.9 3.9-1.3 1.1-3.6 1.7-7.2 1.7-1.5 0-3-.1-4.5-.3l.1-18zm23.8-.3v10.5c0 3.2 1.2 4.8 3.3 4.8 2.2 0 3.4-1.5 3.4-4.8v-10.5h4.1v10.2c0 5.6-2.8 8.3-7.6 8.3-4.6 0-7.3-2.6-7.3-8.4v-10.2h4.1zm17.7 0h4.1v18.3h-4.1zm10.9 0h4.1V133h7.3v3.5H479v-18.3zm17.9 3.5H492v-3.5h14v3.5h-5v14.8h-4.1v-14.8zm23.1-3.5h11.1v3.4h-7v4.2h6.6v3.4h-6.6v7.3H520v-18.3zm25.3 15.3c2.8 0 4.4-2.6 4.4-6.2 0-3.3-1.5-6.1-4.4-6.1s-4.4 2.8-4.4 6.2c0 3.4 1.6 6.1 4.4 6.1zm-.2 3.3c-5.4 0-8.6-4.1-8.6-9.3 0-5.5 3.5-9.6 8.9-9.6 5.6 0 8.7 4.2 8.7 9.2 0 6.1-3.6 9.7-9 9.7zm18.9-10.5h1.6c2.1 0 3.3-1 3.3-2.6 0-1.7-1.1-2.5-3-2.5-.6 0-1.3 0-1.9.1v5zm-4.1-7.8c1.8-.3 3.7-.4 5.5-.4 2.7 0 4.6.4 5.9 1.5 1.2.9 1.8 2.3 1.7 3.8 0 2-1.3 3.8-3.2 4.5v.1c1.3.5 2 1.7 2.4 3.4.6 2.1 1.1 4.5 1.5 5.2h-4.2c-.5-1.4-1-2.8-1.2-4.3-.5-2.3-1.3-2.9-3-2.9H564v7.2h-4.1v-18.1zm27.9-.3h4.1V133h7.3v3.5h-11.4v-18.3zm17 0h4.1v18.3h-4.1zm10.9 0h11.1v3.4h-7v4.2h6.6v3.4h-6.6v7.3h-4.1v-18.3zm28.3 10.6h-6.7v4.3h7.5v3.4h-11.6v-18.3h11.3v3.4h-7.1v3.8h6.7l-.1 3.4zm11.1-8h1c.6 0 1.1-.1 1.1-.7s-.6-.7-1.1-.7h-.9v1.4zm-1.1-2.2h2c1.4 0 2.1.4 2.1 1.6.1.7-.5 1.4-1.2 1.4h-.2l1.4 2.4H657l-1.3-2.3h-.7v2.3h-1v-5.4zm1.9 6.5c2.1.1 3.8-1.5 3.9-3.6.1-2.1-1.5-3.8-3.6-3.9-2.1-.1-3.8 1.5-3.9 3.6v.1c-.1 2 1.5 3.7 3.5 3.8h.1m0-8.6c2.7.1 4.8 2.3 4.7 4.9-.1 2.7-2.3 4.8-4.9 4.7-2.6-.1-4.7-2.2-4.7-4.8 0-2.6 2.1-4.8 4.7-4.8h.2m-3.7 20.3c-1.4 0-2.4-1.1-2.4-2.5s1.1-2.4 2.5-2.4 2.4 1.1 2.4 2.5c-.1 1.3-1.1 2.4-2.5 2.4z"
                            fill="#d70029"
                          />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Troy-Bilt
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/ourbrands-bolens.html"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 646.7 166.1"
                          xmlSpace="preserve"
                          style={{ width: "100%" }}
                        >
                          <path
                            d="M118.1 22.1H42.3l-25.8 89.3s75.8 1.6 83.3-.5 6.7-.1 12.3-8.9c3.8-6 5.9-13.9 7.3-19.6 2.1-8.6-.2-12.4-7.8-17.2 0 0 7.5-2.2 11.8-8.1s5.6-12.4 7.2-20.4c1.8-8.2-3.9-14.6-12.5-14.6M76.2 76.4c-.4 2.5-1 4.9-1.9 7.3-.5 1.1-1.9 3.8-5.1 3.8h-5.4L68.1 73l5.4.5c0-.1 3 .7 2.7 2.9m7-25.3s-.8 5.1-4.8 5.2c-1.7 0-3.4 0-5.1-.2L76.7 44c2-.1 4-.1 5.9.2 2.8.4 1.3 4.1.6 6.9m146.5-29-26.3 90.8 41.7-.2 26.3-90.3-41.7-.3zm108.6 18.2c-9.1-.8-40.9-2.2-51.6-.8-10.8 1.3-16.1 3.5-19.6 12.4s-11 37.1-13.7 46.5c-2.7 9.4 7 14.3 14.8 14.5s41.2.5 47.9-.1c6.7-.7 16.1-2.8 19.1-13 2.9-10.2 2.9-11.8 2.9-11.8h-35.2s-.6 1.4-2.2 4.8c-1.6 3.5-7.1 1.4-6.8-.8s2.4-10.2 2.4-10.2H340s5.6-16.9 7.8-24.5c2.1-7.6-.3-16.1-9.5-17m-28.5 21.3c-.3 2.3-.8 4.5-1.6 6.7l-7.5-.1s.6-2.8 1.7-7.4c1.2-4.6 8-3.3 7.4.8m46.5-21.3-20.4 71.2 38.4.3s9.7-34.4 11.6-40.9c1.9-6.5 9.7-5.9 7.8 1.3s-11 39.8-11 39.8l37.7-.4s13.2-45.2 16.1-56.2-5.9-14.8-17.7-14.8c-11.8 0-19.6.8-21.8 5.1-2.1 4.3.5-5.4.5-5.4h-41.2zm74 50.6c-1.4 3-2.1 6.3-2.1 9.7-.3 6.2 4 11.3 12.9 11.3H497c6.2 0 11.6-9.7 14-16.4s4.3-14.3 4.6-18c.3-3.8-2.2-9.4-10.2-9.9-8.1-.5-15.7-.8-23.2-1.1-7.5-.3-6.3-5.1-6.1-6.2.4-1 .9-1.9 1.5-2.9 1.1-2.2 6.1-1.3 6.2 1.7.1 2.6.4 2.5.4 2.5h35.9c1.3-2.3 2.1-4.8 2.4-7.4.3-3.6-2.4-9.8-6.9-11.7-4.4-1.9-4-2.3-10.5-2.3s-41.8-.1-46.9.1c-5.1.3-13.2 4.6-15.4 9.9S435.9 66 435.4 75c-.4 7.4 7.5 9.4 9.5 9.7 2 .3 19.2.3 25.1 1.3 5.9 1.1 4.9 3.1 5.1 4.3.3 1.2-.9 3.6-2.3 5.1-1.9 2.1-4.3.1-4.7-.7-.6-1.2-1-2.4-.9-3.8h-36.9M203.6 39.8c-11.6-.3-52.7-.8-52.7-.8-9.1 0-15.6 5.9-18.5 12.1-3 6.2-12.6 36.8-14.3 47.3s4.9 14 12.4 14.3 43.8 0 51.3 0 15.6-2.7 18-8.1c2.4-5.4 14.3-43.6 15.9-49.7s-.5-14.8-12.1-15.1m-30.1 28s-2.6 10-5.9 18.9c-2.5 7-8.1 3.5-6.9-1.2 1.3-5.1 2.4-12.2 5.5-19.6 2.8-6.3 8.8-2.6 7.3 1.9M10.9 124.4h513.7l-6.1 33.6H0l10.9-33.6z"
                            fill="#025835"
                          />
                          <path
                            d="M554.8 80.3C550.1 55.6 538.2 42.2 532 35c-5.2-6.1-22.2-20.1-12-8.4 9 11.5 19.2 36.2 20.4 56.4 1.3 22.5-4 46.3-4 46.3l-5.4 28.4h16.2l6.9-38.4c.1.1 4-22.3.7-39m42.7-50.7c5.9-17.4 21.8-26.7 29.7-28.7 7.6-1.9-14.8-1.2-25.5 4.5-8.8 4.7-13.8 10.8-18.5 19.3-5.7 10.2-8.3 23.7-9.6 29.6S565.1 96 565.1 96l-11.7 61.8h16.3L585.4 77c2.8-16.1 6.8-31.9 12.1-47.4"
                            fill="#025835"
                          />
                          <path
                            d="M605.7 101.4c4.9-11.7 11.5-25.8 20.3-35.4 8.4-9.1 12.6-15.1 17.2-20 4.8-5.1 6.6-7.6-8.8 1.8-16.3 10.1-20.9 13.3-30.5 25.9-7.9 10.4-11.7 19.4-16.8 34.1-2.8 8-7.8 30.9-7.8 30.9l-3.6 19H592c.3-1.5.5-2.8.7-3.6 1.8-9 8.1-41 13-52.7"
                            fill="#025835"
                          />
                          <path
                            d="m419.5 153.3 4.8-25h10.1l1.5 15.6 7.5-15.6h10.1l-4.8 25h-7.5l1.5-7.6.9-3.9 1.3-4.5h-.1l-7.7 16h-5.8l-1.6-16h-.1l-.4 3.7-.6 3.9-1.6 8.5h-7.5zm35.3-25h23.3l-1.3 6.6h-7.5l-3.5 18.4h-8.3l3.5-18.4h-7.5l1.3-6.6zm20.2 25 4.8-25H491c8.2 0 12.6 3.7 11 12-1.8 9.4-7.8 13-16 13h-11zm9.4-5.8h1.8c3.9 0 6.4-2 7.3-6.7 1-5.2-.4-6.6-4.9-6.6H487l-2.6 13.3zm-80.7-14h2.1l-.6 3.3c-.1.3-.2.7-.3 1.1.4-.8 1.2-1.3 2.1-1.3 1.4 0 2 .8 1.5 3.6l-.7 3.7c-.4 1.6-1.1 3.4-2.9 3.4-.8.1-1.6-.5-1.7-1.3l-.2 1.1h-2l2.7-13.6zm.2 10.3c-.2 1.2 0 1.8.7 1.8.6 0 1-.8 1.3-1.8l.7-3.4c.1-1 .4-2-.6-2s-1.3 1.5-1.4 2.3l-.7 3.1zm8.3-6.9-.1 5.4c0 .9-.1 1.8-.2 2.7.2-.9.5-1.8.8-2.6l2-5.5h2.2l-4.2 10.4c-1 2.3-1.3 3.8-4.2 3.3l.4-1.8c.3 0 1.2.2 1.3-.5.1-.4.1-.9.1-1.3l-.3-10.1h2.2z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Bolens
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/robomow"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 419.9 103.2"
                          xmlSpace="preserve"
                          style={{ width: "100%" }}
                        >
                          <path
                            d="M113 83.9c-.5-.1-1.4-.1-1.7-.1-1.7 0-1.9.2-2.6 2.8h2.1c.1.2.1.7.1 1-.1.9-.6 1.7-2.1 1.7-.2 0-.4 0-.7-.1l-1.7 7.1c-1.1 4.7-3.2 6.8-6.4 6.8-1.4 0-2-.6-1.9-1.6 0-.3.1-.6.3-.9 2.9 0 3-.1 3.9-4l1.8-7.5h-1.3c-.2-.2-.2-.7-.1-1.1.1-1.1.8-1.5 2.2-1.5 1.3-4.6 2.9-5.7 6.4-5.7 1.7 0 2.5.6 2.3 1.5 0 .8-.3 1.2-.6 1.6m8.3 5.9c-.6-.1-.9-.1-1.2-.1-1.3 0-2.3.6-3.6 2.6l-1.5 5.5c-.5.2-1.4.2-2 .2-1.2 0-1.7-.5-1.6-1.5 0-.3.2-.8.4-1.6l1.6-5.8h-1.3c-.2-.3-.2-.6-.1-1 .2-1.2 1.3-1.7 3.8-1.7 1.6 0 2 .4 1.7 1.3l-.6 1.8c1.6-2.6 2.2-3.1 3.7-3.1 1.3 0 1.6.7 1.5 1.6 0 .9-.4 1.4-.8 1.8m3.2 8.3c-1.3 0-2.1-.5-1.9-1.7.1-.5.3-1.2.4-1.8l1.7-5.4h-1.3c-.2-.3-.2-.6-.1-1 .2-1.2 1.3-1.7 3.8-1.7 1.8 0 2.1.5 1.8 1.7l-1.2 4.3c-.4 1.3-.7 2.1-.7 2.5 0 .2 0 .4.4.4.2 0 .7 0 1-.1.3.2.4.6.3.9-.3 1.3-1.6 1.9-4.2 1.9m3.8-13.1c-1 0-1.9-.4-1.7-1.7.2-1.2 1.2-2.1 2.6-2.1 1.3 0 1.8.7 1.6 1.8-.1 1.1-1.1 2-2.5 2m9.1 1.6c-4.2 0-6.9 2.6-7.5 6.9-.5 3.5 1.6 4.7 4.7 4.7 3.3 0 5-1 5.2-2.2.1-.6-.1-1.1-.6-1.3-1.2.4-2.1.7-3.3.7s-2.3-.5-2.1-2.2c.5.1.8.1 1.5.1 3.6 0 5.3-1.3 5.8-3.5.3-1.9-1.1-3.2-3.7-3.2zm-1.9 4.9c-.5 0-.9 0-1.3-.1.5-1.4 1.4-2.3 2.5-2.3.9 0 1 .4 1 1-.1.8-.8 1.4-2.2 1.4zm7.9 6.6c-1.2 0-1.7-.5-1.6-1.5 0-.3.2-.8.4-1.6l1.6-5.8h-1.3c-.2-.3-.2-.6-.1-1 .2-1.2 1.3-1.7 3.7-1.7 1.6 0 2 .4 1.7 1.3l-.3 1c1.2-1.6 2.4-2.3 4.5-2.3 2.2 0 3 .9 2.8 2.7-.2 1.4-.9 3.2-1.3 4.5-.1.5-.3 1-.4 1.5 0 .2.1.3.4.3.3 0 .6 0 1-.1.3.2.4.6.3.9-.2 1.3-1.5 1.8-4.2 1.8-1.2 0-2-.5-1.8-1.7.1-.6.3-1.3.5-1.9.2-.5 1.4-4.1 1.5-4.5s0-.9-1-.9c-.8 0-1.7.4-2.4 1.3l-2 7.4c-.6.2-1.4.3-2 .3m25.5-2.6c-.3.1-.8.1-1 .1-.4 0-.4-.2-.4-.5s.1-.8.4-1.8l3.2-11.5c-.4-.4-1.1-.6-1.9-.6-1.4 0-2 .4-2.5 2.1l-1.1 3.8c-.4-.3-1.1-.5-2.3-.5-3.1 0-6 2.4-6.7 7.2-.5 3.2.8 4.3 3.4 4.3 1.5 0 2.9-.5 3.8-2 0 .1-.1.3-.1.4-.2 1.2.5 1.6 1.5 1.6 2.3 0 3.7-.6 4-1.7 0-.4 0-.7-.3-.9zm-5.5-.6c-.4.4-1 .6-1.6.6-1.1 0-1.6-.5-1.4-2.2.4-2.8 1.7-4.2 3.4-4.2.5 0 .8 0 1.1.3l-1.5 5.5zm8.9 3.2c-1.2 0-1.9-.5-1.8-1.7.1-.6.3-1.3.4-1.9l3.1-11.2c.5-1.7 1.1-2.1 2.5-2.1.8 0 1.5.2 1.9.6l-3.2 12c-.3.9-.4 1.3-.4 1.5s.1.3.4.3c.2 0 .6 0 1-.1.2.2.3.6.3.9-.2 1.1-1.5 1.7-4.2 1.7"
                            fill="#f5d60b"
                          />
                          <path
                            d="M184.9 98.2c-3.1 3-5.5 4.7-8 4.7-1.4 0-2.1-.9-2.1-1.9 0-.4.3-.9.3-.9 1.9 0 4-1 4.7-2.2v-9.2h-.8c-.2-.3-.2-.8-.1-1.2.2-1.3.7-1.4 3-1.4 1.4 0 1.7.4 1.7 1.6V95c.2-.2.4-.5.6-.7 1.1-1.5 2-3.5 2.5-5.5.2-.8.3-1.5.3-2.3.1-.1.2-.1.3-.2.4-.2.9-.3 1.4-.3 1.6 0 2.3.7 2.1 2.2-.5 2.6-2.2 6.4-5.9 10m16.4-9.8c1-1.2 2-1.9 4.1-1.9 2.2 0 3 .9 2.8 2.7-.2 1.4-.9 3.2-1.3 4.5-.1.5-.3 1-.4 1.5 0 .2.1.3.4.3.2 0 .6 0 1-.1.3.2.4.6.3.9-.2 1.3-1.5 1.8-4.2 1.8-1.2 0-2-.5-1.8-1.7.1-.6.3-1.3.5-1.9s1.4-4.1 1.5-4.5 0-.9-1-.9c-.8 0-1.7.4-2.4 1.3l-2 7.4c-.5.2-1.4.2-2 .2-1.2 0-1.7-.5-1.5-1.5 0-.3.2-.8.4-1.6l3.2-11.7c.5-1.7 1.1-2.1 2.5-2.1.8 0 1.5.2 1.9.6l-2 6.7zm15.9-2c-4.3 0-7.1 2.7-7.7 6.8-.5 3.5 1.4 4.9 4.5 4.9 4.4 0 7.2-2.6 7.9-6.8.4-2.9-.7-4.9-4.7-4.9zm.8 5.1c-.3 2.5-1.7 4-3.2 4-1.4 0-1.7-.8-1.5-2.4.3-2.3 1.5-4 3.2-4 1.5 0 1.8.8 1.5 2.4zm13.4-1.2c.2-.6 0-1.1-.8-1.1s-1.7.4-2.4 1.3l-2 7.4c-.6.2-1.4.2-2 .2-1.2 0-1.7-.5-1.6-1.5 0-.3.2-.8.4-1.6l1.6-5.8h-1.3c-.2-.3-.2-.6-.1-1 .2-1.2 1.3-1.7 3.7-1.7 1.6 0 2 .4 1.7 1.3l-.3 1c1.2-1.6 2.4-2.3 4.5-2.3 2 0 2.8.8 2.7 2.2 1.1-1.5 2.4-2.2 4.3-2.2 2.1 0 2.9.9 2.7 2.7-.2 1.4-.9 3.2-1.3 4.5-.2.7-.3 1.2-.4 1.5 0 .2.1.3.4.3.3 0 .6 0 1-.1.3.2.4.6.3.9-.2 1.3-1.6 1.8-4.2 1.8-1.3 0-1.9-.6-1.8-1.8.1-.6.3-1.2.4-1.8.1-.4 1.4-4.1 1.5-4.6s-.2-.8-.9-.8c-.9 0-1.7.6-2.3 1.3l-2 7.4c-.5.2-1.4.2-2 .2-1.2 0-1.7-.5-1.6-1.5 0-.3.2-.8.4-1.6l1.4-4.6zm20.1-3.7c-4.2 0-6.9 2.6-7.5 6.9-.5 3.5 1.6 4.7 4.7 4.7 3.3 0 5-1 5.2-2.2.1-.6-.1-1.1-.6-1.3-1.2.4-2.1.7-3.3.7s-2.3-.5-2.1-2.2c.5.1.8.1 1.5.1 3.6 0 5.3-1.3 5.8-3.5.3-1.9-1.1-3.2-3.7-3.2zm-1.9 4.9c-.5 0-.9 0-1.3-.1.5-1.4 1.4-2.3 2.5-2.3.8 0 1 .4 1 1-.1.8-.8 1.4-2.2 1.4zM127.9 48.3c6.6-1.2 10.1-7 10.1-13.7 0-10.3-6.9-14.9-16-14.9h-17.9v48.4h11.7V49.5h.4l11.3 18.6h14.9l-14.5-19.8zm-8.1-7.1h-3.9v-12h3.9c3.2 0 6 2.7 6 6s-2.7 6-6 6zm151.1-1.9h.1c2.6-3.7 5.9-5.2 9.9-5.2 4.5 0 8.4 1.9 10.7 6.3 2.1-4.1 6.3-6.3 10.6-6.3 7.9 0 10.7 5.5 10.7 13v21h-11.1V52.4c0-3.4.1-9-4.6-9-5.1 0-5.3 5.1-5.3 9v15.7h-11.1V52.4c0-3.7 0-9.2-4.9-9.2s-4.9 5.6-4.9 9.2v15.7h-11.1V35.2H271v4.1h-.1zm97.5 12 6.2-16.1h7l6.8 16.2 6.5-16.2h10.8l-12.6 32.9H385l-6.8-16.3-6.8 16.3h-8.1l-12.5-32.9H362zm-34.1-16.9c-9.6 0-17.4 7.8-17.4 17.4 0 9.6 7.8 17.4 17.4 17.4 9.6 0 17.4-7.8 17.4-17.4 0-9.6-7.8-17.4-17.4-17.4zm0 23.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5c-.1 3.6-3 6.5-6.5 6.5zm-95.6-23.9c-9.6 0-17.4 7.8-17.4 17.4 0 9.6 7.8 17.4 17.4 17.4s17.4-7.8 17.4-17.4c0-9.6-7.8-17.4-17.4-17.4zm0 23.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm-80.2-23.9c-9.6 0-17.4 7.8-17.4 17.4 0 9.6 7.8 17.4 17.4 17.4 9.6 0 17.4-7.8 17.4-17.4 0-9.6-7.8-17.4-17.4-17.4zm0 23.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm43.7-23.9c-3.8 0-7.7 1.4-10.2 4.3v-19h-11.7v48.7H192v-3.7h.1c2.1 3.3 6.1 4.7 9.9 4.7 9.8 0 15.4-9.8 15.4-17.5 0-8-5.5-17.5-15.2-17.5zm-3.1 23.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z"
                            fill="#f5d60b"
                          />
                          <defs>
                            <path id="a3785" d="M408 34.7h11.9v11.9H408z" />
                          </defs>
                          <clipPath id="b7418">
                            <use xlinkHref="#a3785" overflow="visible" />
                          </clipPath>
                          <g clipPath="url(#b7418)">
                            <defs>
                              <path id="c4388" d="M408 34.7h11.9v11.9H408z" />
                            </defs>
                            <clipPath id="d8156">
                              <use xlinkHref="#c4388" overflow="visible" />
                            </clipPath>
                            <path
                              d="M414 34.7c-3.3 0-5.9 2.7-5.9 5.9 0 3.3 2.7 5.9 5.9 5.9 3.3 0 5.9-2.7 5.9-5.9s-2.7-5.9-5.9-5.9"
                              clipPath="url(#d8156)"
                              fill="#f5d60b"
                            />
                          </g>
                          <path
                            d="M417.3 44.2h-2.2l-1.6-2.6v2.6h-1.8v-6.8h2.6c.7 0 1.2.2 1.7.5.4.3.7.9.7 1.6 0 .5-.1.9-.4 1.2-.2.3-.6.6-1.1.7l2.1 2.8zm-3.8-3.7h.6c.1 0 .3-.1.4-.1.1-.1.2-.1.3-.3.1-.1.1-.3.1-.4 0-.2 0-.3-.1-.5l-.3-.3c-.1-.1-.2-.1-.4-.1h-.6v1.7z"
                            fill="#fff"
                          />
                          <path
                            d="M44.2 0C19.8 0 0 19.8 0 44.2s19.8 44.2 44.2 44.2c24.4 0 44.2-19.8 44.2-44.2C88.5 19.8 68.7 0 44.2 0zm20 67.9H30.9c-1.3 0-2.1-1-2.1-2.1V22.4c0-1.5 1-2.3 2.2-2.3h15.2c9.5 0 16 4.5 16 14.7 0 5.8-2.9 11.2-8.5 13.1-.5.2-1 .9-.5 1.7L65.1 66c.6.8.2 1.9-.9 1.9z"
                            fill="#f5d60b"
                          />
                          <path
                            d="M49.5 35.1c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3c3 .1 5.3 2.4 5.3 5.3"
                            fill="#f5d60b"
                          />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Robomow
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-part-type"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          viewBox="0 0 205.2 205.2"
                          style={{ width: "100%" }}
                        >
                          <path
                            fill="#000"
                            d="M10.3 57.6c1.3-.2 2.6-.4 4-.6 1.1-.2 2.2-.4 3.3-.5.2 0 .3-.1.2-.3-.4-.8-.7-1.6-1.2-2.4-.1-.2-.1-.5-.3-.7l-.1-.1c0-.1 0-.2-.1-.3l-.1-.1c0-.1 0-.2-.1-.3l-.1-.1c0-.1 0-.2-.1-.3l-.1-.1c-.2-.7-.7-1.3-.9-2.1 2.5-.3 5-.3 7.6-.5-.2-.9-.6-1.7-.9-2.5l.1-.1c0-.1-.1-.1-.2-.1v-.1c0-.1 0-.3-.2-.3 0-.5-.3-.9-.4-1.3l-.1-.1c-.2-.8-.6-1.5-.8-2.3 0 0 0-.1.1-.1 2.4-.1 4.7.1 7.1.2.4 0 .4-.1.3-.4-.2-.5-.3-1-.4-1.6 0-.2 0-.3-.2-.3-.1-.7-.2-1.3-.5-1.9-.3-1-.5-1.9-.9-2.9.9 0 1.8.2 2.7.2 1.1.1 2.1.3 3.2.4.4.1.9.1 1.3.1.4.1.4 0 .4-.4-.3-1.5-.6-2.9-.9-4.4-.2-.8-.4-1.7-.5-2.5 0 0 .1 0 .1-.1 2.3.5 4.6.9 6.8 1.4.4.1.5 0 .5-.4-.2-1.4-.3-2.8-.5-4.2-.1-.9-.3-1.8-.2-2.7h.2c1.2.2 2.3.7 3.5 1h.2c0 .1.1.1.2.1 1 .2 1.8.5 2.8.8.4.1.5 0 .5-.4-.1-1-.1-2-.1-3-.1-1.3 0-2.6 0-3.9.2-.1.4.1.6.1 2 .8 4.1 1.6 6.1 2.4.4.2.5.1.5-.4 0-1.1.1-2.1.1-3.2 0-1 .1-2 .2-3 0-.2-.3-.5 0-.7s.5.1.8.2c2 1 4.1 2 6.2 3.1.1-.9.3-1.8.4-2.7.1-1.3.4-2.5.6-3.8 0-.3-.1-.8.2-.9.2-.1.5.3.8.4 1.8 1.1 3.6 2.2 5.3 3.3.1.1.2.1.3.2.5-2.2 1.1-4.4 1.6-6.6.2-.6.2-.6.7-.2 1.8 1.4 3.7 2.8 5.6 4.2.3-.8.6-1.6.8-2.4.5-1.4 1-2.9 1.5-4.3.1-.4.2-.3.5-.1 1.6 1.5 3.2 2.9 4.9 4.3.2.2.3.3.6.5L85.9 3c.2 0 .3 0 .4-.2.1-.1 0-.2-.2-.2.2-.5.4-1 .7-1.6 1.5 2 3.2 3.9 5 5.7L95.4.1c1.6 2 3.2 4 4.7 6 .2-.1.3-.3.4-.5 1.2-1.8 2.3-3.5 3.5-5.3.3-.5.3-.5.7 0l3.6 5.4c.1.1.2.3.3.5 1.6-2 3.1-3.9 4.7-5.9 1.2 2.3 2.4 4.5 3.7 6.8 1.7-1.8 3.4-3.6 5.2-5.4 1 2.4 2 4.7 3 7 1.8-1.5 3.5-3 5.3-4.6.2 0 .4.2.5-.1.8 2.3 1.6 4.6 2.3 7 1.6-1.1 3.1-2.3 4.7-3.5l.1-.1c.3-.2.6-.4.9-.7.3-.3.4-.2.5.1v.1c.3 1.1.5 2.3.8 3.4.2 1 .5 2 .7 3 .1.6.2.6.7.3l.6-.3s.1 0 .1-.1c.1-.1.3-.2.4-.2 0 0 .1 0 .1-.1.1-.1.3-.2.4-.2l.1-.1c.1-.1.3-.2.4-.2 0 0 .1 0 .1-.1.4-.3.8-.5 1.3-.8 0 0 .1 0 .1-.1.1-.1.3-.2.4-.2 0 0 .1 0 .1-.1.1-.1.3-.2.4-.3 0 0 .1 0 .1-.1.1-.1.3-.2.4-.2l.1-.1c.1-.1.3-.2.4-.2h.2c.3.3.1.7.2 1.1l.9 6c0 .3.1.4.5.2 2-1 4-1.9 5.9-2.9.4-.2.5-.2.5.2s0 .9.1 1.3v.1c.1 1.9.2 3.9.3 5.9 2.4-.9 4.7-1.8 7-2.7.1 2-.1 4-.1 6-.1 0-.2.1-.2.2s.1.1.2.1v1.4c.8-.2 1.6-.5 2.4-.7 1.4-.4 2.9-.8 4.4-1.2.1.1.3.1.4.1 0 .8-.2 1.6-.2 2.4-.1 1-.2 2-.4 3-.1.5-.1.9-.2 1.4-.1.3-.1.5.4.4 1.8-.3 3.6-.8 5.4-1 .1 0 .3 0 .3-.2.4.1.8-.2 1.2-.1-.5 2.5-1 4.9-1.5 7.4h.8c0 .1 0 .1.1.1s.1-.1.1-.1c.3-.3.8-.1 1.2-.2 1.6-.2 3.2-.3 4.8-.5.3 0 .4 0 .3.4-.6 2.2-1.3 4.3-1.9 6.4-.1.4 0 .4.3.4 2.1-.1 4.3-.1 6.4-.2h.6c-.9 2.4-1.9 4.7-2.8 7.1-.1.1-.2.1-.2.2l.1.1c.1 0 .2-.1.2-.2h.6c0 .1 0 .2.2.3.1 0 .1-.1.1-.2.8 0 1.6 0 2.3.1 0 .1 0 .1.1.1s.1-.1.1-.1c.8.2 1.6 0 2.4.2.4.1.9 0 1.5 0-1.2 2.3-2.3 4.6-3.4 6.9 2.5.4 4.9.7 7.4 1.2-1.3 2.2-2.7 4.3-4 6.5 2 .5 3.9.9 5.8 1.4.3.1.7.2 1 .2.4.1.5.2.2.6-.7.9-1.4 1.8-2 2.7-.7 1-1.5 2-2.3 3 2.4.8 4.7 1.6 7.1 2.4l-5.1 5.7 6.9 3c-1.9 1.8-3.7 3.5-5.6 5.3l6.6 3.6c-2 1.6-4 3.2-6 4.7.1.2.3.3.5.4 1.7 1.2 3.4 2.3 5.2 3.5.6.4.6.4 0 .8-1.8 1.1-3.5 2.3-5.3 3.4-.2.1-.4.3-.6.4 2 1.6 3.9 3.1 5.9 4.7-2.3 1.2-4.5 2.4-6.8 3.7 1.8 1.7 3.6 3.5 5.4 5.2-2.4 1-4.7 2-7.1 3.1 1.7 1.9 3.3 3.7 5 5.7-2.5.8-4.8 1.6-7.3 2.4 1.5 2 3 4 4.5 6.1-2.4.6-4.7 1.1-7.1 1.7 0-.1 0-.2-.1-.2s-.1.2-.1.3c-.2.2 0 .4.1.5 1.1 1.9 2.2 3.7 3.4 5.6.1.1.2.3.3.5-2.5.4-5 .7-7.6 1.1 1.1 2.3 2.2 4.5 3.3 6.7-.5.1-1 .1-1.5.1-1.6.1-3.2.2-4.7.3h-1.1c-.4 0-.4.1-.3.4.9 2.2 1.7 4.3 2.5 6.5v.1l-.1.1c-1.5-.1-3-.1-4.6-.2-.8 0-1.7 0-2.5-.1-.3 0-.5 0-.3.4.6 2.1 1.2 4.3 1.9 6.4.1.4-.1.4-.3.4l-4.8-.6c-.7-.1-1.3-.1-2-.2-.4-.1-.5.1-.4.5.2.9.4 1.9.6 2.8.3 1.3.5 2.5.8 3.8.1.2-.1.3-.3.2-1.4-.3-2.8-.6-4.3-.9l-2.7-.6c-.3-.1-.3.2-.3.4.2 1.6.4 3.2.5 4.7.1.6.1 1.2.2 1.9 0 .5-.1.5-.5.4-2.2-.7-4.3-1.3-6.5-2-.4-.1-.3.2-.3.4v4.9c0 .6 0 1.3.1 1.9-.1 0-.2.1-.2.2-1-.3-2-.8-2.9-1.1-1.2-.5-2.4-1-3.7-1.4-.2-.1-.4-.1-.4.3-.1 1.8-.3 3.5-.3 5.3 0 .4-.1.9-.1 1.3s-.1.5-.5.3c-1-.5-1.9-1-2.9-1.5s-2.1-1.1-3.1-1.6c-.3-.2-.4-.1-.5.3-.3 2.1-.6 4.2-1 6.3 0 .2-.1.4-.1.7-.2 0-.3-.2-.5-.2 0 0-.1 0-.1-.1-.2-.1-.5-.2-.7-.5 0 0-.1 0-.1-.1-.1-.1-.3-.2-.4-.3 0 0-.1 0-.1-.1-.2-.1-.3-.2-.5-.3l-.1-.1h-.1l-.1-.1c-.1-.1-.3-.2-.4-.3 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1l-.1-.1c-.1-.1-.3-.2-.4-.2 0 0-.1 0-.1-.1-.2-.1-.5-.2-.7-.5 0 0-.1 0-.1-.1-.1-.1-.3-.2-.4-.2 0 0-.1 0-.1-.1-.2-.1-.5-.2-.7-.5 0-.1 0-.1-.1-.1s-.1.1-.1.2c-.1.3-.2.5-.2.8-.1 0-.3 0-.3.1s.1.2.2.2c-.3 1.1-.5 2.3-.8 3.4-.2.9-.4 1.7-.6 2.6-.2 0-.4-.2-.5-.3-1.8-1.3-3.6-2.6-5.3-4-.2-.1-.3-.3-.5.1-.2 0-.3 0-.4.2 0 .2.2.1.3.1-.7 2.1-1.4 4.3-2.2 6.5-1.9-1.7-3.8-3.4-5.8-5.1l-3 6.9c-1.8-1.9-3.5-3.7-5.3-5.6-.9 1.7-1.9 3.4-2.8 5-.1 0-.2-.1-.3.1 0 .1.1.1.2.1-.2.4-.4.9-.7 1.4l-4.8-6c-1 1.5-2.1 3-3.1 4.5-.2 0-.2.2-.2.3l-.6.9c-.2.4-.3.4-.6 0-1-1.6-2.1-3.2-3.2-4.9-.2-.4-.5-.7-.7-1.1-.4.3-.6.7-.8 1-.4.5-.8.9-1.2 1.4-.3 0-.3.1-.3.4-.8 1-1.6 2-2.4 3.1-1-1.8-1.9-3.6-2.9-5.4-.2-.3-.4-.7-.5-1s-.3-.3-.5-.1c-1.6 1.7-3.1 3.3-4.7 4.9 0 .1-.1.1-.1.2h-.1c-.8-1.9-1.6-3.7-2.4-5.6.1 0 .2 0 .2-.2s-.2-.1-.3-.1c-.2-.3-.3-.7-.5-1.1-1.9 1.7-3.7 3.3-5.6 5-.1-.4-.3-.8-.4-1.2-.6-1.7-1.1-3.3-1.7-5-.4-1.1-.4-1.1-1.3-.4-1.6 1.2-3.2 2.3-4.8 3.5-.3.2-.4.4-.6-.2l-1.2-5.1c-.1-.6-.2-1.2-.4-1.8.1 0 .1-.1 0-.2s-.1.1-.1.1c-.9.4-1.7 1-2.6 1.5-1.2.7-2.5 1.5-3.7 2.3-.1-.8-.3-1.5-.4-2.2-.1-.9-.3-1.7-.4-2.6l-.3-2.4c0-.3 0-.4-.3-.2-1.1.6-2.2 1.1-3.4 1.7-.9.5-1.9.9-2.9 1.4-.1.1-.3.1-.3-.1s-.1-.3-.1-.5c.1-1.6-.2-3.2-.2-4.8 0-.6-.1-1.2-.1-1.8 0-.3-.1-.3-.3-.2-1.9.7-3.7 1.5-5.6 2.2-.4.1-.7.2-1.1.4l-.1-.1c.1-1.5.1-3 .2-4.6v-1c.1-.2.1-.3 0-.5v-1c.1-.4-.2-.4-.5-.4-.9.2-1.7.5-2.6.7-1.3.4-2.6.8-3.9 1.1-.2.1-.4 0-.3-.3.2-1 .3-2 .3-3 .1 0 .2 0 .1-.2.1-.8.2-1.6.2-2.3 0-.5.1-1 .2-1.4 0-.3-.1-.3-.3-.3-.9.2-1.8.4-2.8.6-1.4.3-2.8.5-4.1.8 0 0 0-.1-.1-.1.1-.8.3-1.6.5-2.5.2-1.1.5-2.2.7-3.4.1-.4.1-.8.3-1.2.1-.3 0-.3-.3-.3-.9 0-1.7.2-2.6.3-.8.1-1.5.2-2.3.3-.7.1-1.4.3-2.2.2l-.1-.1c.1-.6.3-1.1.5-1.7.3-1.2.7-2.4 1.1-3.7.2-.5.3-1.1.5-1.6.1-.2 0-.3-.2-.3H23c-.1-.1-.2-.1-.3 0-1.9.1-3.8.1-5.7.1.6-1.6 1.3-3.3 1.9-4.9l.1-.1c0-.1.1-.3.1-.4l.1-.1c0-.1.1-.3.1-.4l.1-.1c.5-1.2.5-1.2-.9-1.2-2-.1-4.1-.2-6.2-.4 1.2-2.3 2.3-4.5 3.4-6.9-.9-.1-1.8-.3-2.7-.4-.9-.1-1.7-.4-2.6-.3-.1 0-.3-.1-.4-.1 0-.1-.1-.1-.2-.1-.5.1-.9-.2-1.4-.1-.1 0-.1-.1 0-.2.1-.2.2-.4.3-.5 1.1-1.8 2.2-3.5 3.3-5.3.1-.2.2-.3.3-.5-1.8-.4-3.6-.9-5.3-1.3-.5-.1-1-.2-1.4-.3s-.6-.2-.2-.6c1.3-1.7 2.6-3.4 3.9-5.2.1-.2.2-.3.4-.5l-6.9-2.4v-.3l4.5-5.1c.3-.3.3-.4-.1-.6-2.1-.9-4.3-1.9-6.5-2.8 1.9-1.8 3.7-3.5 5.6-5.3l-6.6-3.6 6-4.8c-1.3-.8-2.6-1.7-3.8-2.5 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1l-.1-.1c0-.1-.1-.2.1-.2l.1-.1c.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.1 0 .1-.1.2-.1l.1-.1c.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.7-.4 1.3-.9 2-1.3l.1-.1c.1 0 .1-.1.2-.1l.1-.1c.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.1 0 .1-.1.2-.1l.1-.1c.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.3-.2.7-.4 1-.7 0 0 .1 0 .1-.1h-.1c-1.4-1.1-2.7-2.2-4.1-3.2-.5-.4-1-.8-1.5-1.3v-.2c.4-.2.8-.5 1.3-.7 0 0 .1 0 .1-.1.4-.2.8-.4 1.3-.7 0 0 .1 0 .1-.1.4-.2.8-.4 1.3-.7 0 0 .1 0 .1-.1.4-.2.8-.4 1.3-.7 0 0 .1 0 .1-.1.4-.2.7-.4 1.1-.6-1.7-1.7-3.6-3.3-5.2-5.1v-.2c1.4-.2 2.5-.7 3.5-1.1 1.1-.5 2.3-1 3.4-1.4.2-.1.2-.1.1-.3-.7-.8-1.3-1.5-2-2.3s-1.4-1.5-2.1-2.4c0 0 0-.1-.1-.1-.7-.7-.7-.8.3-1.1 1.9-.6 3.9-1.3 5.8-1.9.6-.2.6-.2.2-.7-.2-.2-.3-.4-.5-.6 0 0 0-.1-.1-.1-.8-1.1-1.6-2.1-2.4-3.2-.4-.5-.7-1-1.1-1.5v-.2c1-.3 2-.5 3-.7 1.2-.3 2.5-.6 3.8-.9.6-.1.6-.2.3-.7-1.1-1.8-2.2-3.5-3.3-5.3 0-.2-.1-.4-.1-.6zm125.3-41.1c0-.1-.1-.3-.2-.1-.2 0-.4-.1-.5-.1l-.1-.1c-2.1-.7-4.3-1.5-6.4-2.1-2.1-.6-4.2-1.2-6.4-1.6-1.4-.3-2.7-.5-4.1-.8-1.3-.2-2.6-.4-4-.6-1.2-.1-2.4-.2-3.7-.4-1.5-.1-3-.2-4.4-.3-1.1-.1-2.2 0-3.3 0-1.5 0-3 0-4.6.1l-4.2.3c-1.2.1-2.4.2-3.5.4-1.9.3-3.9.6-5.8 1-2.3.5-4.5 1-6.8 1.6-1.8.5-3.6 1.1-5.4 1.7-2.7.9-5.2 2-7.8 3.1-.9.4-1.7.8-2.5 1.2-10 4.9-18.8 11.5-26.5 19.6-6.5 6.9-11.9 14.7-16 23.2-2 4.1-3.6 8.3-5 12.6-.4 1.4-.9 2.9-1.3 4.3-.4 1.5-.7 3-1 4.6-.2 1.2-.5 2.3-.6 3.5v.1c-.1.4-.2.9-.2 1.3-.1.1-.1.2-.1.3 0 .4-.1.8-.1 1.3-.3 1.5-.3 3.1-.5 4.6-.1.8 0 1.5-.1 2.3-.2 1.8-.2 3.6-.2 5.3.1 2.5 0 4.9.3 7.4.1.9.1 1.8.2 2.7.2 1.6.4 3.2.7 4.7.5 2.8 1.1 5.7 1.8 8.4.6 2.5 1.4 4.9 2.2 7.3 1.4 3.9 3.1 7.8 5 11.5 2.2 4.3 4.7 8.3 7.5 12.2 2.4 3.2 4.9 6.3 7.7 9.2 2.2 2.3 4.5 4.4 6.9 6.5 2.5 2.1 5.1 4.1 7.7 5.9 4.6 3.1 9.4 5.8 14.4 8.1 1.8.8 3.7 1.6 5.6 2.3 2.8 1 5.6 2 8.5 2.7 1.4.3 2.8.7 4.2 1 2.2.5 4.5.8 6.7 1.2.4.1.8.3 1.3 0 0 .2.1.2.3.1.7.1 1.4.1 2.1.2 1.4.3 2.9.3 4.4.4 4.2.1 8.4.2 12.5-.3 2.2-.2 4.4-.4 6.5-.8 6.9-1.1 13.5-2.9 20-5.5 3.2-1.3 6.3-2.8 9.4-4.4 0 0 .1 0 .1-.1.6-.3 1.2-.7 1.8-1 0 0 .1 0 .1-.1.4-.2.8-.5 1.2-.7 0 0 .1 0 .1-.1.1-.1.3-.2.4-.2 0 0 .1 0 .1-.1.2-.2.5-.3.7-.5 0 0 .1 0 .1-.1.1-.1.3-.2.4-.2l.1-.1c.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1 3.5-2.2 6.8-4.7 10-7.3.5.3.3-.2.3-.3 1.2-1 2.3-2 3.5-3.1.9-.8 1.8-1.7 2.7-2.6.4.1.6-.1.5-.5.5-.5.9-1 1.4-1.5.2 0 .3-.1.3-.3 1.5-1.7 2.9-3.3 4.3-5.1 1.7-2.2 3.3-4.4 4.9-6.7 2.3-3.4 4.2-6.9 6-10.6 3.4-7 5.8-14.3 7.3-21.9.4-2.1.7-4.1 1-6.2.2-1.5.4-3.1.5-4.7.1-1 .1-2 .1-3 .1-1.5.1-2.9.1-4.4 0-1.7-.1-3.4-.2-5.2v-.3c-.1-1.1-.2-2.1-.3-3.2-.1-.8-.1-1.6-.2-2.4-.2-1.1-.3-2.2-.5-3.3-.2-.9-.3-1.9-.5-2.8-.2-1.1-.5-2.2-.7-3.2-.5-2.4-1.2-4.7-1.9-7-.5-1.5-1-3-1.5-4.4l-.1-.1c-.4-1-.7-1.9-1.1-2.9l-.1-.1-.9-2.1-.1-.1c-.4-1-.9-1.9-1.3-2.9l-.1-.1c-.9-1.9-1.9-3.7-2.9-5.5-1.1-2-2.3-3.9-3.6-5.8-3.7-5.6-8.1-10.6-13-15.3-1.9-1.8-3.9-3.5-6-5.2 0-.1.1-.3-.1-.4-.1-.1-.2 0-.2.1-3.7-2.8-7.4-5.5-11.5-7.7-1.3-.7-2.5-1.5-3.8-2.1l-.1-.1c-.1-.1-.2-.1-.3-.1l-.1-.1c-.2-.1-.3-.2-.5-.2l-.1-.1c-.4-.2-.7-.4-1.1-.5-1.2-.6-2.5-1.1-3.8-1.6-.9-.4-1.7-.7-2.6-1 .4.3.4.3.3.2zm-3.8-3.7c.1 0 .2 0 .2-.1s-.1-.2-.2-.2-.1 0-.1.1 0 .2.1.2zM109.5 204c0-.1 0-.1-.1-.1s-.2 0-.1.1c0 .1.1.1.1.1.1.1.1 0 .1-.1zm-57.1-20c-.1 0-.1-.1-.1-.1-.1 0-.1 0-.1.1 0 0 .1.1.2 0 0 .1 0 .1 0 0zm35.8 13.3c0 .1 0 .1 0 0v.1c.1 0 .1 0 0-.1.1.1.1.1 0 0zm7.7 1.6c-.1 0-.1-.1 0 0-.1 0-.1.1 0 0-.1 0-.1 0 0 0z"
                          />
                          <path
                            fill="#000"
                            d="M131 4.1c-.1.3-.3.1-.5.1.2 0 .2-.6.5-.1zM85.8 2.8c.2 0 .3.1.2.2-.1.2-.2.2-.4.2.1-.1.2-.3.2-.4zM42.4 179.6c.1.2.1.3 0 .5-.2-.1-.2-.3 0-.5zm87.3 16.2c-.1 0-.3 0-.3-.1 0-.2.2-.2.4-.2 0 .1 0 .2-.1.3zm-49.2 1.7c.1 0 .3-.1.3.1 0 .1-.1.2-.2.2 0-.1-.1-.2-.1-.3zm57-3.8c-.1 0-.2 0-.2-.2s.2-.1.3-.1c0 .1.1.2-.1.3zm25.3-167.9c-.1 0-.2 0-.2-.1s.1-.2.2-.2v.3zm22.3 26.5c0 .1 0 .2-.2.2 0 0-.1 0-.1-.1s.1-.2.2-.2c0 .1.1.1.1.1zm1 .2c0 .1 0 .2-.1.2s-.2-.1-.2-.3c.1 0 .2-.1.3.1zm-16.2-27.2c-.1 0-.3 0-.4-.1.2 0 .4-.3.4.1zm21.4 115.8c0-.1 0-.2.1-.3.1 0 .1.1.1.2-.1.1-.2.1-.2.1zm-80.8 62.7c-.1 0-.2 0-.2-.1s.2-.1.3-.1c0 0 0 .1-.1.2zM20.9 46.1c.2 0 .2.2.2.3-.1-.1-.3-.1-.2-.3zM23.1 160c.1-.1.2-.1.3 0-.1.2-.2.2-.3 0zm-2-113.5c.1 0 .2 0 .2.1l-.1.1c-.1 0-.1 0-.1-.2zm73.2 155.3c0-.2 0-.4.3-.4-.1.2-.1.3-.3.4zm7.4 2.2c0-.2 0-.3.2-.3 0 .1 0 .2-.2.3zM26.4 40.2c.2 0 .2.2.2.3-.1-.1-.2-.2-.2-.3zm148.9-8.8c0 .2-.2.2-.3.2 0-.1.1-.2.3-.2zM3.2 127.3v.3c-.1 0-.2 0-.2-.1s.1-.2.2-.2zM42.1 24.1c-.1 0-.2 0-.2-.1.2-.3.1 0 .2.1zM176 38.7c0 .1 0 .1-.1.1s-.1-.1-.1-.1h.2zm-140.4 138c.1.2 0 .2-.1.2 0-.1 0-.2.1-.2zM1.9 83v.2c-.1 0-.2 0-.2-.1s.1-.1.2-.1zm8.4 61.7c.1 0 .1 0 .2.1l-.1.1c0-.1 0-.2-.1-.2zm127.6 47.9c0-.1 0-.1.1-.2.1 0 .1.1.1.1-.1.1-.2.1-.2.1zm50.7-140c0 .1 0 .1-.1.1s-.1-.1-.1-.1h.2zM63.9 191.2c0-.1 0-.2.1-.1.1 0 0 .1-.1.1zm96-3.5c0-.1.1-.2.2-.2 0 .2 0 .3-.2.2zM.5 91.8v.2c-.1 0-.1-.1 0-.2zm5.6 4.7c.1 0 0 0 0 0 .1.1.1.1 0 0zm.7-30.7v.2c-.1 0-.2-.1 0-.2zm31.4-42.9H38c0-.2.1-.1.2 0zM3.6 98.4c-.1 0-.1-.1 0 0zm-3 3s.1 0 .1.1l-.1-.1zm.4.2s.1 0 .1.1c-.1 0-.1 0-.1-.1zm.3.2s.1 0 .1.1c-.1 0-.1 0-.1-.1zm.3.2.1.1c-.1.1-.1 0-.1-.1zm.3.3.1.1c-.1 0-.1-.1-.1-.1zm.3.2s.1 0 0 0zM0 100.9l.1.1c-.1.1-.1 0-.1-.1zm.2-.3-.1.1c0-.1 0-.1.1-.1zm.3-.2s-.1 0 0 0c-.1 0 0 0 0 0zm.4-.2-.1.1c0-.1 0-.2.1-.1zm.3-.2s-.1 0-.1.1c0-.1 0-.2.1-.1zm.3-.2s-.1 0-.1.1c0-.1 0-.2.1-.1zm2.4-1.6c-.1 0-.1-.1 0 0zm.3-.3s-.1 0 0 0zm.4-.2c-.1.1-.1 0 0 0zm.3-.2s-.1 0 0 0c-.1 0-.1 0 0 0zm.3-.2s-.1 0 0 0c-.1 0-.1 0 0 0zm26.2-68.5c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0zM1.9 91.1s-.1 0-.1.1c0-.1 0-.2.1-.1zm1.4-.8s-.1 0 0 0c-.1 0-.1 0 0 0zm1.4-.7s-.1 0 0 0c-.1 0-.1-.1 0 0zm1.3-.8s-.1 0 0 0zm13.8 65.3c-.1 0 0 0 0 0zm-.2.5s0 .1 0 0c-.1 0-.1 0 0 0zm-.2.5c0 .1-.1.1 0 0-.1.1-.1 0 0 0zM.3 101.2s.1 0 0 0c.1.1 0 .1 0 0zm19.3-58.9s0 .1 0 0c-.1 0-.1 0 0 0zm-9.4 28.4s.1 0 0 0c0 .1 0 .1 0 0zm175.4 92.4c.1-.1.1-.1 0 0 .1-.1.1 0 0 0zM142.4 13.4s-.1 0-.1.1c0-.1 0-.1.1-.1zm.5-.3s-.1 0-.1.1c0-.1.1-.2.1-.1zM22.8 167.2s.1.1 0 0c0 .1 0 .1 0 0zM143.5 12.8l-.1.1c0-.1 0-.2.1-.1zm.5-.4s-.1 0-.1.1c0 0 0-.1.1-.1zm1.4-.8s-.1 0-.1.1c0-.1 0-.1.1-.1zm.5-.3s-.1 0-.1.1c0-.1 0-.2.1-.1zm.5-.3s-.1 0-.1.1c0-.1.1-.2.1-.1zM28.8 173.9c0 .1-.1.1 0 0zM20.4 44.7c0 .1 0 .1 0 0 0 .1-.1.1 0 0zM147 10.6l-.1.1s0-.1.1-.1zm.6-.2h-.2c0-.1.1-.1.2 0zM16.1 53.1c.1 0 .1.1 0 0 0 .1 0 .1 0 0zm26.1 132.5c0 .1.1.1 0 0 0 .1 0 .1 0 0zM15.9 52.7s.1 0 0 0c0 .1 0 0 0 0zm-.2-.4s.1 0 0 0zm123.1 140.8s.1 0 .1.1c-.1 0-.1-.1-.1-.1zM15.5 51.8c0 .1.1.1 0 0 0 .1 0 .1 0 0zm123.8 141.6s.1 0 .1.1l-.1-.1zm.9.5s.1 0 .1.1c-.1 0-.1 0-.1-.1zm-2-186.3-.1.1c0-.1 0-.2.1-.1zm2.5 186.6.1.1c-.1 0-.1 0-.1-.1zm.3.2s.1 0 .1.1-.1 0-.1-.1zm.5.4.1.1s0-.1-.1-.1zm.3.1.1.1c-.1 0-.1-.1-.1-.1zm.6.4s.1 0 .1.1c-.1 0-.1-.1-.1-.1zm.5.3s.1 0 .1.1l-.1-.1zm.9.5s.1 0 .1.1c-.1.1-.1 0-.1-.1zm-4.3-189c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z"
                          />
                          <path
                            fill="#fff"
                            d="M134.9 16.3c.2 0 .4.1.5.1 0 .1.1.1.2.1 0 .1 0 .1.1.1.9.3 1.7.7 2.6 1 1.3.5 2.5 1.1 3.8 1.6.4.2.7.3 1.1.5 0 .1 0 .1.1.1.2 0 .4.1.5.2 0 .1 0 .1.1.1s.2 0 .3.1c0 .1 0 .1.1.1 1.3.6 2.6 1.4 3.8 2.1 4.1 2.2 7.8 4.9 11.5 7.7l.3.3c2 1.7 4.1 3.4 6 5.2 4.9 4.6 9.2 9.7 13 15.3 1.3 1.9 2.5 3.8 3.6 5.8 1 1.8 2 3.7 2.9 5.5 0 .1 0 .1.1.1.4 1 .9 1.9 1.3 2.9 0 .1 0 .1.1.1l.9 2.1c0 .1 0 .1.1.1.4 1 .7 1.9 1.1 2.9 0 .1 0 .1.1.1.5 1.5 1.1 2.9 1.5 4.4.7 2.3 1.4 4.6 1.9 7 .2 1.1.5 2.2.7 3.2.2.9.3 1.9.5 2.8.2 1.1.3 2.2.5 3.3.1.8.1 1.6.2 2.4.1 1.1.2 2.1.3 3.2v.3c.1 1.7.2 3.4.2 5.2 0 1.5 0 2.9-.1 4.4-.1 1-.1 2-.1 3-.1 1.6-.3 3.1-.5 4.7-.3 2.1-.6 4.2-1 6.2-1.5 7.6-3.9 14.9-7.3 21.9-1.8 3.7-3.7 7.2-6 10.6-1.5 2.3-3.2 4.5-4.9 6.7-1.4 1.7-2.8 3.4-4.3 5.1-.1.1-.3.2-.3.3-.5.5-.9 1-1.4 1.5-.2.1-.4.3-.5.5-.9.9-1.8 1.8-2.7 2.6-1.1 1.1-2.3 2.1-3.5 3.1l-.3.3c-3.2 2.6-6.5 5.1-10 7.3-.1 0-.1 0-.1.1-.1 0-.1.1-.2.1s-.1 0-.1.1c-.1.1-.3.2-.4.2-.1 0-.1 0-.1.1-.2.2-.5.3-.7.5-.1 0-.1 0-.1.1-.1.1-.3.2-.4.2-.1 0-.1 0-.1.1-.4.2-.8.5-1.2.7-.1 0-.1 0-.1.1-.6.3-1.2.7-1.8 1-.1 0-.1 0-.1.1-3.1 1.6-6.2 3.1-9.4 4.4-6.4 2.7-13.1 4.4-20 5.5-2.2.3-4.3.5-6.5.8-4.2.4-8.4.4-12.5.3-1.4 0-2.9-.1-4.4-.4-.7-.1-1.4-.1-2.1-.2-.1-.2-.2-.1-.3-.1-.4.2-.9 0-1.3 0-2.2-.4-4.5-.7-6.7-1.2-1.4-.3-2.8-.7-4.2-1-2.9-.7-5.7-1.7-8.5-2.7-1.9-.7-3.8-1.4-5.6-2.3-5-2.3-9.9-5-14.4-8.1-2.7-1.8-5.3-3.8-7.7-5.9-2.4-2-4.7-4.2-6.9-6.5-2.8-2.9-5.3-6-7.7-9.2-2.8-3.9-5.3-7.9-7.5-12.2-1.9-3.7-3.6-7.5-5-11.5-.9-2.4-1.6-4.8-2.2-7.3-.7-2.8-1.3-5.6-1.8-8.4-.3-1.6-.5-3.2-.7-4.7-.1-.9-.1-1.8-.2-2.7-.3-2.5-.3-4.9-.3-7.4 0-1.8 0-3.6.2-5.3.1-.7 0-1.5.1-2.3.2-1.5.2-3.1.5-4.6.1-.4.1-.8.1-1.3 0-.1.3-.1.1-.3 0-.4.1-.9.2-1.3h.1-.1c.1-1.2.4-2.3.6-3.5.3-1.5.7-3 1-4.6.3-1.5.8-2.9 1.3-4.3 1.3-4.3 3-8.5 5-12.6 4.1-8.6 9.5-16.3 16-23.2 7.6-8.1 16.5-14.6 26.5-19.6.8-.4 1.7-.8 2.5-1.2 2.6-1.1 5.2-2.2 7.8-3.1 1.8-.6 3.6-1.2 5.4-1.7 2.2-.7 4.5-1.2 6.8-1.6 1.9-.4 3.8-.7 5.8-1 1.2-.2 2.3-.3 3.5-.4l4.2-.3c1.5-.1 3-.1 4.6-.1 1.1 0 2.2-.1 3.3 0 1.5.1 3 .1 4.4.3 1.2.1 2.5.2 3.7.4 1.3.2 2.6.3 4 .6s2.8.5 4.1.8c2.2.4 4.3 1 6.4 1.6 1.7.2 3.9 1 6.1 1.8-.1 0-.1 0 0 0zM61.3 164.2c-1 1.7-1.9 3.5-2.8 5.3-.2.5-.4 1-.4 1.6 0 1.1.4 2.1 1.1 2.9 2.1 2.3 4.7 3.7 7.7 4.3 2.2.4 3.8-.3 4.9-2.2 1.2-2.2 2.4-4.5 3.5-6.7.1-.2.1-.3-.1-.4-1.3-.7-2.6-1.3-3.9-2-.3-.1-.3-.1-.5.2-.7 1.5-1.5 2.9-2.3 4.3-.4.8-.7 1.6-1.3 2.3-.4.6-1 .9-1.8.8-.7-.1-1.4-.5-1.9-1s-.8-1.1-.5-1.8c.3-.9.8-1.6 1.2-2.5.7-1.4 1.5-2.8 2.2-4.2.1-.2.3-.4 0-.6-1.3-.7-2.7-1.4-4-2.1-.2-.1-.2-.1-.3.1-.3.5-.5 1.1-.8 1.7.1-.1 0 0 0 0zm-24.8-20.9c-.4.3-.9.6-1.3 1-.9.7-1.7 1.4-2.6 2-.1 0-.1 0-.1.1-.5.3-.9.7-1.4 1-.1.1-.3.2-.1.4.3.3.6.7.8 1 .9 1.2 1.9 2.4 2.8 3.7 1.5 1.9 2.9 3.8 4.4 5.7.2.2.3.2.5.1.7-.5 1.3-1.2 2-1.6.2-.1.1-.2 0-.4-.3-.3-.6-.6-.8-1-1.2-1.7-2.5-3.3-3.7-5-.5-.7-.5-.7.2-1.3.4-.4.6-.2.8.1 1.3 1.8 2.7 3.6 4 5.3.1.2.3.2.5.1.4-.3.8-.6 1.3-.9.9-.7.9-.7.2-1.6-1.3-1.7-2.6-3.3-3.8-5-.4-.5.4-.5.5-.7.1-.1.3-.6.6-.2 1.6 2.1 3.2 4.2 4.9 6.3 0 .1 0 .1.1.1.8-.4 1.3-1 2.1-1.5.5-.3.4-.5.1-.9-2.4-3.1-4.7-6.1-7-9.2-.3-.3-.4-.8-.9-1-.1 0-.1 0-.1.1-.6.4-1.1.9-1.7 1.3-.1 0-.1 0-.1.1-.7.5-1.4 1.1-2.1 1.6 0 .2 0 .2-.1.3zm-8.7-67.5c-.1.4-.2.7-.3 1.1-.1 0-.1 0-.1.1-.5 1.5-1 3.1-1.5 4.6-.5 1.9-.9 3.9-1.4 5.8-.2.1-.1.2-.1.3 0 .6-.3 1.1-.2 1.7 0 .1 0 .1.1.1.1.1.3.1.5.1.4 0 .8.1 1.1.1.8.1 1.6.2 2.4.2.2 0 .2-.1.3-.2.2-1.3.4-2.6.8-3.8 1-3.9 2.2-7.8 3.7-11.5 1.5-3.6 3.3-7.1 5.3-10.4 2.6-4.2 5.6-8.1 9-11.7 2.1-2.3 4.4-4.4 6.8-6.4.3-.2.3-.3.1-.6-.7-.9-1.4-1.7-2.1-2.6-.3-.3-.4-.4-.8-.1-3.5 3-6.8 6.2-9.8 9.7-1.1 1.3-2.1 2.6-3.1 3.9-1.9 2.5-3.6 5.1-5.1 7.8-1 1.8-2 3.7-2.9 5.6-.1 0-.1 0-.1.1-.2.4-.4.9-.6 1.3-.1 0-.1 0-.1.1l-.9 2.1c-.1 0-.1 0-.1.1-.2.8-.5 1.6-.9 2.5 0-.1 0-.1 0 0zM58.7 36c0 .1.1.1.1.2.5 1 1 2 1.4 3.1 0 .1.1.1.1.2.7 1.7 1.5 3.3 2.3 5 .1.2.2.5.3.7.1.3.2.5.3.7s.2.5.3.7l.3.6c.1.4.3.5.7.3 1.6-.8 3.2-1.5 4.8-2.3.3-.2.9-.2 1-.5s-.3-.7-.4-1.1c-.4-.9-.9-1.8-1.3-2.7-.7-1.6-1.4-3.2-2.2-4.7-.1-.7-.6-1.2-.8-1.9.1 0 .2 0 .2.1.2.2.4.4.6.7.7.8 1.5 1.4 2.2 2.2.1.2.3.4.5.5 0 .1.1.1.1.2.9.8 1.8 1.6 2.5 2.5.7.8 1.4 1.5 2.1 2.3.2.2.3.3.6.1 1.4-.7 2.8-1.4 4.2-2 .4-.2.4-.4.4-.7-.1-1.2-.3-2.4-.4-3.6-.1-1-.1-1.9-.2-2.9-.2-1.8-.4-3.5-.5-5.3h.1c.6 1.4 1.3 2.8 1.9 4.3 0 .1 0 .1.1.1.2.5.4 1 .7 1.5 0 .1 0 .1.1.1.7 1.5 1.4 3 2 4.5 0 .1 0 .1.1.1h.1c2-.9 4-1.9 6-2.8.3-.1.2-.2.1-.4-.6-1.3-1.2-2.5-1.8-3.8-.9-1.9-1.8-3.9-2.7-5.8-1-2.2-2.1-4.5-3.1-6.7-.1-.3-.3-.3-.5-.2-1 .5-2.1 1-3.1 1.5-2 .9-4 1.9-5.9 2.8-.1 0-.1 0-.1.1s-.1.2 0 .4c.2 1.1.3 2.3.5 3.4.2 1.2.3 2.4.5 3.6s.3 2.5.5 3.7c0 .1.1.2-.1.2-.1 0-.2 0-.2-.1-.3-.4-.7-.8-1-1.1-2.1-2.3-4.1-4.5-6.2-6.8-.2-.2-.3-.2-.6-.1-.6.3-1.2.6-1.9.9-2.3 1.1-4.6 2.2-6.9 3.2-.2.1-.5.1-.3.4.9 1.3 1.7 3 2.5 4.6zM45.9 79.4c0 .1-.1.3-.1.4-.1 0-.1 0-.1.1l-.6 1.8c-.5 1.4-.9 2.8-1.3 4.2-.3 1.1-.6 2.3-.9 3.5-.2 1.3-.4 2.5-.7 3.8-.2 1.3-.4 2.6-.5 3.9s-.2 2.7-.2 4v4.6c.1 1.7.2 3.4.5 5.1.2 1.7.5 3.4.9 5.1.5 2.4 1.2 4.8 2 7.2 0 .1 0 .1.1.1.2.6.4 1.3.7 1.9 0 .1 0 .1.1.1 0 .1.1.3.1.4s0 .1.1.1c0 .1.1.3.1.4s0 .1.1.1c.2.5.4.9.6 1.4 0 .1 0 .1.1.1.2.6.5 1.1.7 1.6.8 1.6 1.5 3.1 2.4 4.6 1.5 2.5 3.1 5 5 7.2 1.2 1.5 2.4 2.9 3.7 4.3 1.8 1.8 3.6 3.6 5.6 5.2l3 2.4c0 .1 0 .1.1.1.2.2.4.3.6.5 0 .1 0 .1.1.1l3.3 2.1c0 .1 0 .1.1.1.8.6 1.8 1 2.7 1.5 1.1.6 2.2 1.1 3.3 1.8h.1c1 .3 1.8.8 2.7 1.1.4.1.7.3 1.1.5 0 .1.1.1.2.1.5.2 1 .3 1.5.5 1.1.5 2.2.8 3.3 1.1 1.8.5 3.7 1 5.5 1.3.9.2 1.9.4 2.8.5v.1-.1c1.5.3 2.9.4 4.4.5 1 .1 2 .2 3 .2h2.5c1.2 0 2.4-.1 3.7-.2 1.9-.1 3.8-.3 5.7-.6 1.4-.3 2.8-.5 4.2-.8 1.1-.3 2.1-.6 3.3-.8.2.1.2 0 .2-.2 1.1-.3 2.3-.7 3.4-1.1 1.8-.6 3.5-1.4 5.2-2.2 3-1.4 5.9-3.1 8.7-5 1.6-1.1 3.1-2.2 4.5-3.4l.3-.3c2.1-1.7 4-3.5 5.8-5.5 2.1-2.3 4-4.6 5.7-7.2 0-.1.1-.2.1-.2l.3-.3c2.9-4.3 5.1-8.9 6.9-13.7.7-2 1.3-3.9 1.7-6 .3-1.5.7-3 .9-4.5.2-1.4.4-2.8.5-4.2.1-.7.1-1.3.2-2h.1-.1c0-1.8.2-3.7 0-5.5-.1-1.7-.1-3.3-.3-5-.1-1.3-.3-2.5-.5-3.7-.4-2.3-.9-4.6-1.6-6.8-1.5-5.2-3.6-10.1-6.4-14.7-3-5-6.6-9.5-10.8-13.4-2.5-2.3-5.1-4.5-7.9-6.3-2-1.4-4.1-2.6-6.3-3.7a73.9 73.9 0 0 0-11.3-4.5c-3-.9-6.1-1.5-9.2-1.9-1.7-.2-3.4-.3-5.1-.4-1.6-.1-3.1-.1-4.7 0-1.8 0-3.5.2-5.3.4v-.1.1l-2.1.3c-2.4.3-4.7.8-7.1 1.5-2.9.8-5.7 1.7-8.4 2.9-2 .9-4 1.9-5.9 3-.1 0-.1 0-.1.1-.2.1-.4.2-.6.4-.1 0-.1 0-.1.1-.1.1-.3.2-.4.3-.1 0-.1 0-.1.1-.1.1-.3.2-.4.2s-.1 0-.1.1c-.2.2-.5.3-.7.5-.1 0-.1 0-.1.1-.1 0-.1.1-.2.1s-.1 0-.1.1c-.1 0-.1.1-.2.1s-.1 0-.1.1c-.1 0-.1.1-.2.1s-.1 0-.1.1c-.1 0-.1.1-.2.1s-.1 0-.1.1c-.4.4-.9.6-1.4 1-.4.4-1 .7-1.5 1.1-.3-.8-.3-.8-.3-.7-.7.5-1.3 1.1-2 1.6-1 .8-2 1.7-2.9 2.6-1.5 1.4-2.9 2.9-4.3 4.5-1.2 1.4-2.3 2.7-3.3 4.2-1.8 2.4-3.3 4.9-4.7 7.5-.4.7-.8 1.4-1.1 2.2-.1 0-.1 0-.1.1-.2.4-.4.9-.6 1.3-.1 0-.1 0-.1.1l-.3.9c-.1 0-.1 0-.1.1-.2.3-.4.7-.6 1.2 0-.1 0-.1 0 0zm80.4-41c1.1.1 2.2-.1 3.3-.4 1.8-.5 3.2-1.5 4.3-3 1-1.4 1.5-3.1 1.7-4.8.3-2.2-.2-4.3-1.6-6.1-1.5-2-3.6-3.1-5.9-3.8-4.1-1.1-8.2-2.2-12.3-3.2-.4-.1-.4 0-.5.3-.3 1.4-.7 2.7-1 4.1l-1.8 6.9c-.6 2.1-1 4.2-1.7 6.3-.1.2-.1.3.2.4.8.2 1.6.5 2.4.7 2.4.5 4.8 1.3 7.2 1.9 1.9.3 3.7.8 5.7.7zm54 51.2c.6.1 1.1-.2 1.7-.2.2 0 .2-.2.1-.3-.2-1.1-.4-2.1-.6-3.2-.7-3.1-1.6-6.2-2.7-9.3-2.1-5.8-4.8-11.4-8.2-16.5-2.1-3.1-4.3-6.1-6.8-8.9-2.7-3.1-5.7-6-8.9-8.7-.2-.2-.3-.2-.5.1-.7.9-1.5 1.8-2.2 2.7-.2.2-.2.4 0 .6 2.8 2.3 5.4 4.8 7.8 7.5.9 1 1.8 2.1 2.7 3.1 1.2 1.5 2.3 3 3.4 4.5 1.7 2.4 3.2 5 4.6 7.6 1 1.9 1.8 3.8 2.7 5.7.9 2.2 1.8 4.5 2.4 6.8.3 1.2.7 2.4 1 3.6.4 1.6.8 3.2 1 4.9 0 .3.2.5.6.4.5-.3 1.2-.3 1.9-.4zm-72-68.3h.6c.4 0 .5 0 .5-.5-.1-.8 0-1.5-.1-2.3-.1-.6 0-1.2-.1-1.8 0-.3-.2-.4-.5-.4-1.2.1-2.4.2-3.5.3-1.5.1-2.9.2-4.4.3-2 .1-4.1.3-6.1.4-1.3.1-2.6.1-3.9.3-.7.1-1.4 0-2 .2-.3.1-.3.2-.3.4.2 1.3.2 2.7.3 4.1 0 .2.1.4.3.3.6 0 1.2-.1 1.8-.1 1.4-.1 2.7-.2 4.1-.3.5 0 .6.1.5.5 0 .3-.1.7 0 1 .2.8.1 1.6.2 2.3.1.7.1 1.4.1 2.1.1 1.2.1 2.4.3 3.6.1 1.3.2 2.5.2 3.8 0 .2 0 .3.3.3.6 0 1.2.1 1.9 0 1.4-.2 2.9-.3 4.3-.3.3 0 .5-.1.8-.1.2 0 .2-.2.2-.3-.1-1.3-.2-2.7-.3-4-.1-1.7-.3-3.4-.4-5.1-.1-1.3-.1-2.6-.3-3.8-.1-.5.1-.6.5-.6 1.6 0 3.3-.2 5-.3zM25 110.2c4.6.1 8-3.6 8.1-7.6.2-5.2-3.9-8.3-7.7-8.4-5-.1-8.1 3.6-8.3 7.4-.2 5.1 3.8 8.6 7.9 8.6zm147.3-8.1c-.1 4.5 3.6 7.9 7.5 8.1 4.9.2 8.5-3.6 8.4-8 0-4.5-3.5-7.9-7.9-8s-8.1 3.6-8 7.9zm-119 61.3v-1.3c.1-1.3.2-2.6.3-3.8 0-.6.1-1.2.2-1.9.1-.6.1-1.2-.6-1.7-1-.7-1.9-1.6-2.8-2.4-.3-.3-.6-.3-.8.1-.6.8-1.3 1.6-2 2.4-1.8 2.1-3.6 4.2-5.3 6.3-.2.2-.2.4 0 .6 1 .8 2 1.7 3 2.5.3.3.5.2.7-.1 1.2-1.5 2.5-2.9 3.7-4.4.1-.1.1-.3.4-.3-.2.6-.1 1.2-.2 1.8-.2 2-.3 4.1-.4 6.1 0 .2 0 .4.2.5 1.1.9 2.2 1.8 3.3 2.8.2.2.3.2.5 0 2.5-3 5-6 7.6-8.9.2-.2.2-.3 0-.5-.9-.7-1.7-1.5-2.6-2.2-.8-.7-.8-.7-1.5.1 0 0 0 .1-.1.1-1.2 1.4-2.4 2.7-3.6 4.2zm34.1 14.7c.6 1.1 1.1 2.1 1.6 3 .6 1.2 1.3 2.3 1.8 3.5.3.7.7 1 1.4 1.1 1.2.2 2.4.3 3.5.6.2.1.5 0 .5-.4 0-.2 0-.4.2-.5.1 0 .1-.1 0-.2-.2-.1-.1-.3-.1-.4.2-.9.4-1.8.5-2.7s.3-1.7.5-2.5c.2-1.7.5-3.4.8-5.1 0-.3 0-.3-.3-.4-.6-.1-1.1-.2-1.7-.3-.8-.1-1.6-.3-2.3-.4-.1 0-.4-.1-.5.2l-.3 1.8c-.2 1.4-.4 2.9-.7 4.4-.1-.2-.2-.3-.2-.3-.6-1.3-1.3-2.6-1.9-3.9-.4-.9-1-1.8-1.4-2.7-.1-.3-.3-.3-.5-.3-1.5-.2-2.9-.5-4.4-.7-.3 0-.3 0-.4.3-.1 1-.4 2-.5 3-.4 2.8-.9 5.5-1.4 8.3-.1.4.1.6.5.6 1.2.2 2.3.4 3.5.5.7.1.7.1.8-.6.4-1.9.7-3.9 1-5.9zm73.2-21.9c.2-.4.3-.8.4-1.1.5-1.9-1.2-4.1-3.7-3.6-1.2.3-2.2.9-3.2 1.7-2.3 2.1-4.6 4.2-7 6.3-.3.2-.2.3 0 .6 2.6 2.9 5.2 5.7 7.8 8.6.2.2.3.2.5 0 1-1 2.1-1.9 3.1-2.8.3-.2.3-.4 0-.7-.8-.8-1.6-1.7-2.3-2.6-.1-.1-.3-.2-.1-.4.7-.6 1.4-1.3 2.2-1.9.7-.6 1.4-.5 2.1 0 .5.3.9.8 1.4 1.1.8.6.9.6 1.6-.1l3-2.7c-.7-.3-1.3-.8-1.8-1.3-1-1.1-2.3-1.6-4-1.1zM106.8 183c-.4 0-.8.1-1.2.1-.2 0-.4.1-.4-.2 0-.4-.2-.9.1-1.3h.2c.7 0 1.5-.1 2.2-.1 1.4 0 2.8-.2 4.3-.1.2 0 .3-.1.5-.1.3 0 .3-.1.3-.4-.1-.7-.1-1.4-.1-2 0-.4-.1-.5-.5-.5-2-.1-4.1.2-6.1.2-1.2 0-1.1 0-1.1-1.2 0-.3.1-.3.3-.4 1.7-.1 3.3.1 5-.2.9-.1 1.7-.1 2.6-.1.5 0 .5-.1.5-.6-.1-.6-.2-1.2-.1-1.8.1-.5-.1-.7-.6-.7-1 .1-2.1.2-3.1.2-1.9 0-3.8.1-5.7.2-.7 0-1.4 0-2.1.1-.5 0-1.1.2-1.6.1-.3-.1-.5.1-.4.5.1.7 0 1.3.1 2 .1 1.6.1 3.1.2 4.7s.1 3.2.2 4.8c0 .4.2.5.5.5 1.3 0 2.6-.2 3.9-.2h2.5c.7-.1 1.3-.2 2-.2 1.2-.1 2.4-.1 3.5-.1.3 0 .7-.1 1-.1.1 0 .3 0 .2-.2-.2-.9 0-1.7-.1-2.6 0-.3-.1-.4-.4-.4-.9 0-1.9.2-2.8.2-1.2-.2-2.5 0-3.8-.1zm-78.4-42.4c-.2.1-.4.3-.6.4-.4.2-.3.4-.2.7.3.7.7 1.4 1 2.1.1.3.2.4.5.2 1.9-.9 3.7-1.8 5.6-2.6.2-.1.2-.2.2-.4-.8-1.8-1.7-3.7-2.5-5.5-.1-.2-.1-.4-.4-.2-.6.3-1.2.6-1.8.8-.3.1-.3.2-.2.5.2.4.4.8.5 1.2.1.1.2.3.1.4-.1.1-.3.1-.5 0-.1 0-.3-.1-.4-.2-1.1-.8-1.6-2-1.7-3.3s.8-2.5 2.2-3c1-.4 1.9-.5 2.9.1.8.5 1.2 1.2 1.5 2 .3.9.2 1.6-.4 2.3-.1.1-.1.1 0 .3l1.8 3.9c.2.3.3.2.5.1 1.6-1.4 2-3.3 1.8-5.3-.3-2.6-1.5-4.8-3.4-6.6-1-.9-2.1-1.6-3.5-1.7-2.1-.2-4 .3-5.5 2.1-1 1.3-1.5 2.7-1.4 4.3 0 1.2.3 2.4.8 3.5.4 1.6 1.3 3.1 3.1 3.9zm147-13.6c-1.4-.5-2.6-.3-3.7.6-2.3 1.9-3.2 4.5-3.9 7.3-.2 1 0 2.2.7 3.2.6.9 1.5 1.5 2.6 1.4.8 0 1.5-.5 2.1-1.1.9-.8 1.6-1.8 2.3-2.8.6-.8 1.1-1.6 1.9-2.3.2-.2.5-.4.8-.2s.5.4.5.8c0 1.1-.4 2-1.1 2.8-.4.5-.9.6-1.5.5-.3-.1-.4 0-.5.3l-1.5 3.3c-.1.3-.5.7-.3.9.2.3.7.3 1.1.3h.1c1.5.1 2.6-.6 3.5-1.7 2.3-2.6 3.6-5.6 3.3-9.2-.1-1.6-1.5-3-3.1-3-1.2 0-2.1.7-2.9 1.6-1.1 1.1-1.9 2.5-2.8 3.7-.3.4-.6.8-1 1.1-.2.2-.5.4-.8.2s-.4-.5-.3-.8c.2-.7.5-1.5 1-2.1.3-.3.7-.7 1.2-.5.2.1.2-.1.3-.2.8-1.4 1.4-2.7 2-4.1zm-38.5 45.2c0-1-.4-1.9-1.2-2.7-1.3-1.3-3-1.2-4.6-1-1.3.2-2.5.8-3.8 1.2-1.8.6-3.5 1.3-5.3 1.9-.2.1-.4.1-.3.5 1.3 3.7 2.7 7.3 4 11 .1.2.2.3.4.2.6-.3 1.3-.4 2-.7.7-.3 1.4-.6 2.1-.8.3-.1.3-.2.2-.5-.2-.6-.5-1.3-.7-1.9-.4-1.2-.4-1.2.8-1.6 1.6-.6 3.2-1.1 4.5-2.2 1.3-.9 1.9-1.9 1.9-3.4zm16.7-1.9c-3.8-2.5-7.5-5-11.1-7.5-.3-.2-.4-.1-.6 0-1.2.7-2.3 1.4-3.5 2-.4.2-.5.5-.4.9.1 1.2.2 2.3.3 3.5.1 1.1.1 2.1.2 3.2.2 1.2.2 2.4.3 3.6.1.9.1 1.8.3 2.8 1.1-.7 2.2-1.3 3.3-1.9 1-.6 1-.6.9-1.8v-.3c-.2-.3 0-.5.3-.6.9-.5 1.8-1.1 2.7-1.6.4-.3.9-.7 1.3-.7.5 0 .8.6 1.3.9 0 0 .1 0 .1.1.1.1.2.1.4 0 1.3-.9 2.7-1.8 4.2-2.6zm17.1-17.3c.1-.1.1-.2.2-.3.9-1.2 1.7-2.4 2.6-3.6.2-.3 0-.4-.2-.6-2.2-1.6-4.4-3.2-6.7-4.8-.3-.2-.3-.3-.1-.6.7-.9 1.4-1.9 2.1-2.9.3-.3.3-.5-.1-.8-.7-.4-1.3-.9-1.9-1.3-.2-.2-.3-.1-.5.1-2.6 3.6-5.2 7.3-7.8 10.9-.2.2-.2.4.1.5.7.5 1.3.9 2 1.4.3.2.4.2.6-.1l2.1-3c.2-.3.3-.3.6-.1l6.6 4.8c.1.2.2.3.4.4zM82 171.1c.2-.2 0-.2-.2-.2-1.4-.5-2.8-.9-4.2-1.4-.3-.1-.4-.1-.6.3-.4 1.4-.9 2.8-1.4 4.2-.8 2.3-1.5 4.5-2.3 6.8-.1.2-.2.4.1.5 1.4.5 2.9.9 4.3 1.4.2.1.3 0 .3-.2.4-1.1.8-2.3 1.1-3.4.8-2.4 1.6-4.9 2.4-7.3.3-.3.7-.3.5-.7zm75.6-139c-1-.7-2.1-1.3-3.4-1.4-1.8-.2-3.3.5-4.7 1.6-1.6 1.2-2.9 2.6-4.3 3.9-2.6 2.5-5.1 5.1-7.7 7.6-.3.3-.2.4.1.5.4.3.8.5 1.2.8.3.2.4.2.7-.1 1.9-1.9 3.8-3.8 5.7-5.6 1.7-1.7 3.3-3.4 5.2-4.9 1-.8 2-1.8 3.3-2.2 1.2-.5 2.6-.5 3.9-.2zM28.2 114.8c-.8.1-1.6.1-2.4.3-.4.1-.9 0-1.3.2-.2.1-.3.1-.3.4.3 1.2.3 2.4.6 3.6.5 1.9.9 3.8 1.4 5.7 0 .2.1.5.5.4 1.2-.5 2.4-.9 3.5-1.3.2-.1.3-.2.2-.4-.8-2.7-1.4-5.5-1.8-8.3-.1-.5-.1-.7-.4-.6zm153.9.6c.1-.2-.1-.3-.3-.3-1.2 0-2.4-.2-3.6-.3-.5 0-.5.1-.5.4-.3 1.4-.5 2.8-.8 4.2-.3 1.3-.6 2.6-1 3.9-.1.2-.1.4.2.5 1.2.4 2.3.8 3.5 1.2.3.1.4 0 .4-.3.1-.5.3-.9.4-1.4.5-2 .9-4 1.3-5.9.2-.6.3-1.3.4-2zm-38.6-89.3v.3c.3 1.1 0 2.2-.2 3.3-.6 3.4-2.3 6.2-4.7 8.7L135 42c-.3.3-.2.4 0 .6.3.2.7.4 1 .7.4.4.6.2.9-.1 1.1-1.2 2.3-2.3 3.4-3.5 1.9-2 3.4-4.3 3.8-7.2.3-2.1.1-4.1-.5-6.2.1-.1.1-.2-.1-.2zm13.1 12.1c-.1-.2-.2-.1-.3-.1-.7-.1-1.3-.1-2-.1-2.9-.3-5.5.5-8 2.1s-4.5 3.7-6.6 5.8c.6.4 1.1.7 1.6 1.1.2.2.3 0 .5-.1l1.7-1.7c2-2 4.2-3.8 6.8-5 1.7-.8 3.5-1 5.2-1.6.4-.2.8-.2 1.1-.4zm18.6 82.3c-.7.1-1.2.2-1.8.3-.3 0-.4.2-.4.5 0 .5-.2.9-.3 1.4 0 .2-.2.3 0 .4s.2-.1.2-.3c0-.3.2-.4.5-.3.4.1.8.2 1.3.3.2 0 .4.2.5-.1.1-.3-.2-.2-.4-.2-.5-.1-.9-.3-1.4-.4-.4-.1-.1-.4-.2-.6 0-.3.2-.2.3-.2.5.1 1 .2 1.6.3.1 0 .3.2.3 0 .1-.2-.1-.2-.3-.2l-1.5-.3 1.5-.3c.2 0 .4 0 .4-.2s-.2-.2-.3-.3c-.4-.3-.9-.5-1.4-.8.6 0 1.1.2 1.6.2.1 0 .2.1.3-.1s-.1-.2-.2-.2l-1.8-.3c-.2 0-.3-.1-.4.1-.1.2.1.3.2.4.6.2 1.1.5 1.7.9zm-30.1-71.6c0-.8-.4-1.2-1.1-1.2-.6 0-1.2.5-1.2 1.1s.6 1.2 1.2 1.2 1.1-.4 1.1-1.1z"
                          />
                          <path
                            fill="#000"
                            d="M168.4 167.2c.1-.2.3-.4.5-.5.1.4-.1.6-.5.5zM131.8 12.8c-.1 0-.2-.1-.2-.3 0-.1.1-.1.1-.1.1 0 .2.1.2.2.1.2.1.2-.1.2zM160 30.4l-.3-.3c0-.1.1-.2.2-.1.2.1.1.3.1.4zm1.9 142.8.3-.3c0 .2.2.6-.3.3zM109.5 204c0 .1-.1.1-.1.1-.1 0-.1-.1-.1-.1 0-.1.1-.1.1-.1.1 0 .1.1.1.1zm60.8-38.8c0-.2.2-.2.3-.3 0 .2-.1.3-.3.3zM91.2 194c.1 0 .2-.1.3.1-.1.2-.2.2-.3-.1zm-38.8-10-.1.1h-.1c0-.1 0-.1.2-.1zm-41-95c.2.2-.1.2-.1.3 0-.1 0-.2.1-.3zm76.8 108.3c.1.1.1.1 0 0 .1.1.1.1 0 .1.1.1 0 .1 0-.1 0 .1 0 .1 0 0zm7.7 1.6c-.1 0-.1 0 0 0-.1.1-.1.1 0 0-.2 0-.2-.1 0 0-.1-.1-.1 0 0 0zm39.7-182.4c-.1 0-.2 0-.2-.1.2-.1.2 0 .2.1zm8.7 3.9c-.1.1-.1 0 0 0zm-.4-.2c-.1 0-.1 0 0 0-.1 0 0 0 0 0zm-.6-.3c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zm-7.6-3.3c-.1 0-.1 0-.1-.1l.1.1zM189 70.5s-.1-.1 0 0c0-.1 0-.1 0 0zm-54.1-54.2c-.1 0-.1 0 0 0-.1 0 0 0 0 0zm53 51.2c-.1 0-.1 0 0 0-.1-.1-.1 0 0 0zm-1-2.2c-.1 0-.1 0 0 0 0-.1 0-.1 0 0zm-1.4-3s-.1 0 0 0c0-.1 0 0 0 0zm-33.7 118.3s0-.1.1-.1l-.1.1zm-.3.2c0-.1 0-.1.1-.1l-.1.1zm-.5.3s0-.1.1-.1l-.1.1zm-.9.5c0-.1 0-.1.1-.1 0 .1 0 .1-.1.1zm-.5.3c0-.1 0-.1.1-.1 0 .1-.1.1-.1.1zm-1.3.8c0-.1 0-.1.1-.1 0 0 0 .1-.1.1zm-1.9 1c0-.1 0-.1.1-.1 0 .1 0 .1-.1.1z"
                          />
                          <path
                            fill="#000"
                            d="m71.3 155.9-3.3-2.1s-.1 0-.1-.1c-.2-.2-.4-.3-.6-.5l-.1-.1c-1-.7-2-1.6-3-2.4-2-1.6-3.8-3.3-5.6-5.2-1.3-1.4-2.5-2.8-3.7-4.3-1.8-2.3-3.5-4.7-5-7.2-.9-1.5-1.7-3-2.4-4.6-.3-.5-.5-1.1-.7-1.6l-.1-.1c-.2-.5-.4-.9-.6-1.4l-.1-.1c0-.1-.1-.3-.1-.4l-.1-.1c0-.1-.1-.3-.1-.4l-.1-.1c-.2-.6-.4-1.3-.7-1.9 0 0 0-.1-.1-.1-.8-2.4-1.5-4.8-2-7.2-.4-1.7-.7-3.4-.9-5.1s-.4-3.4-.5-5.1c-.1-1.5 0-3.1 0-4.6 0-1.3.1-2.7.2-4 .1-1.3.3-2.6.5-3.9s.4-2.5.7-3.8c.2-1.2.5-2.3.9-3.5.4-1.4.9-2.8 1.3-4.2l.6-1.8.1-.1c0-.1.1-.3.1-.4l.1-.1c.1-.4.3-.8.4-1.2l.1-.1.3-.9.1-.1c.2-.4.4-.9.6-1.3l.1-.1c.3-.8.7-1.5 1.1-2.2 1.4-2.6 2.9-5.1 4.7-7.5l3.3-4.2c1.4-1.6 2.8-3 4.3-4.5.9-.9 1.9-1.8 2.9-2.6.7-.5 1.4-1.1 2-1.6l.1-.1c.5-.4 1-.7 1.5-1.1.4-.4 1-.6 1.4-1l.1-.1c.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.1 0 .1-.1.2-.1l.1-.1c.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.2-.2.5-.3.7-.5 0 0 .1 0 .1-.1.1-.1.3-.2.4-.2 0 0 .1 0 .1-.1.1-.1.3-.2.4-.3 0 0 .1 0 .1-.1.2-.1.4-.2.6-.4 0 0 .1 0 .1-.1 1.9-1.1 3.9-2.1 5.9-3 2.7-1.2 5.6-2.2 8.4-2.9 2.3-.6 4.7-1.1 7.1-1.5l2.1-.3c1.8-.2 3.5-.3 5.3-.4 1.6 0 3.1-.1 4.7 0 1.7.1 3.4.2 5.1.4 3.1.4 6.2 1 9.2 1.9 3.9 1.1 7.7 2.6 11.3 4.5 2.2 1.1 4.3 2.4 6.3 3.7 2.8 1.9 5.5 4 7.9 6.3 4.2 4 7.8 8.5 10.8 13.4 2.8 4.6 4.9 9.5 6.4 14.7.6 2.3 1.2 4.5 1.6 6.8.2 1.2.3 2.5.5 3.7.2 1.7.2 3.4.3 5 .1 1.9-.1 3.7 0 5.5v.1c-.1.7-.1 1.3-.2 2-.1 1.4-.3 2.8-.5 4.2-.2 1.5-.6 3-.9 4.5-.5 2-1.1 4-1.7 6-1.7 4.9-4 9.5-6.9 13.7l-.3.3c-.1 0-.2 0-.3.1 0 .1 0 .1.1.1-1.7 2.6-3.6 4.9-5.7 7.2-1.8 2-3.7 3.8-5.8 5.5-.2 0-.3 0-.3.3-1.5 1.2-3 2.3-4.5 3.4-2.8 1.9-5.7 3.6-8.7 5-1.7.8-3.4 1.5-5.2 2.2-1.1.4-2.2.8-3.4 1.1-.1 0-.2 0-.2.2-1.1.1-2.2.5-3.3.8-1.4.3-2.8.6-4.2.8-1.9.4-3.8.5-5.7.6-1.2.1-2.4.1-3.7.2h-2.5c-1 0-2-.1-3-.2-1.5-.1-3-.2-4.4-.5h-.1c-1-.1-1.9-.3-2.8-.5-1.9-.3-3.7-.8-5.5-1.3-1.1-.3-2.2-.6-3.3-1.1-.5-.2-1-.3-1.5-.5 0-.2-.1-.1-.2-.1-.4-.2-.7-.4-1.1-.5-.9-.3-1.8-.9-2.7-1.1v-.1s0 .1-.1.1c-1-.7-2.2-1.2-3.3-1.8-.9-.5-1.8-.9-2.7-1.5.5.7.4.7.4.7zm92.4-60c.1 0 .2 0 .2-.1s-.1-.2-.2-.2c-.1-.2 0-.4 0-.6.1-.2 0-.2-.1-.2 0-.6-.1-1.1-.2-1.7-.2-1.2-.5-2.4-.7-3.6-.2-.2-.1-.5-.2-.8-.7-2.7-1.5-5.4-2.5-8.1-1.2-2.9-2.6-5.8-4.2-8.5-1.8-3-3.8-5.8-6-8.4-1.8-2.2-3.9-4.2-6-6.2-1.7-1.6-3.6-3-5.5-4.4-3.6-2.5-7.3-4.6-11.3-6.2-3.4-1.4-7-2.5-10.6-3.3-2.7-.6-5.4-1-8.2-1.2-1.5-.1-2.9-.2-4.4-.2-2.3 0-4.5.1-6.8.4-1.4.2-2.8.4-4.1.6-1.1.2-2.2.4-3.2.7-2.6.6-5.1 1.4-7.6 2.3-2.4.9-4.8 2-7.1 3.2-2.6 1.4-5.1 2.9-7.4 4.7-1.2.9-2.5 1.9-3.6 3-4 3.6-7.5 7.5-10.5 11.9-4.8 7.2-7.9 15-9.4 23.5-.3 1.5-.5 3-.7 4.6-.1 1.1-.1 2.2-.2 3.3-.3.1-.3.3-.1.5.1.1.1.3.1.5-.1 2.8 0 5.6.4 8.4.2 1.9.5 3.7.9 5.5.5 2.2 1.1 4.4 1.8 6.5.7 2 1.4 3.9 2.3 5.8 1.2 2.6 2.5 5 4 7.4 2.7 4.2 5.8 8 9.4 11.5 2.2 2.1 4.5 3.9 6.9 5.7 1.3 1 2.7 1.8 4.2 2.7 2.3 1.4 4.7 2.5 7.1 3.6 2.7 1.1 5.4 2.1 8.1 2.8 1.5.4 3.1.8 4.6 1 1.3.2 2.5.4 3.8.6 1.4.2 2.9.4 4.3.4 2.6 0 5.1.1 7.7-.2 2.3-.2 4.5-.5 6.8-1 2.8-.5 5.5-1.3 8.2-2.2 3.4-1.2 6.6-2.7 9.7-4.4 2.6-1.5 5.1-3.1 7.5-5 2.6-2 4.9-4.3 7.2-6.6.2 0 .3-.1.3-.3l1.5-1.8s.1 0 .1-.1c2-2.3 3.7-4.7 5.3-7.3 1.2-1.9 2.2-4 3.3-6 .2 0 .3 0 .4-.2 0-.1-.1-.2-.2-.3 0-.1.1-.3.1-.4 1.4-3 2.5-6.2 3.3-9.4.2-.8.5-1.6.5-2.5.2-.1.3-.2.1-.3 0-.2.1-.3.2-.5.5-2.4.8-4.8 1-7.3.1-1.3.1-2.7.2-4 .1-2.6 0-5.1-.5-7.6zm-100.4-50c-.2-.2-.3-.4-.3-.7.2-.3.2-.7-.3-.7-.8-1.6-1.6-3.3-2.3-5 .1 0 .2 0 .2-.1s-.2-.1-.3-.1c-.5-1-1-2-1.4-3.1.1 0 .2 0 .2-.1 0-.2-.2-.1-.3-.1l-2.4-5.1c-.2-.3.1-.3.3-.4 2.3-1.1 4.6-2.2 6.9-3.2.6-.3 1.3-.6 1.9-.9.2-.1.4-.1.6.1 2 2.3 4.1 4.5 6.2 6.8.3.4.7.7 1 1.1 0 .1.1.2.2.1.1 0 .1-.1.1-.2-.2-1.2-.3-2.5-.5-3.7s-.3-2.4-.5-3.6c-.2-1.1-.3-2.2-.5-3.4v-.4l.1-.1c2-.9 4-1.9 5.9-2.8 1-.5 2.1-1 3.1-1.5.2-.1.4-.1.5.2 1 2.3 2.1 4.5 3.1 6.7.9 1.9 1.8 3.9 2.7 5.8.6 1.3 1.2 2.5 1.8 3.8.1.2.1.3-.1.4-2 .9-4 1.9-6 2.8h-.1l-.1-.1c-.7-1.5-1.4-3-2-4.5l-.1-.1c-.2-.5-.4-1-.7-1.5l-.1-.1c-.6-1.4-1.3-2.8-1.9-4.3 0-.1.1-.3-.1-.2-.1 0-.1.2 0 .2.2 1.8.4 3.5.5 5.3.1 1 .1 1.9.2 2.9.1 1.2.3 2.4.4 3.6 0 .3 0 .6-.4.7-1.4.6-2.9 1.3-4.2 2-.3.2-.4.1-.6-.1-.7-.8-1.5-1.5-2.1-2.3-.8-.9-1.7-1.7-2.5-2.5 0 0-.1-.1-.1-.2 0-.3.1-.8-.5-.5-.6-.8-1.5-1.4-2.2-2.2-.2-.2-.4-.4-.6-.7 0-.1-.1-.2-.2-.2 0-.1 0-.1-.1-.2 0 0-.1 0-.1.1s.1.1.2.1v.1c.1.7.6 1.2.8 1.9-.1 0-.2 0-.3.2 0 .1 0 .1.1.1s.2-.1.2-.3c.8 1.5 1.5 3.1 2.2 4.7.4.9.8 1.8 1.3 2.7.2.4.5.7.4 1.1-.1.3-.6.4-1 .5-1.6.8-3.2 1.5-4.8 2.3-.4.2-.6.1-.7-.3l-.3-.6c0 .1.1-.2-.4-.2zm-3.9-15c0-.1-.1-.1-.2-.1s-.2 0-.2.2c0 .1.1.2.2.1s.2-.1.2-.2zm1.5.8s-.1-.1 0 0c-.1 0-.1.1 0 0zm0 4.5s-.1 0 0 0c-.1.1-.1.1 0 0 0 .1 0 .1 0 0z"
                          />
                          <path
                            fill="#000"
                            d="M126.3 38.4c-2 .1-3.8-.4-5.6-.8-2.4-.6-4.8-1.3-7.2-1.9-.8-.2-1.6-.5-2.4-.7-.3-.1-.3-.2-.2-.4.7-2.1 1.1-4.2 1.7-6.3l1.8-6.9c.4-1.4.7-2.7 1-4.1.1-.3.1-.4.5-.3 4.1 1.1 8.2 2.1 12.3 3.2 2.3.7 4.4 1.8 5.9 3.8 1.3 1.8 1.8 3.8 1.6 6.1-.2 1.7-.7 3.4-1.7 4.8-1.1 1.5-2.5 2.5-4.3 3-1.2.4-2.3.6-3.4.5zm2-9.9c.1-.5 0-1-.3-1.6-.5-1-1.3-1.6-2.2-2.1-1.3-.7-2.7-.9-4-1.3-.3-.1-.3.1-.4.3-.2.9-.5 1.7-.7 2.6-.5 1.8-.9 3.6-1.4 5.4 0 .1-.2.4.1.4 1.4.3 2.7.9 4.2.9 2.9.2 4.7-1.6 4.7-4.6zm52 61.1c-.7.1-1.3.1-2 .3-.4.1-.5-.1-.6-.4-.2-1.7-.7-3.3-1-4.9-.3-1.2-.7-2.4-1-3.6-.7-2.3-1.5-4.6-2.4-6.8-.8-1.9-1.7-3.8-2.7-5.7-1.4-2.6-2.9-5.1-4.6-7.6-1.1-1.6-2.2-3.1-3.4-4.5-.9-1.1-1.8-2.1-2.7-3.1-2.4-2.7-5-5.2-7.8-7.5-.3-.2-.2-.4 0-.6.7-.9 1.5-1.8 2.2-2.7.2-.2.3-.3.5-.1 3.2 2.7 6.2 5.5 8.9 8.7 2.5 2.8 4.7 5.8 6.8 8.9 3.4 5.2 6.1 10.7 8.2 16.5 1.1 3 2 6.1 2.7 9.3.2 1.1.4 2.1.6 3.2 0 .1.1.3-.1.3-.5.1-1 .4-1.6.3z"
                          />
                          <path
                            fill="#000"
                            d="M27.9 75.7c.3-.8.6-1.6.9-2.3l.1-.1.9-2.1.1-.1c.2-.4.4-.9.6-1.3l.1-.1c.9-1.9 1.8-3.8 2.9-5.6 1.6-2.7 3.3-5.3 5.1-7.8 1-1.3 2-2.6 3.1-3.9 3-3.5 6.3-6.7 9.8-9.7.3-.3.5-.3.8.1.7.9 1.4 1.8 2.1 2.6.2.2.2.4-.1.6-2.4 2-4.7 4.1-6.8 6.4-3.4 3.6-6.4 7.5-9 11.7-2.1 3.3-3.8 6.8-5.3 10.4-1.6 3.7-2.7 7.6-3.7 11.5-.3 1.3-.5 2.5-.8 3.8 0 .2-.1.2-.3.2-.8 0-1.6-.1-2.4-.2-.4 0-.7-.2-1.1-.1-.2 0-.3 0-.5-.1l-.1-.1c-.1-.6.2-1.1.2-1.7.2 0 .2-.2.1-.3.5-1.9.9-3.9 1.4-5.8.4-1.6 1-3.1 1.5-4.6 0 0 0-.1.1-.1 0-.5.1-.9.3-1.3-.1 0-.1 0 0 0z"
                          />
                          <path
                            fill="#000"
                            d="M108.3 21.3c-1.7.1-3.4.3-5.1.3-.3 0-.5.1-.5.6.1 1.3.2 2.6.3 3.8.1 1.7.3 3.4.4 5.1.1 1.3.2 2.7.3 4 0 .1 0 .3-.2.3-.3 0-.5.1-.8.1-1.4 0-2.9.2-4.3.3-.6.1-1.2 0-1.9 0-.3 0-.3-.1-.3-.3-.1-1.3-.1-2.5-.2-3.8l-.3-3.6c-.1-.7-.1-1.4-.1-2.1-.1-.8 0-1.6-.2-2.3-.1-.3 0-.7 0-1 0-.4-.1-.6-.5-.5-1.4.1-2.7.3-4.1.3-.6 0-1.2.1-1.8.1-.3 0-.3-.1-.3-.3-.1-1.4-.1-2.7-.3-4.1 0-.2 0-.3.3-.4.7-.1 1.4-.1 2-.2 1.3-.1 2.6-.1 3.9-.3 2-.2 4.1-.3 6.1-.4 1.5-.1 2.9-.2 4.4-.3 1.2-.1 2.4-.2 3.5-.3.3 0 .4.1.5.4.1.6 0 1.2.1 1.8.1.7.1 1.5.1 2.3 0 .4-.1.5-.5.5h-.5zM25 110.2c-4.1 0-8.2-3.5-7.9-8.6.2-3.8 3.3-7.6 8.3-7.4 3.8.1 7.9 3.3 7.7 8.4-.1 4-3.5 7.7-8.1 7.6z"
                          />
                          <path
                            fill="#000"
                            d="M172.3 102.1c-.1-4.3 3.6-8 8.1-7.9 4.4.1 7.9 3.5 7.9 8 0 4.3-3.6 8.2-8.4 8-4-.2-7.7-3.6-7.6-8.1z"
                          />
                          <path
                            fill="#000"
                            d="M53.3 163.4c1.2-1.4 2.4-2.8 3.5-4.1 0 0 0-.1.1-.1.7-.8.7-.8 1.5-.1.9.7 1.7 1.5 2.6 2.2.2.2.2.3 0 .5-2.5 3-5 5.9-7.6 8.9-.2.2-.3.2-.5 0-1.1-.9-2.2-1.9-3.3-2.8-.2-.1-.2-.3-.2-.5.1-2 .3-4.1.4-6.1 0-.6-.1-1.2.2-1.8-.2 0-.3.2-.4.3-1.2 1.5-2.5 2.9-3.7 4.4-.2.3-.4.4-.7.1-1-.9-2-1.7-3-2.5-.3-.2-.3-.3 0-.6 1.8-2.1 3.6-4.2 5.3-6.3.7-.8 1.3-1.6 2-2.4.3-.3.5-.3.8-.1.9.8 1.8 1.7 2.8 2.4.7.5.7 1.1.6 1.7-.1.6-.1 1.2-.2 1.9-.1 1.3-.2 2.6-.3 3.8.1.2.1.6.1 1.2zm34.1 14.7c-.3 2.1-.7 4-1 5.9-.1.7-.1.7-.8.6-1.2-.2-2.3-.4-3.5-.5-.4-.1-.6-.2-.5-.6.5-2.8.9-5.5 1.4-8.3.2-1 .4-2 .5-3 0-.3.1-.3.4-.3 1.5.2 2.9.5 4.4.7.2 0 .4.1.5.3.5.9 1 1.8 1.4 2.7.6 1.3 1.3 2.6 1.9 3.9 0 .1.1.1.2.3.2-1.5.5-3 .7-4.4l.3-1.8c.1-.3.3-.2.5-.2.8.1 1.6.2 2.3.4.6.1 1.1.2 1.7.3.3 0 .3.1.3.4-.3 1.7-.6 3.4-.8 5.1-.1.9-.4 1.7-.5 2.5-.1.9-.3 1.8-.5 2.7 0 .1-.1.3.1.4.1.1.1.2 0 .2-.3.1-.2.3-.2.5 0 .4-.3.4-.5.4-1.2-.3-2.3-.4-3.5-.6-.7-.1-1.1-.4-1.4-1.1-.5-1.2-1.2-2.4-1.8-3.5-.5-1-1-1.9-1.6-3z"
                          />
                          <path
                            fill="#000"
                            d="M160.6 156.2c1.7-.5 3 0 4.1 1.1.5.5 1 1 1.8 1.3l-3 2.7c-.8.7-.8.7-1.6.1-.5-.4-.9-.8-1.4-1.1-.7-.5-1.4-.6-2.1 0-.8.6-1.4 1.3-2.2 1.9-.2.2 0 .3.1.4.8.9 1.5 1.7 2.3 2.6.3.3.3.4 0 .7-1.1.9-2.1 1.9-3.1 2.8-.2.2-.3.2-.5 0-2.6-2.9-5.2-5.7-7.8-8.6-.2-.2-.2-.3 0-.6 2.3-2.1 4.6-4.2 7-6.3.9-.8 1.9-1.4 3.2-1.7 2.5-.5 4.2 1.7 3.7 3.6-.2.3-.3.7-.5 1.1zm-3.4.8c0-.6-.4-1-.9-1s-.9.2-1.3.4c-.8.6-1.5 1.3-2.3 2-.2.2-.1.3 0 .4.4.4.8.9 1.2 1.3.1.2.2.2.4 0 .7-.7 1.5-1.4 2.2-2.1.5-.2.7-.6.7-1zM32.6 146.3c.9-.7 1.7-1.4 2.6-2 .4-.3.9-.6 1.3-1l.1-.1c.7-.5 1.4-1.1 2.1-1.6l.1-.1c.6-.4 1.1-.9 1.7-1.3 0 0 .1 0 .1-.1.4.2.6.6.9 1 2.4 3.1 4.7 6.1 7 9.2.3.4.4.6-.1.9-.7.4-1.3 1.1-2.1 1.5l-.1-.1c-1.6-2.1-3.2-4.2-4.9-6.3-.3-.4-.6.1-.6.2-.2.3-.9.2-.5.7 1.2 1.7 2.5 3.3 3.8 5 .7.9.7.9-.2 1.6-.4.3-.8.6-1.3.9-.2.2-.3.1-.5-.1-1.3-1.8-2.8-3.5-4-5.3-.2-.3-.4-.5-.8-.1-.7.6-.7.6-.2 1.3 1.2 1.7 2.6 3.3 3.7 5 .2.4.6.7.8 1 .1.1.2.3 0 .4-.8.4-1.4 1-2 1.6-.2.2-.4.2-.5-.1-1.4-1.9-2.9-3.8-4.4-5.7-.9-1.2-1.9-2.4-2.8-3.7-.3-.4-.5-.7-.8-1-.2-.2-.1-.3.1-.4.5-.3.9-.7 1.4-1l.1-.3z"
                          />
                          <path
                            fill="#000"
                            d="M106.8 183c1.3.1 2.6-.1 3.9-.1.9 0 1.8-.2 2.8-.2.3 0 .4.1.4.4.1.9-.1 1.8.1 2.6 0 .2-.1.2-.2.2-.3 0-.7.1-1 .1-1.2 0-2.4.1-3.5.1-.7 0-1.3.1-2 .2-.8.1-1.7 0-2.5 0-1.3 0-2.6.2-3.9.2-.4 0-.5 0-.5-.5-.1-1.6-.1-3.2-.2-4.8s-.1-3.1-.2-4.7c0-.7 0-1.3-.1-2 0-.4.2-.5.4-.5.6.2 1.1 0 1.6-.1.7-.1 1.4 0 2.1-.1 1.9-.1 3.8-.2 5.7-.2 1 0 2.1-.1 3.1-.2.5 0 .7.3.6.7-.2.6 0 1.2.1 1.8.1.5.1.6-.5.6-.9 0-1.8 0-2.6.1-1.7.2-3.3.1-5 .2-.3 0-.3.1-.3.4 0 1.2 0 1.2 1.1 1.2 2 0 4.1-.3 6.1-.2.4 0 .5.1.5.5 0 .7.1 1.4.1 2 0 .3 0 .4-.3.4-.2 0-.3.1-.5.1-1.4-.1-2.8.1-4.3.1-.7 0-1.5.1-2.2.1h-.2c-.3.4-.1.9-.1 1.3 0 .3.2.3.4.2.3.2.7.1 1.1.1zm-78.4-42.4c-1.8-.8-2.7-2.3-3.4-4-.5-1.1-.8-2.3-.8-3.5 0-1.6.4-3 1.4-4.3 1.4-1.7 3.3-2.3 5.5-2.1 1.4.1 2.5.8 3.5 1.7 1.9 1.8 3 4 3.4 6.6.3 2-.1 3.9-1.8 5.3-.2.2-.3.3-.5-.1l-1.8-3.9c-.1-.1-.1-.2 0-.3.6-.7.7-1.4.4-2.3-.3-.8-.7-1.6-1.5-2-1-.6-1.9-.5-2.9-.1-1.4.5-2.3 1.7-2.2 3 .1 1.3.6 2.5 1.7 3.3.1.1.3.2.4.2.2.1.4.1.5 0s0-.3-.1-.4c-.2-.4-.3-.8-.5-1.2-.1-.2-.1-.4.2-.5.6-.3 1.2-.5 1.8-.8.3-.2.4 0 .4.2.9 1.8 1.7 3.7 2.5 5.5.1.2.1.2-.2.4-1.9.8-3.7 1.7-5.6 2.6-.3.1-.4 0-.5-.2-.3-.7-.6-1.4-1-2.1-.1-.3-.2-.5.2-.7.5 0 .7-.2.9-.3z"
                          />
                          <path
                            fill="#000"
                            d="M61.4 164c.3-.5.5-1.1.8-1.6.1-.2.2-.2.3-.1 1.3.7 2.7 1.4 4 2.1.4.2.1.4 0 .6-.7 1.4-1.5 2.8-2.2 4.2-.4.8-.9 1.6-1.2 2.5-.3.8 0 1.3.5 1.8s1.2.8 1.9 1c.8.2 1.3-.2 1.8-.8.5-.7.9-1.5 1.3-2.3.8-1.4 1.5-2.9 2.3-4.3.1-.2.2-.3.5-.2 1.3.7 2.6 1.4 3.9 2 .2.1.3.2.1.4-1.2 2.2-2.3 4.5-3.5 6.7-1.1 1.9-2.7 2.6-4.9 2.2-3-.6-5.6-2-7.7-4.3-.7-.8-1.2-1.8-1.1-2.9 0-.5.2-1.1.4-1.6.9-1.8 1.8-3.5 2.8-5.4.1.2.2.2 0 0z"
                          />
                          <path
                            fill="#000"
                            d="M175.4 127c-.6 1.4-1.2 2.7-1.8 4.1-.1.1-.1.3-.3.2-.6-.2-.9.1-1.2.5-.6.6-.8 1.3-1 2.1-.1.3 0 .6.3.8s.5 0 .8-.2c.4-.3.7-.7 1-1.1.9-1.2 1.7-2.6 2.8-3.7.8-.8 1.6-1.6 2.9-1.6 1.6 0 3 1.4 3.1 3 .2 3.6-1.1 6.6-3.3 9.2-.9 1.1-2.1 1.8-3.5 1.7h-.1c-.4 0-.9 0-1.1-.3-.3-.3.1-.6.3-.9l1.5-3.3c.1-.3.2-.3.5-.3.6.1 1.1 0 1.5-.5.6-.8 1.1-1.7 1.1-2.8 0-.4-.2-.6-.5-.8s-.6 0-.8.2c-.7.7-1.3 1.5-1.9 2.3-.7 1-1.4 2-2.3 2.8-.6.6-1.3 1-2.1 1.1-1.1.1-2-.5-2.6-1.4-.6-1-.9-2.1-.7-3.2.6-2.7 1.6-5.4 3.9-7.3.9-.9 2.1-1.1 3.5-.6zm-38.5 45.2c0 1.4-.7 2.5-1.8 3.4-1.3 1.1-3 1.6-4.5 2.2-1.2.4-1.2.4-.8 1.6.2.7.5 1.3.7 1.9.1.3.1.4-.2.5-.7.2-1.5.4-2.1.8-.6.3-1.4.3-2 .7-.2.1-.3 0-.4-.2-1.3-3.7-2.6-7.3-4-11-.1-.4.1-.4.3-.5 1.8-.6 3.5-1.3 5.3-1.9 1.2-.4 2.4-1.1 3.8-1.2 1.6-.2 3.3-.2 4.6 1 .7.8 1.1 1.7 1.1 2.7zm-4.7.9c0-.9-.5-1.3-1.5-1.1s-2 .7-2.9 1c-.2.1-.3.1-.2.3.2.6.5 1.2.7 1.8.1.2.1.2.3.2 1-.4 2.1-.7 3.1-1.3.3-.1.6-.4.5-.9zm21.4-2.8c-1.5.9-2.9 1.7-4.3 2.5-.1.1-.3.1-.4 0 0 0-.1 0-.1-.1-.4-.3-.8-.9-1.3-.9-.4 0-.9.5-1.3.7-.9.5-1.8 1.1-2.7 1.6-.3.2-.5.3-.3.6v.3c.2 1.2.2 1.2-.9 1.8-1.1.6-2.2 1.3-3.3 1.9-.2-1-.1-1.9-.3-2.8-.1-1.2-.1-2.4-.3-3.6-.1-1.1-.1-2.1-.2-3.2-.1-1.2-.2-2.3-.3-3.5 0-.4 0-.7.4-.9 1.2-.6 2.3-1.3 3.5-2 .2-.1.4-.2.6 0 3.8 2.6 7.4 5 11.2 7.6zm-11.4-2.9c.2 1.4.4 2.7.6 4.1.9-.5 1.7-1 2.6-1.5-1.1-.9-2.1-1.7-3.2-2.6zm28.5-14.4c-.2-.1-.3-.2-.4-.3l-6.6-4.8c-.3-.2-.4-.2-.6.1l-2.1 3c-.2.3-.3.3-.6.1-.6-.5-1.3-1-2-1.4-.3-.2-.2-.3-.1-.5 2.6-3.6 5.2-7.3 7.8-10.9.1-.2.2-.3.5-.1.6.5 1.2.9 1.9 1.3.4.3.4.4.1.8-.7.9-1.4 1.9-2.1 2.9-.2.3-.2.4.1.6 2.2 1.6 4.5 3.2 6.7 4.8.2.1.4.2.2.6-.9 1.2-1.7 2.4-2.6 3.6l-.2.2zM82 171.1c.2.3-.2.3-.3.6-.8 2.5-1.6 4.9-2.4 7.3-.4 1.1-.8 2.3-1.1 3.4-.1.2-.1.3-.3.2-1.4-.5-2.9-.9-4.3-1.4-.3-.1-.1-.4-.1-.5.7-2.3 1.5-4.5 2.3-6.8.5-1.4.9-2.8 1.4-4.2.1-.4.2-.4.6-.3 1.4.5 2.8.9 4.2 1.4 0 .2.2.1 0 .3zm75.6-139c-1.4-.3-2.8-.3-4.1.2s-2.2 1.4-3.3 2.2c-1.9 1.5-3.5 3.3-5.2 4.9-1.9 1.9-3.8 3.7-5.7 5.6-.2.2-.4.3-.7.1-.4-.3-.8-.6-1.2-.8-.3-.2-.3-.3-.1-.5 2.6-2.5 5.1-5.1 7.7-7.6 1.4-1.4 2.7-2.8 4.3-3.9 1.4-1 2.9-1.8 4.7-1.6 1.5.1 2.6.6 3.6 1.4zM28.2 114.8c.3-.1.4.1.4.4.4 2.8 1 5.6 1.8 8.3.1.2 0 .3-.2.4-1.2.4-2.4.8-3.5 1.3-.4.2-.4-.2-.5-.4-.5-1.9-.9-3.8-1.4-5.7-.3-1.2-.3-2.4-.6-3.6-.1-.2 0-.3.3-.4.4-.2.9-.1 1.3-.2.8 0 1.5 0 2.4-.1zm153.9.6c-.1.7-.2 1.4-.4 2-.4 2-.8 4-1.3 5.9-.1.5-.3.9-.4 1.4-.1.3-.1.4-.4.3-1.2-.4-2.3-.8-3.5-1.2-.3-.1-.3-.3-.2-.5.4-1.3.7-2.6 1-3.9.3-1.4.5-2.8.8-4.2.1-.3.1-.4.5-.4 1.2.1 2.4.3 3.6.3.2.1.4.1.3.3zm-38.6-89.3c.2 0 .3.2.3.3.6 2 .8 4 .5 6.2-.4 2.9-1.9 5.1-3.8 7.2-1.1 1.2-2.3 2.3-3.4 3.5-.3.3-.5.4-.9.1-.3-.3-.7-.4-1-.7-.3-.2-.3-.3 0-.6l3.6-3.6c2.4-2.5 4.1-5.3 4.7-8.7.2-1.1.4-2.2.2-3.3-.2-.2-.2-.3-.2-.4z"
                          />
                          <path
                            fill="#000"
                            d="M156.6 38.2c-.3.2-.7.2-1 .3-1.7.6-3.5.8-5.2 1.6-2.6 1.2-4.8 3-6.8 5l-1.7 1.7c-.1.1-.2.3-.5.1-.5-.4-1.1-.7-1.6-1.1 2.1-2.1 4.1-4.2 6.6-5.8 2.4-1.6 5-2.4 8-2.1.7.1 1.3.1 2 .1 0 .1.1 0 .2.2zm18.6 82.3c-.6-.4-1-.6-1.5-.9-.2-.1-.3-.1-.2-.4s.3-.2.4-.1l1.8.3c.1 0 .3 0 .2.2s-.2.1-.3.1c-.5 0-1-.3-1.6-.2.5.3.9.6 1.4.8.1.1.3.1.3.3 0 .2-.3.2-.4.2l-1.5.3 1.5.3c.1 0 .3 0 .3.2-.1.3-.2.1-.3 0-.5-.1-1-.2-1.6-.3-.1 0-.4-.1-.3.2 0 .2-.3.5.2.6s1 .2 1.4.4c.1 0 .4 0 .4.2-.1.3-.3.1-.5.1-.4-.1-.9-.2-1.3-.3-.3-.1-.5 0-.5.3 0 .1 0 .3-.2.3-.2-.1-.1-.2 0-.4.1-.5.3-.9.3-1.4 0-.3.2-.4.4-.5.3-.1.9-.2 1.6-.3zm-30.1-71.6c0 .7-.4 1.1-1.1 1.1-.7 0-1.2-.6-1.2-1.2s.6-1.1 1.2-1.1 1.1.4 1.1 1.2zm-1.8.4c.1-.4.3-.6.5-1 .1-.1.1-.3.3-.2s.5.2.6.5c.1.2 0 .4-.2.4-.5.1-.3.4-.3.7.6-.2.9-.6.7-1.1-.1-.4-.6-.8-1-.7-.5.1-.9.5-.8 1.1 0 .5.4.8 1 .8-.1-.1-.1-.1-.1-.2-.1-.2.1-.5-.1-.6-.4-.2-.3.4-.6.3zm.8-.9c-.1 0-.2.1-.2.2 0 .2.2.2.3.3.1 0 .2-.1.2-.2-.1-.2-.2-.2-.3-.3zM68.6 37.2c.6-.3.5.2.5.5-.2-.1-.4-.3-.5-.5zm-6 7.3c.6 0 .5.3.3.7-.1-.2-.2-.4-.3-.7zm.7 1.4c.5 0 .5.3.3.7-.2-.2-.3-.5-.3-.7zm3-9.8c0 .1 0 .2-.2.3-.1 0-.1 0-.1-.1.1-.1.2-.1.3-.2zM24.5 87.3c.1.2.1.3-.1.3 0-.1-.1-.2.1-.3zM58.7 36c.1 0 .3-.1.3.1 0 .1-.1.1-.2.1s-.1-.1-.1-.2zm84.8 114.7c0-.2.1-.3.3-.3l-.3.3zM78 28.3c-.1-.1-.1-.2 0-.2.2 0 .1.1 0 .2zm-17.8 11c.1 0 .2 0 .3.1 0 .1-.1.1-.2.1 0 0-.1-.1-.1-.2zm95.1 98.4c-.1 0-.1-.1-.1-.1 0-.1.2-.1.3-.1-.1 0-.2.1-.2.2zm-33.9 24.8c0-.1.1-.2.2-.2 0 .2 0 .3-.2.2zM65.6 34.1c.1 0 .2.1.2.2-.1 0-.2 0-.2-.1v-.1zM61.4 164c.2.2 0 .2-.1.2 0 0 .1-.1.1-.2zm19.9-3.1c.1-.1.2-.1.2.1-.1-.1-.2 0-.2-.1zm-3.9-1.7s0-.1.1-.1l-.1.1zM73 48.5s-.1 0 0 0c-.1 0-.1-.1 0 0zm7-16c.1.1.1.1 0 0 0 .1 0 .1 0 0zm85.9 74.2c.1-.1.1-.1 0 0 .1 0 .1 0 0 0zM80.8 34.1c0 .1 0 .1 0 0 0 .1-.1.1 0 0zm-8.5 14.8s-.1 0 0 0c-.1 0-.1-.1 0 0zm10.6-10.2c0 .1 0 .1 0 0zm-38 84.4c0 .1 0 .1 0 0zm.9 2.6s.1 0 0 0c0 .1 0 .1 0 0zm.2.5s.1.1 0 0c0 .1 0 .1 0 0zm.7 1.5s0 .1 0 0c0 .1-.1.1 0 0zM24.2 89.3c0 .1 0 .1 0 0 0 .1 0 .1 0 0zm47.9-65.9c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0zM40.7 140.1s-.1 0-.1.1c0-.1 0-.1.1-.1zm5.1-60.3s-.1.1 0 0c-.1 0-.1 0 0 0zm.2-.5s-.1 0 0 0c-.1 0-.1 0 0 0zm-7.1 62.2-.1.1c0-.1 0-.1.1-.1zm-2.2 1.7-.1.1c0-.1 0-.1.1-.1zM46.5 78s0 .1 0 0c-.1 0 0 0 0 0zm.4-1c0 .1 0 .1 0 0-.1.1 0 .1 0 0zm-14.3 69.3s-.1 0-.1.1c0-.1.1-.2.1-.1zm-5.1-69.5c-.1.1-.1.1 0 0-.2.1-.1 0 0 0zm18.8 75.8.1.1c-.1 0-.1 0-.1-.1zm1.3-76.9c-.1 0-.1 0 0 0zm19.6 77.4.1.1c-.1 0-.1 0-.1-.1zm.7.6s.1 0 .1.1l-.1-.1zm-40-78c-.1 0-.1 0 0 0zm.9-2.5c0 .1 0 .1 0 0-.1.1 0 0 0 0zm1-2.2s-.1.1 0 0c-.1 0-.1 0 0 0zm.6-1.4c0 .1 0 .1 0 0-.1.1 0 0 0 0zm64.3 94.7c0 .1 0 .1 0 0 0 .1 0 .1 0 0zM66.1 53c-.1 0-.1 0 0 0zm3-2.1c-.1 0-.1 0 0 0zm.3-.2s-.1 0 0 0c-.1 0-.1 0 0 0zm.3-.2c-.1 0-.1-.1 0 0zm.3-.2s-.1 0 0 0c-.1 0 0-.1 0 0zm.4-.2s-.1 0 0 0c-.1 0-.1-.1 0 0zm.8-.6s-.1 0 0 0c-.1.1-.1 0 0 0zm.5-.3s-.1 0 0 0c-.1 0 0 0 0 0zm-.4 106.7.1.1c-.1 0-.1-.1-.1-.1z"
                          />
                          <path
                            fill="#fff"
                            d="M148.2 143.8c-2.3 2.4-4.6 4.6-7.2 6.6-2.4 1.9-4.9 3.5-7.5 5-3.1 1.8-6.3 3.2-9.7 4.4-2.7.9-5.4 1.7-8.2 2.2-2.2.4-4.5.7-6.8 1-2.6.3-5.1.2-7.7.2-1.4 0-2.9-.2-4.3-.4-1.3-.2-2.5-.3-3.8-.6-1.6-.3-3.1-.6-4.6-1-2.8-.7-5.5-1.7-8.1-2.8-2.5-1-4.8-2.2-7.1-3.6-1.4-.8-2.8-1.7-4.2-2.7-2.4-1.8-4.7-3.6-6.9-5.7-3.6-3.4-6.7-7.3-9.4-11.5-1.5-2.4-2.8-4.8-4-7.4-.9-1.9-1.6-3.8-2.3-5.8-.7-2.1-1.4-4.3-1.8-6.5-.4-1.8-.7-3.7-.9-5.5-.3-2.8-.4-5.6-.4-8.4 0-.2.1-.3-.1-.5.1-.2.1-.3.1-.5 0-1.1 0-2.2.2-3.3.2-1.5.4-3.1.7-4.6 1.4-8.5 4.6-16.3 9.4-23.5 3-4.4 6.5-8.4 10.5-11.9l3.6-3c2.3-1.8 4.8-3.3 7.4-4.7 2.3-1.2 4.7-2.3 7.1-3.2 2.5-.9 5-1.8 7.6-2.3 1.1-.2 2.2-.5 3.2-.7 1.4-.2 2.7-.4 4.1-.6 2.3-.2 4.5-.3 6.8-.4 1.5 0 2.9.1 4.4.2 2.8.2 5.5.6 8.2 1.2 3.6.8 7.2 1.9 10.6 3.3 4 1.7 7.8 3.8 11.3 6.2 1.9 1.3 3.8 2.8 5.5 4.4 2.1 1.9 4.2 3.9 6 6.2 2.2 2.7 4.2 5.5 6 8.4 1.6 2.7 3 5.6 4.2 8.5 1 2.6 1.9 5.3 2.5 8.1.1.3 0 .6.2.8.2 1.2.5 2.4.7 3.6.1.5.1 1.1.2 1.7 0 .1 0 .2.1.2 0 .2-.1.4 0 .6v.3c.5 2.5.6 5 .5 7.6 0 1.3 0 2.7-.2 4-.3 2.4-.5 4.9-1 7.3 0 .2-.2.3-.2.5-.2.1-.1.2-.1.3 0 .9-.3 1.7-.5 2.5-.8 3.2-2 6.4-3.3 9.4-.1.1-.1.3-.1.4-.1.1-.2.3-.2.4-1 2-2.1 4.1-3.3 6-1.6 2.5-3.3 5-5.3 7.3-.1 0-.1 0-.1.1l-1.5 1.8c-.1.2-.2.3-.3.4zm-53.7 15.4c.4 0 .7.1 1.1.1 1.1 0 2.1.3 3.2.4.9 0 1.9.2 2.8.2.1.2.2.2.3 0h.5c0 .1 0 .1.1.1.4.1.7-.1 1.1-.1.9 0 1.7 0 2.6-.1 2.2-.1 4.4-.3 6.5-.6 2-.3 4-.7 5.9-1.2 1.6-.4 3.1-.9 4.6-1.5.1 0 .2-.1.3-.2.7-.2 1.4-.4 2-.8.2 0 .3-.1.4-.2.4-.1.9-.3 1.3-.5.1-.1.3-.1.4-.2 1-.3 1.8-.9 2.7-1.3 1.6-.8 3.2-1.7 4.7-2.7 2.2-1.5 4.3-3.1 6.3-4.8 4.9-4.3 8.9-9.2 12.1-14.9 3.2-5.6 5.3-11.6 6.5-18 .5-2.9.7-5.8.9-8.7.1-1.4-.1-2.8-.1-4.2 0-1 0-2-.2-3-.2-1.2-.3-2.5-.5-3.7-.3-1.8-.6-3.6-1.1-5.3-.5-1.8-1.1-3.5-1.7-5.3-.6-1.6-1.3-3.2-2-4.7-1.4-3-3.2-5.9-5.1-8.6-1.3-1.9-2.8-3.7-4.4-5.3-1.9-2-3.9-4-6.1-5.7-1.2-1-2.5-1.9-3.8-2.8-3.2-2.2-6.5-4-10.1-5.5-2.9-1.2-6-2.2-9.1-2.9-2.4-.5-4.8-1-7.3-1.2-1.8-.2-3.7-.3-5.6-.3-1.8 0-3.6.1-5.5.3-1.5.1-3 .3-4.6.6-3.1.5-6.2 1.3-9.2 2.4-2 .7-4 1.5-5.9 2.5-2.9 1.4-5.7 3.1-8.3 5-1.9 1.4-3.7 2.9-5.4 4.5-1.7 1.6-3.3 3.2-4.8 4.9-1.5 1.8-2.9 3.6-4.2 5.5-1.8 2.8-3.5 5.7-4.8 8.8-1.5 3.5-2.7 7.1-3.5 10.9-.3 1.4-.6 2.8-.7 4.3-.1 1.1-.3 2.3-.4 3.5-.1 1.2-.1 2.3-.1 3.5s.1 2.4.1 3.5c0 1.3.2 2.5.3 3.8.1.8.3 1.6.4 2.3.1.9.2 1.8.4 2.7.6 2.7 1.3 5.4 2.3 8.1 1.2 3.2 2.6 6.2 4.3 9.1 1.7 2.8 3.5 5.5 5.7 8 .9 1.1 1.9 2.2 2.9 3.2 1.5 1.6 3.1 3 4.8 4.4 1.7 1.4 3.6 2.8 5.5 3.9 1.5.9 2.9 1.8 4.5 2.5.8.4 1.6.9 2.4 1.2 1.4.6 2.8 1.3 4.3 1.8 2.3.7 4.6 1.5 6.9 2 1 .2 2 .5 3.1.6.1-.2.2-.2.3-.3z"
                          />
                          <path
                            fill="#000"
                            d="M158.6 128.3c0-.2.1-.3.2-.4.1.1.2.1.2.3-.1.1-.2.1-.4.1zM43.3 100.4c0 .2 0 .4-.1.5-.2-.2-.2-.4.1-.5zm120.4-4.5v-.3c.1 0 .2.1.2.2s-.1.1-.2.1zm-15.5 47.9.3-.3c0 .2-.1.3-.3.3zm14.6-28.2c0-.1-.1-.2.1-.3.1.2.1.3-.1.3zm.9-20.7c-.1 0-.1-.1-.1-.2.1.1.3.1.1.2zm-.9-5.4s-.1 0 0 0c-.1 0 0 0 0 0zM150 141.7c-.1-.1 0-.1 0 0 0-.1 0 0 0 0zM59.4 30.9c0 .1-.1.1-.2.2-.1 0-.2 0-.2-.1s.1-.1.2-.2.2 0 .2.1zm1.5.8c-.1.1-.1.1 0 0-.1 0-.1-.1 0 0-.1-.1 0 0 0 0zm0 4.5c0 .1 0 .1 0 0-.1.1-.1.1 0 0-.1 0 0 0 0 0zm4.7-2.1c-.1 0-.1 0-.2-.1 0 0 0-.1.1-.1.1.1.1.2.1.2z"
                          />
                          <path
                            fill="#fff"
                            d="M128.3 28.5c0 3-1.8 4.7-4.7 4.6-1.5-.1-2.8-.6-4.2-.9-.4-.1-.2-.3-.1-.4.5-1.8.9-3.6 1.4-5.4.2-.9.5-1.7.7-2.6.1-.2.1-.4.4-.3 1.4.4 2.8.6 4 1.3.9.5 1.7 1.1 2.2 2.1.3.6.4 1.2.3 1.6zM157.2 157c0 .4-.3.8-.6 1.1-.7.7-1.5 1.4-2.2 2.1-.2.2-.3.1-.4 0-.4-.4-.8-.9-1.2-1.3-.1-.1-.2-.2 0-.4.8-.6 1.5-1.4 2.3-2 .4-.3.8-.5 1.3-.4.4-.1.8.3.8.9zm-25 16.1c.1.5-.2.8-.6 1-.9.6-2 .9-3.1 1.3-.2.1-.2 0-.3-.2-.2-.6-.4-1.2-.7-1.8-.1-.2 0-.3.2-.3 1-.3 1.9-.8 2.9-1 1.1-.3 1.6.1 1.6 1zm10-5.7c1.1.9 2.1 1.7 3.2 2.5-.9.5-1.7 1-2.6 1.5-.2-1.3-.4-2.6-.6-4zm1.1-118.1c.3.1.3-.5.6-.3.2.1 0 .4.1.6 0 .1.1.1.1.2-.6 0-1-.3-1-.8s.3-1 .8-1.1c.4-.1.9.3 1 .7.1.5-.2.9-.7 1.1 0-.3-.2-.7.3-.7.1 0 .2-.2.2-.4-.1-.3-.4-.4-.6-.5-.2-.1-.2.1-.3.2-.2.3-.5.6-.5 1z"
                          />
                          <path
                            fill="#fff"
                            d="M144.1 48.4c.1.1.3.1.3.3 0 .1-.1.2-.2.2s-.3-.1-.3-.3c0-.1 0-.2.2-.2z"
                          />
                          <path
                            fill="#000"
                            d="M101.6 159.9c-.9.1-1.9-.2-2.8-.2-1.1 0-2.1-.3-3.2-.4-.4 0-.7-.1-1.1-.1 0-.1 0-.2-.2-.1-1-.1-2-.4-3.1-.6-2.4-.4-4.7-1.2-6.9-2-1.5-.5-2.9-1.2-4.3-1.8-.8-.4-1.6-.9-2.4-1.2-1.6-.7-3.1-1.6-4.5-2.5-1.9-1.2-3.7-2.5-5.5-3.9-1.7-1.4-3.3-2.8-4.8-4.4-1-1-1.9-2.1-2.9-3.2-2.2-2.5-4-5.2-5.7-8-1.7-2.9-3.1-6-4.3-9.1-1-2.6-1.7-5.3-2.3-8.1-.2-.9-.3-1.8-.4-2.7 0-.8-.3-1.5-.4-2.3-.1-1.3-.3-2.5-.3-3.8 0-1.2-.1-2.4-.1-3.5 0-1.2 0-2.3.1-3.5s.3-2.3.4-3.5c.2-1.4.4-2.8.7-4.3.8-3.8 2-7.4 3.5-10.9 1.3-3.1 2.9-6 4.8-8.8 1.3-1.9 2.7-3.8 4.2-5.5 1.5-1.7 3.1-3.4 4.8-4.9 1.7-1.6 3.5-3.1 5.4-4.5 2.6-1.9 5.4-3.5 8.3-5 1.9-.9 3.9-1.8 5.9-2.5 3-1.1 6.1-1.9 9.2-2.4 1.5-.3 3-.4 4.6-.6 1.8-.2 3.6-.3 5.5-.3s3.7.1 5.6.3c2.5.2 4.9.7 7.3 1.2 3.1.7 6.1 1.7 9.1 2.9 3.6 1.5 6.9 3.3 10.1 5.5 1.3.9 2.5 1.9 3.8 2.8 2.2 1.7 4.2 3.7 6.1 5.7 1.6 1.7 3 3.5 4.4 5.3 2 2.7 3.7 5.6 5.1 8.6.7 1.5 1.4 3.1 2 4.7.6 1.7 1.2 3.5 1.7 5.3.5 1.7.8 3.5 1.1 5.3.2 1.2.4 2.5.5 3.7.1 1 .2 2 .2 3 0 1.4.2 2.8.1 4.2-.2 2.9-.4 5.8-.9 8.7-1.1 6.4-3.3 12.4-6.5 18s-7.2 10.6-12.1 14.9c-2 1.8-4.1 3.4-6.3 4.8-1.5 1-3 2-4.7 2.7-.9.4-1.7 1-2.7 1.3 0-.1 0-.2-.2-.2-.2.1-.3.2-.2.4-.4.2-.8.4-1.3.5-.2-.1-.4-.1-.4.2-.6.3-1.3.6-2 .8-.2-.1-.3-.1-.3.2-1.5.6-3 1.1-4.6 1.5a56 56 0 0 1-5.9 1.2c-2.2.3-4.3.5-6.5.6-.9 0-1.7.1-2.6.1-.4 0-.7.2-1.1.1l-.1-.1h-.5c-.2.3-.3.3-.4.4zm-26.5-55.3.6.3c3.1 1.8 6.3 3.6 9.4 5.4.3.2.6.2 1 0 1.4-.8 2.7-1.6 4.1-2.4h.4c.3-.1.1-.2 0-.2.3-.2.6-.4.9-.5 0 .1 0 .2.1.2.2 0 .1-.2.1-.3 2.2-1.3 4.5-2.6 6.7-3.9 1-.6 2-1.2 3-1.7.4-.2.5-.5.5-.9v-1.9c.3-.2.3-.4 0-.5v-7.5c.1 0 .1 0 .1-.1s-.1-.1-.1-.1v-1c.1 0 .1 0 .1-.1s-.1-.1-.1-.1v-6.6c.1 0 .2 0 .3-.1 0-.2-.1-.2-.3-.2-3.7-2.1-7.4-4.3-11.1-6.4-.1-.5-.3-.6-.7-.4-1.3-.8-2.7-1.5-4-2.3-.4-.2-.7-.2-1 0-2.6 1.5-5.2 3.1-7.9 4.6-2.5 1.5-5.1 2.9-7.6 4.4-.3.1-.3.3-.3.6v10.7c-.2 0-.3 0-.3.2s.1.4.3.4v4.3c-.4.3-.4.4 0 .6 0 .5.1 1.1 0 1.6s.2.8.6 1c1.6.9 3.3 1.8 4.9 2.8-.1.2 0 .2.3.1zm34.8-14.7c.1.9 0 1.7-.2 2.5-.3 2-1.1 3.9-2 5.7-.8 1.6-1.7 3.1-2.7 4.6-.3 0-.4.1-.2.3-1.1 1.8-2.5 3.4-4 4.9-.2 0-.4-.1-.5.1-.1.1.1.2.2.2-.2.3-.5.5-.8.7-2.6 2.3-5.6 4.1-9.1 4.7-1.3.2-2.7.3-4-.2 0-.1.1-.3-.1-.4-.1 0-.2.1-.2.2-.5-.1-.8-.5-1.3-.7 0 0-.1 0-.1-.1-1.1-.6-2.3-1.3-3.4-1.9 0 0-.1 0-.1-.1-.8-.5-1.6-.8-2.3-1.4-.1-.2.3-.5 0-.6-.2-.1-.2.3-.4.4-.9-.5-1.8-1-2.6-1.5 0 0-.1 0-.1-.1-.2-.1-.4-.2-.6-.4 0 0-.1 0-.1-.1-.6-.3-1.1-.7-1.7-1l-.1-.1c-.3-.1-.6-.3-.9-.5 0 0-.1 0-.1-.1-.3-.2-.6-.3-.8-.5 0-.2.2-.5-.2-.6-.2-.1-.5-.1-.5.3-.4-.1-.6-.4-1-.5l-.1-.1c-.3-.1-.6-.3-.9-.5 0 0-.1 0-.1-.1-1.7-1-3.5-2-5.2-3-1.7-.9-3.3-1.9-5-2.8-1.1-.6-2.2-1.2-3.5-1.1-.4 0-.6.2-.8.5-.4.9-.5 1.8-.5 2.8 0 1.6.2 3.1.5 4.7s.6 3.2 1.1 4.8c.7 2.4 1.6 4.7 2.6 6.9.9 1.9 2 3.7 3.1 5.5 1.9 2.9 4.1 5.6 6.6 8.1.7.7 1.5 1.3 2.2 2 1.4 1.3 2.9 2.4 4.4 3.5 2.3 1.6 4.8 2.7 7.4 3.5 2 .6 3.9 1 6 1.3 1.9.3 3.7.4 5.6.4h.8c0 .1 0 .1.1.1s.1-.1.1-.1c1.2-.1 2.4 0 3.6-.1.9-.1 1.8-.1 2.8-.2 1.7-.2 3.3-.3 5-.7 1.3-.2 2.7-.4 3.9-.8 1.5-.5 2.9-1 4.4-1.4 2.3-.7 4.5-1.4 7-1.1 1.3.2 2.5.6 3.7 1.3 1.6.9 3.1 2.1 4.6 3.2 1.5 1.1 2.9 2.2 4.3 3.4 1.1.8 2.1 1.7 3.2 2.5.3.2.5.3.9 0 2.2-1.7 4.2-3.6 6.1-5.6 1.8-1.9 3.5-3.9 5-6.1 1.8-2.5 3.4-5.2 4.8-8 .2-.4.2-.6-.2-.9l-14.1-11.1c-.7-.5-1.2-1.2-1.6-1.9-.6-1.2-.8-2.5-.8-3.8-.1-2.5 0-5 .3-7.5.1-1.3.1-2.5.2-3.8.2-1.9 0-3.9-.3-5.8-.2-1.8-.7-3.5-1.2-5.3-1.2-3.8-3.1-7.3-5.1-10.8-2-3.4-4.4-6.4-7.4-8.9-2-1.7-4.2-3.1-6.6-4.4-3.2-1.7-6.7-3-10.2-3.9-2.4-.6-4.9-1.1-7.4-1.1-1.8 0-3.5.1-5.3.2-.9 0-1.8.1-2.7.2l-3.9.6c-1.6.3-3.2.6-4.8 1-1.5.4-2.9.9-4.4 1.3-1 .3-2 .5-2.7 1.5s-.7 2 .4 2.6c1.5.8 3 1.6 4.5 2.5 2.3 1.3 4.6 2.7 6.9 4 2.5 1.5 5 2.9 7.5 4.4 0 .3.1.4.4.2.2.1.3.2.5.3.8.5 1.6.9 2.4 1.5 0 .1 0 .3.2.1h.2c2.6 1.6 5.2 3.1 7.7 4.8 0 .1-.1.4.2.2.3.2.6.3.7.5 0 .1-.1.4.2.2.7.5 1.2 1.2 1.6 1.9.6 1.1 1 2.2 1 3.4-.2.1-.4.1-.4.3 0 .9.3.9.4.9zm-41.6 6.2c-.2-.1-.3-.3-.5-.1v.1c.2.1.4.2.5 0zm25.4 16.3c.2 0 .3 0 .3-.2 0-.1-.1-.2-.2-.1-.1 0-.2.1-.1.3-.1 0 0 0 0 0zm29.6 40.6c0-.1-.1-.1-.1-.1-.1 0-.1.1-.2.2 0 .1 0 .2.1.1.2 0 .2-.1.2-.2zM80 108.5c0-.1 0-.1 0 0-.2-.1-.3 0-.3 0 0 .1 0 .1.1.1 0 0 .1 0 .2-.1zm3.7 2.7c0-.1-.1-.1 0 0-.2-.1-.2 0-.2 0 0 .1.1.2.2 0zm-.1-41.1c-.1 0-.1.1 0 0-.1.2 0 .2 0 .2.1 0 .1-.1 0-.2.2 0 .1 0 0 0zm11 36.2-.2-.1c0 .1 0 .1.2.1-.1.1-.1 0 0 0zm-3 4.1c-.1 0-.1.1 0 0 0 .1 0 .1 0 0z"
                          />
                          <path
                            fill="#000"
                            d="M127.3 154.8c0-.2 0-.3.2-.4.1 0 .2.1.2.2-.1.2-.3.1-.4.2zm-1.7.7c0-.3.2-.3.4-.2-.1.2-.2.3-.4.2zm-24 4.4c.1-.1.2-.1.3 0-.1.2-.2.2-.3 0zm21.6-3.4c0-.3.1-.3.3-.2 0 .1-.1.1-.3.2zm-28.9 2.6c.2-.1.2 0 .2.1-.1.1-.2.1-.2-.1zm8.2.8.1.1c-.1 0-.1 0-.1-.1z"
                          />
                          <path
                            fill="#fff"
                            d="M71.5 104.8c.3.2.6.3.8.5 0 .1 0 .1.1.1.3.1.5.4.9.5 0 .1 0 .1.1.1.6.3 1.1.7 1.7 1 0 .1 0 .1.1.1.2.1.4.2.6.4 0 .1 0 .1.1.1.9.5 1.8 1 2.6 1.5.1.1.3.2.4.2.7.5 1.6.9 2.3 1.4 0 .1 0 .1.1.1 1.1.6 2.3 1.3 3.4 1.9 0 .1 0 .1.1.1.4.2.8.5 1.3.7.1.1.2.1.3.2 1.3.5 2.6.4 4 .2 3.5-.6 6.5-2.4 9.1-4.7.3-.2.6-.4.8-.7.1-.1.2-.2.3-.4 1.5-1.5 2.9-3.1 4-4.9.1-.1.2-.2.2-.3 1.1-1.4 1.9-3 2.7-4.6.9-1.8 1.7-3.7 2-5.7.1-.8.3-1.7.2-2.5.1-.2 0-.4-.1-.5 0-1.2-.4-2.4-1-3.4-.4-.7-.9-1.4-1.6-1.9l-.2-.2c-.2-.3-.5-.4-.7-.5-.1-.1-.1-.2-.2-.2-2.5-1.7-5.1-3.2-7.7-4.8H98c0-.1-.1-.1-.2-.1-.7-.6-1.6-1-2.4-1.5-.2-.1-.3-.2-.5-.3-.1-.1-.3-.2-.4-.2-2.5-1.5-5-2.9-7.5-4.4-2.3-1.4-4.6-2.7-6.9-4-1.5-.9-3-1.7-4.5-2.5-1.1-.6-1.1-1.6-.4-2.6.6-.9 1.7-1.2 2.7-1.5 1.5-.4 2.9-.9 4.4-1.3 1.6-.4 3.2-.8 4.8-1l3.9-.6c.9-.1 1.8-.2 2.7-.2 1.8-.1 3.5-.2 5.3-.2 2.5 0 5 .5 7.4 1.1 3.6.9 7 2.2 10.2 3.9 2.3 1.2 4.5 2.7 6.6 4.4 3 2.5 5.5 5.5 7.4 8.9 2 3.5 3.8 7 5.1 10.8.6 1.7 1 3.5 1.2 5.3.2 1.9.4 3.8.3 5.8-.1 1.3-.1 2.5-.2 3.8-.2 2.5-.4 5-.3 7.5 0 1.3.2 2.6.8 3.8.4.8.9 1.4 1.6 1.9l14.1 11.1c.4.3.4.5.2.9-1.4 2.8-2.9 5.5-4.8 8-1.5 2.2-3.2 4.2-5 6.1-1.9 2-4 3.8-6.1 5.6-.4.3-.6.3-.9 0-1.1-.8-2.1-1.7-3.2-2.5-1.4-1.1-2.9-2.3-4.3-3.4-1.5-1.1-3-2.2-4.6-3.2-1.1-.7-2.4-1.1-3.7-1.3-2.4-.4-4.7.3-7 1.1-1.5.5-2.9 1-4.4 1.4-1.3.4-2.6.6-3.9.8-1.6.3-3.3.5-5 .7-.9.1-1.8.1-2.8.2-1.2.1-2.4 0-3.6.1h-1c-1.9 0-3.8-.2-5.6-.4-2-.3-4-.7-6-1.3-2.6-.8-5.1-1.9-7.4-3.5-1.5-1.1-3-2.2-4.4-3.5-.7-.7-1.5-1.3-2.2-2-2.5-2.5-4.7-5.2-6.6-8.1-1.1-1.8-2.2-3.6-3.1-5.5-1-2.2-2-4.5-2.6-6.9-.4-1.6-.8-3.2-1.1-4.8-.3-1.6-.5-3.1-.5-4.7 0-1 .1-1.9.5-2.8.1-.3.4-.5.8-.5 1.3-.1 2.4.5 3.5 1.1 1.7.9 3.3 1.9 5 2.8 1.7 1 3.5 2 5.2 3 0 .1 0 .1.1.1.3.1.5.4.9.5 0 .1 0 .1.1.1.3.2.6.4 1 .5.4-.5.6-.3.8-.3z"
                          />
                          <path
                            fill="#fff"
                            d="M101.8 98.7v1.9c0 .4 0 .7-.5.9-1 .5-2 1.2-3 1.7-2.2 1.3-4.5 2.6-6.7 3.9-.1 0-.2.1-.2.1-.3.2-.6.4-.9.5-.1.1-.3.1-.4.2-1.4.8-2.8 1.5-4.1 2.4-.4.2-.6.2-1 0-3.1-1.8-6.3-3.6-9.4-5.4l-.6-.3c-.1-.1-.2-.2-.4-.2-1.6-1-3.2-1.9-4.9-2.8-.4-.2-.7-.5-.6-1s0-1.1 0-1.6V82.8c0-.3.1-.4.3-.6 2.5-1.4 5.1-2.9 7.6-4.4 2.6-1.5 5.2-3.1 7.9-4.6.3-.2.6-.2 1 0 1.3.8 2.7 1.5 4 2.3.2.1.5.3.7.4 3.7 2.1 7.4 4.3 11.1 6.4v15.8c.1.2.1.4.1.6zM87 76.6c-5.7 0-9.3 1.6-12.3 4.7-3.1 3.3-4.4 7.3-4.1 11.8.6 6.9 6.5 13.7 15.1 13.8 4.2 0 7.8-1.5 10.7-4.4 3.4-3.4 4.8-7.6 4.4-12.4-.7-6.7-6.5-13.6-13.8-13.5z"
                          />
                          <path
                            fill="#000"
                            d="M71.5 104.8c-.3 0-.4-.2-.6-.3 0-.4.2-.3.5-.3.4.1.2.4.1.6zm38.4-15.5c.1.2.1.3.1.5-.2 0-.4 0-.5-.2s.2-.2.4-.3zM79 109.2c-.2 0-.3-.1-.4-.2.2-.1.2-.5.4-.4.3.1 0 .4 0 .6zm11.7-33.3c-.2-.1-.5-.3-.7-.4.4-.2.6-.1.7.4zM69.2 93.4v.6c-.2 0-.3-.2-.3-.4s.1-.2.3-.2zm0 4.9v.6c-.4-.1-.4-.3 0-.6zm-.9-2.2c-.2.2-.3.1-.4 0V96c.2-.2.3 0 .4.1zm32.5 11.8c-.1.1-.2.2-.3.4-.1 0-.2-.1-.2-.2.1-.3.3-.2.5-.2zm-7.1 4.5s-.1 0 0 0c-.1-.2 0-.2.1-.3.1 0 .2 0 .2.1 0 .2-.1.2-.3.2zm8.1-13.7v-.5c.4.1.4.3 0 .5zm-15.2 14.8c-.1 0-.2-.1-.3-.2 0-.1 0-.2.2-.2.1 0 0 .2.1.4zm36.7 39.5c0 .1-.1.2-.2.2s-.1-.1-.1-.1c0-.1.1-.2.2-.2.1-.1.1 0 .1.1zm-33.2-45c.1-.1.2-.2.4-.2.1.1.3.2 0 .2h-.4zm-10.1.5c0 .1-.1.2-.2.1-.1 0-.1-.1-.1-.1 0-.1.1-.1.3 0-.1-.2 0-.1 0 0zm3.7 2.7c0 .1 0 .1-.1.2-.1 0-.2 0-.2-.1s0-.1.1-.1c.1-.1.2-.1.2 0zm18.1-28.5v-.3c.1 0 .3 0 .3.2 0 .1-.2 0-.3.1zm-7.1-6.5c.1.1.3.2.4.2-.2.2-.4.1-.4-.2zm-11.1-6.1c.1 0 .2 0 0 0 .1.2 0 .2 0 .2-.1 0-.1 0 0-.2-.1 0 0 0 0 0zm-8.9 34.3c.1 0 .3.1.4.2-.3.1-.4.1-.4-.2zm16.7 2.8c.1 0 .2-.1.2-.1 0 .1.1.3-.1.3-.1 0 0-.1-.1-.2zm13.6-4.5c0 .1-.1.3-.2.3-.1-.2 0-.3.2-.3zm-10.4 3.6c-.1 0-.1.1 0 0-.2.1-.2 0-.2 0h.2c-.1-.1 0 0 0 0zm11.5-23.2c.1 0 .2.1.2.2-.3.2-.2-.1-.2-.2zm.9.7.2.2c-.3.2-.1-.1-.2-.2zm-9-5.6c.1 0 .2 0 .2.1-.2.2-.2 0-.2-.1zm3.8 12.4v-.2c.1 0 .1 0 0 .2.2 0 .1 0 0 0zm-7.6 49.8h.2c0 .1 0 .1-.1.1-.1.1-.1 0-.1-.1zm7.6-51v-.2c.1 0 .1 0 0 .2.2 0 .1 0 0 0zm-10.2 21c0 .1 0 .1 0 0-.1 0-.1 0 0 0-.1 0 0 0 0 0zm-22.6-7c-.1 0-.1 0 0 0-.1-.1-.1 0 0 0zm.9.5c-.1 0-.1 0 0 0zm2.6 1.5c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zm.9.5c-.1 0-.1 0 0 0zm1.8 1.1c-.1 0-.1 0 0 0 0-.1 0 0 0 0zm.8.4c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zm9 5.2c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zm-3.5-2c-.1 0-.1 0 0 0-.1-.1-.1 0 0 0zm5.5-34c7.4-.1 13.2 6.8 13.8 13.4.5 4.8-1 9-4.4 12.4-2.9 3-6.6 4.5-10.7 4.4-8.6 0-14.5-6.9-15.1-13.8-.4-4.5.9-8.5 4.1-11.8 2.9-3 6.6-4.6 12.3-4.6zm12.1 15.1C99 84.2 93.2 78.5 86 78.3c-7.8-.1-13.6 5.9-13.6 13.2-.1 7.6 5.9 13.4 13.3 13.5 7.4.2 13.3-5.9 13.4-13.3z"
                          />
                          <path
                            fill="#fff"
                            d="M99.1 91.7c-.1 7.3-6 13.4-13.5 13.4-7.4-.1-13.4-5.9-13.3-13.5.1-7.4 5.9-13.4 13.6-13.2 7.3.1 13 5.8 13.2 13.3z"
                          />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        MTD Genuine Parts
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/engine-parts/kohler"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          viewBox="0 0 254.2 55"
                          style={{ width: "100%" }}
                        >
                          <path d="M138 52.5v-51h13.9v38h15.6v13H138M92.5 52.5v-51h14v17.9h14V1.5h14v51h-14v-19h-14v19h-14M45.2 1.5 25 25.8l23 26.7H29.6L14 34.3h-.1v18.2H0v-51h13.9v15.3h-.1L27.1 1.5h18.1" />
                          <path d="M37.6 26.6C37.6 11.9 49.4 0 63.9 0s26.3 11.9 26.3 26.6c0 14.7-11.8 26.6-26.3 26.6S37.6 41.3 37.6 26.6m26.3 13.1c6.5 0 11.8-5.9 11.8-13.1 0-7.2-5.3-13.1-11.8-13.1-6.5 0-11.9 5.9-11.9 13.1.1 7.2 5.4 13.1 11.9 13.1zM184.4 1.5h14.3v11.8h-14v8h12.9v11.5h-12.9v7.7h14.1v12h-28.4v-51h14M227.7 32.1l14.5 20.4H227l-11.4-15.7v15.6H202v-51h17.5c15.3.1 25.1 19.4 8.2 30.7m-8.2-9c2.7 0 4.9-2.2 4.9-4.9s-2.2-4.9-4.9-4.9h-3.9v9.8h3.9zM244 49.9c0-2.8 2.2-5.1 5.1-5.1 2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1c-2.9 0-5.1-2.2-5.1-5.1m9.4 0c0-2.4-2-4.3-4.3-4.3s-4.4 1.9-4.4 4.3 2 4.3 4.4 4.3c2.3 0 4.3-1.9 4.3-4.3zm-1.9 2.8h-.9l-1.7-2.6h-.9v2.6h-.8v-5.6h2.4c1 0 2 .3 2 1.5 0 1.1-.8 1.5-1.8 1.5l1.7 2.6zm-2.6-3.4c.7 0 1.9.1 1.9-.8 0-.6-.8-.7-1.4-.7h-1.5v1.4h1z" />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Kohler
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/engine-parts/kawasaki"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          id="Layer_1"
                          x={0}
                          y={0}
                          viewBox="0 0 351 95.9"
                          style={{ width: "100%" }}
                        >
                          <path
                            d="m127.3 35.5 6.2 19.5h15.2l12-39.7h-15.4l-6.1 18.6-5.2-18.6h-13.6l-5.8 18.6-5.5-18.6H92.8L106.3 55h15.8zm99.7-6.4c-8.3-1.1-9.5-1.9-9.5-3.7 0-1.4 1.7-2.5 4.7-2.5s4.8 2.2 5.1 4.4h13.6c0-7.5-4.8-13.9-19-13.9C201.8 13.3 203 27 203 27c0 11.1 13 12.2 19.2 13.2 5.5.9 5.3 3.9 5.3 3.9s.2 3-4.8 3c-6.2 0-6.1-6-6.1-6h-14.3c0 12.7 11 15.8 20.3 15.8s19.5-3.3 19.5-13.4c-.1-10-5.6-12.5-15.1-14.4zm57.6-3.2c-.9-14.1-18.7-13-18.7-13-23.9-.1-20.9 16-20.9 16h14.2c0-6.4 5.6-5.9 5.6-5.9 1 0 4.7.5 4.5 3.3-.2 2.8-4.6 3.3-9.5 4.2-12.2 2.2-16 7.2-16 13.9s4.9 11.9 13.7 11.9c8.8 0 12.9-4.9 12.9-4.9.7 1.8 2.1 3.6 2.1 3.6h15.2c-4-5.5-2.1-15-3.1-29.1zm-19.8 20c-4 1-5.7-1.8-5.7-1.8s-1.7-2.6 1.7-4.1c3.4-1.5 9.4-3.5 9.4-3.5s.4 7.8-5.4 9.4zM335.3 0H351v11.2h-15.7zm0 15.3H351V55h-15.7zm-30.6 28.5 2-2.2 8.7 13.4h18.1l-16-25 13.7-14.8h-18.5l-8 9.5V0h-15.6v55h15.6zM16.3 38.7l4.3-4.4L33.4 55h21.3L32.3 21.9 53.1 0H32.7L16.3 16.8V0H0v55h16.3z"
                            fill="#d7282f"
                          />
                          <path
                            d="M93.5 25.9c-1-14.1-18.7-13-18.7-13C50.9 12.9 53.9 29 53.9 29h14.3c.1-6.4 5.6-5.9 5.6-5.9 1 0 4.7.5 4.4 3.3-.2 2.8-4.6 3.3-9.5 4.2-12.2 2.2-16 7.2-16 13.9s4.9 11.9 13.7 11.9c8.8 0 12.8-4.9 12.8-4.9.7 1.8 2.1 3.6 2.1 3.6h15.3c-4-5.6-2.1-15.1-3.1-29.2zm-19.7 20c-4 1-5.7-1.8-5.7-1.8s-1.7-2.6 1.7-4.1c3.3-1.5 9.3-3.5 9.3-3.5s.4 7.8-5.3 9.4zm125.9-20c-.9-14.1-18.7-13-18.7-13-23.9 0-20.9 16.1-20.9 16.1h14.2c.1-6.4 5.7-5.9 5.7-5.9.9 0 4.7.5 4.5 3.3-.2 2.8-4.6 3.3-9.5 4.2-12.2 2.2-16 7.2-16 13.9s5 11.9 13.7 11.9c8.8 0 12.9-4.9 12.9-4.9.7 1.8 2.1 3.6 2.1 3.6H203c-4.3-5.6-2.4-15.1-3.3-29.2zm-19.8 20c-4 1-5.7-1.8-5.7-1.8s-1.7-2.6 1.7-4.1c3.4-1.5 9.4-3.5 9.4-3.5s.4 7.8-5.4 9.4z"
                            fill="#d7282f"
                          />
                          <path d="M223.8 95h13.3v-3.1h-9.8v-8.8h9.7V80h-9.7v-6.7h9.8v-3.2h-13.3zm-46.2-24.9h3.5V95h-3.5zm78.7 11.2c-.4-.2-1-.4-2-.8-.9-.3-1.7-.7-2.4-1-.6-.3-1.2-.8-1.6-1.3-.4-.5-.6-1.2-.6-1.9 0-1 .4-1.8 1.1-2.4.7-.6 1.6-.9 2.7-.9.8 0 1.5.1 2 .4.5.3 1.3.9 2.3 1.9l2.3-2.6c-1.1-1.1-2.2-1.9-3.2-2.4s-2.2-.7-3.4-.7c-1.5 0-2.8.3-3.9.9-1.1.6-2 1.4-2.6 2.5-.6 1.1-.9 2.3-.9 3.8 0 .8.1 1.5.3 2.1.2.6.5 1.2 1 1.8.5.5 1 1 1.7 1.4.7.4 1.5.8 2.5 1.2l3.1 1.3c2 .8 3 2 3 3.6 0 .8-.2 1.5-.6 2.1-.4.6-.9 1.1-1.6 1.5-.7.4-1.4.5-2.2.5-2 0-3.8-1-5.5-3l-2.4 2.5c1.1 1.3 2.3 2.2 3.6 2.8 1.2.6 2.6.9 4.2.9s3-.3 4.3-1c1.3-.7 2.2-1.6 2.9-2.8.7-1.2 1-2.5 1-4s-.4-2.8-1.2-3.9c-.8-.9-2.1-1.8-3.9-2.5zm-97.8 4.2h6c-.2 1.3-.6 2.5-1.3 3.5-.7 1-1.6 1.8-2.7 2.4-1.1.6-2.4.8-3.7.8-1.3 0-2.5-.2-3.6-.7-1.1-.4-2-1.1-2.8-1.9-.8-.8-1.4-1.8-1.8-3-.4-1.2-.6-2.4-.6-3.8 0-1.8.4-3.5 1.2-5 .8-1.5 1.8-2.6 3.2-3.5 1.4-.8 2.9-1.2 4.6-1.2 1 0 1.9.1 2.7.4.8.3 1.6.7 2.3 1.2.8.6 1.6 1.4 2.6 2.3l2.5-2.5c-1.2-1.2-2.3-2.2-3.3-2.9-1-.7-2-1.2-3.1-1.5-1.1-.3-2.3-.5-3.7-.5-2.3 0-4.5.6-6.5 1.8-2 1.2-3.5 2.8-4.6 4.8-1.1 2-1.7 4.3-1.7 6.8 0 3.6 1.1 6.6 3.3 8.8 1.2 1.2 2.6 2.2 4.2 2.8 1.6.7 3.3 1 5 1 1.8 0 3.5-.4 5.1-1.1 1.6-.7 3-1.8 4.1-3.1.9-1.1 1.6-2.3 1.9-3.6.4-1.3.6-3.2.7-5.6h-9.9v3.3zm51.4 2.2-18.6-18.8V95h3.5V77.1l18.6 18.8V70.1h-3.5zM89.7 95H103v-3.1h-9.7v-8.8h9.6V80h-9.6v-6.7h9.7v-3.2H89.7zm41.4-7.3-18.5-18.8V95h3.5V77.1l18.6 18.8V70.1h-3.6zm141.8-8.4H351v3.5h-78.1zM0 79.3h78.1v3.5H0z" />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Kawasaki
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/ourbrands-dewalt.html"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div
                        className="d-flex p-2 p-md-3"
                        style={{ minHeight: 150, maxHeight: 150 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          viewBox="0 0 885.8 272.2"
                          style={{ width: "100%" }}
                        >
                          <path
                            fill="#febd18"
                            d="M885.847 272.203V.003H.047v272.2h885.8"
                          />
                          <path d="M38.147 38.103h809.6v15.3h-809.6v-15.3zm0 180.5h809.6v15.3h-809.6v-15.3zm686.8-157.4h122.8v42.2h-33.3v107.1h-56.4v-107.1h-33.2v-42.2m-84.4 0v149.4h102.4v-44.5h-46.1v-104.9h-56.3m-115.3 0h61.8l47.4 149.4h-55.1l-5.6-22.7h-34.5l-5.1 22.7h-57.5l48.6-149.4zm21.7 93.4h19.2l-9.4-43.5-9.8 43.5m-51.3-93.4h-55l-15.3 72.9-16.6-72.9h-48.6l-15.7 72.9-15-72.9h-54.9l41.1 149.4h51l17.2-72.9 17.6 72.9h52.2l42-149.4m-302.3 31.9h81.9v30.7h-39.6v12.8h34.5v30.8h-34.5v12.7h39.7v30.4h-81.9v-117.4m-155.2 117.5v-149.4h70c41.3 0 74.2 22.5 74.2 75 0 51.1-31.8 74.4-74.5 74.4h-69.7zm57.8-44.8c17.7 0 29.4-7.4 29.4-30.1 0-24.9-11.6-31.6-29.3-31.6h-4.5v61.7h4.4m726.1 32.3c0-7 5.7-12.2 12.4-12.2s12.4 5.2 12.4 12.2c0 7.1-5.7 12.3-12.4 12.3s-12.4-5.2-12.4-12.3zm12.4 10.3c5.5 0 9.9-4.3 9.9-10.2 0-5.8-4.4-10.2-9.9-10.2-5.6 0-10 4.4-10 10.2.1 5.8 4.5 10.2 10 10.2zm-2.3-8.7h2l2.7 4.5h3l-3.1-4.7c2.1-.3 3.6-1.6 3.6-4.1 0-2.2-1.7-3.7-5.1-3.7h-5.4v12.6h2.3v-4.6zm0-2.1v-4h2.7c1.5 0 3.2.1 3.2 2 0 2.1-1.4 2.1-3.2 2.1h-2.7" />
                        </svg>
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        DeWalt
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="px-3 pb-2">
                  <a
                    href="#top"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 bg-secondary text-white"
                  >
                    View All
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1 fill-white"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                  <p className="mb-0 mt-3 fs-7 text-center">
                    For other brands, use our
                    <a href="#top">Parts Diagrams &amp; Lookup tool</a>.
                  </p>
                </div>
              </div>
              <div className="tab d-none" id="tab-part-type">
                <ul className="d-flex flex-wrap list-unstyled">
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-part-type/belts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Belts-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/belts-part-type-category.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Belts
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-part-type/blades"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Blades-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/blades-part-type-category.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Blades
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-part-type/carburetors"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Carburetors-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/carburetors-part-type-category.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Carburetors
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-part-type/engine-parts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Engine-Parts-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/engine-parts-part-type-category.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Engine Parts
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-part-type/filters"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Filters-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/filters-part-type-category.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Filters
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-part-type/shave-plates-and-skid-shoes"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Shave-Plates-&-Skid-Shoes-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/skid-shoes-part-type-category.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Shave Plates &amp; Skid Shoes
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-part-type/spark-plugs"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Spark-Plugs-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/spark-plugs-part-type-category.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Spark Plugs
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-part-type/tires-and-wheels"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Tires-&-Wheels-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/tires-wheels-part-type-category.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Tires &amp; Wheels
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="px-3 pb-2">
                  <a
                    href="#top"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 bg-secondary text-white"
                  >
                    View All
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1 fill-white"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="tab d-none" id="tab-machine-type">
                <ul className="d-flex flex-wrap list-unstyled">
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-machine-type/snow-blower-parts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Snow-Blowers-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/snow-blower-category-thumb.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Snow Blowers
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-machine-type/riding-lawn-mower-parts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Riding-Mowers-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/rider-category-thumb.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Riding Mowers
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-machine-type/walk-behind-lawn-mower-parts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Lawn-Mowers-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/lawn-mower-category-thumb.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Lawn Mowers
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-machine-type/log-splitter-parts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Log-Splitters-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/log-splitter-category-thumb.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Log Splitters
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-machine-type/chipper-shredder-vacuum-parts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Chipper-Shredders-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/chipper-shredder-category-thumb.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Chipper Shredders
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-machine-type/garden-tiller-parts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Tillers-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/tiller-category-thumb.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Tillers
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-machine-type/handheld-string-trimmer-parts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="String-Trimmers-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/trimmer-category-thumb.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        String Trimmers
                      </div>
                    </a>
                  </li>
                  <li className="col-6 col-md-3 p-2">
                    <a
                      href="https://www.mtdparts.com/en_US/shop-by-machine-type/edger-trimmer-and-leaf-blower-parts"
                      className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                    >
                      <div className="d-flex justify-content-center p-2 p-md-3">
                        <img
                          alt=""
                          id="Leaf-Blowers-jpg"
                          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/handheld-category-thumb.jpg"
                          rel="false"
                          as="false"
                          fetchpriority="false"
                          decoding="false"
                          loading="false"
                          srcSet=""
                          sizes="100vw"
                          style={{ maxWidth: "24rem" }}
                        />
                      </div>
                      <div
                        className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                        style={{ backgroundColor: "rgb(232, 232, 232)" }}
                      >
                        Leaf Blowers
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="px-3 pb-2">
                  <a
                    href="#top"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 bg-secondary text-white"
                  >
                    View All
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1 fill-white"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="px-3 py-5 mt-3"
          style={{ backgroundColor: "rgb(232, 232, 232)" }}
        >
          <div className="container-xxl g-0 d-flex flex-column">
            <h2 className="text-uppercase text-center">Shop With Confidence</h2>
            <p className="mb-0 fs-7 text-center">
              Because of overwhelming demand combined with the situation we’re
              all experiencing, delivery delays may occur. We are working hard
              to process your order and deliver your parts and equipment to you
              as timely as possible. We thank you for your business, and your
              patience, as we navigate through these tough times together.
            </p>
            <ul className="d-flex flex-wrap list-unstyled mt-lg-4 mb-0">
              <li className="col-12 col-lg-4">
                <div className="d-flex flex-column align-items-center p-2 p-lg-4 border-bottom border-lg-bottom-0 border-lg-right h-100">
                  <div
                    className="d-flex align-items-center w-100 mb-3 max-w-160"
                    style={{ height: 120 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 170.249 108.546"
                      style={{ height: "100%" }}
                    >
                      <path
                        d="m123.266 108.546-.017-.017L76.3 81.413V27.132l.033-.016-.017.033L123.266 0l46.983 27.116V81.43Zm29.784-71.5h.016L113.349 14.08l-12.583 7.283 39.7 22.949v16.8l12.584-7.268Zm-29.8 17.166L83.566 31.295l-.016-.016-.034.049v45.915l39.733 22.932Z"
                        fill="#059353"
                        fillRule="evenodd"
                      />
                      <path
                        d="M113.933 60.914v.034a2.988 2.988 0 0 1-1.217 2.783 2.653 2.653 0 0 1-2.9-.2l-12.933-7.436a8.03 8.03 0 0 1-2.917-3.149 8.516 8.516 0 0 1-1.2-4.183v-.017a3.127 3.127 0 0 1 1.2-2.833 2.739 2.739 0 0 1 2.917.233l12.933 7.433a8.021 8.021 0 0 1 2.9 3.134 8.525 8.525 0 0 1 1.217 4.201Z"
                        fill="#059353"
                        fillRule="evenodd"
                      />
                      <path
                        fill="#059353"
                        data-name="Path 28"
                        d="M49.77 27.444H27.245c-2.206 0-3.869 1.111-3.869 2.583v.762c0 1.471 1.663 2.583 3.869 2.583h22.526c2.2 0 3.867-1.111 3.867-2.583v-.762c0-1.472-1.664-2.583-3.868-2.583Z"
                      />
                      <path
                        fill="#059353"
                        data-name="Path 29"
                        d="M17.556 75.098H3.868c-2.206 0-3.869 1.109-3.869 2.583v.762c0 1.471 1.663 2.58 3.869 2.58h13.688c2.2 0 3.867-1.109 3.867-2.58v-.762c0-1.475-1.663-2.583-3.867-2.583Z"
                      />
                      <path
                        fill="#059353"
                        data-name="Path 30"
                        d="M21.619 51.27c-2.2 0-3.867 1.111-3.867 2.583v.762c0 1.471 1.663 2.583 3.867 2.583h8.055c2.2 0 3.867-1.111 3.867-2.583v-.762c0-1.471-1.663-2.583-3.867-2.583Z"
                      />
                      <path
                        fill="#059353"
                        data-name="Path 31"
                        d="M80.841 80.985V27.444H64.634a2.566 2.566 0 0 0-.446.042h-.455c-2.206 0-3.869 1.111-3.869 2.583v.762c0 1.471 1.663 2.58 3.869 2.58h3.281c2.206 0 3.869 1.111 3.869 2.583v.762c0 1.471-1.663 2.583-3.869 2.583H14.366c-2.2 0-3.867 1.109-3.867 2.581v.764c0 1.471 1.663 2.581 3.867 2.581h42.513c2.2 0 3.869 1.109 3.869 2.581v.764c0 1.471-1.665 2.58-3.869 2.58H46.26c-2.2 0-3.867 1.109-3.867 2.583v.762c0 1.471 1.663 2.581 3.867 2.581h28.112c2.206 0 3.869 1.111 3.869 2.583v.762c0 1.471-1.663 2.583-3.869 2.583H14.715c-2.2 0-3.867 1.109-3.867 2.58v.762c0 1.473 1.663 2.583 3.867 2.583h49.564c2.206 0 3.869 1.109 3.869 2.58v.764c0 1.471-1.663 2.58-3.869 2.58H30.621c-2.206 0-3.869 1.109-3.869 2.583v.762c0 1.471 1.663 2.58 3.869 2.58h2.688Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-center h5">Fast, Free Shipping</h3>
                  <p className="fs-7 mb-3 text-center">
                    Parts orders over $45 ship free.
                    <sup>*</sup>
                    Delivery for standard shipping averages 5-7 business days
                    for equipment and 3-5 days for parts.
                  </p>
                  <small className="fs-8 mb-0 mt-auto">
                    <sup>*</sup>
                    Some exclusions apply.
                    <a
                      href="https://www.mtdparts.com/en_US/shipping-returns.html"
                      style={{ fontSize: "10.4px" }}
                    >
                      Read full shipping policy
                    </a>
                  </small>
                </div>
              </li>
              <li className="col-12 col-lg-4">
                <div className="d-flex flex-column align-items-center p-2 p-lg-4 border-bottom border-lg-bottom-0 border-lg-right h-100">
                  <div
                    className="d-flex align-items-center w-100 mb-3 max-w-120"
                    style={{ height: 120 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 118.523 127.972"
                      style={{ height: "100%" }}
                    >
                      <path
                        d="m97.648 41.388.023.022a16.593 16.593 0 0 1 0 23.56l-.023.02a15.977 15.977 0 0 1-11.759 4.928h-33.5v-2.516L8.121 41.832l-.02-.02-.042.065v51.2l44.33 25.57V90.048h33.5a35.558 35.558 0 0 0 18.911-5.114v12.8l-52.369 30.243L.001 97.714V37.202l.084-.043-.063.063 52.41-30.286 6.43 3.723-15.779 15.777 32.4 32.4 11.4-11.483-7.509-10.85-.021-.02h6.835a16.059 16.059 0 0 1 11.46 4.905Z"
                        fill="#059353"
                        fillRule="evenodd"
                      />
                      <path
                        d="M100.652 38.406a20.163 20.163 0 0 0-14.465-6.155h-.3l-14.593.022 10.109 14.572v.02l-5.941 6.028-26.438-26.436.02-.02h-.02L75.462.02V0l6 6.028-10.152 14.55h14.847a32.623 32.623 0 0 1-.274 65.244H38.656a11.734 11.734 0 0 1-1.714 2.159 11.3 11.3 0 1 1 0-15.989 11.639 11.639 0 0 1 1.714 2.157h47.227a20.921 20.921 0 0 0 14.762-35.743Z"
                        fill="#059353"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-center h5">
                    Hassle-Free Parts Returns
                  </h3>
                  <p className="fs-7 mb-3 text-center">
                    We’ll make sure you get the right part. We will work with
                    you to ensure you receive the correct replacement part for
                    your machine and that you receive credit for your part
                    return.
                    <sup>*</sup>
                  </p>
                  <small className="fs-8 mb-0 mt-auto">
                    <sup>*</sup>
                    Some exclusions apply.
                    <a
                      href="https://www.mtdparts.com/en_US/shipping-returns.html"
                      style={{ fontSize: "10.4px" }}
                    >
                      Read full shipping policy
                    </a>
                  </small>
                </div>
              </li>
              <li className="col-12 col-lg-4">
                <div className="d-flex flex-column align-items-center p-2 p-lg-4 border-bottom border-lg-bottom-0 border-lg-right h-100 border-bottom-0 border-lg-right-0">
                  <div
                    className="d-flex align-items-center w-100 mb-3 max-w-120"
                    style={{ height: 120 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 129.282 117.09"
                      style={{ height: "100%" }}
                    >
                      <path
                        d="M100.184 40.26a35.288 35.288 0 0 0-9.832-17.488 39.835 39.835 0 0 0-3.728-3.31 36.635 36.635 0 0 0-43.992 0 40 40 0 0 0-3.729 3.31 35.231 35.231 0 0 0-9.81 17.488c-.024.142-.049.29-.081.44l-.019.1a39.269 39.269 0 0 0-.738 7.7v33.442a2.885 2.885 0 0 1-.738 1.954 2.949 2.949 0 0 1-1.833 1.033 5.854 5.854 0 0 1-1.515.041 7.334 7.334 0 0 1-1.138.079A23.014 23.014 0 0 1-.002 62.016v-5.521a23.117 23.117 0 0 1 18.247-22.574 48.728 48.728 0 0 1 92.788 0 23.114 23.114 0 0 1 18.251 22.574v5.523a23.011 23.011 0 0 1-23.033 23.033h-.4a42.292 42.292 0 0 1-10.648 17.128l-.021.021a45.945 45.945 0 0 1-4.366 3.848l-.02.019a40.984 40.984 0 0 1-16.033 7.659 6.4 6.4 0 0 1-1.137 1.514 6.12 6.12 0 0 1-4.487 1.853h-8.974a6.33 6.33 0 0 1-6.322-6.32v-.038a6.332 6.332 0 0 1 6.322-6.322h8.974a6.131 6.131 0 0 1 4.487 1.855 6.806 6.806 0 0 1 .518.579 34.176 34.176 0 0 0 12.484-6.182 39.406 39.406 0 0 0 3.728-3.29 35.29 35.29 0 0 0 9.832-17.487c.014-.148.035-.3.06-.461l.019-.1a39.1 39.1 0 0 0 .738-6.68V48.495a39.273 39.273 0 0 0-.738-7.7l-.019-.1a8.789 8.789 0 0 1-.064-.435Z"
                        fill="#059353"
                        fillRule="evenodd"
                      />
                      <path
                        d="m80.625 37.788-2.294 4.608a3.368 3.368 0 0 0 .459 3.589q.919 1.258 1.934 2.45c.045.055.092.108.139.159a3.209 3.209 0 0 0 3.251 1.079l4.986-1.2c.264.629.511 1.272.737 1.934a27.267 27.267 0 0 1 1.577 8.1l-5.105 1.116a3.221 3.221 0 0 0-2.454 2.393c-.02.067-.041.133-.059.2a26.748 26.748 0 0 0-.738 3.232 3.219 3.219 0 0 0 1.2 3.211l4.008 3.11a26.263 26.263 0 0 1-6.381 8.076l-4.01-3.29a3.308 3.308 0 0 0-3.448-.42 2.49 2.49 0 0 0-.159.06q-1.353.628-2.793 1.377c-.061.024-.121.053-.181.08a3.193 3.193 0 0 0-1.773 2.911l.06 5.105a25.38 25.38 0 0 1-5.466.518 24.632 24.632 0 0 1-4.786-.518l.041-5.165a3.255 3.255 0 0 0-1.835-2.911 25.219 25.219 0 0 0-2.93-1.457c-.067-.029-.133-.053-.2-.078a3.173 3.173 0 0 0-3.369.458l-3.948 3.209a25.237 25.237 0 0 1-6.343-8.055l4.009-3.131a3.24 3.24 0 0 0 1.156-3.231c0-.054-.012-.106-.019-.159q-.284-1.511-.7-3.051c-.019-.06-.038-.121-.06-.181a3.211 3.211 0 0 0-2.432-2.393l-5.006-1.057a26.187 26.187 0 0 1 2.334-9.97l4.985 1.2a3.209 3.209 0 0 0 3.232-1.1c.047-.043.093-.09.139-.138a30.713 30.713 0 0 0 1.934-2.432c.029-.047.055-.093.08-.141a3.269 3.269 0 0 0 .319-3.43l-2.313-4.627a27.387 27.387 0 0 1 7.258-3.806 28.798 28.798 0 0 1 2.114-.658l2.113 4.525a3.24 3.24 0 0 0 2.892 1.874q1.755.063 3.49 0a3.272 3.272 0 0 0 2.912-1.874l2.133-4.567a29.2 29.2 0 0 1 4.846 1.814 28.726 28.726 0 0 1 4.464 2.652Zm-4.666 21.4a11.369 11.369 0 1 0-3.33 8.056 10.95 10.95 0 0 0 3.33-8.059Z"
                        fill="#059353"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-center h5">
                    Live Chat with Experts
                  </h3>
                  <p className="fs-7 mb-3 text-center">
                    Our outdoor power equipment experts are just one click away
                    through Live Chat. Available Mon - Fri 8:30am - 5pm EDT
                  </p>
                  <small className="fs-8 mb-0 mt-auto">
                    Phone support also available: 1-800-269-6215
                  </small>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="px-3 py-3 mt-3 how-to-guides">
          <div className="container-xxl g-0 d-flex flex-column">
            <h2 className="text-uppercase text-center">How-To Guides</h2>
            <ul className="d-flex flex-wrap list-unstyled mb-0 no-gutters">
              <li className="col-12 col-md-6 col-xl-3">
                <div className="d-flex flex-column align-items-center p-4 border-bottom border-md-bottom-0 border-xl-right h-100">
                  <div className="w-100 mb-3">
                    <img
                      src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/How-to-Remove-Snow-Get-Snow-Removal-Tips-from-MTD-Parts.png"
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <h3 className="h5 mb-3 text-center">
                    Snow Blower Operation: Get Snow Blower Tips from MTD
                  </h3>
                  <p className="fs-7 mb-3 text-center">
                    Learn about proper snow blower operation. Our snow blower
                    tips will help you use your machine safely and efficiently.
                    Take advantage of our snow blower tips to make your winter
                    cleanup easier.
                  </p>
                  <a
                    href="https://www.mtdparts.com/en_US/knowledge-snow-blower-tips.html"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 bg-white border border-secondary mt-auto fs-7"
                  >
                    Read More
                    <span className="visually-hidden">
                      Snow Blower Operation: Get Snow Blower Tips from MTD
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="col-12 col-md-6 col-xl-3">
                <div className="d-flex flex-column align-items-center p-4 border-bottom border-md-bottom-0 border-xl-right h-100">
                  <div className="w-100 mb-3">
                    <img
                      src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/Choose_A_Snow_Blower.jpg"
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <h3 className="h5 mb-3 text-center">
                    Selecting a Snow Blower
                  </h3>
                  <p className="fs-7 mb-3 text-center">
                    Get tips on how to choose a snow blower. Before buying a
                    snow blower, watch our video to learn how single-stage,
                    two-stage and three-stage units differ and which is best for
                    your snow removal needs.
                  </p>
                  <a
                    href="https://www.mtdparts.com/en_US/knowledge-choosing-right-snow-thrower.html"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 bg-white border border-secondary mt-auto fs-7"
                  >
                    Read More
                    <span className="visually-hidden">
                      Selecting a Snow Blower
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="col-12 col-md-6 col-xl-3">
                <div className="d-flex flex-column align-items-center p-4 border-bottom border-md-bottom-0 border-xl-right h-100">
                  <div className="w-100 mb-3">
                    <img
                      src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/Lawn_Mower_Cover.jpg"
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <h3 className="h5 mb-3 text-center">
                    Preparing your Lawn Mower for Winter Storage
                  </h3>
                  <p className="fs-7 mb-3 text-center">
                    As summer comes to an end, it's time to think about storing
                    your lawn mower for the winter. Proper lawn mower storage
                    will help ensure that your push or riding mower will be
                    ready to go next spring and help extend its overall life.
                    Here are some easy-to-follow lawn mower maintenance tips.
                  </p>
                  <a
                    href="https://www.mtdparts.com/en_US/knowledge-mower-winter-storage-maintenance.html"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 bg-white border border-secondary mt-auto fs-7"
                  >
                    Read More
                    <span className="visually-hidden">
                      Preparing your Lawn Mower for Winter Storage
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="col-12 col-md-6 col-xl-3">
                <div className="d-flex flex-column align-items-center p-4 border-bottom border-md-bottom-0 border-xl-right h-100 border-bottom-0 border-bottom-0 border-xl-right-0 border-bottom-0 border-xl-right-0 border-bottom-0 border-xl-right-0 border-bottom-0 border-xl-right-0 border-bottom-0 border-xl-right-0 border-bottom-0 border-xl-right-0">
                  <div className="w-100 mb-3">
                    <img
                      src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/home/Universal-Snow-Blower-Cab-Installation.jpg"
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <h3 className="h5 mb-3 text-center">
                    Universal Snow Blower Cab Installation
                  </h3>
                  <p className="fs-7 mb-3 text-center">
                    Protect yourself from winter elements. Follow these
                    step-by-step instructions for assembling and installing a
                    universal snow cab on your snow blower.
                  </p>
                  <a
                    href="https://www.mtdparts.com/en_US/knowledge-snow-cab-assembly.html"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 bg-white border border-secondary mt-auto fs-7"
                  >
                    Read More
                    <span className="visually-hidden">
                      Universal Snow Blower Cab Installation
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section
          className="px-3 py-5 mt-3"
          style={{ backgroundColor: "rgb(232, 232, 232)" }}
        >
          <div className="container-xxl g-0 d-flex flex-column">
            <h2 className="text-uppercase text-center">Support Quick Links</h2>
            <p className="mb-0 fs-7 text-center" />
            <ul className="d-flex flex-wrap list-unstyled p-2 no-gutters">
              <li className="col-12 col-lg-4">
                <div className="d-flex flex-column align-items-center p-2 p-lg-4 border-bottom border-lg-bottom-0 border-lg-right h-100">
                  <div
                    className="d-flex align-items-center w-100 mb-3 max-w-120"
                    style={{ height: 120 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 101.856 139.851"
                      style={{ height: "100%" }}
                    >
                      <path
                        d="M46.964 139.283c-10.714-.341-21.275-1.672-31.431-5.315-4.344-1.558-8.505-3.491-11.874-6.768A9.02 9.02 0 0 1 .5 120.72a8.2 8.2 0 0 1 2.025-5.3 21.265 21.265 0 0 1 6.946-5.364 65.926 65.926 0 0 1 18.17-5.923c.839-.165 1.7-.242 2.52-.464a1.167 1.167 0 0 1 1.4.581c.969 1.284 2.01 2.514 3.11 3.874-1.558.274-2.985.5-4.4.777a44.414 44.414 0 0 0-11.415 3.447 15.674 15.674 0 0 0-3.8 2.608 2.743 2.743 0 0 0 .132 4.469 18.81 18.81 0 0 0 4.607 2.745 54.371 54.371 0 0 0 14.019 3.252 138.574 138.574 0 0 0 26.281.739c7.123-.437 14.21-1.221 20.991-3.621a20.633 20.633 0 0 0 4.877-2.486c2.494-1.741 2.467-3.946.09-5.855a22.712 22.712 0 0 0-8.774-3.934c-2.967-.769-6-1.3-9-1.939-.2-.042-.411-.076-.8-.149a33.668 33.668 0 0 0 2.568-3.191c.76-1.212 1.612-1.369 2.964-1.1 6.986 1.371 13.832 3.128 20.121 6.6a20.886 20.886 0 0 1 5.831 4.516c3.235 3.736 3.2 7.854-.135 11.535a26.809 26.809 0 0 1-9.71 6.334 78.241 78.241 0 0 1-19.123 5.1 123.784 123.784 0 0 1-18.718 1.391q-2.156-.011-4.313-.079Zm4.046-21.942c-.4-.42-.772-.813-1.154-1.212l-.006-.006a144.634 144.634 0 0 1-2.153-2.286 224.3 224.3 0 0 1-15.458-18.7A162.772 162.772 0 0 1 19.3 74.616a86.268 86.268 0 0 1-8.79-23.979 44.248 44.248 0 0 1-.536-13.571 41.843 41.843 0 0 1 3.5-12.574 40.754 40.754 0 0 1 7.183-10.769A41.74 41.74 0 0 1 40.88 1.733 40.5 40.5 0 0 1 50.8.5a41.73 41.73 0 0 1 26.061 9.223 40.772 40.772 0 0 1 14.61 24.57 42.678 42.678 0 0 1 .511 11.461 58.343 58.343 0 0 1-2.156 11.257c-2.476 8.618-6.456 17.15-12.524 26.851a190.888 190.888 0 0 1-11.969 16.956 215.573 215.573 0 0 1-13.655 15.631 4.435 4.435 0 0 0-.41.529v.005c-.075.105-.159.225-.256.355ZM40.392 16.271a27.127 27.127 0 0 0 10.467 52.141h.027q1.137 0 2.259-.092l-.121-.258c-4.766-5.814-9.533-11.625-14.233-17.414 4.7-5.359 9.459-10.7 14.2-16.077-.243-1.8-.51-3.533-.753-5.333a1657.283 1657.283 0 0 0-10.2-11.313 82.671 82.671 0 0 1 2.943-1.811q9.509 3.684 19.062 7.455c2.757 1.5 4.629 4.127 4.937 8.849-.813 7.92.336 19.4.313 28.807q.393-.363.774-.742a27.119 27.119 0 0 0-19.09-46.34h-.029a27 27 0 0 0-10.556 2.128ZM55.6 43.192l-7.061 7.719a.963.963 0 0 0 .014 1.306l4.583 4.257a.919.919 0 0 0 1.277-.049l7.105-7.74a.918.918 0 0 0-.058-1.286l-4.583-4.256a.958.958 0 0 0-.629-.235.844.844 0 0 0-.648.284Zm-5.081 9.527 1.375-1.461a.986.986 0 0 1-.1-1.374l3.066-3.289a.957.957 0 0 1 1.321-.068l.021.046 1.354-1.507L59.5 46.9l-1.375 1.461a.947.947 0 0 1 .1 1.375l-3.066 3.289a.931.931 0 0 1-1.32.067l-1.33 1.441ZM34.54 33.993c-1.944-3.358-2.376-6.488-1.146-9.3.652-.577 1.323-1.111 1.975-1.687 4.258 4.955 8.582 9.935 12.885 14.871-2.165 2.432-4.333 4.864-6.48 7.339-2.395-3.752-4.837-7.477-7.234-11.223Z"
                        fill="#059353"
                      />
                      <path
                        d="M51.274 139.851c-1.443 0-2.9-.023-4.326-.069-12.492-.4-22.528-2.1-31.584-5.345a45.044 45.044 0 0 1-6.372-2.771 25.346 25.346 0 0 1-5.681-4.11c-2.233-2.172-3.285-4.344-3.31-6.832a8.668 8.668 0 0 1 2.135-5.621 21.343 21.343 0 0 1 7.1-5.494c4.98-2.617 10.626-4.458 18.306-5.971.325-.064.652-.115.969-.164a14.115 14.115 0 0 0 1.517-.292 2.037 2.037 0 0 1 .531-.076 1.738 1.738 0 0 1 1.4.838c.679.9 1.391 1.77 2.146 2.691.31.379.63.77.954 1.17l.533.66-.836.147c-.5.088-.992.172-1.471.254-1.012.174-1.969.338-2.926.521a44.067 44.067 0 0 0-11.288 3.4 15.168 15.168 0 0 0-3.682 2.523 2.556 2.556 0 0 0-.93 1.919 2.485 2.485 0 0 0 1.034 1.8 18.31 18.31 0 0 0 4.483 2.671 54.306 54.306 0 0 0 13.892 3.218 131.026 131.026 0 0 0 16.668 1.036c3.086 0 6.288-.1 9.518-.3 6.725-.413 13.906-1.134 20.855-3.593a20.186 20.186 0 0 0 4.758-2.424 3.273 3.273 0 0 0 1.657-2.406 3.479 3.479 0 0 0-1.594-2.649 22.484 22.484 0 0 0-8.586-3.84c-2.054-.533-4.179-.96-6.234-1.373-.9-.181-1.829-.368-2.742-.561-.117-.024-.238-.046-.406-.077l-.384-.07-.83-.155.535-.653c.3-.361.592-.7.878-1.033a17.507 17.507 0 0 0 1.652-2.107 2.666 2.666 0 0 1 2.419-1.449 5.583 5.583 0 0 1 1.064.119 99.562 99.562 0 0 1 10.374 2.525 52.3 52.3 0 0 1 9.893 4.126 21.1 21.1 0 0 1 5.967 4.627 8.48 8.48 0 0 1-.142 12.2 27.41 27.41 0 0 1-9.884 6.458 78.02 78.02 0 0 1-19.244 5.134 124.892 124.892 0 0 1-18.786 1.398Zm-20.712-35.744a1.073 1.073 0 0 0-.271.042 15.083 15.083 0 0 1-1.623.315c-.307.048-.625.1-.93.157-7.581 1.493-13.143 3.305-18.034 5.875a20.407 20.407 0 0 0-6.789 5.234A7.711 7.711 0 0 0 1 120.715c.022 2.2.978 4.151 3.008 6.126 3.533 3.437 7.894 5.293 11.694 6.656 8.954 3.212 18.893 4.892 31.278 5.286 1.417.045 2.862.068 4.294.068a123.888 123.888 0 0 0 18.643-1.385 77.059 77.059 0 0 0 19-5.065 26.5 26.5 0 0 0 9.536-6.21 7.491 7.491 0 0 0 .128-10.872 20.147 20.147 0 0 0-5.695-4.406 51.311 51.311 0 0 0-9.706-4.046 98.6 98.6 0 0 0-10.27-2.5 4.617 4.617 0 0 0-.872-.1 1.684 1.684 0 0 0-1.572.98 18.24 18.24 0 0 1-1.744 2.231l-.312.361c.9.191 1.816.375 2.7.553 2.068.416 4.207.846 6.288 1.386a23.387 23.387 0 0 1 8.962 4.028 4.406 4.406 0 0 1 1.967 3.463 4.2 4.2 0 0 1-2.084 3.193 21.2 21.2 0 0 1-5 2.547c-7.065 2.5-14.329 3.231-21.127 3.648-3.25.2-6.473.3-9.579.3a132.028 132.028 0 0 1-16.8-1.044 55.171 55.171 0 0 1-14.147-3.286 19.324 19.324 0 0 1-4.731-2.819 3.448 3.448 0 0 1-1.4-2.538 3.517 3.517 0 0 1 1.242-2.682 16.181 16.181 0 0 1 3.927-2.693 44.957 44.957 0 0 1 11.542-3.489c.967-.185 1.928-.35 2.945-.524l.628-.108-.413-.5c-.76-.929-1.479-1.806-2.17-2.722-.274-.376-.417-.445-.598-.445Zm20.449 13.733h-.216l-.148-.157q-.532-.563-1.033-1.086l-.125-.131c-.754-.789-1.466-1.534-2.16-2.294a224.783 224.783 0 0 1-15.492-18.74 163.274 163.274 0 0 1-12.98-20.584 86.759 86.759 0 0 1-8.839-24.117 44.744 44.744 0 0 1-.542-13.724 42.343 42.343 0 0 1 3.547-12.724 41.252 41.252 0 0 1 7.271-10.9A42.24 42.24 0 0 1 40.759 1.248 41 41 0 0 1 50.8 0a42.232 42.232 0 0 1 26.375 9.334A41.271 41.271 0 0 1 91.967 34.2a43.17 43.17 0 0 1 .518 11.594A58.838 58.838 0 0 1 90.31 57.15c-2.489 8.664-6.487 17.236-12.581 26.978a191.387 191.387 0 0 1-12 17c-4.183 5.3-8.787 10.567-13.687 15.668a4 4 0 0 0-.359.466l-.025.036c-.071.1-.152.214-.244.339l-.022.03-.173.173Zm-.8-2.068.129.134.62.65a3.958 3.958 0 0 1 .364-.454c4.877-5.078 9.461-10.325 13.623-15.6A190.372 190.372 0 0 0 76.882 83.6c6.043-9.66 10.005-18.151 12.468-26.723a57.858 57.858 0 0 0 2.139-11.161 42.185 42.185 0 0 0-.5-11.329 40.272 40.272 0 0 0-14.437-24.274A41.228 41.228 0 0 0 50.8 1 40 40 0 0 0 41 2.218a41.24 41.24 0 0 0-19.979 11.845A40.253 40.253 0 0 0 13.93 24.7a41.345 41.345 0 0 0-3.463 12.424 43.746 43.746 0 0 0 .531 13.418 85.778 85.778 0 0 0 8.742 23.84 162.286 162.286 0 0 0 12.9 20.459A223.79 223.79 0 0 0 48.066 113.5c.686.749 1.393 1.489 2.142 2.273Zm.678-46.862h-.027a27.6 27.6 0 0 1-25.385-16.918 27.637 27.637 0 0 1-2.158-10.776 27.605 27.605 0 0 1 27.633-27.575h.029a27.45 27.45 0 0 1 19.49 8.126 27.6 27.6 0 0 1-.047 39.068c-.255.255-.52.509-.788.756l-.842.777v-1.146c.008-3.51-.149-7.377-.3-11.118-.255-6.25-.519-12.712-.012-17.7a11.9 11.9 0 0 0-1.479-5.368 8.094 8.094 0 0 0-3.169-3.019c-6.168-2.423-12.542-4.928-18.806-7.355-.754.442-1.517.917-2.216 1.36 3.331 3.654 6.618 7.323 9.8 10.877l.1.114.021.152c.121.9.251 1.794.376 2.662s.255 1.769.377 2.671l.031.226-.151.171c-1.928 2.187-3.89 4.4-5.787 6.544-2.674 3.019-5.436 6.137-8.135 9.214 4.4 5.419 8.931 10.943 13.313 16.289l.692.844.453.966-.717.059c-.758.069-1.532.1-2.299.1Zm.063-54.269a26.652 26.652 0 0 0-10.431 51.166 26.328 26.328 0 0 0 10.341 2.1h.027c.447 0 .9-.011 1.342-.033l-.243-.3c-4.472-5.454-9.1-11.094-13.582-16.62l-.266-.327.278-.317c2.788-3.182 5.65-6.412 8.417-9.535 1.847-2.086 3.756-4.24 5.634-6.371-.112-.822-.231-1.641-.345-2.436-.118-.821-.241-1.668-.357-2.518a1726.735 1726.735 0 0 0-10.094-11.2l-.4-.439.5-.32c.9-.571 1.939-1.23 2.961-1.822l.208-.12.224.087c6.348 2.459 12.812 5 19.064 7.456l.029.011.027.015c3.2 1.746 4.9 4.773 5.2 9.255v.084c-.505 4.92-.242 11.364.012 17.6.136 3.339.277 6.78.3 9.987a26.618 26.618 0 0 0-18.814-45.409Zm2.821 42.565a1.453 1.453 0 0 1-.959-.358l-.011-.01-4.608-4.282a1.463 1.463 0 0 1-.014-1.988l7.054-7.711a1.348 1.348 0 0 1 1.021-.452 1.452 1.452 0 0 1 .959.359l.01.009 4.587 4.26a1.412 1.412 0 0 1 .092 1.976l-.009.011-7.1 7.735a1.35 1.35 0 0 1-1.025.452Zm-.3-1.106a.461.461 0 0 0 .3.106.354.354 0 0 0 .269-.11l.01-.011 7.1-7.734a.417.417 0 0 0-.027-.59l-.935-.869-1.4 1.487a1.449 1.449 0 0 1-.2 1.692l-3.061 3.283a1.441 1.441 0 0 1-1.6.372l-1.387 1.5Zm-2.238-3.409 1.239 1.131 1.336-1.448.368.348a.4.4 0 0 0 .276.107.435.435 0 0 0 .322-.138l.012-.014 3.066-3.289a.444.444 0 0 0 .114-.335.433.433 0 0 0-.16-.31l-.422-.339 1.4-1.492-1.2-1.136-1.523 1.7-.282-.626a.46.46 0 0 0-.224-.057.447.447 0 0 0-.329.141l-3.066 3.289a.491.491 0 0 0 .077.67l.362.343Zm-2.322-.827.922.856 1.413-1.5a1.449 1.449 0 0 1 .187-1.678l3.065-3.289a1.435 1.435 0 0 1 1.06-.46 1.467 1.467 0 0 1 .571.115l1.362-1.516-.946-.878a.459.459 0 0 0-.3-.107.352.352 0 0 0-.269.11l-.01.012-7.061 7.719a.467.467 0 0 0 .007.617Zm-7.2-5.821-.36-.564c-1.207-1.887-2.446-3.8-3.644-5.651-1.18-1.823-2.4-3.707-3.59-5.567l-.012-.019c-2.055-3.549-2.449-6.831-1.171-9.755l.044-.1.083-.073c.332-.293.671-.578 1-.853s.655-.55.976-.833l.38-.336.33.385c3.69 4.294 7.784 9.019 12.883 14.868l.289.332-.5.557c-2.063 2.316-4.2 4.712-6.273 7.106Zm-6.746-12.312c1.186 1.854 2.4 3.735 3.581 5.553 1.08 1.668 2.193 3.388 3.287 5.093 1.912-2.2 3.861-4.385 5.753-6.51a2666.36 2666.36 0 0 1-12.27-14.16c-.205.176-.411.348-.612.518-.3.248-.6.5-.9.763-1.085 2.591-.696 5.531 1.161 8.744Z"
                        fill="rgba(0,0,0,0)"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-center h5">Service Locator</h3>
                  <p className="fs-7 mb-3 text-center">
                    Coast-to-coast service. Find the location closest to you.
                  </p>
                  <small className="fs-8 mb-0 mt-auto" />
                  <a
                    href="https://www.mtdparts.com/en_US/servicelocator?showMap=true&horizontalView=true&isForm=true"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 mt-auto bg-white"
                  >
                    Search Service Locator
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="col-12 col-lg-4">
                <div className="d-flex flex-column align-items-center p-2 p-lg-4 border-bottom border-lg-bottom-0 border-lg-right h-100">
                  <div
                    className="d-flex align-items-center w-100 mb-3 max-w-160"
                    style={{ height: 120 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 170.283 131.645"
                      style={{ height: "100%" }}
                    >
                      <path
                        fill="#059353"
                        fillRule="evenodd"
                        d="M108.628 97.643a8.069 8.069 0 0 1-1.111-2.4c-.316-1.039-.547-2.066-.838-3.36-.2-.885-.429-1.908-.767-3.277a15.986 15.986 0 0 0-1.4-4.074 1.962 1.962 0 0 0-1.9-1.157 2.1 2.1 0 0 0-1.874.981 6.392 6.392 0 0 0-.072 3.605l.2 1.108c.774 4.448 2.356 13.508 4.6 17.21 1.116 1.838 2.564 3.924 3.979 5.964a80.117 80.117 0 0 1 4.706 7.284 19.211 19.211 0 0 1 1.892 8.6h20.229c.237-1.093.567-2.546.923-3.88a23.412 23.412 0 0 1 1.107-3.371 281.641 281.641 0 0 0 2.723-6.284c.87-2.07 1.7-4.1 2.143-5.266a36.634 36.634 0 0 0 1.2-5.338 72.325 72.325 0 0 0 .924-7.2c.034-.965.063-2.513.081-4.1.026-2.294.038-4.7.036-5.664v-.068a1.43 1.43 0 0 0-.434-.865 1.315 1.315 0 0 0-.389-.322c-.685.031-1.177.031-1.72.033l-.926.007a1.2 1.2 0 0 0-.739.4 1.435 1.435 0 0 0-.477.808l-.109 3.02c-.072 2.061-.152 4.359-.177 4.6a1.935 1.935 0 0 1-1.39 1.7 2.137 2.137 0 0 1-.806.1 2.162 2.162 0 0 1-.817-.221l-.014-.007a2.066 2.066 0 0 1-1.177-1.9c-.012-.518 0-4.782.009-8.506l.009-5.543a1.43 1.43 0 0 0-.434-.867 1.3 1.3 0 0 0-.39-.321c-.684.03-1.177.032-1.72.032l-.926.007a1.206 1.206 0 0 0-.738.4 1.439 1.439 0 0 0-.478.808c-.027.685-.086 3.751-.142 6.618-.051 2.776-.1 5.377-.122 5.587v.013a1.918 1.918 0 0 1-1.4 1.68 2.386 2.386 0 0 1-.807.11 2.481 2.481 0 0 1-.806-.163l-.008-.006a2.118 2.118 0 0 1-1.385-1.865v-.15c0-.037.189-13.307.187-15.06v-.071a1.433 1.433 0 0 0-.434-.865 1.382 1.382 0 0 0-.387-.32c-.691.031-1.186.031-1.732.032l-.915.006a1.211 1.211 0 0 0-.739.4 1.425 1.425 0 0 0-.477.808c-.028.685-.087 3.754-.142 6.621-.051 2.775-.1 5.375-.122 5.583a1.848 1.848 0 0 1-1.265 1.667l-.062.02a1.987 1.987 0 0 1-.771.085 1.854 1.854 0 0 1-.662-.176 1.924 1.924 0 0 1-1.141-1.841c.012-.432.206-10.795.335-18.4.069-4.21.12-7.578.109-7.945a1.267 1.267 0 0 0-.332-.671c-.1-.127-.132-.211-.147-.211a46.088 46.088 0 0 0-2.008-.026l-1.137-.01a.986.986 0 0 0-.689.32 1.4 1.4 0 0 0-.441.868l-.376 9.672c-.335 8.536-.78 19.772-.789 20.71-.009.861-.038 1.67-.1 2.325a5.29 5.29 0 0 1-.5 2 2.017 2.017 0 0 1-.684.722l-.014.007a1.856 1.856 0 0 1-2.033-.007 2.831 2.831 0 0 1-.807-.747Zm.81-9.372.99-25.4a5.038 5.038 0 0 1 1.457-3.255 4.411 4.411 0 0 1 3.173-1.35h1.137a35.457 35.457 0 0 1 2.146.034 3.82 3.82 0 0 1 2.7 1.462 4.84 4.84 0 0 1 1.145 2.822c.012.407-.038 3.832-.109 8.1l-.035 2a4.152 4.152 0 0 1 1.528-.323l.969-.013c.469.007.889.006 1.594-.026h.127a4.255 4.255 0 0 1 2.923 1.392 5.069 5.069 0 0 1 1.343 2.576 4.356 4.356 0 0 1 2.207-.671l.98-.007c.465 0 .885 0 1.583-.033h.125a4.265 4.265 0 0 1 2.927 1.393 4.961 4.961 0 0 1 1.405 3.145v2.82a4.332 4.332 0 0 1 2.136-.628l.98-.007c.465 0 .884 0 1.583-.033h.125a4.266 4.266 0 0 1 2.926 1.393 4.96 4.96 0 0 1 1.405 3.144v.178c0 .942-.009 3.406-.035 5.739a221.82 221.82 0 0 1-.08 4.192 75.547 75.547 0 0 1-.966 7.668 38.638 38.638 0 0 1-1.381 5.968c-.457 1.22-1.31 3.295-2.2 5.4-1.078 2.562-2.211 5.174-2.763 6.382a20.237 20.237 0 0 0-.9 2.808 94.926 94.926 0 0 0-1.179 5.094l-.287 1.407h-26.489l-.065-1.7-.014-.877c-.015-1.825-.045-5.147-1.508-7.91a77.631 77.631 0 0 0-4.486-6.928c-1.414-2.04-2.861-4.125-4.087-6.142-2.6-4.287-4.259-13.764-5.07-18.416l-.2-1.109a9.445 9.445 0 0 1 .374-5.733 5.321 5.321 0 0 1 4.7-2.942 5.171 5.171 0 0 1 5.233 2.844 18.606 18.606 0 0 1 1.8 5.034l.122.5Z"
                      />
                      <path
                        fill="#059353"
                        fillRule="evenodd"
                        d="M24.856 52.027a135.243 135.243 0 0 1 27.624 2.2 70.89 70.89 0 0 1 21.858 7.389v6.037a70.881 70.881 0 0 0-21.858-7.388 135.213 135.213 0 0 0-27.624-2.2v-6.037Zm0 12.432a132.532 132.532 0 0 1 22.123 1.313v6.036a132.574 132.574 0 0 0-22.123-1.312v-6.037Zm145.427-48.517h-8.386v74.025l-5.112-.853c-1.66-.276-3.445-.455-5.234-.575 0 2.819-.022 5.673-.123 8.472a69.17 69.17 0 0 1-1.072 8.628h19.928v-89.7ZM96.209 97.566c-.378.2-.754.407-1.125.618-2 1.133-5.391 3.031-6.96 4.78l-2.327 2.674h12.637a60.186 60.186 0 0 1-2.225-8.073ZM8.386 15.942H0v89.7h84.123l-2.276-2.618a30.084 30.084 0 0 0-6.647-4.836c-7.036-3.984-15.331-6.356-23.253-7.709a146.615 146.615 0 0 0-27.983-2.156 77.648 77.648 0 0 0-10.466.794l-5.111.853V15.942Zm137.041-1.558a135.208 135.208 0 0 0-27.624 2.2 70.9 70.9 0 0 0-21.858 7.388v6.036a70.9 70.9 0 0 1 21.858-7.388 135.193 135.193 0 0 1 27.624-2.2v-6.037Zm0 12.547a135.222 135.222 0 0 0-27.624 2.2 70.914 70.914 0 0 0-21.858 7.388v6.037a70.913 70.913 0 0 1 21.858-7.388 135.32 135.32 0 0 1 27.624-2.2v-6.037Zm-15.862 13.118c-3.636.349-7.572.871-11.764 1.628a70.935 70.935 0 0 0-21.858 7.388v6.037a70.9 70.9 0 0 1 21.858-7.388 143.132 143.132 0 0 1 11.764-1.627v-6.038ZM151.36 6.383v71.525a114.159 114.159 0 0 0-9.488-.219 7.217 7.217 0 0 1 .486 1.975c.654 0 1.307 0 1.961-.031a7.164 7.164 0 0 1 6.6 4.5c4.231.261 6.583.655 6.583.655V.888s-16.1-2.7-39.907 1.363-32.458 13.974-32.458 13.974S76.491 6.318 52.68 2.251 12.771.888 12.771.888v83.9s16.1-2.7 39.909 1.364 32.457 13.973 32.457 13.973 2.964-3.392 10.194-7.023c-.267-1.458-.5-2.836-.723-4.061a17.13 17.13 0 0 1-.256-2.316q-1.56.724-3.069 1.526V18.885a38.277 38.277 0 0 1 4.864-3.189c6.813-3.811 14.831-6.086 22.481-7.392a144.911 144.911 0 0 1 27.645-2.13c1.617.038 3.352.1 5.083.21Zm-132.438 0v71.525c11.38-.773 24.669.449 34.8 2.179a84.582 84.582 0 0 1 25.277 8.161V18.885a38.284 38.284 0 0 0-4.865-3.189c-6.812-3.811-14.83-6.086-22.48-7.392a144.911 144.911 0 0 0-27.645-2.13c-1.617.038-3.353.1-5.083.21Zm28.289 27.931a132.616 132.616 0 0 0-22.355-1.346V14.384a132.628 132.628 0 0 1 22.355 1.345v18.586Zm4.413-5.337.855.152a70.9 70.9 0 0 1 21.858 7.388v6.037a70.894 70.894 0 0 0-21.858-7.388l-.855-.152v-6.037Zm0-12.548.855.151a70.883 70.883 0 0 1 21.858 7.388v6.04a70.883 70.883 0 0 0-21.858-7.388l-.855-.152v-6.037Zm-26.769 23.05a135.255 135.255 0 0 1 27.624 2.2 70.916 70.916 0 0 1 21.858 7.388v6.037a70.882 70.882 0 0 0-21.858-7.388 135.216 135.216 0 0 0-27.624-2.2v-6.037Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-center h5">Manual Lookup</h3>
                  <p className="fs-7 mb-3 text-center">
                    Find product manuals for MTD equipment.
                  </p>
                  <small className="fs-8 mb-0 mt-auto" />
                  <a
                    href="https://www.mtdparts.com/en_US/operatorsmanuals"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 mt-auto bg-white"
                  >
                    Search Manual Lookup
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="col-12 col-lg-4">
                <div className="d-flex flex-column align-items-center p-2 p-lg-4 border-bottom border-lg-bottom-0 border-lg-right h-100 border-bottom-0 border-bottom-0 border-lg-right-0">
                  <div
                    className="d-flex align-items-center w-100 mb-3 max-w-160"
                    style={{ height: 120 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 161.224 116.238"
                      style={{ height: "100%" }}
                    >
                      <path
                        fill="#059353"
                        fillRule="evenodd"
                        d="M152.879 15.613h8.344v95.256h-63.81c-1.535 1.446-6.633 5.369-16.8 5.369s-15.267-3.923-16.8-5.369H.003V15.613h8.344l5.1-15.311 1.827-.111a191.34 191.34 0 0 1 38.937 2.276c15.781 2.61 23.434 9.612 26.4 13.177 2.969-3.565 10.622-10.567 26.4-13.177A191.341 191.341 0 0 1 145.948.191l1.827.111 5.1 15.311Zm-4.895-2.17q.527 33.3 1.06 66.6l3.024 9.721-.78-66.386-3.3-9.932Zm-2.337 68.983a257.584 257.584 0 0 0-40.12 5.839c-20.3 4.778-22.868 12.941-22.875 12.964l-.017.049h68.878l-5.866-18.852ZM82.761 94.695c3.5-3.316 10-7.487 21.87-10.281a262.127 262.127 0 0 1 40.446-5.907l-1.184-74.458a190.675 190.675 0 0 0-36.244 2.316c-17.258 2.855-23.6 11-24.887 12.954v75.376Zm-4.3 0V19.32c-1.292-1.95-7.629-10.1-24.888-12.954A190.669 190.669 0 0 0 17.329 4.05l-1.184 74.458a262.112 262.112 0 0 1 40.445 5.907c11.87 2.794 18.374 6.965 21.871 10.281ZM15.573 82.426l-5.866 18.852h68.878l-.017-.049c-.008-.023-2.578-8.186-22.875-12.964a257.587 257.587 0 0 0-40.121-5.839Zm-2.336-68.983-3.3 9.932-.78 66.386 3.024-9.721 1.06-66.6Zm-5.885 5.139H2.968v89.313h62.144l.446.528c.012.014 3.987 4.841 15.053 4.841s15.041-4.827 15.052-4.841l.446-.528h62.144V18.583h-4.384l1.354 4.064q.479 41.3.97 82.592H5.028l.97-82.592 1.354-4.064Z"
                      />
                      <path
                        fill="#059353"
                        d="M38.838 64.997h19.271v-1.938h-1.1a3.67 3.67 0 0 1-3.662-3.663V34.563l-15.134.576v2.357l1.44-.055a3.86 3.86 0 0 1 4.006 3.858v18.1a3.669 3.669 0 0 1-3.662 3.663h-1.156V65ZM47.71 17.277a5.814 5.814 0 1 1-5.813 5.815 5.813 5.813 0 0 1 5.813-5.815Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-center h5">Knowledge Center</h3>
                  <p className="fs-7 mb-3 text-center">
                    Help articles for Outdoor power equipment.
                  </p>
                  <small className="fs-8 mb-0 mt-auto" />
                  <a
                    href="https://www.mtdparts.com/en_US/knowledge-center.html"
                    className="btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48 mt-auto bg-white"
                  >
                    Search Knowledge Center
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="max-w-20 ml-1"
                    >
                      <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </main>
  );
}
