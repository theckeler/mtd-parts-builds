"use client";

export default function BannerAd({ className, id, style }) {
  return (
    <section id="sdb-container">
      <div className="container-xxl g-0 bg-black relative my-1">
        <div className="relative z-10 p-2 text-center min-h-[240px] text-white bg-black/70 py-6 w-full h-full">
          <h2 className="uppercase mb-0">
            SAVE UP TO 25% ON SELECT CRAFTSMAN EQUIPMENT*
          </h2>
          <p className="text-xl">
            *Offer valid 4/1/24-7/1/24 only on mtdparts.com , for shipments in
            the 48 U.S. contiguous states only.
          </p>

          <p className="text-base">
            Restrictions apply. Click below for details.
          </p>
          <a
            href="/en_US/equipment/closeout-equipment?prefn1=brand&prefv1=Craftsman"
            className="bg-neutral-100 text-neutral-900 text-center uppercase py-2 px-6 text-lg shadow mt-2 inline-block"
          >
            Check Out The Craftsman® sale
          </a>
        </div>
        <img
          src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/MTDPARTS/cm-banner/c6e23d30-f6ad-4551-864b-47bbaa4a245e.webp"
          alt=""
          className="absolute w-full h-full object-cover top-0 left-0 z-0"
        />
      </div>
    </section>
  );
}
