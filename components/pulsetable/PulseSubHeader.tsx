"use client";

import Image from "next/image";

import { useState } from "react";
import FiltersModal from "./FiltersModel";

type Profile = "P1" | "P2" | "P3";

type Props = {
	title: string;
};

export default function NewPairsHeaderWithTradingSettings({ title }: Props) {
	const [activeProfile, setActiveProfile] = useState<Profile>("P1");
	const [isTradingModalOpen, setIsTradingModalOpen] = useState(false);

	const handleProfileClick = (profile: Profile) => {
		if (profile === activeProfile) {
			setIsTradingModalOpen(true);
		} else {
			setActiveProfile(profile);
		}
	};

	return (
		<>
			{/* ================= HEADER ================= */}
			<div className="sticky top-0 z-30 w-full">
				<div className="hidden sm:flex min-h-[48px] border-b border-primaryStroke px-[12px] items-center gap-[12px]">
					<span className="text-textPrimary text-[16px] font-medium flex-1">
						{/* New Pairs */}
						{title}
					</span>

					<div className="flex flex-row items-center gap-[12px]">
						<div className="hidden lg:block">
							<div className="overflow-hidden whitespace-nowrap border-primaryStroke font-normal border-[1px] flex flex-row h-[28px] pl-[4px] gap-[6px] justify-start items-center rounded-full  hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer">
								<span className="flex text-[14px] text-textTertiary font-medium">
									<i className="ri-flashlight-fill"></i>
								</span>
								<div className="flex flex-1 sm:max-w-[32px] min-w-[0px]">
									<input
										placeholder="0.0"
										className="text-[12px] w-full text-textPrimary placeholder:text-textTertiary font-medium outline-none bg-transparent text-left"
										type="text"
										value="0"
										readOnly
									/>
								</div>
								<Image
									alt="SOL"
									width={14}
									height={14}
									src="/images/sol-fill.svg"
									style={{ color: "transparent" }}
								></Image>
								<div className="border-primaryStroke border-l-[1px] flex h-full pr-[2px] pl-[2px] gap-[3px] justify-center items-center cursor-pointer">
									{(["P1", "P2", "P3"] as Profile[]).map((p, i) => {
										const isActive = p === activeProfile;

										return (
											<div
												key={i + 1}
												className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryBlueHover/10"
											>
												<button
													key={p}
													onClick={() => handleProfileClick(p)}
													className={`
                    text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium hover:bg-primaryBlue/10
                    ${
											isActive
												? "text-primaryBlue"
												: "text-textSecondary hover:bg-primaryStroke/60"
										}
                  `}
												>
													{p}
												</button>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					<FiltersModal />
				</div>
			</div>

			{/* ================= MODAL ================= */}
			{isTradingModalOpen && (
				<div className="fixed inset-0 z-[10000] bg-[#090909]/40 flex items-center justify-center">
					<div className="relative w-[364px] max-h-[880px]">
						<div className="flex flex-col bg-backgroundTertiary border border-secondaryStroke rounded-[8px] shadow-dropdown">
							{/* Header */}
							<div className="flex h-[44px] px-[16px] justify-between items-center border-b border-secondaryStroke">
								<span className="text-textPrimary text-[14px] font-medium">
									Trading Settings ({activeProfile})
								</span>
								<button
									onClick={() => setIsTradingModalOpen(false)}
									className="w-[24px] h-[24px] flex items-center justify-center rounded hover:bg-secondaryStroke/20"
								>
									<i className="ri-close-line text-textSecondary text-[16px]" />
								</button>
							</div>

							{/* Tabs */}
							<div className="p-[16px]">
								<div className="flex border border-secondaryStroke/50 rounded-[8px] p-[4px]">
									<button className="flex-1 h-[28px] bg-increase/[12%] text-increase rounded-[4px]">
										Buy Settings
									</button>
									<button className="flex-1 h-[28px] text-textSecondary hover:bg-primaryStroke/40 rounded-[4px]">
										Sell Settings
									</button>
								</div>
							</div>

							{/* Content (trimmed explanation, UI kept intact) */}
							<div className="flex flex-col flex-1 p-[16px] gap-[16px]">
								{/* Slippage / Priority / Bribe */}
								<div className="flex gap-[16px]">
									<InputBox label="SLIPPAGE" suffix="%" value="20" />
									<InputBox
										label="PRIORITY"
										value="0.001"
										icon="ri-gas-station-line"
									/>
									<InputBox label="BRIBE" value="0.01" icon="ri-coin-line" />
								</div>

								{/* Auto Fee */}
								<div className="flex items-center gap-[16px]">
									<div className="flex items-center gap-[8px]">
										<div className="w-[16px] h-[16px] border border-secondaryStroke rounded-[4px]" />
										<span className="text-textPrimary text-[12px] font-medium">
											Auto Fee
										</span>
									</div>

									<div className="opacity-50 pointer-events-none flex-1 border border-secondaryStroke rounded-full px-[12px] h-[32px] flex items-center">
										MAX FEE
									</div>
								</div>

								{/* MEV Mode */}
								<div className="flex gap-[16px]">
									<span className="text-textPrimary text-[12px] font-medium w-[100px]">
										MEV Mode
									</span>
									<div className="flex flex-1 border border-secondaryStroke/50 rounded-[8px] p-[4px] gap-[4px]">
										<ModeButton active label="Off" />
										<ModeButton label="Reduced" />
										<ModeButton label="Secure" />
									</div>
								</div>

								{/* RPC */}
								<div className="flex border border-secondaryStroke rounded-full h-[32px] px-[12px] items-center">
									<span className="text-textTertiary text-[14px] font-medium mr-[8px]">
										RPC
									</span>
									<input
										className="flex-1 bg-transparent outline-none text-textPrimary"
										placeholder="https://a...e.com"
									/>
								</div>
							</div>

							{/* Footer */}
							<div className="border-t border-secondaryStroke p-[16px]">
								<button
									className="w-full h-[32px] bg-primaryBlue text-background rounded-full font-bold"
									onClick={() => setIsTradingModalOpen(false)}
								>
									Continue
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

/* ================= SMALL HELPERS ================= */

function InputBox({
	label,
	value,
	suffix,
	icon,
}: {
	label: string;
	value: string;
	suffix?: string;
	icon?: string;
}) {
	return (
		<div className="flex-1 border border-secondaryStroke rounded-[8px] flex flex-col items-center">
			<input
				value={value}
				readOnly
				className="w-full h-[28px] text-center bg-secondaryStroke/50 border-b border-secondaryStroke text-textPrimary"
			/>
			<div className="h-[24px] flex items-center gap-[4px] text-textTertiary text-[12px]">
				{icon && <i className={icon} />}
				{label}
				{suffix}
			</div>
		</div>
	);
}

function ModeButton({ label, active }: { label: string; active?: boolean }) {
	return (
		<button
			className={`flex-1 h-[24px] rounded-[4px] text-[12px] font-medium ${
				active
					? "bg-primaryBlue/15 text-primaryBlue"
					: "text-textSecondary hover:bg-primaryStroke/40"
			}`}
		>
			{label}
		</button>
	);
}
