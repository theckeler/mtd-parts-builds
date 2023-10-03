"use client";

import InputButton from "@/components/Form/InputButton";

export default function BlockSignUp({ className, style }) {
	return (
		<ul className={className + " mb-0"} style={style}>
			<li>
				<form
					data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/MCSubscription-FooterSubscribe"
					id="email-subscribe-form"
					role="form"
					autoComplete="on">
					<h2 className="font-bold" style={{ fontSize: "24px" }}>
						Sign up for Emails from MTD Parts
					</h2>
					<div>
						<label
							htmlFor="email-signup"
							className="pb-2 px-1 mt-1"
							style={{ fontWeight: "normal" }}>
							Sign up to receive communication on services, products and special
							offers. You may unsubscribe at any time. Please refer to our{" "}
							<a href="/en_US/privacy-and-security/privacy-policy.html">
								<u>Privacy Policy</u>
							</a>
							.
						</label>

						<InputButton
							{...{
								className: null,
								padding: "p-2 rounded-0",
								input: {
									id: "email-signup",
									placeholder: "Enter in your email address",
									name: "email-signup",
									className: "",
								},
								button: {
									title: "Next",
									ariaLabel: null,
									className: "text-uppercase",
									style: { background: "#059353", color: "#fff" },
								},
							}}
						/>
					</div>
				</form>
			</li>
		</ul>
	);
}
