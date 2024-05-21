"use client";

import CCLogo from "./cc-logo";

export default function PartsHero({}) {
  const base =
    "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/parts-heros/";

  const ccHeros = [
    {
      title: "Shop Genuine Cub Cadet® Belts",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-001.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Blades",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-002.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Spark Plugs",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-003.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Carburetors",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-004.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Filters",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-005.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Spindles",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-006.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Engine Parts",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-007.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Tires and Wheels",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-008.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Baggers",
      copy:
        "The only attachments designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-009.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Attachments and Accessories",
      copy:
        "The only attachments designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-010.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Hardware",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-011.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Pulleys",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-012.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Shave Plates and Skid Shoes",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-013.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Blade Adapters",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-014.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Oil, Fuel Additives & Lubricants",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-015.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Recoils and Starter Motors",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-016.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Cables",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-017.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Mower Decks",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-018.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Tiller Tines",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-019.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Trimmer Line",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-020.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Batteries",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-021.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Engine Maintenance Kits",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-022.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Mufflers",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-023.webp",
    },
    {
      title: "Shop Genuine Cub Cadet® Seats",
      copy:
        "The only parts designed and engineered to meet Shop Genuine Cub Cadet® original equipment standards.",
      src: "parts-img-024.webp",
    },
  ];
  return (
    <div id="sdb-container">
      {ccHeros.map((hero, i) => (
        <div className="container" key={i}>
          <ul className="grid grid-cols-[400px_1fr]">
            <li className="bg-[#ffc20f] flex flex-col items-center p-4 h-full justify-center">
              <CCLogo className="w-44" />
              <h2 className="w-full mt-2">{hero.title}</h2>
              <p className="mt-2 text-xl">{hero.copy}</p>
            </li>
            <li className="">
              <img src={base + hero.src} alt="" />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
