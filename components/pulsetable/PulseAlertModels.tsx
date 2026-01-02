"use client";

import { useState } from "react";

const SoundToggle = () => (
	<div className="flex flex-col gap-[8px]">
		<div className="flex items-center justify-between h-[32px]">
			<span className="text-textSecondary font-medium text-[14px] sm:text-[12px]">
				Sound Alerts
			</span>
			<Toggle off />
		</div>

		<span className="text-textTertiary text-[12px]">
			Play sound alerts for Tokens in Pulse
		</span>
	</div>
);

const Toggle = ({ off }: { off?: boolean }) => (
	<div
		className={`
      relative rounded-full overflow-hidden
      w-[52px] sm:w-[40px] h-[24px] sm:h-[20px]
      transition-colors duration-150
      ${off ? "bg-secondaryStroke" : "bg-primaryBlue"}
    `}
	>
		<div className="absolute inset-0 border border-black/10 rounded-full" />
		<div className="absolute inset-0 border border-white/5 rounded-full" />
		<div
			className={`
        absolute bg-white rounded-full
        top-[3px] sm:top-[2px]
        w-[18px] sm:w-[16px] h-[18px] sm:h-[16px]
        transition-transform duration-200
        ${off ? "left-[2px]" : "translate-x-[30px] sm:translate-x-[20px]"}
      `}
		/>
	</div>
);

const PulseAlertsModal = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Trigger button */}
			<span className="contents">
				<button
					type="button"
					onClick={() => setOpen(true)}
					className="
            -mr-[5px] group flex items-center justify-center
            w-8 h-8 bg-background rounded-full
            hover:bg-primaryStroke/60 transition-colors
          "
				>
					<i className="ri-volume-up-line text-[16px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150" />
				</button>
			</span>

			{/* Modal */}
			{open && (
				<div className="fixed inset-0 z-[200] bg-[#090909]/40 flex items-center justify-center">
					<div
						className="
              bg-backgroundTertiary relative
              w-[400px] max-h-[600px]
              rounded-[4px]
              border border-secondaryStroke
              shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]
            "
						style={{ transform: "translateY(4px)" }}
					>
						{/* Header */}
						<div className="flex h-[44px] px-[16px] pr-[12px] items-center justify-between border-b border-secondaryStroke">
							<span className="text-textPrimary text-[14px] font-medium">
								Alerts
							</span>

							<button
								onClick={() => setOpen(false)}
								className="group p-[4px] w-[24px] h-[24px] rounded-[4px] hover:bg-secondaryStroke/20 transition-colors"
							>
								<i className="ri-close-line text-[16px] text-textSecondary group-hover:text-textPrimary" />
							</button>
						</div>

						{/* Body */}
						<div className="flex flex-col min-h-0">
							{/* Mobile header */}
							<div className="sm:hidden flex h-[44px] px-[16px] items-center border-b border-secondaryStroke">
								<span className="text-textPrimary text-[14px] font-medium">
									Alerts
								</span>
							</div>

							<div className="flex-1 overflow-y-auto px-[16px]">
								<div className="py-[16px] pb-[20px] flex flex-col gap-[16px]">
									<SoundToggle />
								</div>
							</div>
						</div>

						{/* Footer (desktop) */}
						<div className="hidden sm:flex h-[68px] px-[16px] items-center border-t border-secondaryStroke/50">
							<button
								onClick={() => setOpen(false)}
								className="
                  bg-primaryBlue flex-1 h-[32px]
                  rounded-full hover:bg-primaryBlue/80
                  transition-all duration-[150ms]
                "
							>
								<span className="text-[14px] font-bold text-background">
									Continue
								</span>
							</button>
						</div>

						{/* Footer (mobile) */}
						<div className="sm:hidden sticky bottom-0 border-t border-secondaryStroke bg-backgroundTertiary px-[16px] pb-[20px] pt-[16px]">
							<button
								onClick={() => setOpen(false)}
								className="
                  w-full py-2 bg-primaryBlue
                  text-background rounded-full
                  text-[16px] font-bold
                  active:scale-[0.96] active:opacity-[0.90]
                  transition-all duration-[125ms]
                "
							>
								Continue
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PulseAlertsModal;
