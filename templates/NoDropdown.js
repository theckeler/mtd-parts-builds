export default function FooterNoDropdown({ title, href }) {
	return (
		<>
			<h3 className="mb-0 py-0 font-bold text-uppercase" style={{}}>
				<a
					href={href}
					className="w-100 flex align-items-center"
					style={{ fontSize: "initial", minHeight: "48px", color: "#000" }}>
					{title}
				</a>
			</h3>
			<hr
				className="w-100 p-0 my-0"
				style={{ borderBottom: "1px solid #a8a8a8" }}
			/>
		</>
	);
}
