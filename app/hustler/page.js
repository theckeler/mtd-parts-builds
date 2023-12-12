"use client";

import FindYourParts from "@/components/FindYourParts";
import { Logos } from "@/components/Logos";
import NodeBlocks from "@/components/NodeBlocks";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function Hustler({}) {
  const initSetup = {
    brandName: "Hustler",
    logoName: "hustler",
    colors: {
      background: "bg-neutral-100",
      primary: "#ffc200",
      fontOnPrimary: "#000",
    },
  };

  const machineType = {
    title: "FIND PARTS BY MACHINE TYPE",
    nodes: [
      {
        type: "Residential Zero-Turn",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/Residental.jpg",
          alt: "",
        },
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu tortor libero. Proin vestibulum ultrices gravida. Etiam auctor pulvinar eros, eu convallis lorem rhoncus a. Sed vulputate sit amet lorem in ultrices. Suspendisse eu posuere diam, sed sodales enim. Curabitur vel justo at purus mattis laoreet.",
        button: {
          href: "https://www.mtdparts.com/en_US/robomow-robotic-lawn-mowers/robomow-rx20/22AXGDAE737.html?fitsOnModel=false#start=0",
          copy: "",
        },
      },
      {
        type: "Commercial Zero-Turn",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/Commercial.jpg",
          alt: "",
        },
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu tortor libero. Proin vestibulum ultrices gravida. Etiam auctor pulvinar eros, eu convallis lorem rhoncus a. Sed vulputate sit amet lorem in ultrices. Suspendisse eu posuere diam, sed sodales enim. Curabitur vel justo at purus mattis laoreet.",
        button: {
          href: "https://www.mtdparts.com/en_US/robomow-robotic-lawn-mowers/robomow-rx20/22AXGDAE737.html?fitsOnModel=false#start=0",
          copy: "",
        },
      },
      {
        type: "Pressure Washer",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/PressureWasher.jpg",
          alt: "",
        },
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu tortor libero. Proin vestibulum ultrices gravida. Etiam auctor pulvinar eros, eu convallis lorem rhoncus a. Sed vulputate sit amet lorem in ultrices. Suspendisse eu posuere diam, sed sodales enim. Curabitur vel justo at purus mattis laoreet.",
        button: {
          href: "https://www.mtdparts.com/en_US/robomow-robotic-lawn-mowers/robomow-rx20/22AXGDAE737.html?fitsOnModel=false#start=0",
          copy: "",
        },
      },
      {
        type: "Generator",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/Generator.jpg",
          alt: "",
        },
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu tortor libero. Proin vestibulum ultrices gravida. Etiam auctor pulvinar eros, eu convallis lorem rhoncus a. Sed vulputate sit amet lorem in ultrices. Suspendisse eu posuere diam, sed sodales enim. Curabitur vel justo at purus mattis laoreet.",
        button: {
          href: "https://www.mtdparts.com/en_US/robomow-robotic-lawn-mowers/robomow-rx20/22AXGDAE737.html?fitsOnModel=false#start=0",
          copy: "",
        },
      },
    ],
  };

  const partType = {
    title: "FIND PARTS BY PART TYPE",
    nodes: [
      {
        type: "BLADES",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/CMXGZAM201007_2.jpg",
          alt: "",
        },
        p: `When you need blades to deliver a clean cut and a healthier-looking lawn, look no further than ${initSetup.brandName} original equipment blades. ${initSetup.brandName} blades are designed to provide a precise fit with every blade change. Heat dipped for durability and flexibility, these blades have been tested for thousands of hours to meet equipment standards. Protect your ${initSetup.brandName} outdoor power product investment with ${initSetup.brandName} original equipment blades.`,
        button: {
          href: "https://www.mtdparts.com/en_US/shop-by-part-type/blades",
          copy: "SHOP PARTS",
        },
      },
      {
        type: "BELTS",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/CMXGZAM201007_2-1.jpg",
          alt: "",
        },
        p: `${initSetup.brandName} original equipment belts are manufactured to equipment specifications so you can attain a precise fit with every belt change. These belts have been designed to combat conditions. Made with durable, high strength materials, they’re designed to be flexible enough to withstand continuous bending around pulleys. Protect your ${initSetup.brandName} outdoor power product investment with ${initSetup.brandName} original equipment belts.`,
        button: {
          href: "https://www.mtdparts.com/en_US/shop-by-part-type/belts",
          copy: "SHOP PARTS",
        },
      },
      {
        type: "ENGINE PARTS",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/CMXGZAM201007_2-2.jpg",
          alt: "",
        },
        p: `${initSetup.brandName} original equipment engine parts are specifically designed for your outdoor power equipment’s engine. Shop air filters, oil filters, fuel filters, spark plugs and more. Protect your ${initSetup.brandName} outdoor power product investment with ${initSetup.brandName} original equipment engine parts.`,
        button: {
          href: "https://www.mtdparts.com/en_US/shop-by-part-type/engine-parts",
          copy: "SHOP PARTS",
        },
      },
      {
        type: "CABLES",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/CMXGZAM201007_2-3.jpg",
          alt: "",
        },
        p: `When it’s time to replace the cable in your ${initSetup.brandName} outdoor power equipment, you’ll find bthe exact part you need. Protect your ${initSetup.brandName} outdoor power product investment with ${initSetup.brandName} original equipment cables.`,
        button: {
          href: "https://www.mtdparts.com/en_US/shop-by-part-type/cables",
          copy: "SHOP PARTS",
        },
      },
      {
        type: "PULLEYS",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/CMXGZAM201007_2-4.jpg",
          alt: "",
        },
        p: `A properly working pulley helps your machine perform with maximum power. You can find the exact part you need when it’s time to replace a pulley on your ${initSetup.brandName} riding lawn mower or snow blower. Protect your ${initSetup.brandName} outdoor power product investment with ${initSetup.brandName} original equipment pulleys.`,
        button: {
          href: "https://www.mtdparts.com/en_US/shop-by-part-type/pulleys",
          copy: "SHOP PARTS",
        },
      },
      {
        type: "TIRES AND WHEELS",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/CMXGZAM201007_2-5.jpg",
          alt: "",
        },
        p: `A proper-fitting tire will help your ${initSetup.brandName} riding mower, walk-behind mower and snow blower to have a smooth and sturdy ride. Replace tires and wheels as they wear to help make sure your ${initSetup.brandName} outdoor power equipment runs at optimal performance. Protect your ${initSetup.brandName} outdoor power product investment with ${initSetup.brandName} original equipment tires and wheels.`,
        button: {
          href: "https://www.mtdparts.com/en_US/shop-by-part-type/tires-and-wheels",
          copy: "SHOP PARTS",
        },
      },
      {
        type: "SPINDLES",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/CMXGZAM201007_2-6.jpg",
          alt: "",
        },
        p: `Find the spindle assembly parts you need to help maintain your ${initSetup.brandName} lawn mower’s performance so your lawn looks pristine. Protect your ${initSetup.brandName} outdoor power product investment with ${initSetup.brandName} original equipment spindles.`,
        button: {
          href: "https://www.mtdparts.com/en_US/shop-by-part-type/spindles",
          copy: "SHOP PARTS",
        },
      },
      {
        type: "ATTACHMENTS AND ACCESSORIES",
        img: {
          src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/bagger.jpg",
          alt: "",
        },
        p: `Do more with your ${initSetup.brandName} outdoor power equipment with a wide variety of attachments and accessories including baggers, mulch kits, sun shades and more. Protect your ${initSetup.brandName} outdoor power product investment with ${initSetup.brandName} original equipment attachments and accessories.`,
        button: {
          href: "https://www.mtdparts.com/en_US/accessories-and-attachments",
          copy: "SHOP PARTS",
        },
      },
    ],
  };

  const supportResources = {
    title: "SUPPORT & RESOURCES",
    nodes: [
      {
        type: "OPERATOR’S MANUAL",
        img: {
          src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AC77XY093_T100_env3.jpg",
          alt: "",
        },
        p: "Enter the product code shown on the product serial number. Then select your language, click “Search,” and download your manual.",
        button: {
          href: "https://www.mtdparts.com/en_US/operatorsmanuals",
          // copy: "FIND OPERATOR’S MANUALS",
          backgroundColor: "",
        },
      },
      {
        type: "SERVICE LOCATOR",
        img: {
          src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AC77XY093_T100_env3-1.jpg",
          alt: "",
        },
        p: "With our easy-to-use online Service Locator, you will get information on your current location and closest service locations, as well as their contact information and driving directions. You can choose to view the service points either conveniently on a map, or a list.",
        button: {
          href: "https://www.mtdparts.com/en_US/servicelocator?showMap=true&horizontalView=true&isForm=true",
          // copy: "FIND SERVICE LOCATIONS",
          backgroundColor: "bg-white",
        },
      },
      {
        type: "PRODUCT REGISTRATION",
        img: {
          src: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AJ606G790.jpg",
          alt: "",
        },
        p: "Have your Robomow equipment registered Online now. If you don’t know your model and product serial number, call 1-855-971-2271 we will be glad to assist you.",
        button: {
          href: "https://www.mtdparts.com/en_US/registration.html",
          // copy: "REGISTER YOUR PRODUCT",
          backgroundColor: "bg-white",
        },
      },
    ],
  };

  const pageSetup = {
    ...initSetup,
    machineType: {
      ...machineType,
    },
    partType: { ...partType },
    supportResources: {
      ...supportResources,
    },
  };

  return (
    <div
      id="sdb-container"
      className="mt-4"
    >
      <section className="relative">
        <h1 className="sr-only">{pageSetup.brandName}</h1>
        <Logos
          className="absolute z-10 w-full max-w-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg bg-white/90 rounded p-4"
          logo={pageSetup.logoName}
        />
        <div className="relative min-h-[25em] z-0">
          <ResponsiveImage
            id="hero"
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/ourbrands/hustler/hero.jpg"
          />
        </div>
      </section>

      <section className={`${pageSetup.colors.background} py-12`}>
        <FindYourParts
          pageSetup={pageSetup}
          copy={`Find the ${pageSetup.brandName} original equipment parts and accessories you need to keep your zero-turn, pressure washer or generator performing strong. These parts and accessories are designed and engineered to exact standards to provide reliability, safety and top performance. Protect your ${pageSetup.brandName} outdoor power product investment with ${pageSetup.brandName} original equipment parts and accessories.`}
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
              <li
                key={index}
                className=""
              >
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
    </div>
  );
}
