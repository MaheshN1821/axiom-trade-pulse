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
