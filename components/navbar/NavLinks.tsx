"use client";
import { NavItem } from "./NavItem";

const links = [
	{ label: "Discover", href: "/discover" },
	{ label: "Pulse", href: "/pulse", active: true },
	{ label: "Trackers", href: "/trackers" },
	{ label: "Perpetuals", href: "/perpetuals" },
	{ label: "Yield", href: "/yield" },
	{ label: "Vision", href: "/vision" },
	{ label: "Portfolio", href: "/portfolio" },
	{ label: "Rewards", href: "/rewards" },
];

export function NavLinks() {
	return (
		<div className="flex flex-row gap-0 justify-start items-center">
			{links.map((link) => (
				<NavItem
					key={link.href}
					label={link.label}
					href={link.href}
					active={link.active}
				/>
			))}
		</div>
	);
}

//above correct

// "use client";

// import NavItem from "./NavItem";
// import { usePathname } from "next/navigation";

// const NAV_ITEMS = [
// 	{ label: "Discover", href: "/discover" },
// 	{ label: "Pulse", href: "/pulse" },
// 	{ label: "Trackers", href: "/trackers" },
// 	{ label: "Perpetuals", href: "/perpetuals" },
// 	{ label: "Yield", href: "/yield" },
// 	{ label: "Vision", href: "/vision" },
// 	{ label: "Portfolio", href: "/portfolio" },
// 	{ label: "Rewards", href: "/rewards" },
// ];

// export default function NavLinks() {
// 	const pathname = usePathname();

// 	return (
// 		<div className="relative hidden sm:flex flex-1 min-w-0">
// 			{/* Right fade gradient */}
// 			<div
// 				className="
//           pointer-events-none
//           absolute right-0 top-0
//           w-[32px] h-full
//           bg-gradient-to-l from-background to-transparent
//           z-40
//         "
// 			/>

// 			{/* Scrollable nav */}
// 			<div
// 				className="
//           flex overflow-x-auto overflow-y-hidden
//           [&::-webkit-scrollbar]:hidden
//           [-ms-overflow-style:none]
//           [scrollbar-width:none]
//         "
// 			>
// 				<div className="flex items-center gap-[4px]">
// 					{NAV_ITEMS.map((item) => (
// 						<NavItem
// 							key={item.href}
// 							label={item.label}
// 							href={item.href}
// 							active={pathname.startsWith(item.href)}
// 						/>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
