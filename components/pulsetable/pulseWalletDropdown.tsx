"use client";

import { useState } from "react";

const WalletRow = () => {
	return (
		<div className="hover:bg-secondaryStroke/10 cursor-pointer">
			<div className="flex items-center h-[56px] px-[16px] border-b border-secondaryStroke/50">
				{/* Left */}
				<div className="flex-1 flex flex-col gap-[4px] min-w-[100px]">
					<span className="text-[14px] font-medium text-[rgb(247,147,26)]">
						Axiom Main
					</span>

					<div className="flex gap-[6px]">
						<button className="text-[11px] text-textTertiary hover:text-textSecondary flex items-center gap-[3px]">
							<i className="icon-rocket text-[11px]" />
							Off
						</button>

						<button className="text-[12px] text-textTertiary hover:text-textSecondary flex items-center gap-[4px]">
							2vv5t
							<i className="ri-file-copy-line text-[12px]" />
						</button>
					</div>
				</div>

				{/* Balance */}
				<div className="flex gap-[8px] items-center">
					<div className="border border-secondaryStroke/50 rounded-full px-[6px] h-[26px] flex items-center gap-[4px]">
						<img src="/images/sol-fill.svg" width={16} height={16} />
						<span className="text-[12px] text-textSecondary">0</span>
					</div>

					<div className="border border-secondaryStroke/50 rounded-full px-[6px] h-[26px] flex items-center gap-[4px]">
						<span className="text-[12px] text-textSecondary">0</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const WalletDropdown = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="relative flex">
			{/* Trigger */}
			<span className="contents">
				<button
					type="button"
					onClick={() => setOpen((prev) => !prev)}
					className="
            flex border border-primaryStroke group
            p-[4px] pr-[12px] pl-[12px] h-[32px] gap-[8px]
            justify-center items-center rounded-full
            hover:bg-primaryStroke/35 transition-colors duration-125
          "
				>
					<div className="flex gap-[4px] items-center">
						<i className="ri-wallet-line text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors" />
						<span className="text-[14px] text-textSecondary font-medium group-hover:text-textPrimary transition-colors">
							1
						</span>
					</div>

					<div className="flex gap-[4px] items-center">
						<img src="/images/sol-fill.svg" alt="SOL" width={16} height={16} />
						<span className="text-[14px] text-textPrimary font-medium">0</span>
					</div>

					<i className="ri-arrow-down-s-line text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors" />
				</button>
			</span>

			{/* Dropdown */}
			{open && (
				<div
					className="
            fixed right-[24px] top-[148px]
            z-[9999]
            shadow-dropdown
            bg-backgroundTertiary
            border border-secondaryStroke
            rounded-[4px]
          "
					style={{ transform: "translateY(4px)" }}
				>
					<div className="flex flex-col gap-[16px] w-[348px]">
						{/* Header */}
						<div className="flex items-center justify-between px-[16px] pr-[12px] h-[44px]">
							<div className="flex gap-[8px] items-center">
								<button className="border border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke/90 rounded-full px-[7px] h-[24px] text-[12px] font-medium">
									Unselect All
								</button>

								<button
									disabled
									className="opacity-50 cursor-not-allowed border border-secondaryStroke/20 bg-secondaryStroke/30 rounded-full px-[7px] h-[24px] text-[12px] font-medium"
								>
									Select All with Balance
								</button>
							</div>

							<button className="w-[24px] h-[24px] rounded-[4px] hover:bg-secondaryStroke/20">
								<i className="ri-settings-3-line text-[13px] text-textTertiary hover:text-textSecondary transition-colors" />
							</button>
						</div>

						{/* Wallet List */}
						<div className="border-t border-secondaryStroke max-h-[342px] overflow-y-auto">
							<WalletRow />
						</div>

						{/* Add Wallet */}
						<button
							type="button"
							className="flex items-center gap-[16px] px-[16px] h-[48px]
                hover:bg-primaryStroke/35 transition-colors"
						>
							<i className="ri-add-line text-[16px] text-textSecondary" />
							<span className="text-[14px] text-textPrimary font-medium">
								Add Wallet
							</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default WalletDropdown;
