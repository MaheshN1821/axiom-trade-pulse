"use client";

import Image from "next/image";

export default function PulseFooter() {
	return (
		<div className="hidden sm:block">
			<div className="border-t border-primaryStroke w-full h-[36px] min-h-[36px] text-nowrap">
				<div className="relative flex w-full h-full">
					{/* Right fade */}
					<div className="absolute right-0 top-0 w-[48px] h-full z-40 bg-gradient-to-l from-background to-transparent pointer-events-none" />

					{/* MAIN CONTENT */}
					<div className="flex overflow-x-auto overflow-y-hidden scrollbar-none flex-row justify-between w-full h-full px-[24px] gap-[16px] items-center min-w-0">
						{/* LEFT GROUP */}
						<div className="flex flex-row gap-[8px] items-center flex-shrink-0">
							<button className="text-primaryBlue bg-primaryBlue/20 flex h-[24px] px-[8px] gap-[4px] items-center rounded hover:bg-primaryBlue/25">
								<i className="ri-list-settings-line text-[16px]" />
								<span className="text-[12px] font-semibold">PRESET 1</span>
							</button>

							<div className="flex items-center gap-[4px] border border-primaryStroke rounded-full h-[24px] px-[8px] hover:bg-primaryStroke/60">
								<i className="ri-wallet-line text-[14px] text-textTertiary" />
								<span className="text-[12px] text-textSecondary">1</span>
								<Image
									src="/images/sol-fill.svg"
									alt="SOL"
									width={14}
									height={14}
								/>
								<span className="text-[12px] text-textSecondary">0</span>
								<i className="ri-arrow-down-s-line text-[14px] text-textSecondary" />
							</div>

							<div className="w-[1px] h-[20px] bg-primaryStroke flex-shrink-0" />

							{/* ICON SHORTCUTS */}
							{/* <div className="flex gap-[4px]"> */}
							<div className="flex flex-row gap-[8px] justify-start items-center">
								{/* <FooterIcon icon="ri-settings-3-line" /> */}
								<span className="contents">
									<button className="-mr-[4px] min-w-[24px] min-h-[24px] flex items-center justify-center text-textTertiary hover:text-textSecondary hover:bg-primaryStroke/40 transition-colors duration-125 ease-in-out rounded-[4px]">
										<i className="ri-settings-3-line text-[14px]"></i>
									</button>
								</span>
								<span className="contents">
									<button
										className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer
        hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60 undefined"
									>
										<div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
										<i className="text-[16px] ri-wallet-3-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
										<span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">
											Wallet
										</span>
									</button>
								</span>
								<span className="contents">
									<button
										className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer
        hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60 undefined"
									>
										<div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
										<i className="text-[16px] ri-twitter-x-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
										<span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">
											Twitter
										</span>
									</button>
								</span>
								<span className="contents">
									<button
										className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer
        hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60 undefined"
									>
										<div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
										<i className="text-[16px] ri-compass-3-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
										<span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">
											Discover
										</span>
									</button>
								</span>
								<span className="contents">
									<button
										className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer
        hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60 undefined"
									>
										<div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
										<i className="text-[16px] ri-pulse-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
										<span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">
											Pulse
										</span>
									</button>
								</span>
								<span className="contents">
									<button
										className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer
        hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60 undefined"
									>
										<i className="text-[16px] ri-bar-chart-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
										<span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">
											PnL
										</span>
									</button>
								</span>
								{/* <FooterToggle icon="ri-wallet-3-line" label="Wallet" /> */}
								{/* <FooterToggle icon="ri-twitter-x-line" label="Twitter" /> */}
								{/* <FooterToggle icon="ri-compass-3-line" label="Discover" /> */}
								{/* <FooterToggle icon="ri-pulse-line" label="Pulse" /> */}
								{/* <FooterToggle icon="ri-bar-chart-line" label="PnL" /> */}
							</div>

							<div className="hidden lg:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>

							<span className="contents">
								<button
									type="button"
									className="hidden lg:flex flex-row h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out"
								>
									<div className="relative">
										<div
											className="relative flex flex-row h-[20px] px-[4px] gap-[4px] justify-start items-center rounded-full opacity-30"
											style={{
												background:
													"linear-gradient(to right, rgb(83, 211, 142) 0%, rgb(231, 140, 25) 50%, rgb(255, 70, 98) 100%)",
												width: "40px",
											}}
										></div>
										<div className="absolute inset-[2px] bg-background rounded-full flex gap-[0px] justify-center items-center">
											<Image
												alt="Pump"
												draggable="false"
												loading="eager"
												width={11}
												height={11}
												decoding="async"
												data-nimg="1"
												style={{ color: "transparent" }}
												src="/images/pump.svg"
											/>
											<Image
												alt="Bonk"
												draggable="false"
												loading="eager"
												width={11}
												height={11}
												decoding="async"
												data-nimg="1"
												style={{ color: "transparent" }}
												src="/images/bonk.svg"
											/>
											<Image
												alt="Virtual Curve"
												draggable="false"
												loading="eager"
												width={11}
												height={11}
												decoding="async"
												data-nimg="1"
												style={{ color: "transparent" }}
												src="/images/virtual-curve.svg"
											/>
										</div>
									</div>
								</button>
							</span>

							<div className="hidden lg:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
						</div>

						{/* CENTER MARKET */}
						<div className="flex flex-1 gap-[8px] items-center">
							<PriceBadge
								icon="/images/btc-fill.svg"
								price="$89.2K"
								color="#F7931A"
								show="2xl"
							/>
							<PriceBadge
								icon="/images/eth-fill.svg"
								price="$3049"
								color="#497493"
								show="2xl"
							/>
							<PriceBadge
								icon="/images/sol-fill.svg"
								price="$128.39"
								color="#14F195"
								show="lg"
							/>
						</div>

						{/* RIGHT STATUS */}
						<div className="flex flex-row flex-shrink-0 gap-[8px] justify-end items-center">
							<div className="hidden 2xl:flex">
								<span className="contents">
									<button className="-mr-[8px] group flex items-center gap-[4px] h-[24px] px-2 text-[12px] font-medium rounded hover:bg-secondaryStroke/40 text-textTertiary transition-colors duration-150 ease-in-out">
										<i
											className="icon-pill text-textTertiary group-hover:text-textSecondary transition-colors duration-150 ease-in-out"
											style={{ fontSize: "14px" }}
										></i>
										<span className="text-textTertiary text-[12px] font-normal group-hover:text-textSecondary transition-colors duration-150 ease-in-out">
											$52.3K
										</span>
									</button>
								</span>
							</div>
							<div className="hidden 2xl:flex flex-row gap-[4px] justify-start items-center">
								<span className="contents">
									<div className="flex flex-row gap-[4px] h-[24px] min-h-[24px] justify-start items-center">
										<i className="ri-gas-station-line text-textTertiary text-[16px]"></i>
										<span className="text-textTertiary text-[12px] font-normal">
											0.0<sub>2</sub>3
										</span>
									</div>
								</span>
							</div>
							<div className="hidden 2xl:flex flex-row gap-[4px] justify-start items-center">
								<span className="contents">
									<div className="flex flex-row gap-[4px] h-[24px] min-h-[24px] justify-start items-center">
										<i className="ri-coin-line text-textTertiary text-[16px]"></i>
										<span className="text-textTertiary text-[12px] font-normal">
											0.0173
										</span>
									</div>
								</span>
							</div>
							<div className="hidden 2xl:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
							<div className="flex flex-row h-[24px] xl:px-[8px] gap-[4px] justify-start items-center rounded-[4px] text-primaryGreen xl:bg-primaryGreen/20">
								<div className="flex flex-row gap-[4px] justify-start items-center ">
									<div className="bg-primaryGreen/20 w-[12px] h-[12px] rounded-full flex flex-row gap-[4px] justify-center items-center">
										<div className="bg-primaryGreen w-[8px] h-[8px] rounded-full"></div>
									</div>
								</div>
								<span className="hidden xl:flex text-[12px] font-medium">
									Connection is stable
								</span>
							</div>
							<div className="relative flex ">
								<div data-state="closed" className="w-full">
									<button className="flex items-center gap-1 px-2 h-[24px] text-[12px] font-medium rounded hover:bg-secondaryStroke/40 text-textSecondary transition-colors duration-150">
										<span>ASIA-V2</span>
										<i className="ri-arrow-down-s-line text-[14px]"></i>
									</button>
								</div>
							</div>
							<div className="w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
							<div className="text-textSecondary flex flex-row gap-[8px] justify-start items-center">
								<span className="contents">
									<button className="flex items-center justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out text-textTertiary hover:bg-secondaryStroke/40">
										<i className="ri-layout-top-line text-[16px]"></i>
									</button>
								</span>
								<span className="contents">
									<button className="text-[12px] hover:bg-secondaryStroke/40 flex items-center gap-1 justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out">
										<i className="ri-notification-3-line text-[16px]"></i>
									</button>
								</span>
								<span className="contents">
									<button className="text-[12px] hover:bg-secondaryStroke/40 flex items-center gap-1 justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out">
										<i className="ri-palette-line text-[16px]"></i>
									</button>
								</span>
							</div>
							<div className="text-textSecondary flex flex-row gap-[8px] justify-start items-center">
								<div className="hidden md:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
								<div className="hidden md:flex flex-row gap-[16px] justify-start items-center">
									<span className="contents">
										<a
											href="https://discord.gg/axiomtrade"
											target="_blank"
											rel="noopener noreferrer"
											className="hover:opacity-80"
										>
											<i className="ri-discord-fill text-[16px]"></i>
										</a>
									</span>
									<span className="contents">
										<a
											href="https://x.com/axiomexchange"
											target="_blank"
											rel="noopener noreferrer"
											className="hover:opacity-80"
										>
											<i className="ri-twitter-x-line text-[16px]"></i>
										</a>
									</span>
								</div>
								<a
									href="https://docs.axiom.trade/"
									target="_blank"
									rel="noopener noreferrer"
									className="hidden md:flex flex-row gap-[2px] h-[24px] px-[8px] justify-start items-center rounded-[4px] hover:bg-hoverPrimary"
								>
									<i className="ri-article-line text-[16px]"></i>
									<span className="hidden lg:flex text-[12px] font-normal">
										Docs
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function PriceBadge({
	icon,
	price,
	color,
	show,
}: {
	icon: string;
	price: string;
	color: string;
	show: "lg" | "2xl";
}) {
	return (
		<button
			className={`hidden ${show}:flex gap-[4px] items-center h-[24px]`}
			style={{ color }}
		>
			<Image src={icon} alt="price" width={16} height={16} />
			<span className="text-[12px] font-normal">{price}</span>
		</button>
	);
}
