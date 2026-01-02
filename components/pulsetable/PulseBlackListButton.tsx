"use client";

import { useState } from "react";

const BlacklistModalButton = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<span className="contents">
				<button
					type="button"
					onClick={() => setOpen(true)}
					className="
            group flex items-center justify-center w-8 h-8
            bg-background hover:bg-primaryStroke/60
            transition-colors relative rounded-full
          "
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
			</span>

			{open && (
				<div className="fixed inset-0 bg-[#090909]/40 flex items-center justify-center z-[200]">
					<div
						className="
              relative w-[452px] h-[calc(100vh-72px)] max-h-[880px]
              bg-backgroundTertiary border border-secondaryStroke
              rounded-[4px]
              shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]
              overflow-hidden
            "
						style={{ transform: "translateY(4px)" }}
					>
						{/* Header */}
						<div className="flex h-[44px] px-[16px] pr-[12px] justify-between items-center border-b border-secondaryStroke">
							<span className="text-textPrimary text-[14px] font-medium">
								Blacklist
							</span>

							<button
								onClick={() => setOpen(false)}
								className="w-[24px] h-[24px] flex items-center justify-center
                  hover:bg-secondaryStroke/20 rounded-[4px]"
							>
								<i className="ri-close-line text-[16px] text-textSecondary hover:text-textPrimary" />
							</button>
						</div>

						{/* Search + Action */}
						<div className="flex flex-col gap-[16px] py-[16px] border-b border-secondaryStroke/50">
							<div className="flex gap-[16px] px-[16px]">
								<input
									placeholder="Enter twitter profile, dev address or keyword"
									className="
                    flex-1 h-[32px] px-[8px]
                    text-[12px] text-textPrimary placeholder:text-textTertiary
                    bg-transparent border border-secondaryStroke
                    rounded-[4px]
                    outline-none hover:bg-secondaryStroke/10 focus:bg-secondaryStroke/10
                  "
								/>

								<button
									disabled
									className="
                    bg-primaryBlue h-[32px] px-[12px] rounded-full
                    text-background font-bold text-[14px]
                    opacity-50 cursor-not-allowed
                  "
								>
									Blacklist
								</button>
							</div>
						</div>

						{/* Info */}
						<div className="px-[16px] py-[8px]">
							<div className="flex items-center gap-[6px] bg-secondaryStroke/50 rounded-[4px] p-[8px]">
								<i className="ri-information-line text-[13px] text-textSecondary" />
								<span className="text-[12px] text-textSecondary">
									Blacklist all types of metrics!
								</span>
							</div>
						</div>

						{/* Scroll Area */}
						<div className="flex-1 overflow-y-auto px-[16px]" />

						{/* Footer */}
						<div className="border-t border-secondaryStroke px-[16px] h-[64px] flex justify-between items-center">
							<span className="text-[12px] text-textSecondary">
								0 / 1000 blacklists
							</span>

							<div className="flex gap-[16px]">
								<button className="bg-decrease hover:bg-decreaseHover text-background font-bold text-[14px] px-[12px] h-[32px] rounded-full">
									Delete All
								</button>

								<button className="bg-secondaryStroke hover:bg-secondaryStroke/65 px-[12px] h-[32px] rounded-full font-bold text-[14px]">
									Import
								</button>

								<button className="bg-secondaryStroke hover:bg-secondaryStroke/65 px-[12px] h-[32px] rounded-full font-bold text-[14px]">
									Export
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default BlacklistModalButton;
