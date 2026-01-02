"use client";

import DisplayDropdownContainer from "./DisplayDropdownList";
import PulseAlertsModal from "./PulseAlertModels";
import BlacklistModalButton from "./PulseBlackListButton";
import PulseHotkeysModal from "./PulseHotKeysModels";
import PulseSnipeSettingsModal from "./PulseSnipeSettingModel";
import WalletDropdown from "./pulseWalletDropdown";
import Image from "next/image";

const PulseHeaderBar = () => {
	return (
		<>
			<div className="flex-none hidden sm:flex flex-row w-full h-[32px] justify-start items-center">
				{/* Left: Title + Chain Switch */}
				<div className="flex-1 flex items-center gap-3">
					<span className="text-textPrimary text-[20px] font-medium">
						Pulse
					</span>

					<div className="flex items-center gap-1">
						<ChainButton
							active
							label="Switch to Solana"
							icon="/images/sol-fill.svg"
						/>
						<ChainButton
							label="Switch to BNB"
							icon="/images/bnb-fill.svg"
							grayscale
						/>
					</div>
				</div>

				<div className="pr-[8px]" />

				{/* Right: Actions */}
				<div className="flex flex-row gap-4 items-center">
					<span className="contents">
						<button
							type="button"
							className="flex flex-row w-[24px] h-[24px] justify-center items-center"
						>
							<i className="ri-question-line text-[20px] text-textTertiary hover:text-textSecondary transition-all duration-150 ease-in-out"></i>
						</button>
					</span>

					<DisplayDropdownContainer />

					{/* <span className="contents">
					<button
						type="button"
						className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full"
					>
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
							className="lucide lucide-bookmark-x-icon lucide-bookmark-x text-textSecondary group-hover:text-textPrimary"
						>
							<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
							<path d="m14.5 7.5-5 5" />
							<path d="m9.5 7.5 5 5" />
						</svg>
					</button>
				</span> */}

					<BlacklistModalButton />

					<PulseHotkeysModal />

					<PulseAlertsModal />

					<PulseSnipeSettingsModal />

					<WalletDropdown />
				</div>
			</div>
			<div className="flex sm:hidden flex-row w-full h-[24px] gap-[8px] justify-between items-center">
				<div className="flex flex-row items-center gap-[8px] flex-1 min-w-0">
					<div className="flex items-center gap-1">
						<button
							type="button"
							className="
                  relative flex items-center justify-center
                  w-[32px] h-[32px] rounded-full
                  transition-all duration-150
                  bg-primaryStroke/60 scale-110
                "
							aria-label="Switch to Solana"
						>
							<Image
								alt="SOL"
								loading="lazy"
								width={20}
								height={20}
								decoding="async"
								data-nimg="1"
								className=""
								src="/images/sol-fill.svg"
								style={{ color: "transparent" }}
							/>
						</button>
						<button
							type="button"
							className="
                  relative flex items-center justify-center
                  w-[32px] h-[32px] rounded-full
                  transition-all duration-150
                  hover:bg-primaryStroke/30 opacity-60 hover:opacity-100
                "
							aria-label="Switch to BNB"
						>
							<Image
								alt="BNB"
								loading="lazy"
								width={20}
								height={20}
								decoding="async"
								data-nimg="1"
								className="grayscale-[0.3]"
								src="/images/bnb-fill.svg"
								style={{ color: "transparent" }}
							/>
						</button>
					</div>
					<div className="relative flex flex-row flex-1 min-w-0">
						<div className="flex flex-row gap-[8px] items-center overflow-x-auto overflow-y-hidden [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
							<button
								className="text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center min-w-max 
          rounded-full 
          bg-secondaryStroke text-textPrimary active:scale-[0.98] active:opacity-[0.95] transition-all duration-[65ms] ease-out
          h-[24px]"
							>
								<div className="flex flex-row flex-1 h-[32px] gap-[4px] justify-center items-center">
									<span className="text-[14px] font-medium">New Pairs</span>
								</div>
							</button>
							<button
								className="text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center min-w-max 
          rounded-full 
          bg-secondary/80 text-textTertiary active:text-textSecondary active:scale-[0.98] active:opacity-[0.95] transition-all duration-[65ms] ease-out
          h-[24px]"
							>
								<div className="flex flex-row flex-1 h-[32px] gap-[4px] justify-center items-center">
									<span className="text-[14px] font-medium">Final Stretch</span>
								</div>
							</button>
							<button
								className="text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center min-w-max 
          rounded-full 
          bg-secondary/80 text-textTertiary active:text-textSecondary active:scale-[0.98] active:opacity-[0.95] transition-all duration-[65ms] ease-out
          h-[24px]"
							>
								<div className="flex flex-row flex-1 h-[32px] gap-[4px] justify-center items-center">
									<span className="text-[14px] font-medium">Migrated</span>
								</div>
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-[8px]">
					<button
						type="button"
						className="relative border border-primaryStroke bg-transparent text-textSecondary min-w-[36px] h-[36px] pl-[9px] pr-[6px] gap-[7px] flex justify-center items-center rounded-full active:scale-[0.96] active:bg-primaryStroke/40 transition-scale duration-[65ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
					>
						<div className="flex flex-row gap-[4px] items-center">
							<span className="text-[14px] font-medium">P1</span>
						</div>
						<i className="ri-settings-3-line text-[20px] transition-all duration-[135ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default PulseHeaderBar;

type ChainButtonProps = {
	icon: string;
	label: string;
	active?: boolean;
	grayscale?: boolean;
};

const ChainButton = ({ icon, label, active, grayscale }: ChainButtonProps) => (
	<button
		aria-label={label}
		className={`
      flex items-center justify-center
      w-[32px] h-[32px] rounded-full
      transition-all duration-150
      ${
				active
					? "bg-primaryStroke/60 scale-110"
					: "hover:bg-primaryStroke/30 opacity-60 hover:opacity-100"
			}
    `}
	>
		<img
			src={icon}
			alt={label}
			width={20}
			height={20}
			className={grayscale ? "grayscale-[0.3]" : ""}
		/>
	</button>
);

const IconButton = ({ icon }: { icon: string }) => (
	<button className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-primaryStroke/60 transition-colors">
		<i
			className={`${icon} text-[16px] text-textSecondary group-hover:text-textPrimary`}
		/>
	</button>
);

const TargetSettingsButton = () => (
	<button className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-primaryStroke/60 relative">
		<i className="ri-crosshair-2-line text-[16px] text-textSecondary group-hover:text-textPrimary" />
		<i className="ri-settings-3-line text-[12px] absolute bottom-0 right-0 text-textSecondary group-hover:text-textPrimary" />
	</button>
);

const DisplayDropdown = () => (
	<button
		className="
      bg-primaryStroke flex h-[32px] px-[12px] gap-[8px]
      items-center rounded-full
      hover:bg-secondaryStroke/80
      transition-colors duration-150
    "
	>
		<i className="ri-list-check text-[18px] text-textPrimary" />
		<span className="text-[14px] font-bold text-textPrimary">Display</span>
		<i className="ri-arrow-down-s-line text-[18px] text-textPrimary" />
	</button>
);

const WalletCompact = () => (
	<button
		className="
      hidden sm:flex border border-primaryStroke
      px-[12px] h-[32px] gap-[8px]
      items-center rounded-full
      hover:bg-primaryStroke/35 transition-colors
    "
	>
		<div className="flex gap-[4px] items-center">
			<i className="ri-wallet-line text-[18px] text-textSecondary group-hover:text-textPrimary" />
			<span className="text-[14px] text-textSecondary font-medium">1</span>
		</div>

		<div className="flex gap-[4px] items-center">
			<img src="/images/sol-fill.svg" alt="SOL" width={16} height={16} />
			<span className="text-[14px] text-textPrimary font-medium">0</span>
		</div>

		<i className="ri-arrow-down-s-line text-[18px] text-textSecondary" />
	</button>
);

const MobileInput = () => (
	<div className="hidden sm:block lg:hidden">
		<div className="flex h-full gap-[8px] items-center">
			<div
				className="
          overflow-hidden whitespace-nowrap
          border border-primaryStroke
          min-w-[216px] h-[32px] pl-[12px]
          flex gap-[8px] items-center rounded-full
          hover:bg-primaryStroke/35 transition-colors
        "
			>
				<i className="ri-flashlight-fill text-textTertiary" />

				<input
					type="text"
					value="0"
					placeholder="0.0"
					className="w-full bg-transparent outline-none text-textPrimary text-[14px]"
				/>

				<img src="/images/sol-fill.svg" alt="SOL" width={16} height={16} />
			</div>
		</div>
	</div>
);
