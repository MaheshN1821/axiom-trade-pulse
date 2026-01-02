"use client";

import { TokenRowData } from "@/types/token";
import Image from "next/image";
import { getRandomTextColor } from "@/lib/randomTextColor";
import Tooltip from "../additional/Tooltiphelper";

type Props = {
	token: TokenRowData;
	style?: React.CSSProperties;
	title: String;
};

export default function TokenRow({ token, style, title }: Props) {
	const randomColor = getRandomTextColor();
	const randomColor2 = getRandomTextColor();
	const value = (5 + Math.random() * (99.9 - 5)).toFixed(2);
	return (
		<div
			style={{
				...style,
				height: "130px",
			}}
		>
			<div>
				<span className="contents" />
				<span className="contents">
					<Tooltip label={`Bonding: ${value}%`}>
						<div className="border-primaryStroke/50 border-b-[1px] flex flex-col w-full justify-start items-center cursor-pointer relative overflow-hidden hover:bg-primaryStroke/50 group lg:group xl:hover:bg-primaryStroke/50   h-[142px] min-h-[142px] sm:h-[116px] sm:min-h-[116px] md:h-[142px] md:min-h-[142px] lg:h-[142px] lg:min-h-[142px] xl:h-[116px] xl:min-h-[116px] group relative">
							<div className="w-full h-full flex flex-col">
								<span className="contents">
									<button
										type="button"
										className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] bg-backgroundTertiary border border-secondaryStroke/50"
										style={{ top: "6px", left: "6px" }}
									>
										<i className="ri-eye-off-line text-[14px]"></i>
									</button>
								</span>
								<span className="contents">
									<button
										type="button"
										className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 bg-backgroundTertiary text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] border border-secondaryStroke/50"
										style={{ top: "32px", left: "6px" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="12"
											height="12"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-umbrella-off-icon lucide-umbrella-off"
										>
											<path d="M12 13v7a2 2 0 0 0 4 0" />
											<path d="M12 2v2" />
											<path d="M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" />
											<path d="m2 2 20 20" />
											<path d="M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" />
										</svg>
									</button>
								</span>
								<span className="contents">
									<button
										type="button"
										className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 bg-backgroundTertiary text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] border border-secondaryStroke/50"
										style={{ top: "58px", left: "6px" }}
									>
										{/* <i
										className="icon-at-off-line"
										style={{ fontSize: "12px" }}
									></i> */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="12"
											height="12"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-circle-off-icon lucide-circle-off"
										>
											<path d="m2 2 20 20" />
											<path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
											<path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
										</svg>
									</button>
								</span>
								<div className="absolute right-[12px] bottom-[10px] sm:right-[16px] sm:bottom-[12px] z-20 block sm:hidden">
									<div>
										<div className="  ">
											<button
												type="button"
												className="bg-primaryBlue hover:bg-primaryBlueHover text-[#090909] flex flex-row gap-[4px] justify-center items-center rounded-[999px] h-[24px] whitespace-nowrap transition-all duration-0 relative overflow-hidden group/quickBuyButton  "
												style={{ paddingLeft: "6px", paddingRight: "6px" }}
											>
												<i className="ri-flashlight-fill text-[16px] flex items-center relative z-10"></i>
												<span className="text-[12px] font-bold  relative z-10">
													0 SOL
												</span>
											</button>
										</div>
									</div>
								</div>
								<div className="absolute right-[12px] bottom-[16px] sm:right-[16px] sm:bottom-[16px] z-20 hidden sm:block lg:opacity-0 lg:group-hover:opacity-100 xl:opacity-100 2xl:!opacity-100">
									<div className="opacity-0 group-hover:opacity-100 2xl:!opacity-100">
										<div className="  ">
											<button
												type="button"
												className="bg-primaryBlue hover:bg-primaryBlueHover text-[#090909] flex flex-row gap-[4px] justify-center items-center rounded-[999px] h-[24px] whitespace-nowrap transition-all duration-0 relative overflow-hidden group/quickBuyButton  "
												style={{ paddingLeft: "6px", paddingRight: "6px" }}
											>
												<i className="ri-flashlight-fill text-[16px] flex items-center relative z-10"></i>
												<span className="text-[12px] font-bold  relative z-10">
													0 SOL
												</span>
											</button>
										</div>
									</div>
								</div>
								<div className="absolute right-[16px] top-[16px] z-10 block">
									<div className="flex flex-col gap-[2px] items-end">
										<div className="relative">
											<div
												className="absolute z-0"
												style={{ inset: "-12px -8px 1px -4px" }}
											>
												<div className=" group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
												<div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
											</div>
											<div className="relative flex flex-row gap-[8px] justify-end items-end z-20">
												<span className="contents">
													<div className="flex flex-row h-[18px] gap-[4px] justify-end items-end">
														<span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">
															MC
														</span>
														<span
															className="text-[16px] font-medium"
															style={{ color: "rgb(82, 197, 255)" }}
														>
															{token.marketCap}
														</span>
													</div>
												</span>
											</div>
										</div>

										<div className="relative">
											<div
												className="absolute z-0"
												style={{ inset: "-12px -8px 1px -4px" }}
											>
												<div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
												<div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
											</div>
											<div className="relative flex flex-row gap-[8px] justify-start items-start z-20">
												<span className="contents">
													<div className="flex flex-row h-[18px] flex-1 gap-[4px] justify-end items-end">
														<span className="text-textTertiary text-[12px] font-medium pb-[1.6px] flex justify-center items-center">
															V
														</span>
														<span
															className="text-[16px] font-medium"
															style={{ color: "rgb(255, 255, 255)" }}
														>
															{token.volume}
														</span>
													</div>
												</span>
											</div>
										</div>

										<div className="relative flex flex-row gap-[8px] justify-start items-start -mt-[2px]">
											<div
												className="absolute z-0"
												style={{ inset: "-2px -8px -4px -4px" }}
											>
												<div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-[5]"></div>
												<div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
											</div>
											<span className="contents">
												<div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 group/image text-nowrap z-20">
													<span className="text-textTertiary text-[11px] font-medium">
														F
													</span>
													<div className="flex flex-row gap-[2px] items-center">
														<Image
															alt="SOL"
															loading="eager"
															width={14}
															height={14}
															decoding="async"
															data-nimg="1"
															className="w-[14px] h-[14px]"
															src="/images/sol-fill.svg"
															style={{ color: "transparent" }}
														/>
														<span className="text-textPrimary text-[12px] font-medium">
															0.0<sub>2</sub>1
														</span>
													</div>
												</div>
											</span>
											<span className="contents">
												<div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 group/image text-nowrap z-20">
													<span className="text-textTertiary text-[11px] font-medium">
														TX{" "}
														<span className="text-textPrimary text-[11px] font-medium">
															{token.txCount}
														</span>
													</span>
													<div className="flex flex-row flex-1 min-w-[24px] max-w-[24px] h-[2px] bg-secondaryStroke rounded-full overflow-hidden">
														<div
															className="h-full bg-green-500"
															style={{ width: `${token.txBuyPct}%` }}
														></div>
														<div
															className="h-full bg-red-400"
															style={{ width: `${token.txSellPct}%` }}
														></div>
													</div>
												</div>
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-row w-full gap-[12px] pl-[12px] pr-[12px] sm:pr-[16px] pt-[12px] pb-[2px] justify-start items-center">
									<div className="flex flex-col items-center gap-[4px]">
										<div className="relative w-[74px] h-[74px] justify-center items-center">
											<span>
												<div className="flex bg-mayhem absolute bottom-[-4px] right-[-4px] p-[1px] w-[16px] h-[16px] justify-center items-center rounded-full z-30">
													<div
														className="flex justify-center items-center bg-background absolute w-[14px] h-[14px] rounded-full z-30 border border-blue-500"
														style={{
															borderColor: `${
																title === "New Pairs"
																	? "rgb(16, 185, 129)"
																	: title === "Final Stretch"
																	? "#F25461"
																	: "#DCC13C"
															}`,
														}}
													>
														<Image
															src={
																title === "New Pairs"
																	? "/images/new-pairs.svg"
																	: title === "Final Stretch"
																	? "/images/virtual-curve.svg"
																	: "/images/migrated.svg"
															}
															alt="Pump V1"
															loading="eager"
															width={10}
															height={10}
														/>
													</div>
												</div>
											</span>
											<div className="bg-mayhem/20 absolute flex p-[1px] justify-start items-center rounded-[4px] z-20">
												<div className="bg-backgroundSecondary flex p-[2px] justify-start items-center rounded-[3px]">
													<div className="w-[68px] h-[68px] flex-shrink-0 group/image relative">
														<div className="w-full h-full relative">
															<div className="pointer-events-none border-textPrimary/10 border-[1px] absolute w-[68px] h-[68px] z-10 rounded-[1px]"></div>
															<Image
																alt={token.name}
																loading="eager"
																width={68}
																height={68}
																decoding="async"
																data-nimg="1"
																className="rounded-[1px] w-[68px] h-[68px] object-cover"
																src={token.image}
															></Image>
														</div>
														<button className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center ">
															<i className="ri-camera-line text-white text-[24px]"></i>
														</button>
													</div>
												</div>
											</div>
											<div
												className="absolute top-0 left-0 w-[74px] h-[74px] rounded-[4px] z-10 flex items-center justify-center border border-blue-500"
												style={{
													borderColor: `${
														title === "New Pairs"
															? "rgb(16, 185, 129)"
															: title === "Final Stretch"
															? "#F25461"
															: "#DCC13C"
													}`,
												}}
											>
												<div className="inline-flex items-center justify-center">
													<svg width={78} height={78} viewBox="0 0 78 78">
														<path
															className="text-mayhem opacity-40"
															stroke="currentColor"
															fill="transparent"
															strokeWidth="1"
															d="
    M 76 76
    L 6 76
    Q 2 76 2 72
    L 2 6
    Q 2 2 6 2
    L 72 2
    Q 76 2 76 6
    L 76 72
    Q 76 76 76 76
  "
														></path>
														<path
															className="text-mayhem transition-all duration-300 ease-in-out"
															stroke="currentColor"
															fill="transparent"
															strokeWidth="1"
															strokeLinecap="round"
															strokeDasharray="296"
															strokeDashoffset="293.78"
															d="
    M 76 76
    L 6 76
    Q 2 76 2 72
    L 2 6
    Q 2 2 6 2
    L 72 2
    Q 76 2 76 6
    L 76 72
    Q 76 76 76 76
  "
														></path>
													</svg>
												</div>
											</div>
										</div>
										<span className="contents">
											<span className="text-textTertiary text-[12px] font-medium text-center max-w-[74px]">
												<button
													type="button"
													className="text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] text-[12px] font-medium text-center max-w-[74px] flex items-center gap-[4px] group/copy"
												>
													<span>{token.shortAddress}</span>
												</button>
											</span>
										</span>
									</div>
									<div className="flex flex-col flex-1 h-full gap-[20px] justify-start items-start pt-[0px] pb-[12px] overflow-hidden">
										<div className="flex flex-col w-full gap-[2px] justify-start items-start min-w-0">
											<div className="flex flex-row min-h-[18px] w-full gap-[4px] justify-between items-start min-w-0">
												<div className="overflow-hidden">
													<div className="justify-start items-start">
														<div className="flex flex-row gap-[4px] justify-start items-center">
															<div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-textPrimary text-[16px] font-medium tracking-[-0.02em] truncate">
																{token.name}
															</div>
															<div className="min-w-0 flex-1 overflow-hidden">
																<span className="contents">
																	<button
																		type="button"
																		className="flex flex-row gap-[4px] justify-start items-center text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] min-w-0 overflow-hidden"
																	>
																		<div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-inherit text-[16px] sm:text-[16px] lg:text-[14px] xl:text-[16px] text-left font-medium tracking-[-0.02em] xl:truncate xl:max-w-full block">
																			{token.name}
																		</div>
																		<i className="ri-file-copy-fill text-inherit text-[14px]"></i>
																	</button>
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="flex flex-row w-full h-[18px] gap-[12px] lg:gap-[8px] xl:gap-[12px] justify-start items-center">
												<div className="flex items-center gap-[8px]">
													<span className="text-primaryGreen text-[14px] font-medium">
														{token.age}
													</span>
												</div>
												<div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center [&amp;_i]:text-[16px]">
													<div>
														<a
															href="https://x.com/FacePalmVLR/status/2006785663274733695"
															target="_blank"
															rel="noopener noreferrer"
															className="flex flex-row flex-shrink-0 gap-[2px] justify-start items-center cursor-pointer"
														>
															<i
																className="ri-quill-pen-line transition-colors duration-[125ms] ease-in-out"
																style={{
																	fontSize: "16px",
																	color: "rgb(16, 185, 129)",
																}}
															></i>
														</a>
													</div>
													<div>
														<a
															href="https://worldemojiawards.com/"
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center"
														>
															<i className="text-textSecondary ri-global-line text-[16px] hover:text-primaryBlueHover transition-colors duration-[125ms]"></i>
														</a>
													</div>
													<div className="flex flex-row gap-[4px] justify-start items-center">
														<a
															href="https://pump.fun/coin/FzxbTyDQNkMbrJWbgvbUJ6aDBNJjh5m3EXoY1xaNpump"
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center"
														>
															{/* <i
															className="icon-pill text-textSecondary hover:text-primaryBlueHover transition-colors duration-[125ms]"
															style={{ fontSize: "16px" }}
														></i> */}
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
																style={{ fontSize: "16px" }}
																className="lucide lucide-pill-icon lucide-pill text-textSecondary hover:text-primaryBlueHover transition-colors duration-[125ms]"
															>
																<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
																<path d="m8.5 8.5 7 7" />
															</svg>
														</a>
													</div>
													<a
														href="https://x.com/search?q=FzxbTyDQNkMbrJWbgvbUJ6aDBNJjh5m3EXoY1xaNpump"
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center"
													>
														<i className="text-textSecondary ri-search-line text-[16px] hover:text-primaryBlueHover transition-colors duration-[125ms]"></i>
													</a>
												</div>
												<div className="flex-row flex-1 h-[18px] gap-[8px] justify-start items-center hidden sm:flex md:hidden lg:hidden xl:flex">
													<span className="contents">
														<div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
															<i className="text-textTertiary ri-group-line text-[16px]"></i>
															<span
																className="text-[12px] font-medium"
																style={{ color: "rgb(255, 255, 255)" }}
															>
																{token.holders}
															</span>
														</div>
													</span>
													<span className="contents">
														<div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
															<div className="flex justify-center items-center min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width="14"
																	height="14"
																	viewBox="0 0 24 24"
																	fill="none"
																	stroke="currentColor"
																	strokeWidth="2"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	className="lucide lucide-chart-candlestick-icon lucide-chart-candlestick text-textTertiary text-[16px]"
																>
																	<path d="M9 5v4" />
																	<rect
																		width="4"
																		height="6"
																		x="7"
																		y="9"
																		rx="1"
																	/>
																	<path d="M9 15v2" />
																	<path d="M17 3v2" />
																	<rect
																		width="4"
																		height="8"
																		x="15"
																		y="5"
																		rx="1"
																	/>
																	<path d="M17 13v3" />
																	<path d="M3 3v16a2 2 0 0 0 2 2h16" />
																</svg>
															</div>
															<span className="text-textPrimary text-[12px] font-medium">
																{token.proTraders}
															</span>
														</div>
													</span>
													<span className="contents">
														<div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
															<i className="ri-trophy-line text-textTertiary text-[16px]"></i>
															<span className="text-textPrimary text-[12px] font-medium">
																0
															</span>
														</div>
													</span>
													<span className="contents">
														<div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
															<i className="text-textTertiary ri-vip-crown-2-line text-[16px] pb-[1.2px]"></i>
															<span className="text-textPrimary text-[12px] font-medium">
																0/26
															</span>
														</div>
													</span>
													<span className="contents">
														<div className="inline-flex items-center justify-center gap-1 text-textSecondary leading-none">
															<i className="ri-eye-line text-[9px] sm:text-[16px] flex items-center"></i>
															<span className="text-[11px] sm:text-[11px] font-medium flex items-center">
																2
															</span>
														</div>
													</span>
												</div>
											</div>
											<div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row flex-1 h-[18px] gap-[8px] justify-start items-center pt-[3px]">
												<div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
													<i className="text-textTertiary ri-group-line text-[16px]"></i>
													<span
														className="text-[12px] font-medium"
														style={{ color: "rgb(255, 255, 255)" }}
													>
														0
													</span>
												</div>
												<div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
													<Image
														alt="Pro Traders"
														loading="eager"
														width={16}
														height={16}
														decoding="async"
														data-nimg="1"
														className="w-[16px] h-[16px]"
														src="https://axiom.trade/images/material-symbols-candlestick-chart.svg?dpl=dpl_7mFmPtduuw8dtMUn8nbvEx1r9kiM"
														style={{ color: "transparent" }}
													/>
													<span className="text-textPrimary text-[12px] font-medium">
														0
													</span>
												</div>
												<span className="contents">
													<div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
														<i className="ri-trophy-line text-textTertiary text-[16px]"></i>
														<span className="text-textPrimary text-[12px] font-medium">
															0
														</span>
													</div>
												</span>
												<span className="contents">
													<div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
														<i className="text-textTertiary ri-vip-crown-2-line text-[16px] pb-[1.2px]"></i>
														<span className="text-textPrimary text-[12px] font-medium">
															0/26
														</span>
													</div>
												</span>
												<span className="contents">
													<div className="inline-flex items-center justify-center gap-1 text-textSecondary leading-none">
														<i className="ri-eye-line text-[9px] sm:text-[16px] flex items-center"></i>
														<span className="text-[11px] sm:text-[11px] font-medium flex items-center">
															2
														</span>
													</div>
												</span>
											</div>
										</div>
										<div className="hidden sm:flex md:hidden lg:hidden xl:flex flex-row w-full h-[24px] gap-[4px] justify-start items-end">
											<div>
												<div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
													<i
														className={`ri-user-star-line text-[14px]`}
														style={{ color: randomColor }}
													></i>
													<span
														className={`text-[12px] font-medium`}
														style={{ color: randomColor }}
													>
														{token.views}%
													</span>
												</div>
											</div>
											<span className="contents">
												<div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
													<div className="w-[16px] h-[16px] flex items-center justify-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
															style={{ fontSize: "12px" }}
															className="lucide lucide-chef-hat-icon lucide-chef-hat text-primaryBlue"
														>
															<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
															<path d="M6 17h12" />
														</svg>
													</div>
													<span className="text-primaryBlue text-[12px] font-medium">
														DS
													</span>
													<span className="text-textSecondary text-[11px] leading-[16px] font-medium whitespace-nowrap">
														{token.age}
													</span>
												</div>
											</span>
											<span className="contents">
												<div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
													<i
														className="ri-crosshair-2-line text-[14px]"
														style={{ color: randomColor }}
													></i>
													<span
														className="text-[12px] font-medium"
														style={{ color: randomColor }}
													>
														{token.txBuyPct}%
													</span>
												</div>
											</span>
											<span className="contents">
												<div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
													<i
														className="ri-ghost-line text-[14px]"
														style={{ color: randomColor2 }}
													></i>
													<span
														className="text-[12px] font-medium"
														style={{ color: randomColor2 }}
													>
														{token.txSellPct}%
													</span>
												</div>
											</span>
											<span className="contents">
												<div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
													<div className="flex justify-center items-center min-w-[14px] min-h-[14px] max-w-[14px] max-h-[14px]">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="14"
															height="14"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
															style={{ fontSize: "12px" }}
															className="lucide lucide-boxes-icon lucide-boxes text-[14px] text-primaryGreen"
														>
															<path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
															<path d="m7 16.5-4.74-2.85" />
															<path d="m7 16.5 5-3" />
															<path d="M7 16.5v5.17" />
															<path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
															<path d="m17 16.5-5-3" />
															<path d="m17 16.5 4.74-2.85" />
															<path d="M17 16.5v5.17" />
															<path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
															<path d="M12 8 7.26 5.15" />
															<path d="m12 8 4.74-2.85" />
															<path d="M12 13.5V8" />
														</svg>
													</div>
													<span className="text-primaryGreen text-[12px] font-medium">
														{token.score}%
													</span>
												</div>
											</span>
										</div>
									</div>
								</div>
								<div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row w-full h-[24px] gap-[4px] px-[12px] justify-start items-end">
									<div>
										<div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
											<i
												className={`ri-user-star-line text-[14px] ${randomColor}`}
											></i>
											<span
												className={`text-${randomColor} text-[12px] font-medium`}
											>
												{token.views}%
											</span>
											{/* <i className="ri-user-star-line text-[14px] text-primaryGreen"></i>
										<span className="text-primaryGreen text-[12px] font-medium">
											0%
										</span> */}
										</div>
									</div>
									<span className="contents">
										<div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
											<div className="w-[16px] h-[16px] flex items-center justify-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													style={{ fontSize: "12px" }}
													className="lucide lucide-chef-hat-icon lucide-chef-hat text-primaryBlue"
												>
													<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
													<path d="M6 17h12" />
												</svg>
											</div>
											<span className="text-primaryBlue text-[12px] font-medium">
												DS
											</span>
											<span className="text-textSecondary text-[11px] leading-[16px] font-medium whitespace-nowrap">
												{token.age}
											</span>
										</div>
									</span>
									<span className="contents">
										<div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
											<i className="ri-crosshair-2-line text-[14px] text-primaryGreen"></i>
											<span className="text-primaryGreen text-[12px] font-medium">
												0%
											</span>
										</div>
									</span>
									<span className="contents">
										<div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
											<i className="ri-ghost-line text-[14px] text-primaryGreen"></i>
											<span className="text-primaryGreen text-[12px] font-medium">
												0%
											</span>
										</div>
									</span>
									<span className="contents">
										<div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
											<div className="flex justify-center items-center min-w-[14px] min-h-[14px] max-w-[14px] max-h-[14px]">
												{/* <i
												className="icon-boxes text-[14px] text-primaryGreen"
												style={{ fontSize: "12px" }}
											></i> */}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													style={{ fontSize: "12px" }}
													className="lucide lucide-boxes-icon lucide-boxes text-[14px] text-primaryGreen"
												>
													<path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
													<path d="m7 16.5-4.74-2.85" />
													<path d="m7 16.5 5-3" />
													<path d="M7 16.5v5.17" />
													<path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
													<path d="m17 16.5-5-3" />
													<path d="m17 16.5 4.74-2.85" />
													<path d="M17 16.5v5.17" />
													<path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
													<path d="M12 8 7.26 5.15" />
													<path d="m12 8 4.74-2.85" />
													<path d="M12 13.5V8" />
												</svg>
											</div>
											<span className="text-primaryGreen text-[12px] font-medium">
												0%
											</span>
										</div>
									</span>
								</div>
							</div>
						</div>
					</Tooltip>
				</span>
			</div>
		</div>
	);
}
