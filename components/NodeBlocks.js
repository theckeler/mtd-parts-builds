"use client";

export default function NodeBlocks({ node, pageSetup }) {
  return (
    <a
      href={node.button.href}
      className="text-black font-normal"
    >
      <div
        className="p-1 uppercase font-bold text-center"
        style={{
          backgroundColor: pageSetup.colors.primary,
          color: pageSetup.colors.fontOnPrimary,
        }}
      >
        {node.type}
      </div>
      <div className="bg-white p-2">
        <div className="h-[178px] relative">
          <img
            src={node.img.src}
            alt={node.img.alt}
            className="w-full h-full absolute"
          />
        </div>
        <p className="line-clamp-3 mt-2">{node.p}</p>
        {node.button.copy && (
          <button
            className="block w-full py-1 px-4 font-bold"
            style={{
              backgroundColor: pageSetup.colors.primary,
              color: pageSetup.colors.fontOnPrimary,
            }}
          >
            {/* Shop for {node.button.copy} Parts */}
            Shop Parts
          </button>
        )}
      </div>
    </a>
  );
}
