"use client";
import { useEffect, useState } from "react";

export default function PartsHero({}) {
  const [content, setContent] = useState({
    imgURL: "imgURL",
    title: "title",
    copy: "copy",
  });

  const [htmlOutput, setHtmlOutput] = useState("");

  useEffect(() => {
    setHtmlOutput(`
      <div class="p-2">
        <img src="${content.imgURL}" alt="" />
        <h1>${content.title}</h1>
        <p>${content.copy}</p>
      </div>
    `);
  }, [content]);

  return (
    <div id="sdb-container">
      <div id="input" className="p-2">
        <ul className="flex gap-1 flex-col w-full">
          <li>
            <input
              type="text"
              className="bg-neutral-100 p-1 w-full"
              placeholder="Image URL"
              onChange={(e) => {
                setContent({ ...content, imgURL: e.currentTarget.value });
              }}
            />
          </li>
          <li>
            <input
              type="text"
              className="bg-neutral-100 p-1 w-full"
              placeholder="Title"
              onChange={(e) => {
                setContent({ ...content, title: e.currentTarget.value });
              }}
            />
          </li>
          <li>
            <textarea
              className="bg-neutral-100 p-1 w-full"
              placeholder="Copy"
              onChange={(e) => {
                setContent({ ...content, copy: e.currentTarget.value });
              }}
            />
          </li>
        </ul>
      </div>

      <div id="visual-output">
        <div className="p-2">
          <img src={content.imgURL} alt="" />
          <h1>{content.title}</h1>
          <p>{content.copy}</p>
        </div>
      </div>

      <div id="html-output">
        <pre className="p-2 bg-gray-100"><code>{htmlOutput}</code></pre>
      </div>
    </div>
  );
}
