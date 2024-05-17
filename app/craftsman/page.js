"use client";

import Faqs from "@/components/Faqs";
import NodeBlocks from "@/components/NodeBlocks";
import RelatedLinks from "@/components/RelatedLinks";

export default function Hustler({}) {
  const initSetup = {
    brandName: "Craftsman",
    logoName: "craftsman",
    colors: {
      background: "bg-neutral-100",
      primary: "#d6001c",
      fontOnPrimary: "#fff",
    },
  };

  const supportResources = {
    title: "SUPPORT & RESOURCES",
    nodes: [
      {
        type: "Operator’s Manual",
        img: {
          src:
            "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AC77XY093_T100_env3.jpg",
          alt: "",
        },
        p:
          "Enter the product code shown on the product serial number. Then select your language, click “Search,” and download your manual.",
        button: {
          href: "https://www.mtdparts.com/en_US/operatorsmanuals",
          copy: "FIND Operator’s Manual",
          backgroundColor: "",
        },
      },
      {
        type: "Service Locator",
        img: {
          src:
            "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v1a83c633bba37b7872694f752ad9aef934522032/brand-parts-pages/13AC77XY093_T100_env3-1.jpg",
          alt: "",
        },
        p:
          "With our easy-to-use online Service Locator, you will get information on your current location and closest service locations, as well as their contact information and driving directions. You can choose to view the service points either conveniently on a map, or a list.",
        button: {
          href:
            "https://www.mtdparts.com/en_US/servicelocator?showMap=true&horizontalView=true&isForm=true",
          copy: "FIND SERVICE LOCATIONS",
          backgroundColor: "bg-white",
        },
      },
      {
        type: "Product Registration",
        img: {
          src:
            "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Library-Sites-mtdSharedLibrary/default/v85c4cb4f104f7ca7419887d15884d72d8d23f088/brand-parts-pages/13AC77XY093_T100_env3-2.jpg",
          alt: "",
        },
        p: `Have your CRAFTSMAN equipment registered Online now. If you
        don’t know your model and product serial number, call
        1-855-971-2271 and we will be glad to assist you.`,
        button: {
          href: "https://www.mtdparts.com/en_US/registration.html",
          copy: "REGISTER YOUR PRODUCT",
          backgroundColor: "bg-white",
        },
      },
      {
        type: "CRAFTSMAN® Fan Zone",
        img: {
          src:
            "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/craftsman/Man-Using-Craftsman-Drill.webp",
          alt:
            "Man in a workshop using a Craftsman drill on a piece of wood, with a red craftsman toolbox in the background.",
        },
        p: `Your one-stop-shop for project inspiration, tool guides, routine to pro-level maintenance tips, NASCAR racecar wraps, and real stories from the CRAFTSMAN® community.`,
        button: {
          href: "https://www.craftsman.com/pages/craftsman-fan-zone",
          copy: "Browse the Fan Zone",
          backgroundColor: "bg-white",
        },
      },
      {
        type: "Outdoor Equipment Maintenance Tips",
        img: {
          src:
            "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/craftsman/Woman-Cutting-Grass-On-Craftsman-Riding-Mower.webp",
          alt: "Woman mowing a lawn on a Craftsman riding mower",
        },
        p: ` Everyone can see the pride you take in your yard. Give your outdoor equipment
        the same attention with these easy steps, so they start fast and run strong through the
        seasons.`,
        button: {
          href:
            "https://www.craftsman.com/pages/outdoor-equipment-maintenance-tips",
          copy: "Get Maintenance Tips",
          backgroundColor: "bg-white",
        },
      },
      {
        type: "Create a CRAFTSMAN® Club Account",
        img: {
          src:
            "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/craftsman/Men-Working-On-Car-With-Craftsman-Tools.webp",
          alt: "Two men working on a car in a garage with Craftsman tools.",
        },
        p: `Sign up to receive the latest CRAFTSMAN® Club updates, and become a part of
        our community. Stay in the loop on product launches, seasonal reminders, and more
        with email and text updates.`,
        button: {
          href: "https://www.craftsman.com/account/register",
          copy: "Join the Club",
          backgroundColor: "bg-white",
        },
      },
    ],
  };

  const howTo = [
    {
      type: "How to Perform Oil Maintenance",
      img: {
        src:
          "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/craftsman/Man-Riding-Craftsman-Lawn-Mower.webp",
        alt: "Man Cutting Grass on Craftsman Riding Lawn Mower",
      },
      p: ``,
      button: {
        copy: "Learn More",
        href:
          "https://www.craftsman.com/blogs/customer-service/CRAFTSMAN-riding-mower-oil-maintenance",
        aria: "Click to Learn How To Perform Oil Maintenance",
      },
    },
    {
      type: "How to Perform Air Filter Maintenance",
      img: {
        src:
          "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/craftsman/Man-Riding-Craftsman-Lawn-Mower-2.webp",
        alt: "Man Cutting Grass on Craftsman Riding Lawn Mower",
      },
      button: {
        copy: "Learn More",
        href:
          "https://www.craftsman.com/blogs/customer-service/CRAFTSMAN-riding-mower-air-filter-maintenance",
        aria: "Click to Learn How To Perform Air Filter Maintenance",
      },
    },
    {
      type: "How to Replace a Zero-Turn Mower Belt",
      img: {
        src:
          "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/craftsman/Man-Riding-Craftsman-Zero-Turn-Mower.webp",
        alt: "Man Cutting Grass on Craftsman Zero Turn Mower",
      },
      button: {
        copy: "Learn More",
        href:
          "https://www.craftsman.com/blogs/customer-service/craftsman-zero-turn-mower-belt-replacement",
        aria: "Click to Learn How To Replace a Zero-Turn Mower Belt",
      },
    },
  ];

  const pageSetup = {
    ...initSetup,

    supportResources: {
      ...supportResources,
    },
  };

  return (
    <div id="sdb-container" className="mt-4">
      <section className={`${pageSetup.colors.background} py-12`}>
        <div className="container">
          <h2 className="text-center mb-2">
            {pageSetup.supportResources.title}
          </h2>
          <ul className="grid gap-4 lg:grid-cols-3">
            {pageSetup.supportResources.nodes.map((node, index) => (
              <li key={index}>
                <NodeBlocks node={node} pageSetup={pageSetup} />
              </li>
            ))}
          </ul>

          <h2 className="text-center mt-6 mb-2">Riding Lawn Mower How-Tos</h2>
          <ul className="grid gap-4 lg:grid-cols-3">
            {howTo.map((node, index) => (
              <li key={index}>
                <NodeBlocks node={node} pageSetup={pageSetup} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container">
        <RelatedLinks
          className="mt-4"
          relatedCats={{
            h3: "Related Categories",

            list: [
              {
                title: "Lawn Mowers",
                href: "https://www.craftsman.com/collections/lawn-mowers",
              },
              {
                title: "Snow Blowers",
                href:
                  "https://www.craftsman.com/collections/snow-blowers?_pos=2&_psq=snow&_ss=e&_v=1.0",
              },
              {
                title: "String Trimmers",
                href: "https://www.craftsman.com/collections/string-trimmers",
              },
              {
                title: "Lawn Edgers",
                href: "https://www.craftsman.com/collections/lawn-edgers",
              },
              {
                title: "Leaf Blowers",
                href: "https://www.craftsman.com/collections/leaf-blowers",
              },
            ],
          }}
        />

        <RelatedLinks
          className=" mt-4"
          //viewAllLink="https://www.cubcadet.com/en_US/zero-turn-mower-parts"
          relatedCats={{
            h3: "Related Searches",
            // p:
            //   "When customers buy Zero-Turn Lawn Mowers they often buy or consider:",
            list: [
              {
                title: "Warranty",
                href: "https://www.craftsman.com/pages/warranty",
              },
              {
                title: "Customer Support",
                href: "https://www.craftsman.com/pages/customer-support",
              },
              {
                title: "Own the Outdoors",
                href: "https://www.craftsman.com/pages/own-the-outdoors",
              },
              {
                title: "Mower Finder",
                href: "https://www.craftsman.com/pages/mower-finder",
              },
              {
                title: "Snow Blower Finder",
                href: "https://www.craftsman.com/pages/snow-blower-finder",
              },
            ],
          }}
        />

        <div className="mt-4 mb-8 ">
          <h3 id="related-links-title mb-1" tag="h3" class="h3 mb-1">
            Questions & Answers
          </h3>
          <Faqs
            //style={{ fontSize: "2em" }}
            faqs={[
              {
                question: "What is the best CRAFTSMAN® lawn mower for me?",
                className: "font-bold",
                answer: `When buying a lawn mower, there are several factors to consider including lawn size, terrain, and power source. CRAFTSMAN offers a wide selection of mowers including <a href="https://www.craftsman.com/collections/riding-lawn-mowers-1">riding lawn mowers</a>, <a href="https://www.craftsman.com/collections/zero-turn-mowers">zero-turn mowers</a> and <a href="https://www.craftsman.com/collections/walk-behind-mowers">walk-behind mowers</a>. To find the mower best suited for your yard, check out our <a href="https://www.craftsman.com/pages/mower-finder">CRAFTSMAN Mower Finder</a>. To learn more about the differences between various types of mowers, check out our lawn mower <a href="https://www.craftsman.com/blogs/news/lawn-mowers-frequently-asked-questions">FAQs</a>.`,
              },
              {
                question: "What is the best CRAFTSMAN® snow blower for me?",
                className: "font-bold",
                answer: `When selecting a snow blower, there are several considerations to keep in mind including snowfall amounts and frequency, terrain, and the size of the area to be cleared. To find the snow blower best suited for your yard, check out our <a href="https://www.craftsman.com/pages/snow-blower-finder">Snow Blower Finder</a>. To learn more about considerations when selecting a snow blower, check out our snow blower <a href="https://www.craftsman.com/blogs/news/snow-blowers-frequently-asked-questions">FAQs</a>. Shop all CRAFTSMAN snow blowers <a href="https://www.craftsman.com/collections/snow-blowers?_pos=2&_psq=snow+b&_ss=e&_v=1.0">HERE</a>.`,
              },
              {
                question: "How do I register my CRAFTSMAN® Equipment?",
                className: "font-bold",
                answer: `To register your CRAFTSMAN equipment, you need to create a CRAFTSMAN® Club account <a href=" https://www.craftsman.com/account/register">HERE</a>.`,
              },
            ]}
            id="craftsman-faqs"
            className="font-bold"
          />
        </div>
      </section>
    </div>
  );
}
