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
