"use client";

import Image from "next/image";
import { useState } from "react";
import { ChainSelector } from "./ChainSelector";
import DepositButton from "./DepositButton";
import NotificationDropdown from "./NotificationDropdown";
import WatchlistModal from "./WatchlistModal";
import WalletDropdown from "./WalletDropdown";
import UserMenuDropdown from "./UserMenuDropdown";

export function NavbarActions() {
	const [chainOpen, setChainOpen] = useState(false);

	return (
		<div className="flex flex-row gap-3 sm:gap-4 lg:gap-6 justify-end items-center flex-shrink-0 ml-auto">
			<div className="flex flex-row gap-[16px] justify-start items-center">
				<button className="hidden sm:flex flex-shrink-0 whitespace-nowrap border-primaryStroke font-normal border-[1px] flex-row h-[32px] sm:px-[8px] md:px-[8px] lg:px-[8px] 2xl:pl-[12px] 2xl:pr-[6px] gap-[8px] justify-center items-center rounded-full hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer">
					<i className="pt-[0px] ri-search-2-line text-[18px] text-textPrimary"></i>
				</button>
				<ChainSelector open={chainOpen} onOpenChange={setChainOpen} />
			</div>
			<div className="flex items-center gap-[8px] sm:gap-[16px]">
				<DepositButton />
				<div className="hidden sm:flex items-center gap-[8px] lg:gap-[16px]">
					<WatchlistModal />
					<NotificationDropdown />
					<WalletDropdown />
					<span className="contents">
						<button
							type="button"
							className="flex flex-row w-[28px] h-[28px] justify-center items-center rounded-full relative overflow-visible transition-all duration-150 ease-in-out active:scale-[0.96]
        border-transparent bg-primaryStroke hover:bg-secondaryStroke/80 hover:border-transparent"
						>
							<div className="relative w-full h-full rounded-full overflow-hidden">
								<div className="absolute inset-0 w-full h-full border-white/[0.1] border-[1px] z-[15] pointer-events-none rounded-full"></div>
								<Image
									alt="User"
									draggable="false"
									loading="eager"
									decoding="async"
									data-nimg="fill"
									width={28}
									height={28}
									className="object-cover transition-all duration-150 brightness-100 hover:brightness-110"
									src="/images/number.svg"
								/>
							</div>
							<div className="absolute bottom-[-2px] right-[-2px] w-[14px] h-[14px] rounded-full bg-background z-[20] flex items-center justify-center">
								<div className="w-[8px] h-[8px] rounded-full bg-primaryGreen "></div>
							</div>
						</button>
					</span>
					<UserMenuDropdown />
				</div>
			</div>
		</div>
	);
}

//above correct

// "use client";

// import DepositButton from "./DepositButton";
// import ChainSelector from "./ChainSelector";
// import UserMenu from "./UserMenu";

// export default function NavbarActions() {
// 	return (
// 		<div className="flex items-center gap-[8px] sm:gap-[16px]">
// 			{/* ================= LEFT ACTION GROUP ================= */}
// 			<div className="flex items-center gap-[16px]">
// 				{/* Search */}
// 				<button
// 					type="button"
// 					className="
//             hidden sm:flex
//             h-[32px]
//             border border-primaryStroke
//             rounded-full
//             px-[8px]
//             gap-[8px]
//             items-center
//             hover:bg-primaryStroke/35
//             transition-colors duration-125
//           "
// 				>
// 					<i className="ri-search-2-line text-[18px] text-textPrimary" />
// 					<span className="hidden 2xl:block text-[12px] text-textTertiary font-medium">
// 						Search by token or CA...
// 					</span>
// 					<div className="hidden 2xl:flex h-[20px] px-[8px] border border-primaryStroke rounded-full items-center">
// 						<span className="text-[12px] text-textPrimary">/</span>
// 					</div>
// 				</button>

// 				{/* Chain selector */}
// 				<ChainSelector />
// 			</div>

// 			{/* ================= RIGHT ACTION GROUP ================= */}
// 			<div className="flex items-center gap-[8px] lg:gap-[16px]">
// 				{/* Deposit */}
// 				<DepositButton />

// 				{/* Favorites */}
// 				<IconButton icon="ri-star-line" />

// 				{/* Notifications */}
// 				<IconButton icon="ri-notification-3-line" />

// 				{/* Wallet */}
// 				<IconButton icon="ri-wallet-line" />

// 				{/* User menu */}
// 				<UserMenu />
// 			</div>
// 		</div>
// 	);
// }

// /* ---------- Helper: icon-only button ---------- */
// function IconButton({ icon }: { icon: string }) {
// 	return (
// 		<button
// 			type="button"
// 			className="
//         hidden sm:flex
//         w-[32px] h-[32px]
//         items-center justify-center
//         rounded-full
//         bg-primaryStroke
//         hover:bg-secondaryStroke/80
//         transition-colors
//       "
// 		>
// 			<i className={`${icon} text-[18px] text-textPrimary`} />
// 		</button>
// 	);
// }
