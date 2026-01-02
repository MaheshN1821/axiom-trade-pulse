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
