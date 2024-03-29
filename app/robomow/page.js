"use client";

import FindYourParts from "@/components/FindYourParts";
import { Logos } from "@/components/Logos";
import NodeBlocks from "@/components/NodeBlocks";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function Robomow({}) {
  const pageSetup = {
    brandName: "Robomow",
    logoName: "robomow",
    colors: {
      background: "bg-neutral-100",
      primary: "#f5d60b",
      secondary: "#hex",
      fontOnPrimary: "#000",
    },
    machineType: {
      title: "FIND PARTS BY MACHINE MODEL",
      nodes: [
        {
          type: "Robomow® RX20 Parts",
          img: {
            src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/robomow/RX20side.jpg",
            alt: "",
          },
          p: `The Robomow RX robotic lawn mower is ideal for small lawns up to 1/20 acre (200sq.m). Contained within the lawn by installing a perimeter wire, the compact mower leaves its charging station once a day to cut the grass before returning to the base to recharge. With a maximum cut height of 1.75", the Robomow RX20 maintains that fresh, always-mowed look for the small, urban lawn!`,
          button: {
            href: "https://www.mtdparts.com/en_US/robomow-robotic-lawn-mowers/robomow-rx20/22AXGDAE737.html?fitsOnModel=false#start=0",
            copy: "Robomow® RX20",
          },
        },
        {
          type: "Robomow® RX1000 Parts",
          img: {
            src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/robomow/Robomow_rk1000-3q-left-view.jpg",
            alt: "",
          },
          p: `With effortless programming of up to four secondary zones/starting points and two separate zones via app, or the convenience of the touch display and adjustable cutting height, the Robomow RK1000 offers maximum flexibility. The brushless DC motor, the pendulum-suspended mower deck and the staggered blades result in an evenly trimmed lawn even on uneven terrain. Slopes of up to 45 percent are no problem for this robotic lawnmower. Best of all, thanks to the low noise level, you will hardly notice when the robot is in use.`,
          button: {
            href: "https://www.mtdparts.com/en_US/robomow-robotic-lawn-mowers/robomow-rk1000/22AKFAFA737.html?fitsOnModel=false#start=1",
            copy: "Robomow® RX1000",
          },
        },
        {
          type: "Robomow® RX2000 Parts",
          img: {
            src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/robomow/Robomow_rk2000-3q-left-view.jpg",
            alt: "",
          },
          p: `With effortless programming of up to four secondary zones/starting points and two separate zones via app, or the convenience of the touch display and adjustable cutting height, the Robomow RK2000 offers maximum flexibility. The brushless DC motor, the pendulum-suspended mower deck and the staggered blades result in an evenly trimmed lawn even on uneven terrain. Slopes of up to 45 percent are no problem for this robotic lawnmower. Best of all, thanks to the low noise level, you will hardly notice when the robot is in use`,
          button: {
            href: "https://www.mtdparts.com/en_US/robomow-robotic-lawn-mowers/robomow-rk2000/22AKHAFA737.html?fitsOnModel=false#start=2",
            copy: "Robomow® RX2000",
          },
        },
        {
          type: "Robomow® RX4000 Parts",
          img: {
            src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/robomow/Robomow_rk4000-3q-left-view-1.jpg",
            alt: "",
          },
          p: `With effortless programming of up to four secondary zones/starting points and two separate zones via app, or the convenience of the touch display and adjustable cutting height, the Robomow RK4000 offers maximum flexibility. The brushless DC motor, the pendulum-suspended mower deck and the staggered blades result in an evenly trimmed lawn even on uneven terrain. Slopes of up to 45 percent are no problem for this robotic lawnmower. Best of all, thanks to the low noise level, you will hardly notice when the robot is in use`,
          button: {
            href: "https://www.mtdparts.com/en_US/robomow-robotic-lawn-mowers/robomow-rk4000/22AKLAFA737.html?fitsOnModel=false#start=3",
            copy: "Robomow® RK4000",
          },
        },
      ],
    },
    partType: {
      title: "FIND PARTS BY PART TYPE",
      nodes: [
        {
          type: "BLADES",
          img: {
            src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/CMXGZAM201007_2.jpg",
            alt: "",
          },
          p: "When you need blades to deliver a clean cut and a healthier-looking lawn, look no further than Robomow original equipment blades. Robomow blades are designed to provide a precise fit with every blade change. Heat dipped for durability and flexibility, these blades have been tested for thousands of hours to meet equipment standards. Protect your Robomow outdoor power product investment with Robomow original equipment blades.",
          button: {
            href: "https://www.mtdparts.com/en_US/shop-by-part-type/blades",
            copy: "SHOP PARTS",
          },
        },
        {
          type: "BELTS",
          img: {
            src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/CMXGZAM201007_2-1.jpg",
            alt: "",
          },
          p: "Robomow original equipment belts are manufactured to equipment specifications so you can attain a precise fit with every belt change. These belts have been designed to combat conditions. Made with durable, high strength materials, they’re designed to be flexible enough to withstand continuous bending around pulleys. Protect your Robomow outdoor power product investment with Robomow original equipment belts.",
          button: {
            href: "https://www.mtdparts.com/en_US/shop-by-part-type/belts",
            copy: "SHOP PARTS",
          },
        },
        {
          type: "ENGINE PARTS",
          img: {
            src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/CMXGZAM201007_2-1.jpg",
            alt: "",
          },
          p: "Robomow original equipment belts are manufactured to equipment specifications so you can attain a precise fit with every belt change. These belts have been designed to combat conditions. Made with durable, high strength materials, they’re designed to be flexible enough to withstand continuous bending around pulleys. Protect your Robomow outdoor power product investment with Robomow original equipment belts.",
          button: {
            href: "https://www.mtdparts.com/en_US/shop-by-part-type/engine-parts",
            copy: "SHOP PARTS",
          },
        },
        {
          type: "CABLES",
          img: {
            src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/CMXGZAM201007_2-1.jpg",
            alt: "",
          },
          p: "When it’s time to replace the cable in your Robomow outdoor power equipment, you’ll find the exact part you need. Protect your Robomow outdoor power product investment with Robomow original equipment cables.",
          button: {
            href: "https://www.mtdparts.com/en_US/shop-by-part-type/engine-parts",
            copy: "SHOP CABLES",
          },
        },
      ],
    },
    supportResources: {
      title: "SUPPORT & RESOURCES",
      nodes: [
        {
          title: "OPERATOR’S MANUAL",
          img: {
            src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AC77XY093_T100_env3.jpg",
            alt: "",
          },
          p: "Enter the product code shown on the product serial number. Then select your language, click “Search,” and download your manual.",
          button: {
            href: "https://www.mtdparts.com/en_US/operatorsmanuals",
            copy: "FIND OPERATOR’S MANUALS",
            backgroundColor: "",
          },
        },
        {
          title: "SERVICE LOCATOR",
          img: {
            src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AC77XY093_T100_env3-1.jpg",
            alt: "",
          },
          p: "With our easy-to-use online Service Locator, you will get information on your current location and closest service locations, as well as their contact information and driving directions. You can choose to view the service points either conveniently on a map, or a list.",
          button: {
            href: "https://www.mtdparts.com/en_US/servicelocator?showMap=true&horizontalView=true&isForm=true",
            copy: "FIND SERVICE LOCATIONS",
            backgroundColor: "bg-white",
          },
        },
        {
          title: "PRODUCT REGISTRATION",
          img: {
            src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AJ606G790.jpg",
            alt: "",
          },
          p: "Have your Robomow equipment registered Online now. If you don’t know your model and product serial number, call 1-855-971-2271 we will be glad to assist you.",
          button: {
            href: "https://www.mtdparts.com/en_US/registration.html",
            copy: "REGISTER YOUR PRODUCT",
            backgroundColor: "bg-white",
          },
        },
      ],
    },
  };

  const brandName = "Robomow";

  return (
    <div
      id="sdb-container"
      className="mt-4"
    >
      <section className="relative">
        <h1 className="sr-only">{pageSetup.brandName}</h1>
        <Logos
          className="absolute z-10 w-full max-w-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
          logo={pageSetup.logoName}
        />
        <div className="relative min-h-[25em] z-0">
          <ResponsiveImage
            id="hero"
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/robomow/hero.jpg"
          />
        </div>
      </section>

      <section className={`${pageSetup.colors.background} py-12`}>
        <FindYourParts
          pageSetup={pageSetup}
          copy={`Find the ${pageSetup.brandName} original equipment parts and accessories you need to keep your lawn mower, snow blower and other outdoor power equipment performing strong. These parts and accessories are designed and engineered to exact standards to provide reliability, safety and top performance. Protect your ${pageSetup.brandName} outdoor power product investment with ${pageSetup.brandName} original equipment parts and accessories.`}
        />
      </section>

      <section className="py-10">
        <div className="container text-center">
          <h2>FIND PARTS BY DIAGRAM</h2>
          <p>
            Find the original equipment parts and accessories for your White
            Outdoor outdoor power equipment on our Parts Diagrams. The Parts
            Diagram helps visualize components found on your equipment. If you
            can’t find what you’re looking for or need assistance installing the
            new part, call 1-855-971-2271.
          </p>
          <iframe
            src="https://www.mtdparts.com/en_US/ari-iframe.html?aribrand=MTF2_Staging"
            className="w-full border min-h-[46em]"
            id="arifame"
          />
        </div>
      </section>

      <section className={`${pageSetup.colors.background} py-12`}>
        <div className="container">
          <h2 className="text-center">{pageSetup.machineType.title}</h2>
          <p className="text-center">
            {pageSetup.brandName} original equipment parts can help you maintain
            your {pageSetup.brandName} outdoor power equipment long-term.
          </p>

          <ul className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {pageSetup.machineType.nodes.map((node, index) => (
              <li key={index}>
                <NodeBlocks
                  node={node}
                  pageSetup={pageSetup}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${pageSetup.colors.background} py-12`}>
        <div className="container">
          <h2 className="text-center">{pageSetup.partType.title}</h2>
          <p className="text-center">
            {pageSetup.brandName} original equipment parts can help you maintain
            your {pageSetup.brandName} outdoor power equipment long-term.
          </p>

          <ul className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {pageSetup.partType.nodes.map((node, index) => (
              <li key={index}>
                <NodeBlocks
                  node={node}
                  pageSetup={pageSetup}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${pageSetup.colors.background} py-12`}>
        <div className="container">
          <h2 className="text-center">{pageSetup.supportResources.title}</h2>

          <ul className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {pageSetup.supportResources.nodes.map((node, index) => (
              <li key={index}>
                <NodeBlocks
                  node={node}
                  pageSetup={pageSetup}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* <section className="py-12">
        <div className="container">
          <h2 className="text-center">SUPPORT &amp; RESOURCES</h2>
          <ul className="grid grid-cols-3 gap-4">
            <li className="">
              <a
                href="https://www.mtdparts.com/en_US/operatorsmanuals"
                className=""
              >
                <img
                  src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AC77XY093_T100_env3.jpg"
                  alt=""
                />
                <div className="title">OPERATOR’S MANUAL</div>
                <p>
                  Enter the product code shown on the product serial number.
                  Then select your language, click “Search,” and download your
                  manual.
                </p>
                <span className="button bg-white-outdoor">
                  FIND OPERATOR’S MANUALS
                </span>
              </a>
            </li>
            <li className="">
              <a
                href="https://www.mtdparts.com/en_US/servicelocator?showMap=true&horizontalView=true&isForm=true"
                className="bg-white"
              >
                <img
                  src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AC77XY093_T100_env3-1.jpg"
                  alt=""
                />
                <div className="title">SERVICE LOCATOR</div>
                <p>
                  With our easy-to-use online Service Locator, you will get
                  information on your current location and closest service
                  locations, as well as their contact information and driving
                  directions. You can choose to view the service points either
                  conveniently on a map, or a list.
                </p>
                <span className="button bg-white-outdoor">
                  FIND SERVICE LOCATIONS
                </span>
              </a>
            </li>
            <li className="">
              <a
                href="https://www.mtdparts.com/en_US/registration.html"
                className="bg-white"
              >
                <img
                  src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AJ606G790.jpg"
                  alt=""
                />
                <div className="title">PRODUCT REGISTRATION</div>
                <p>
                  Have your Robomow equipment registered Online now. If you
                  don’t know your model and product serial number, call
                  1-855-971-2271 we will be glad to assist you.
                </p>
                <span className="button bg-white-outdoor">
                  REGISTER YOUR PRODUCT
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section> */}
    </div>
  );
}
