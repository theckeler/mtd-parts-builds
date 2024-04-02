"use client";

export default function BannerAd({ className, id, style }) {
  return (
    <section id="sdb-container">
      <div className="container-xxl g-0 bg-black relative my-1">
        <div className="relative z-10 p-2 grid text-center justify-center min-h-[240px] text-white bg-black/70 py-6 w-full h-full">
          <h2 className="uppercase mb-0">
            SAVE UP TO 25% ON SELECT CRAFTSMAN EQUIPMENT
          </h2>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 168 43"
            className="max-w-xs mx-auto"
          >
            <path d="M0 1h168v40H0z" class="fill-white" />
            <path fill="#dd0424" d="M165 4H3v34.3h162V4z" />
            <path
              d="m151 21.9-4.3-9.9h-4.4v18.4h4.4v-9.9l4.3 9.9h4.4V12H151v9.9zm9.5 6.5c.1 0 .1-.1.2-.1.1-.1.1-.1.1-.2s.1-.2.1-.3c0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.6-.2h-1v2.5h.3v-1.1h.5l.7 1.1h.4l-.7-1.1c.1 0 .2 0 .2-.1zm-.6-.2h-.4v-.9h.8c.1 0 .1 0 .2.1.1 0 .1.1.1.1 0 .1.1.1.1.2s0 .2-.1.2c0 .1-.1.1-.2.1h-.2c-.1.2-.2.2-.3.2zm2-.7c-.1-.3-.3-.5-.5-.7-.2-.2-.4-.3-.7-.5-.3-.1-.5-.2-.8-.2-.3 0-.6.1-.8.2-.3.1-.5.3-.7.5-.2.2-.3.4-.5.7-.1.3-.2.5-.2.8 0 .3.1.6.2.8.1.3.3.5.5.7.2.2.4.3.7.5.3.1.5.2.8.2.3 0 .6-.1.8-.2.3-.1.5-.3.7-.5.2-.2.3-.4.5-.7.1-.3.2-.5.2-.8 0-.2-.1-.5-.2-.8zm-.3 1.6c-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.5.1-.7.1-.3 0-.5 0-.7-.1-.2-.1-.4-.2-.6-.4-.2-.2-.3-.4-.4-.6s-.1-.5-.1-.7c0-.3 0-.5.1-.7.1-.2.2-.4.4-.6.2-.2.4-.3.6-.4.2-.1.5-.1.7-.1.3 0 .5 0 .7.1s.4.2.6.4.3.4.4.6c.1.2.1.5.1.7 0 .2 0 .5-.1.7zM127.9 12l-2.5 2.2v16.2h4.3v-6.1h3.4v6.1h4.4V14.2L135 12h-7.1zm5.2 8.2h-3.4v-4.3h3.4v4.3zM45.4 12l-2.5 2.2v16.2h4.4v-6.1h3.4v6.1H55V14.2L52.5 12h-7.1zm5.2 8.2h-3.4v-4.3h3.4v4.3zm60.9-1.4-2.9-6.8h-5.7v18.4h4.7v-11l2.8 6.6h2.1l2.8-6.7v11h4.7V12h-5.7l-2.8 6.8zm-73.8 2.3v-6.9L34.4 12h-8.7v18.4h4.8v-6.8l3.7 6.8h5.1l-4.2-7.6 2.6-1.7zM33 20h-2.5v-4H33v4zm-18-8h-1.2l-2.6 2.6v13.3l2.6 2.6h7.4v-4H16V16.1h5.2v-4L15 12zm57.1 4.4h4v14h4.7v-14h3.1l1.4-4.4H73.5l-1.4 4.4zm25.8-.1 1.2-4.3H88.2l-1.1 4.7 6.6 9.7h-6.6l-1.3 4.1h12l1.4-4.3-7.2-9.9h5.9zm-38 14.1h5v-6.5h3.8v-4h-3.8v-3.6h4.3V12h-9.3v18.4z"
              class="fill-white"
            />
          </svg> */}
          <p className="text-2xl">Now through July 1, 2024</p>
          <a
            href="/en_US/equipment/closeout-equipment?prefn1=brand&prefv1=Craftsman"
            className="bg-neutral-100 text-neutral-900 text-center uppercase p-2 text-lg shadow"
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
