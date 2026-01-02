"use client";
import Brand from "./Brand";
import { NavLinks } from "./NavLinks";
import { NavbarActions } from "./NavbarActions";
import TopNavTabs from "./TopNavTabs";

export function Navbar() {
	return (
		<nav className="border-b border-[rgb(34,36,45)] flex flex-row w-full h-[52px] sm:h-[64px] min-h-[48px] sm:min-h-[64px] px-4 sm:px-4 lg:px-6 gap-4 sm:gap-4 lg:gap-6 justify-between sm:justify-start items-center bg-[#06070B]">
			<Brand />
			<TopNavTabs />
			<NavbarActions />
		</nav>
	);
}

