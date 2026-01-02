"use client";
import Brand from "./Brand";
import Image from "next/image";
import { NavLinks } from "./NavLinks";
import { NavbarActions } from "./NavbarActions";
import TopNavTabs from "./TopNavTabs";

export function Navbar() {
	return (
		<>
			<nav className="hidden sm:flex border-b border-[rgb(34,36,45)] flex flex-row w-full h-[52px] sm:h-[64px] min-h-[48px] sm:min-h-[64px] px-4 sm:px-4 lg:px-6 gap-4 sm:gap-4 lg:gap-6 justify-between sm:justify-start items-center bg-[#06070B]">
				<Brand />
				<TopNavTabs />
				<NavbarActions />
			</nav>
			<div className="flex sm:hidden">
				<div className="flex sm:hidden flex-row w-full h-[44px] bg-background border-b border-primaryStroke justify-between items-center px-[8px] gap-[4px]">
					<button
						type="button"
						className="flex flex-row justify-center items-center h-[24px] w-[24px] active:scale-95 transition-transform"
					>
						<Image
							alt="Axiom"
							loading="lazy"
							width={18}
							height={18}
							decoding="async"
							data-nimg="1"
							className="text-textPrimary"
							style={{ color: "transparent" }}
							src="/images/axiom.svg"
						/>
					</button>
					<div className="flex-1 min-w-0"></div>
					<div className="flex flex-row gap-[4px] justify-end items-center relative">
						<button
							type="button"
							className="flex flex-row flex-shrink min-w-[70px] max-w-[180px] h-[32px] bg-primaryStroke rounded-full justify-end items-center px-[6px] gap-[3px] active:scale-95 transition-transform hover:bg-opacity-80 hover:bg-secondaryStroke/80"
						>
							<i className="ri-wallet-line text-textPrimary text-[13px] flex-shrink-0"></i>
							<div className="flex flex-row gap-[3px] justify-center items-center min-w-0">
								<Image
									alt="SOL"
									loading="lazy"
									width={11}
									height={11}
									decoding="async"
									data-nimg="1"
									src="/images/sol-fill.svg"
									style={{ color: "transparent" }}
								/>
								<span className="text-textPrimary text-[12px] font-semibold truncate">
									<span>0</span>
								</span>
							</div>
							<div className="w-[1px] h-[16px] bg-secondaryStroke flex-shrink-0"></div>
							<div className="flex flex-row gap-[3px] justify-center items-center min-w-0 flex-shrink-0">
								<Image
									alt="USDC"
									loading="lazy"
									width={11}
									height={11}
									decoding="async"
									data-nimg="1"
									src="/images/usdc-perps.svg"
									style={{ color: "transparent" }}
								/>
								<span className="text-textPrimary text-[12px] font-semibold truncate">
									0
								</span>
							</div>
							<i className="ri-arrow-down-s-line text-textPrimary text-[13px] flex-shrink-0 transition-transform "></i>
						</button>
						<div className="relative">
							<button
								type="button"
								className="flex flex-row h-[32px] px-[10px] gap-[3px] bg-primaryStroke rounded-full justify-center items-center hover:bg-secondaryStroke/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
								aria-label="Paste Contract Address"
							>
								<i className="ri-file-copy-line text-textPrimary text-[14px]"></i>
								<span className="text-textPrimary text-[11px] font-medium">
									Paste CA
								</span>
							</button>
						</div>
						<button
							type="button"
							className="flex flex-row justify-center items-center h-[32px] w-[32px] bg-primaryStroke rounded-full hover:bg-secondaryStroke/80 transition-colors active:scale-95"
							aria-label="Search"
						>
							<i className="ri-search-2-line text-textPrimary text-[14px]"></i>
						</button>
						<button
							type="button"
							className="flex flex-row w-[28px] h-[28px] justify-center items-center rounded-full relative overflow-visible transition-all duration-150 ease-in-out active:scale-[0.96] border-transparent bg-primaryStroke hover:bg-secondaryStroke/80 hover:border-transparent"
						>
							<div className="relative w-full h-full rounded-full overflow-hidden">
								<div className="absolute inset-0 w-full h-full border-white/[0.1] border-[1px] z-[15] pointer-events-none rounded-full"></div>
								<Image
									alt="User"
									draggable="false"
									loading="eager"
									decoding="async"
									width={18}
									height={18}
									data-nimg="fill"
									className="object-cover transition-all duration-150 brightness-100 hover:brightness-110"
									src="/images/number.svg"
									style={{
										position: "absolute",
										height: "100%",
										width: "100%",
									}}
								/>
							</div>
							<div className="absolute bottom-[-2px] right-[-2px] w-[14px] h-[14px] rounded-full bg-background z-[20] flex items-center justify-center">
								<div className="w-[8px] h-[8px] rounded-full bg-primaryGreen "></div>
							</div>
						</button>
						<button
							type="button"
							className="flex flex-row justify-center items-center h-[32px] w-[32px] bg-primaryStroke rounded-full hover:bg-secondaryStroke/80 transition-colors active:scale-95"
						>
							<i className="ri-menu-line text-textPrimary text-[18px]"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
