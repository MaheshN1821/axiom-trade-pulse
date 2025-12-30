"use client";
import Link from "next/link";

interface NavItemProps {
	label: string;
	href: string;
	active?: boolean;
}

export function NavItem({ label, href, active = false }: NavItemProps) {
	return (
		<Link
			href={href}
			className={`flex flex-row h-8 text-nowrap px-2 xl:px-[15px] justify-start items-center text-[14px] font-medium transition-colors ${
				active ? "text-primaryBlue" : "text-[rgb(252,252,252)]"
			} hover:bg-primaryBlue/20 hover:text-primaryBlue hover:rounded-[4px]`}
		>
			{label}
		</Link>
	);
}

//above correct

// import Link from "next/link";
// import clsx from "clsx";

// interface NavItemProps {
// 	label: string;
// 	href: string;
// 	active?: boolean;
// }

// export default function NavItem({ label, href, active = false }: NavItemProps) {
// 	return (
// 		<Link href={href}>
// 			<button
// 				className={clsx(
// 					`
//             flex items-center justify-start
//             h-[32px]
//             text-nowrap
//             px-[8px] xl:px-[14px]
//             rounded-[4px]
//             text-[14px] font-medium
//             [transition:none]
//             hover:bg-primaryBlue/20
//             hover:text-primaryBlue
//             hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out]
//           `,
// 					active ? "text-primaryBlue" : "text-textPrimary"
// 				)}
// 			>
// 				{label}
// 			</button>
// 		</Link>
// 	);
// }
