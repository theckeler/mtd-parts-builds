export function Logos({ logo, className }) {
  if (!logo) return "";
  const LogoMap = {
    robomow: Robomow,
    hustler: Hustler,
    craftsman: Craftsman,
  };
  const LogoExport = LogoMap[logo];
  return <LogoExport className={className ? className : ""} />;
}

export function Robomow({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 419.9 103.2"
    >
      <path
        d="M113 83.9c-.5-.1-1.4-.1-1.7-.1-1.7 0-1.9.2-2.6 2.8h2.1c.1.2.1.7.1 1-.1.9-.6 1.7-2.1 1.7-.2 0-.4 0-.7-.1l-1.7 7.1c-1.1 4.7-3.2 6.8-6.4 6.8-1.4 0-2-.6-1.9-1.6 0-.3.1-.6.3-.9 2.9 0 3-.1 3.9-4l1.8-7.5h-1.3c-.2-.2-.2-.7-.1-1.1.1-1.1.8-1.5 2.2-1.5 1.3-4.6 2.9-5.7 6.4-5.7 1.7 0 2.5.6 2.3 1.5 0 .8-.3 1.2-.6 1.6m8.3 5.9c-.6-.1-.9-.1-1.2-.1-1.3 0-2.3.6-3.6 2.6l-1.5 5.5c-.5.2-1.4.2-2 .2-1.2 0-1.7-.5-1.6-1.5 0-.3.2-.8.4-1.6l1.6-5.8h-1.3c-.2-.3-.2-.6-.1-1 .2-1.2 1.3-1.7 3.8-1.7 1.6 0 2 .4 1.7 1.3l-.6 1.8c1.6-2.6 2.2-3.1 3.7-3.1 1.3 0 1.6.7 1.5 1.6 0 .9-.4 1.4-.8 1.8m3.2 8.3c-1.3 0-2.1-.5-1.9-1.7.1-.5.3-1.2.4-1.8l1.7-5.4h-1.3c-.2-.3-.2-.6-.1-1 .2-1.2 1.3-1.7 3.8-1.7 1.8 0 2.1.5 1.8 1.7l-1.2 4.3c-.4 1.3-.7 2.1-.7 2.5 0 .2 0 .4.4.4.2 0 .7 0 1-.1.3.2.4.6.3.9-.3 1.3-1.6 1.9-4.2 1.9m3.8-13.1c-1 0-1.9-.4-1.7-1.7.2-1.2 1.2-2.1 2.6-2.1 1.3 0 1.8.7 1.6 1.8-.1 1.1-1.1 2-2.5 2m9.1 1.6zm0 0c-4.2 0-6.9 2.6-7.5 6.9-.5 3.5 1.6 4.7 4.7 4.7 3.3 0 5-1 5.2-2.2.1-.6-.1-1.1-.6-1.3-1.2.4-2.1.7-3.3.7-1.2 0-2.3-.5-2.1-2.2.5.1.8.1 1.5.1 3.6 0 5.3-1.3 5.8-3.5.3-1.9-1.1-3.2-3.7-3.2zm-1.9 4.9c-.5 0-.9 0-1.3-.1.5-1.4 1.4-2.3 2.5-2.3.9 0 1 .4 1 1-.1.8-.8 1.4-2.2 1.4zm7.9 6.6c-1.2 0-1.7-.5-1.6-1.5 0-.3.2-.8.4-1.6l1.6-5.8h-1.3c-.2-.3-.2-.6-.1-1 .2-1.2 1.3-1.7 3.7-1.7 1.6 0 2 .4 1.7 1.3l-.3 1c1.2-1.6 2.4-2.3 4.5-2.3 2.2 0 3 .9 2.8 2.7-.2 1.4-.9 3.2-1.3 4.5-.1.5-.3 1-.4 1.5 0 .2.1.3.4.3.3 0 .6 0 1-.1.3.2.4.6.3.9-.2 1.3-1.5 1.8-4.2 1.8-1.2 0-2-.5-1.8-1.7.1-.6.3-1.3.5-1.9.2-.5 1.4-4.1 1.5-4.5s0-.9-1-.9c-.8 0-1.7.4-2.4 1.3l-2 7.4c-.6.2-1.4.3-2 .3m25.5-2.6c-.3.1-.8.1-1 .1-.4 0-.4-.2-.4-.5s.1-.8.4-1.8l3.2-11.5c-.4-.4-1.1-.6-1.9-.6-1.4 0-2 .4-2.5 2.1l-1.1 3.8c-.4-.3-1.1-.5-2.3-.5-3.1 0-6 2.4-6.7 7.2-.5 3.2.8 4.3 3.4 4.3 1.5 0 2.9-.5 3.8-2 0 .1-.1.3-.1.4-.2 1.2.5 1.6 1.5 1.6 2.3 0 3.7-.6 4-1.7 0-.4 0-.7-.3-.9zm-5.5-.6c-.4.4-1 .6-1.6.6-1.1 0-1.6-.5-1.4-2.2.4-2.8 1.7-4.2 3.4-4.2.5 0 .8 0 1.1.3l-1.5 5.5zm8.9 3.2c-1.2 0-1.9-.5-1.8-1.7.1-.6.3-1.3.4-1.9l3.1-11.2c.5-1.7 1.1-2.1 2.5-2.1.8 0 1.5.2 1.9.6l-3.2 12c-.3.9-.4 1.3-.4 1.5s.1.3.4.3c.2 0 .6 0 1-.1.2.2.3.6.3.9-.2 1.1-1.5 1.7-4.2 1.7"
        style={{ fill: "#f5d60b" }}
        class="st0"
      />
      <path
        d="M184.9 98.2c-3.1 3-5.5 4.7-8 4.7-1.4 0-2.1-.9-2.1-1.9 0-.4.3-.9.3-.9 1.9 0 4-1 4.7-2.2v-9.2h-.8c-.2-.3-.2-.8-.1-1.2.2-1.3.7-1.4 3-1.4 1.4 0 1.7.4 1.7 1.6V95c.2-.2.4-.5.6-.7 1.1-1.5 2-3.5 2.5-5.5.2-.8.3-1.5.3-2.3.1-.1.2-.1.3-.2.4-.2.9-.3 1.4-.3 1.6 0 2.3.7 2.1 2.2-.5 2.6-2.2 6.4-5.9 10m16.4-9.8c1-1.2 2-1.9 4.1-1.9 2.2 0 3 .9 2.8 2.7-.2 1.4-.9 3.2-1.3 4.5-.1.5-.3 1-.4 1.5 0 .2.1.3.4.3.2 0 .6 0 1-.1.3.2.4.6.3.9-.2 1.3-1.5 1.8-4.2 1.8-1.2 0-2-.5-1.8-1.7.1-.6.3-1.3.5-1.9s1.4-4.1 1.5-4.5 0-.9-1-.9c-.8 0-1.7.4-2.4 1.3l-2 7.4c-.5.2-1.4.2-2 .2-1.2 0-1.7-.5-1.5-1.5 0-.3.2-.8.4-1.6l3.2-11.7c.5-1.7 1.1-2.1 2.5-2.1.8 0 1.5.2 1.9.6l-2 6.7zm15.9-2c-4.3 0-7.1 2.7-7.7 6.8-.5 3.5 1.4 4.9 4.5 4.9 4.4 0 7.2-2.6 7.9-6.8.4-2.9-.7-4.9-4.7-4.9zm.8 5.1c-.3 2.5-1.7 4-3.2 4-1.4 0-1.7-.8-1.5-2.4.3-2.3 1.5-4 3.2-4 1.5 0 1.8.8 1.5 2.4zm13.4-1.2c.2-.6 0-1.1-.8-1.1s-1.7.4-2.4 1.3l-2 7.4c-.6.2-1.4.2-2 .2-1.2 0-1.7-.5-1.6-1.5 0-.3.2-.8.4-1.6l1.6-5.8h-1.3c-.2-.3-.2-.6-.1-1 .2-1.2 1.3-1.7 3.7-1.7 1.6 0 2 .4 1.7 1.3l-.3 1c1.2-1.6 2.4-2.3 4.5-2.3 2 0 2.8.8 2.7 2.2 1.1-1.5 2.4-2.2 4.3-2.2 2.1 0 2.9.9 2.7 2.7-.2 1.4-.9 3.2-1.3 4.5-.2.7-.3 1.2-.4 1.5 0 .2.1.3.4.3.3 0 .6 0 1-.1.3.2.4.6.3.9-.2 1.3-1.6 1.8-4.2 1.8-1.3 0-1.9-.6-1.8-1.8.1-.6.3-1.2.4-1.8.1-.4 1.4-4.1 1.5-4.6s-.2-.8-.9-.8c-.9 0-1.7.6-2.3 1.3l-2 7.4c-.5.2-1.4.2-2 .2-1.2 0-1.7-.5-1.6-1.5 0-.3.2-.8.4-1.6l1.4-4.6zm20.1-3.7c-4.2 0-6.9 2.6-7.5 6.9-.5 3.5 1.6 4.7 4.7 4.7 3.3 0 5-1 5.2-2.2.1-.6-.1-1.1-.6-1.3-1.2.4-2.1.7-3.3.7-1.2 0-2.3-.5-2.1-2.2.5.1.8.1 1.5.1 3.6 0 5.3-1.3 5.8-3.5.3-1.9-1.1-3.2-3.7-3.2zm-1.9 4.9c-.5 0-.9 0-1.3-.1.5-1.4 1.4-2.3 2.5-2.3.8 0 1 .4 1 1-.1.8-.8 1.4-2.2 1.4zM127.9 48.3c6.6-1.2 10.1-7 10.1-13.7 0-10.3-6.9-14.9-16-14.9h-17.9v48.4h11.7V49.5h.4l11.3 18.6h14.9l-14.5-19.8zm-8.1-7.1h-3.9v-12h3.9c3.2 0 6 2.7 6 6s-2.7 6-6 6zm151.1-1.9h.1c2.6-3.7 5.9-5.2 9.9-5.2 4.5 0 8.4 1.9 10.7 6.3 2.1-4.1 6.3-6.3 10.6-6.3 7.9 0 10.7 5.5 10.7 13v21h-11.1V52.4c0-3.4.1-9-4.6-9-5.1 0-5.3 5.1-5.3 9v15.7h-11.1V52.4c0-3.7 0-9.2-4.9-9.2s-4.9 5.6-4.9 9.2v15.7h-11.1V35.2H271l-.1 4.1zm97.5 12 6.2-16.1h7l6.8 16.2 6.5-16.2h10.8l-12.6 32.9H385l-6.8-16.3-6.8 16.3h-8.1l-12.5-32.9H362zm-34.1-16.9c-9.6 0-17.4 7.8-17.4 17.4 0 9.6 7.8 17.4 17.4 17.4 9.6 0 17.4-7.8 17.4-17.4 0-9.6-7.8-17.4-17.4-17.4zm0 23.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5c-.1 3.6-3 6.5-6.5 6.5zm-95.6-23.9c-9.6 0-17.4 7.8-17.4 17.4 0 9.6 7.8 17.4 17.4 17.4s17.4-7.8 17.4-17.4c0-9.6-7.8-17.4-17.4-17.4zm0 23.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm-80.2-23.9c-9.6 0-17.4 7.8-17.4 17.4 0 9.6 7.8 17.4 17.4 17.4 9.6 0 17.4-7.8 17.4-17.4 0-9.6-7.8-17.4-17.4-17.4zm0 23.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm43.7-23.9c-3.8 0-7.7 1.4-10.2 4.3v-19h-11.7v48.7H192v-3.7h.1c2.1 3.3 6.1 4.7 9.9 4.7 9.8 0 15.4-9.8 15.4-17.5 0-8-5.5-17.5-15.2-17.5zm-3.1 23.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z"
        class="st0"
        style={{ fill: "#f5d60b" }}
      />
      {/* <path d="M408 34.7h11.9v11.9H408z" class="st1"/>
    <path d="M408 34.7h11.9v11.9H408z" class="st1"/> */}
      <path
        d="M414 34.7c-3.3 0-5.9 2.7-5.9 5.9 0 3.3 2.7 5.9 5.9 5.9 3.3 0 5.9-2.7 5.9-5.9s-2.7-5.9-5.9-5.9"
        class="st0"
        style={{ fill: "#f5d60b" }}
      />
      <path
        style={{ fill: "#fff" }}
        d="M415.2 41.4c.5-.1.9-.4 1.1-.7.3-.3.4-.7.4-1.2 0-.7-.3-1.3-.7-1.6-.5-.3-1-.5-1.7-.5h-2.6v6.8h1.8v-2.6l1.6 2.6h2.2l-2.1-2.8zm-.4-1.3c-.1.2-.2.2-.3.3-.1 0-.3.1-.4.1h-.6v-1.7h.6c.2 0 .3 0 .4.1l.3.3c.1.2.1.3.1.5 0 .1 0 .3-.1.4z"
      />
      <path
        d="M44.2 0C19.8 0 0 19.8 0 44.2s19.8 44.2 44.2 44.2c24.4 0 44.2-19.8 44.2-44.2C88.5 19.8 68.7 0 44.2 0zm20 67.9H30.9c-1.3 0-2.1-1-2.1-2.1V22.4c0-1.5 1-2.3 2.2-2.3h15.2c9.5 0 16 4.5 16 14.7 0 5.8-2.9 11.2-8.5 13.1-.5.2-1 .9-.5 1.7L65.1 66c.6.8.2 1.9-.9 1.9z"
        style={{ fill: "#f5d60b" }}
      />
      <path
        d="M49.5 35.1c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3c3 .1 5.3 2.4 5.3 5.3"
        style={{ fill: "#f5d60b" }}
      />
    </svg>
  );
}

export function Hustler({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 720.11 125.5"
      className={className}
    >
      <path
        d="M568.44 35.59c-.1 13.71-.14 53.37 0 54.85.49 5.07 1.32 9.13 3.6 13.89.57 1.2 3.31 5.6 4.14 6.66.8 1.02 4.71 5.01 5.7 5.82 6.67 5.43 13.26 7.57 21.16 8.58 1.13.14 80.62.14 81.77 0 11.15-1.4 20.74-5.31 28-15.12 3.04-4.1 5.07-8.59 6.24-13.68.44-1.93.72-3.81.96-5.79.14-1.17.14-55.06 0-56.21-1.52-12.19-6.43-22.05-17.76-28.96-5.69-3.47-10.61-4.72-16.76-5.52-1.11-.14-81.39-.14-82.45 0-3.93.54-7.18 1.1-10.72 2.46-1.23.47-6.27 3.07-7.44 3.84-8.43 5.52-14.39 14.57-16.02 25.02-.23 1.46-.41 3.11-.42 4.16z"
        class="st0"
      />
      <path
        fill="#ffc200"
        fill-rule="evenodd"
        d="M704.52 70.31h-15.05c-.39 0-.47-.01-.84-.14-1.33-.47-1.84-.9-2.29-2.02-.07-.16-.13-.34-.15-.52-.03-.24-.03-.32-.03-.7l-.12-37.06c0-.39-.01-.47-.08-.86-.44-2.26-1.6-3.43-3.64-4.11-.21-.07-.43-.14-.66-.16-.3-.02-.38-.02-.77-.02h-25.45v22.8h-22.69l.12-21.09c0-.39 0-.46-.03-.7-.04-.41-.26-.82-.71-.96-.13-.04-.18-.04-.57-.04h-46.58c-.39 0-.45 0-.57-.04-1.31-.42-.24-2.94.16-4.04 2.78-7.53 9.76-11.86 17.61-12.6 1.49-.14 84.7.03 85.53.18 7.29 1.28 13.16 5.86 15.78 13.38.37 1.05.86 3.39 1.02 4.87.25 2.19.01 43.83.01 43.83zm-97.17 15.36h25.4l.31-22.8h22.49v21.49c0 .39.01.45.1.66.15.35.29.49.6.59.16.05.22.06.61.06h46.38c.39 0 .45 0 .64.04.73.13.72.72.63 1.5-.7 5.9-6.61 11.36-11.46 13.46-2.67 1.16-4.48 1.44-6.89 1.68-1.46.14-82.4.14-83.73 0-6.96-.75-12.36-3.69-15.99-10.2-1.84-3.3-2.42-5.89-2.64-9.43-.24-3.97 0-42.65 0-42.65h15.17c.39 0 .47.01.84.11 1.36.35 2.09 1.27 2.37 2.55.08.38.09.47.1.85l.12 37.26c0 .39.01.47.07.83.3 1.81 1.96 3.18 3.11 3.64.29.12.6.22.91.28.38.07.47.08.86.08z"
        clip-rule="evenodd"
      />
      <path
        d="M86.88 64.55s-2.56.04-3.68 0c-1.16-.04-2.17-.65-2.74-1.8-.09-.19-.19-.41-.23-.63-.06-.3-.07-.37-.07-.76V24.59H53.4v19.8H33.48v-19.8H0v13.44s2.57-.15 3.72 0c.67.09 1.79.61 2.22 1.2.06.08.66 1.14.73 1.53.05.24.05.31.05.7v36.65h26.76V58.07H53.4v20.04h33.48V64.55zm88.32 13.56V64.55s-2.73.1-3.88 0c-1.34-.12-2.25-.92-2.71-2.46-.11-.37-.12-.46-.12-.85V24.59H135v13.44s2.41-.14 3.6 0c1.27.15 2.74 1.16 2.85 2.7.02.3.02.38.02.77v23.05h-19.65c-.39 0-.46 0-.7-.03-1.22-.13-2.26-1.45-2.5-2.13-.07-.2-.14-.43-.16-.66-.02-.3-.02-.38-.02-.77V24.59H91.68s-.24 35.73 0 37.8c.37 3.17 1.22 5.72 3.54 8.52 2.45 2.96 6.57 5.42 10.5 6.42 1.17.3 3.89.65 5.99.78 3.98.24 63.49 0 63.49 0zm44.49-13.56-37.17.24v13.32s46.02.24 50.57 0c6.51-.35 12.27-2.1 16.57-7.2 5.29-6.27 4.66-15.25-1.74-20.94-3.45-3.07-7.88-4.69-11.66-5.22-1.14-.16-15.86-.27-23.78-.36-.39 0-.45-.01-.62-.06-.54-.17-1.51-1.2-1.55-1.26-.76-1.09-.57-3.04.54-4.14.13-.13 1.02-.72 1.59-.83.3-.06.37-.07.76-.07h30.53V24.59s-41.39-.24-45.13 0c-6.84.45-13.82 3.42-17.33 10.08-2.78 5.28-1.7 11.99 2.04 16.32 3.41 3.96 8.91 6.45 13.79 6.96 2.64.28 23.19.05 23.83.3 1.77.69 2.82 2.73 1.68 4.68-.22.38-1.16 1.48-2.2 1.59-.26.03-.33.03-.72.03zm97.83 13.56V64.55h-20.61c-.39 0-.46 0-.7-.03-1.2-.13-2.16-1.41-2.44-2.13-.09-.22-.17-.45-.2-.68-.04-.32-.04-.4-.04-.79V38.03h23.4l-.12-13.44h-65.16v13.44h11.69c.39 0 .47.01.85.12 1.36.4 2.02 1.17 2.4 2.16.25.66.09 21.64.36 23.4 1.08 7.03 7.92 12.87 16.26 14.1 1.2.18 2.33.25 3.67.3 6.06.24 30.64 0 30.64 0zm61.32 0V64.55h-18.57c-.39 0-.46 0-.7-.03-.92-.1-1.92-1.13-2.14-1.53-.17-.31-.25-.64-.33-.97-.08-.38-.09-.47-.09-.85V24.59h-33.48v13.44s2.43-.17 3.72 0c.89.11 1.93.63 2.51 1.78.17.34.19.42.19.81l.29 21.98c.01.39.01.47.08.86 1.23 7.1 6.56 11.75 13.37 13.69 1.37.39 2.55.61 4.08.78 2.31.25 31.07.18 31.07.18zm73.44 0V64.55h-38.61c-.39 0-.47-.01-.85-.09-1.4-.31-2.48-1.41-2.65-2.7-.14-1.1 0-3.68 0-3.68h35.4V44.63h-35.4v-6.6h42V24.59h-75.6v13.44s2.51-.14 3.72 0c1.79.2 2.96 1.53 3.24 3 .24 1.28-.24 19.42 0 21.57.83 7.36 6.9 13.45 15.42 15.04 1.43.26 2.91.38 4.61.48 4.27.23 48.72-.01 48.72-.01zm59.77-40.02c2.08.37 2.99 2.57 2.45 4.25-.36 1.11-1.28 1.9-2.1 2.1-1.06.26-14.16.18-14.16.18v13.44h6.48s-.1 2.74 0 4.32c.37 5.57 4.32 10.29 8.88 12.84 3.7 2.07 6.89 2.71 11.15 2.88 5.73.23 16.81 0 16.81 0V64.74l-7.49-.35c-.39-.02-.46-.03-.69-.11-.97-.36-1.6-1.64-1.73-2.01-.16-.45-.32-5.95-.18-6.2.27-.5 2.8-1.92 4.74-3.52 5.64-4.65 7.02-13.13 2.76-19.44-3.78-5.6-10.15-8.01-16.29-8.52-2.94-.24-64.65 0-64.65 0v13.44s2.3-.08 3.52 0c.94.06 2.71.9 3.01 2.43.06.3.07.37.07.76l.12 36.89h26.76V38.03h19.73c.4 0 .48 0 .81.06zm44.29-6.56c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-.71-.02c0-2.37-1.92-4.29-4.29-4.29s-4.29 1.92-4.29 4.29 1.92 4.29 4.29 4.29 4.29-1.92 4.29-4.29zm-2.04 2.68a3.36 3.36 0 0 1-.29-.73c-.06-.24-.09-.41-.1-.49-.03-.21-.07-.43-.11-.65-.04-.23-.14-.42-.29-.59a.755.755 0 0 0-.14-.11c-.05-.03-.12-.07-.23-.12.11-.04.19-.07.24-.09.04-.02.1-.04.17-.08l.18-.12c.06-.04.11-.1.17-.15.07-.06.14-.16.2-.29.07-.13.11-.31.11-.53a1.369 1.369 0 0 0-.33-.91c-.25-.27-.54-.42-.89-.47-.34-.05-.68-.07-1.02-.05h-1.9v5.4h1.16v-2.34h.28c.2 0 .35.01.46.02.1.01.2.04.29.1.12.07.2.17.25.29.05.12.09.3.13.55.03.2.06.4.1.62.04.22.09.42.16.6.01.02.02.05.04.08a.3.3 0 0 0 .04.08h1.32v-.02zm-3.07-3.24v-1.29h.86c.17-.01.33 0 .49.03.16.03.28.12.38.27.03.05.05.11.06.16.02.05.02.11.02.16 0 .03 0 .08-.02.14-.01.06-.04.13-.08.19-.07.13-.18.22-.34.27-.16.05-.38.07-.66.06h-.71v.01zM255 110.91l-.12-5.08s-2.18.16-4.2.66c-1.57.39-3.05.99-3.05.99s.76-.69 1.31-1.29c3.81-4.18 2.69-11.04-1.14-14.04-2.72-2.13-5.57-2.76-9.03-3-2.94-.2-6.43.02-8.85.78-4.86 1.53-7.39 5.55-7.2 10.96.12 3.56 1.78 6.89 4.8 8.6 2.92 1.66 6.53 2.09 9.9 2.1 5.82.02 17.58-.68 17.58-.68zm-12.96-11.49c0 3.69-.6 6.66-4.2 7.25-2.88.47-5.15-1.36-5.76-4.12-.63-2.85.02-6.8 2.52-8.06 3.32-1.67 6.58.38 7.26 3.54.1.48.18 1.04.18 1.39zM28.68 94.91v-5.28H5.76v5.28h6.96v16.08h9V94.91h6.96zm41.4 9.29.12-14.57h-8.52v12.57c0 .39-.01.47-.07.86-.46 3-2.26 3.98-4.98 3.61-1.84-.25-2.47-1.2-3.01-3.21-.1-.38-.11-.46-.11-.85l-.11-12.98h-8.64l.12 14.45c0 .39.01.47.1.85.56 2.5 1.93 4.01 4.17 5.1 4.92 2.4 15.61 2.36 19.32-1.92.85-.97 1.09-1.61 1.5-3.06.1-.38.11-.46.11-.85zm34.56 6.79h9.02s-.94-6.72-1.4-7.92c-.43-1.13-1.42-1.88-2.94-2.1-.54-.08-1.25-.14-1.25-.14s1.24-.43 1.97-.76c2.89-1.29 3.6-4.88 2.22-7.44-1.37-2.55-4.91-2.87-8.64-3-5.41-.18-15.3 0-15.3 0v21.36h9v-7.8l4.01.11c.39.01.46.02.76.08.9.18 1.33.79 1.53 1.49.44 1.58 1.02 6.12 1.02 6.12zm-7.32-11.88v-5.16s2.12-.03 3.36 0c2.31.05 3.65.86 3.36 3.12-.12.91-.89 1.72-1.68 1.86-1.21.21-5.04.18-5.04.18zm42.36-.48v-4.44h10.68v-4.56H130.8v21.36h9v-7.92h10.08l-.12-4.44h-10.08zm65.88 3.96v-4.56h-11.04v-3.84h11.76v-4.56h-20.4v21.36h20.52v-4.44h-11.88v-3.96h11.04zm90.24-12.96h-8.52v12.61c0 .39-.01.47-.08.86-.46 2.35-1.04 3.25-3.23 3.57-2.06.3-3.76-.36-4.48-2.28-.13-.33-.23-.72-.29-1.09-.06-.38-.07-.47-.07-.86L279 89.63h-8.64s-.23 8.84 0 13.2c.19 3.62 1.37 5.93 5.04 7.5 4.42 1.89 13.9 1.81 17.88-1.44 1.78-1.45 2.37-3.33 2.52-5.61.24-3.73 0-13.65 0-13.65zm18 0v21.36h9l-.12-21.36h-8.88zm27.36 0v21.36h9v-6.84s4.9.17 7.74 0c4.55-.27 7.62-2.88 7.14-7.88-.3-3.07-1.47-4.81-4.26-5.92-1.47-.58-2.74-.66-4.93-.72-5.23-.13-14.69 0-14.69 0zm8.88 10.08v-5.52h3.29c.39 0 .47.01.85.11 1.53.42 2.12 1.09 2.1 2.53-.02 1.56-.66 2.28-1.92 2.58-1.39.32-4.32.3-4.32.3zm53.66 11.28 5.86-16.06v16.06h8.4V89.63h-13.72l-4.26 14.23-4.46-13.75v-.48h-13.68v21.36h7.68V94.83l5.58 16.16h8.6zm52.18-8.4v-4.56h-11.04v-3.84h11.76v-4.56h-20.4v21.36h20.52v-4.44h-11.88v-3.96h11.04zm46.32 8.4-.12-21.36h-7.8l.13 14.64-7.21-14.24v-.4H474v21.36h7.8l-.12-15.39 7.74 15.39h12.78zm39-21.36h-22.92v5.28h6.96v16.08h9V94.91h6.96v-5.28z"
        class="st0"
      />
    </svg>
  );
}

export function Craftsman({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 476 115"
      className={className}
    >
      <path d="M0 0h476v115H0V0z" fill="#fff"></path>
      <path d="M9.2 9.2h457.6v96.5H9.2V9.2z" fill="#cf0013"></path>
      <path fill="none" d="M0 0h476v115H0z"></path>
      <path
        d="m129.1 31.5-7.3 6.3v45.9h12.6V66.3h9.4v17.4h12.6V37.8l-7.3-6.3h-20zm14.6 23.2h-9.4V42.5h9.4v12.2zM32.2 38.9v37.5l7.3 7.4h21V72.1H45.8v-29h14.7V31.5h-21l-7.3 7.4zm74.9 18.4V37.8l-9.4-6.3H73v52.3h13.6V64.3l10.5 19.5h14.5L99.7 62.1l7.4-4.8zM94 54.2h-7.3V43.1H94v11.1zm268.2-22.7-7.3 6.3v45.9h12.6V66.3h9.4v17.4h12.6V37.8l-7.3-6.3h-20zm14.7 23.2h-9.4V42.5h9.4v12.2zm50.7 29L415.5 56v27.7h-12.4V31.5h12.1l12.1 27.7V31.5h12.4v52.3l-12.1-.1m25.1-12.1c3.4 0 6.1 2.7 6.1 6.1s-2.7 6.1-6.1 6.1-6.1-2.7-6.1-6.1c0-3.4 2.7-6.1 6.1-6.1m5 6c-.1-2.8-2.3-5-5.1-4.9s-5 2.3-4.9 5.1c.1 2.7 2.3 4.9 5 4.9 2.8 0 5-2.3 5-5.1 0 .1 0 0 0 0m-7.4-3.5h2.8c1.6 0 2.4.7 2.4 2.1 0 1-.8 1.9-1.8 2h-.1l2 3.1h-1.1l-2-3h-1.2v3h-1.1l.1-7.2zm2.2 3.2c1 0 1.9-.1 1.9-1.1 0-.9-.8-1-1.5-1h-1.5v2.2h1.1zm-248-33.2h11v39.6h13.6V44.1h8.6l3.9-12.7h-33.3l-3.8 12.7zm-34.6 39.6h14.2V65.3h10.7V53.6h-10.7v-10h12V31.5h-26.2v52.2zM281 31.5h-30.9l-3.2 13.2 18.9 27.5h-18.9l-3.7 11.6H277l3.9-12.1-20.4-28h16.8l3.7-12.2zm24.1 21.6 7.9 18.5h5.8l7.9-18.5v30.6h13.6V31.5H324l-8.1 19.1-8.1-19.1h-16.2v52.3h13.6V53.1z"
        fill="#fff"
      ></path>
    </svg>
  );
}
