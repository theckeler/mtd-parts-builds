export default function Button({ title, url, className, onClick, style }) {
	const addPadding = { padding: "0.625rem 2.5rem" };

	if (url) {
		return (
			<a
				href={url}
				className={`button text-uppercase font-weight-bold text-decoration-none d-inline-flex justify-content-center align-items-center ${className}`}
				dangerouslySetInnerHTML={{ __html: title }}
				style={{ ...style, minHeight: "48px" }}
			/>
		);
	} else {
		return (
			<button
				onClick={onClick}
				className={`button font-weight-bold ${className}`}
				dangerouslySetInnerHTML={{ __html: title }}
				style={style}
			/>
		);
	}
}
