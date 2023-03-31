import Button from "../elements/Button";

const SupportModel = ({ title, sub, addClass, addStyle }) => {
	return (
		<div className="flex flex-column h-100">
			<h2 className="text-center">{title}</h2>
			<p className="text-center">{sub}</p>

			<div className="mt-3">
				<img
					src="https://www.mtdparts.com/on/demandware.static/-/Sites-mtdparts-Library/default/dw81188c99/Model-Plates/Web/Find_Model_Number_MTD.jpg"
					alt=""
					className="ml-auto mr-auto"
				/>
				<p className="my-2">
					The Model number is eleven characters long and is printed on the left
					of the product identification label. Characters can include numbers,
					letters or hyphens.
				</p>
			</div>

			<Button
				copy="Find Support"
				url="https://www.mtdparts.com/en_US/ari-partstream.html"
				addClass="btn btn-block btn-secondary mt-auto"
			/>
		</div>
	);
};

export default SupportModel;
