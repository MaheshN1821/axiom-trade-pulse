"use client";

import DisplayDropdownContainer from "./DisplayDropdownList";
import PulseAlertsModal from "./PulseAlertModels";
import BlacklistModalButton from "./PulseBlackListButton";
import PulseHotkeysModal from "./PulseHotKeysModels";
import PulseSnipeSettingsModal from "./PulseSnipeSettingModel";
import WalletDropdown from "./pulseWalletDropdown";

const PulseHeaderBar = () => {
	return (
		<div className="flex-none flex flex-row w-full h-[32px] justify-start items-center">
			{/* Left: Title + Chain Switch */}
			<div className="flex-1 flex items-center gap-3">
				<span className="text-textPrimary text-[20px] font-medium">Pulse</span>

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
