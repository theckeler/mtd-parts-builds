"use client";

export default function ToggleTab({ className, style, Component, id, title }) {
	const hoursCSS = "row col-6";

	return (
		<div className={className} style={style} id={id}>
			<h3
				className="position-relative flex align-items-center mb-0 py-0 font-bold text-uppercase"
				style={{ minHeight: "48px" }}>
				<button
					className="position-absolute w-100 h-100 d-block d-lg-none"
					style={{ cursor: "pointer", opacity: 0 }}
					aria-label={title}
					onClick={() => {
						document
							.querySelector("#" + id + "-block")
							.classList.toggle("d-none");
						document
							.querySelector("#" + id + " .arrow")
							.classList.toggle("rotate-180");
					}}
				/>
				{title}
				<style jsx>{`
					.rotate-180 {
						transform: rotate(180deg);
					}
				`}</style>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 -960 960 960"
					className="arrow d-block d-lg-none ml-auto rotate-180"
					style={{ width: "32px" }}>
					<path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
				</svg>
			</h3>
			<hr
				className="w-100 p-0 my-0 d-none d-lg-block"
				style={{ borderBottom: "1px solid #a8a8a8" }}
			/>
			<div className="d-none d-lg-block" id={`${id}-block`}>
				{typeof Component === "object" ? Component : <Component />}
			</div>
			<hr
				className="w-100 p-0 my-0 d-lg-none"
				style={{ borderBottom: "1px solid #a8a8a8" }}
			/>
		</div>
	);
}
