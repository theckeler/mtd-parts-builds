"use client";
import Button from "@/components/Button";

export default function InputButton({
	className,
	input,
	button,
	padding = "p-3",
	icon = null,
}) {
	return (
		<ul className={`flex w-100 ${className}`}>
			<li style={{ flex: "1 1 auto" }}>
				<input
					required=""
					type="text"
					className={`${padding} w-100 h-100 rounded-0 border-0 ${input.className}`}
					style={input.style}
					id={input.id}
					placeholder={input.placeholder}
					name={input.name}
				/>
			</li>
			<li style={{ flex: "0 1 auto" }}>
				<Button
					aria-label={button.ariaLabel}
					title={button.title}
					className={`w-full h-full font-bold rounded-r outline-0 border-0 whitespace-nowrap uppercase ${button.className} ${padding}`}
					style={button.style}
					icon={icon}
				/>
			</li>
		</ul>
	);
}
