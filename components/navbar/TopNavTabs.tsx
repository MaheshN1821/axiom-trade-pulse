"use client";

import Link from "next/link";

const TopNavTabs = () => {
	const NAV_ITEMS = [
		{ label: "Discover", href: "/discover?chain=sol", active: false },
		{ label: "Pulse", href: "/pulse?chain=sol", active: true },
		{ label: "Trackers", href: "/trackers?chain=sol", active: false },
		{ label: "Perpetuals", href: "/perpetuals?chain=sol", active: false },
		{ label: "Yield", href: "/yield?chain=sol", active: false },
		{ label: "Vision", href: "/vision?chain=sol", active: false },
		{ label: "Portfolio", href: "/portfolio?chain=sol", active: false },
		{ label: "Rewards", href: "/rewards?chain=sol", active: false },
	];

	return (
		<div className="relative hidden sm:flex flex-1 min-w-[0px]">
			{/* Right gradient fade */}
			<div className="absolute right-0 top-0 w-[32px] h-full z-40 bg-gradient-to-l from-background to-transparent flex items-center justify-end pointer-events-none">
				<button
					type="button"
					className="absolute right-0 w-6 h-6 flex items-center justify-center text-textSecondary hover:text-textPrimary transition-all duration-125 ease-in-out opacity-0"
				>
					<i className="ri-arrow-right-wide-line text-[20px] mb-[1px]" />
				</button>
			</div>

			{/* Scroll container */}
			<div className="flex overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
				<div className="flex flex-row gap-[4px] justify-start items-center">
					{NAV_ITEMS.map(({ label, href, active }) => (
						<Link key={label} href={href}>
							<button
								className={`
                  flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px]
                  justify-start items-center rounded-[4px]
                  [transition:none] duration-0
                  hover:bg-primaryBlue/20 hover:text-primaryBlue
                  hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out]
                  ${active ? "text-primaryBlue" : "text-textPrimary"}
                `}
							>
								<span className="text-[14px] font-medium">{label}</span>
							</button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default TopNavTabs;
