import { useState } from "react";

export default function FiltersModal() {
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Filter Icon Button */}
			<span className="contents">
				<button
					type="button"
					onClick={() => setOpen(true)}
					className="flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center duration-150 ease-in-out cursor-pointer rounded-[8px] sm:rounded-[4px] relative hover:bg-primaryStroke/30"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z"></path>
					</svg>
					{/* <i className="ri-equalizer-3-line text-[16px] text-textSecondary" /> */}
				</button>
			</span>

			{/* Modal */}
			{open && (
				<div
					className="fixed inset-0 bg-[#090909]/40 flex items-center justify-center z-[200]"
					onClick={() => setOpen(false)} // backdrop close
				>
					<div
						className="bg-backgroundTertiary relative w-[452px] h-[calc(100vh-72px)] max-h-[880px]
                       border border-secondaryStroke rounded-[4px]
                       shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]"
						onClick={(e) => e.stopPropagation()} // prevent backdrop close
					>
						{/* Header */}
						<div
							className="flex flex-row w-full h-[44px] pl-[16px] pr-[12px]
                            justify-between items-center border-b border-secondaryStroke/50"
						>
							<span className="text-textPrimary text-[14px] font-medium">
								Filters
							</span>

							<button
								type="button"
								onClick={() => setOpen(false)}
								className="group p-[4px] w-[24px] h-[24px]
                           hover:bg-secondaryStroke/20 rounded-[4px]
                           transition-colors"
							>
								<i className="ri-close-line text-textSecondary text-[16px] group-hover:text-textPrimary" />
							</button>
						</div>

						<div className="h-[calc(100%-44px)] overflow-hidden">
							<div className="flex flex-col w-full h-[calc(100%-68px)] overflow-hidden">
								<div className="flex flex-row flex-1 pl-[8px] pr-[12px] min-h-[36px] max-h-[36px] border-b border-secondaryStroke justify-between items-center">
									<div className="flex flex-row gap-[16px] justify-start items-center">
										<button className="relative flex px-[8px] h-[28px] items-center">
											<div className="border-textPrimary border-b-[2px] pt-[2px] h-[36px] flex items-center">
												<span className="text-textPrimary text-[14px] font-medium">
													New Pairs
												</span>
											</div>
										</button>
										<button className="relative flex px-[8px] h-[28px] items-center hover:bg-primaryStroke/40 rounded-[4px]">
											<span className="text-textSecondary text-[14px] font-medium">
												Final Stretch
											</span>
										</button>
										<button className="relative flex px-[8px] h-[28px] items-center hover:bg-primaryStroke/40 rounded-[4px]">
											<span className="text-textSecondary text-[14px] font-medium">
												Migrated
											</span>
										</button>
									</div>
								</div>

								<div className="flex flex-col h-[calc(100%-36px)]">
									{/* Search Section */}
									<div className="flex flex-col gap-[16px] p-[16px] border-b border-secondaryStroke/50">
										<div className="flex gap-[16px]">
											<div className="flex-1">
												<span className="text-textSecondary text-[12px]">
													Search Keywords
												</span>
												<input
													placeholder="keyword1, keyword2..."
													className="mt-[4px] w-full h-[32px] px-[8px] text-[12px]
                       bg-transparent border border-secondaryStroke rounded-[4px]
                       outline-none hover:border-textPrimary/10 focus:border-textPrimary/10"
												/>
											</div>
											<div className="flex-1">
												<span className="text-textSecondary text-[12px]">
													Exclude Keywords
												</span>
												<input
													placeholder="keyword1, keyword2..."
													className="mt-[4px] w-full h-[32px] px-[8px] text-[12px]
                       bg-transparent border border-secondaryStroke rounded-[4px]
                       outline-none hover:border-textPrimary/10 focus:border-textPrimary/10"
												/>
											</div>
										</div>
									</div>

									<div className="flex flex-col pt-[16px] h-[calc(100%-100px)] overflow-hidden">
										<div className="flex flex-row flex-1 px-[16px] min-h-[36px] max-h-[36px] justify-start items-center">
											<div className="flex flex-row flex-1 gap-[12px] justify-start items-center">
												<button className="flex flex-row bg-primaryStroke px-[12px] gap-[4px] justify-start items-center group transition-colors ease-in-out duration-150 rounded-full h-[28px]">
													<span className="text-textPrimary text-[14px] font-medium whitespace-nowrap">
														Protocols
													</span>
												</button>
												<button className="flex flex-row hover:bg-primaryStroke/40 px-[12px] gap-[4px] justify-start items-center group transition-colors ease-in-out duration-150 rounded-full h-[28px]">
													<span className="text-textTertiary text-[14px] font-medium whitespace-nowrap">
														Audit
													</span>
												</button>
												<button className="flex flex-row hover:bg-primaryStroke/40 px-[12px] gap-[4px] justify-start items-center group transition-colors ease-in-out duration-150 rounded-full h-[28px]">
													<span className="text-textTertiary text-[14px] font-medium whitespace-nowrap">
														$ Metrics
													</span>
												</button>
												<button className="flex flex-row hover:bg-primaryStroke/40 px-[12px] gap-[4px] justify-start items-center group transition-colors ease-in-out duration-150 rounded-full h-[28px]">
													<span className="text-textTertiary text-[14px] font-medium whitespace-nowrap">
														Socials
													</span>
												</button>
											</div>
										</div>

										<div className="h-[calc(100%-52px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
											<div className="flex flex-col p-[16px] pb-[16px] gap-[16px]">
												<div className="flex flex-col gap-[12px] w-full">
													<div className="flex flex-row h-[24px] min-h-[24px] justify-between items-center">
														<span className="text-textSecondary text-[12px] leading-[16px] font-normal">
															Protocols
														</span>
														<button
															type="button"
															className="group text-textPrimary flex flex-row gap-[4px] text-[12px] leading-[16px] font-medium justify-start items-center rounded-full px-[7px] h-[24px] transition-colors duration-125 ease-in-out hover:border-transparent border-[1px] bg-secondaryStroke/30 border-secondaryStroke/20 hover:bg-secondaryStroke/60"
														>
															<span className="text-textPrimary text-[12px] leading-[16px] font-medium">
																Select All
															</span>
														</button>
													</div>

													<div className="grid grid-cols-3 gap-[12px]">
														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center grayscale-[0] flex-shrink-0 min-w-min max-w-none overflow-visible"
															>
																<div className="relative border-[1px] border-pump/35 group-hover:border-pump/45 bg-pump/5 group-hover:bg-pump/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] justify-start items-center rounded-full cursor-pointer">
																	<img
																		src="/images/pump.svg"
																		width={14}
																		height={14}
																		className="z-30"
																	/>
																	<span className="text-pump/90 group-hover:text-pump text-[13px] font-medium z-30 text-nowrap">
																		Pump
																	</span>
																</div>
															</button>
														</div>

														{/* <div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center grayscale-[0] flex-shrink-0 min-w-min max-w-none overflow-visible"
															>
																<div className="relative border-[1px] border-pump/35 group-hover:border-pump/45 bg-pump/5 group-hover:bg-pump/10 flex flex-row w-[24px] h-[24px] justify-center items-center rounded-full cursor-pointer">
																	<svg
																		className="text-pump size-[14px]"
																		viewBox="0 0 24 24"
																	></svg>
																</div>
															</button>
														</div> */}

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-mayhem/35 group-hover:border-mayhem/45 bg-mayhem/5 group-hover:bg-mayhem/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/mayhem.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-mayhem/90 text-[13px] font-medium">
																		Mayhem
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-bonk/35 group-hover:border-bonk/45 bg-bonk/5 group-hover:bg-bonk/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/bonk.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-bonk/90 text-[13px] font-medium">
																		Bonk
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-bags/35 group-hover:border-bags/45 bg-bags/5 group-hover:bg-bags/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/bags.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-bags/90 text-[13px] font-medium">
																		Bags
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-moonshotApp/35 group-hover:border-moonshotApp/45 bg-moonshotApp/5 group-hover:bg-moonshotApp/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/moonshot-new.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-moonshotApp/90 text-[13px] font-medium">
																		Moonshot
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-heaven/35 group-hover:border-heaven/45 bg-heaven/5 group-hover:bg-heaven/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/heaven.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-heaven/90 text-[13px] font-medium">
																		Heaven
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-daosFun/35 group-hover:border-daosFun/45 bg-daosFun/5 group-hover:bg-daosFun/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/daosfun.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-daosFun/90 text-[13px] font-medium">
																		Daos.fun
																	</span>
																</div>
															</button>
														</div>
														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-candle/35 group-hover:border-candle/45 bg-candle/5 group-hover:bg-candle/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/candle.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-candle/90 text-[13px] font-medium">
																		Candle
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-sugar/35 group-hover:border-sugar/45 bg-sugar/5 group-hover:bg-sugar/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/sugar.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-sugar/90 text-[13px] font-medium">
																		Sugar
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-launchACoin/35 group-hover:border-launchACoin/45 bg-launchACoin/5 group-hover:bg-launchACoin/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/launch-a-coin.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-launchACoin/90 text-[13px] font-medium">
																		Believe
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-jupiterStudio/35 group-hover:border-jupiterStudio/45 bg-jupiterStudio/5 group-hover:bg-jupiterStudio/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/jupstudio.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-jupiterStudio/90 text-[13px] font-medium">
																		Jupiter Studio
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-moonshot/35 group-hover:border-moonshot/45 bg-moonshot/5 group-hover:bg-moonshot/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/moonit.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-moonshot/90 text-[13px] font-medium">
																		Moonit
																	</span>
																</div>
															</button>
														</div>
														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-boop/35 group-hover:border-boop/45 bg-boop/5 group-hover:bg-boop/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/boop.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-boop/90 text-[13px] font-medium">
																		Boop
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-launchlab/35 group-hover:border-launchlab/45 bg-launchlab/5 group-hover:bg-launchlab/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/launchlab.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-launchlab/90 text-[13px] font-medium">
																		LaunchLab
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-virtualCurve/35 group-hover:border-virtualCurve/45 bg-virtualCurve/5 group-hover:bg-virtualCurve/10 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/virtual-curve.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-virtualCurve/90 text-[13px] font-medium">
																		Dynamic BC
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center opacity-[0.65]">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/ray.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-[13px] font-medium">
																		Raydium
																	</span>
																</div>
															</button>
														</div>
														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center opacity-[0.65]">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/meteora.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-[13px] font-medium">
																		Meteora AMM
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center opacity-[0.65]">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/meteora.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-[13px] font-medium">
																		Meteora AMM V2
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center opacity-[0.65]">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/pump-amm-temp.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-[13px] font-medium">
																		Pump AMM
																	</span>
																</div>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center opacity-[0.65]">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center"
															>
																<div className="relative border-[1px] border-orca/25 group-hover:border-orca/35 flex flex-row h-[24px] pl-[5px] pr-[7px] gap-[3px] items-center rounded-full">
																	<img
																		src="/images/orca.svg"
																		width={14}
																		height={14}
																	/>
																	<span className="text-orca/65 text-[13px] font-medium">
																		Orca
																	</span>
																</div>
															</button>
														</div>
													</div>
												</div>

												<div className="flex flex-col gap-[12px] w-full">
													<div className="flex flex-row h-[24px] min-h-[24px] justify-between items-center">
														<span className="text-textSecondary text-[12px] leading-[16px] font-normal">
															Quote Tokens
														</span>
														<button
															type="button"
															className="group text-textPrimary flex flex-row gap-[4px] text-[12px] leading-[16px] font-medium justify-start items-center rounded-full px-[7px] h-[24px] transition-colors duration-125 ease-in-out border-secondaryStroke border-[1px] bg-secondaryStroke/60 hover:bg-secondaryStroke/90"
														>
															<span className="text-textPrimary text-[12px] leading-[16px] font-medium">
																Unselect All
															</span>
														</button>
													</div>

													<div className="grid grid-cols-3 gap-[12px]">
														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center grayscale-[0] flex-shrink-0 min-w-min max-w-none overflow-visible"
															>
																<span className="contents">
																	<div
																		className="flex flex-row gap-[1px] justify-center items-center rounded-full border-[1px] cursor-pointer
                 h-[24px] pl-[4px] pr-[7px]"
																	>
																		<img
																			src="/images/sol-fill.svg"
																			width={16}
																			height={16}
																		/>
																		<span className="font-medium tracking-[-0.02em]">
																			SOL
																		</span>
																	</div>
																</span>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center grayscale-[0] flex-shrink-0 min-w-min max-w-none overflow-visible"
															>
																<span className="contents">
																	<div
																		className="flex flex-row gap-[1px] justify-center items-center rounded-full border-[1px] cursor-pointer
                 h-[24px] pl-[4px] pr-[7px]
                 border-usdcHover/35 group-hover:border-usdcHover/45
                 bg-usdc/5 group-hover:bg-usdc/10
                 text-usdcHover/90 group-hover:text-usdcHover/100"
																	>
																		<img
																			src="/images/usdc.svg"
																			width={16}
																			height={16}
																		/>
																		<span className="font-medium tracking-[-0.02em]">
																			USDC
																		</span>
																	</div>
																</span>
															</button>
														</div>

														<div className="flex flex-row flex-1 gap-[4px] justify-start items-center">
															<button
																type="button"
																className="group flex flex-row gap-[4px] justify-start items-center grayscale-[0] flex-shrink-0 min-w-min max-w-none overflow-visible"
															>
																<span className="contents">
																	<div
																		className="flex flex-row gap-[1px] justify-center items-center rounded-full border-[1px] cursor-pointer
                 h-[24px] pl-[4px] pr-[7px]
                 border-usd1/35 group-hover:border-usd1/45
                 bg-usd1/5 group-hover:bg-usd1/10
                 text-usd1/90 group-hover:text-usd1/100"
																	>
																		<img
																			src="/images/usd1.svg"
																			width={16}
																			height={16}
																		/>
																		<span className="font-medium tracking-[-0.02em]">
																			USD1
																		</span>
																	</div>
																</span>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Footer */}
								<div className="border-t border-secondaryStroke flex justify-between items-center p-[16px]">
									<div className="flex gap-[12px]">
										<button className="bg-secondaryStroke px-[12px] h-[32px] rounded-full text-[14px] font-bold">
											Import
										</button>
										<button className="bg-secondaryStroke px-[12px] h-[32px] rounded-full text-[14px] font-bold">
											Export
										</button>
										<button className="bg-secondaryStroke px-[12px] h-[32px] rounded-full text-[14px] font-bold">
											Share
										</button>
									</div>

									<button className="bg-primaryBlue px-[16px] h-[32px] rounded-full text-background font-bold">
										Apply All
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
