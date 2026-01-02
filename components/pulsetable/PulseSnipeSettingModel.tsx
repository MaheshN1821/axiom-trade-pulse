"use client";

import { useState } from "react";

const PercentInput = ({
	label,
	suffix,
}: {
	label: string;
	suffix?: string;
}) => (
	<div className="border border-secondaryStroke flex flex-col flex-1 h-[52px] rounded-[4px] overflow-hidden hover:border-textPrimary/10 transition-colors">
		<div className="bg-secondaryStroke/50 border-b border-secondaryStroke h-[28px] flex items-center justify-center relative">
			<input
				placeholder="0.0"
				className="w-full px-[12px] text-textPrimary text-[14px] outline-none text-center bg-transparent"
			/>
			{suffix && (
				<span className="absolute right-[8px] text-textTertiary text-[14px]">
					{suffix}
				</span>
			)}
		</div>
		<div className="flex items-center justify-center h-[24px] gap-[4px]">
			<span className="text-textTertiary text-[12px]">{label}</span>
		</div>
	</div>
);

const ValueInput = ({ label, icon }: { label: string; icon: string }) => (
	<div className="border border-secondaryStroke flex flex-col flex-1 h-[52px] rounded-[4px] overflow-hidden hover:border-textPrimary/10 transition-colors">
		<input
			placeholder="0.0"
			className="bg-secondaryStroke/50 border-b border-secondaryStroke h-[28px] px-[12px] text-textPrimary text-[14px] outline-none text-center"
		/>
		<div className="flex items-center justify-center h-[24px] gap-[4px]">
			<i className={`${icon} text-textTertiary text-[12px]`} />
			<span className="text-textTertiary text-[12px]">{label}</span>
		</div>
	</div>
);

const MevMode = () => (
	<div className="flex items-center gap-[16px]">
		<div className="flex items-center gap-[4px] min-w-[100px]">
			<span className="text-textPrimary text-[12px] font-medium">MEV Mode</span>
			<i className="ri-information-line text-textTertiary text-[14px]" />
		</div>

		<div className="border border-secondaryStroke/50 rounded-[8px] p-[4px] flex gap-[1px] flex-1">
			<MevButton label="Off" active />
			<MevButton label="Reduced" />
			<MevButton label="Secure" />
		</div>
	</div>
);

const MevButton = ({ label, active }: { label: string; active?: boolean }) => (
	<button
		className={`
      flex-1 h-[24px] rounded-[4px] text-[12px] font-medium
      ${
				active
					? "bg-primaryBlue/15 text-primaryBlue"
					: "text-textSecondary hover:bg-primaryStroke/40"
			}
    `}
	>
		{label}
	</button>
);

const RpcInput = () => (
	<div className="border border-secondaryStroke rounded-full h-[32px] px-[12px] flex items-center gap-[8px] hover:bg-primaryStroke/10 transition-colors">
		<span className="text-textTertiary text-[14px] font-medium">RPC</span>
		<input
			placeholder="https://a...e.com"
			className="flex-1 bg-transparent outline-none text-[14px] text-textPrimary placeholder:text-textTertiary"
		/>
	</div>
);

const PulseSnipeSettingsModal = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Trigger */}
			<span className="contents">
				<button
					type="button"
					onClick={() => setOpen(true)}
					className="
            group flex items-center justify-center
            w-8 h-8 bg-background rounded-full
            hover:bg-primaryStroke/60 transition-colors
            relative
          "
				>
					<i className="ri-crosshair-2-line text-textSecondary group-hover:text-textPrimary text-[16px]" />
					<i className="ri-settings-3-line text-[12px] text-textSecondary group-hover:text-textPrimary absolute bottom-0 right-0" />
				</button>
			</span>

			{/* Modal */}
			{open && (
				<div className="fixed inset-0 z-[200] bg-[#090909]/40 flex items-center justify-center">
					<div
						className="relative w-[364px] max-h-[880px]"
						style={{ transform: "translateY(4px)" }}
						tabIndex={0}
					>
						<div className="flex flex-col w-full h-full bg-backgroundTertiary border border-secondaryStroke rounded-[4px] shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]">
							{/* Header */}
							<div className="flex h-[44px] px-[16px] pr-[12px] items-center justify-between border-b border-secondaryStroke">
								<span className="text-textPrimary text-[14px] font-medium">
									Snipe Settings
								</span>

								<button
									onClick={() => setOpen(false)}
									className="group p-[4px] w-[24px] h-[24px] rounded-[4px] hover:bg-secondaryStroke/20 transition-colors"
								>
									<i className="ri-close-line text-[16px] text-textSecondary group-hover:text-textPrimary" />
								</button>
							</div>

							{/* Body */}
							<div className="flex flex-col flex-1 p-[16px] gap-[16px] overflow-y-auto">
								{/* Inputs */}
								<div className="flex gap-[16px]">
									<PercentInput label="SLIPPAGE" suffix="%" />
									<ValueInput label="PRIORITY" icon="ri-gas-station-line" />
									<ValueInput label="BRIBE" icon="ri-coin-line" />
								</div>

								{/* MEV Mode */}
								<MevMode />

								{/* RPC */}
								<RpcInput />
							</div>

							{/* Footer */}
							<div className="border-t border-secondaryStroke/50 h-[68px] px-[16px] pb-[20px] flex items-center">
								<button
									onClick={() => setOpen(false)}
									className="
                    flex-1 bg-primaryBlue h-[32px]
                    rounded-full hover:bg-primaryBlue/80
                    transition-all duration-[150ms]
                  "
								>
									<span className="text-[14px] font-bold text-background">
										Continue
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PulseSnipeSettingsModal;
