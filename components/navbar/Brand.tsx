import Link from "next/link";

export default function Brand() {
	return (
		<div className="flex flex-shrink-0 items-center w-[36px] sm:w-[24px] 2xl:w-[130px]">
			<Link href="/?chain=sol" className="flex items-center">
				{/* Icon */}
				<svg
					width="36"
					height="36"
					viewBox="0 0 36 36"
					className="w-[36px] h-[36px] text-textPrimary"
					fill="none"
				>
					<path
						d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z"
						fill="currentColor"
					/>
					<path
						d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z"
						fill="currentColor"
					/>
				</svg>

				{/* Wordmark */}
				<svg
					width="102"
					height="21"
					viewBox="0 0 103 19"
					className="hidden 2xl:block max-w-[102px] text-textPrimary"
					fill="none"
				>
					<path
						d="M56.1914 18.3745V1.33447H59.7434L64.8074 15.3265L69.8714 1.33447H73.4234V18.3745H70.8314V5.89447L66.2474 18.3505H63.3674L58.7834 5.89447V18.3745H56.1914Z"
						fill="currentColor"
					/>
				</svg>
			</Link>
		</div>
	);
}
