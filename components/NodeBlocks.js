"use client";

export default function NodeBlocks({ node, pageSetup }) {
  return (
    <a
      href={node.button.href}
      className="text-black font-normal hover:no-underline"
    >
      <div className="bg-white p-2 h-full flex flex-col">
        <div className="h-[200px] relative">
          <img
            src={node.img.src}
            alt={node.img.alt}
            className="w-full h-full absolute object-cover"
          />
        </div>
        <h2 className="text-center text-xl mt-1">{node.type}</h2>
        <p className="mt-1 text-base">{node.p}</p>
        {node.button.copy && (
          <button
            className="mt-auto block w-full py-1 px-4 font-bold capitalize"
            style={{
              backgroundColor: pageSetup.colors.primary,
              color: pageSetup.colors.fontOnPrimary,
            }}
            aria-label={node.button.aria}
          >
            {node.button.copy}
          </button>
        )}
      </div>
    </a>
  );
}
