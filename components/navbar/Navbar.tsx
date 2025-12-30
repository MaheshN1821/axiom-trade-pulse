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

//above is correct

// "use client";

// import Brand from "./Brand";
// import NavLinks from "./NavLinks";
// import NavbarActions from "./NavbarActions";

// export default function Navbar() {
// 	return (
// 		<>
// 			{/* ================= DESKTOP NAVBAR ================= */}
// 			<header
// 				className="
//           hidden sm:flex
//           w-full
//           h-[52px] sm:h-[64px]
//           min-h-[48px] sm:min-h-[64px]
//           px-[16px] lg:px-[24px]
//           gap-[16px] lg:gap-[24px]
//           items-center
//           justify-between sm:justify-start
//           border-b border-primaryStroke
//           bg-background
//           overflow-hidden
//         "
// 			>
// 				{/* LEFT */}
// 				<Brand />

// 				{/* CENTER */}
// 				<NavLinks />

// 				{/* RIGHT */}
// 				<NavbarActions />
// 			</header>

// 			{/* ================= MOBILE NAVBAR ================= */}
// 			<header
// 				className="
//           sm:hidden
//           flex
//           w-full
//           h-[44px]
//           px-[8px]
//           gap-[4px]
//           items-center
//           justify-between
//           border-b border-primaryStroke
//           bg-background
//         "
// 			>
// 				{/* Mobile logo */}
// 				<button
// 					aria-label="Home"
// 					className="w-[24px] h-[24px] flex items-center justify-center active:scale-95 transition-transform"
// 				>
// 					<img src="/axiom.svg" alt="Axiom" className="w-[18px] h-[18px]" />
// 				</button>

// 				{/* Spacer */}
// 				<div className="flex-1 min-w-0" />

// 				{/* Mobile actions (simplified – detailed logic later) */}
// 				<div className="flex items-center gap-[4px]">
// 					<button className="h-[32px] px-[10px] bg-primaryStroke rounded-full">
// 						<i className="ri-wallet-line text-[14px]" />
// 					</button>

// 					<button className="h-[32px] w-[32px] bg-primaryStroke rounded-full">
// 						<i className="ri-search-2-line text-[14px]" />
// 					</button>

// 					<button className="h-[32px] w-[32px] bg-primaryStroke rounded-full">
// 						<i className="ri-menu-line text-[18px]" />
// 					</button>
// 				</div>
// 			</header>
// 		</>
// 	);
// }
