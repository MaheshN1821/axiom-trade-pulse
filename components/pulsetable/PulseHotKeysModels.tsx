"use client";

import { useState } from "react";

const Section = ({ children }: { children: React.ReactNode }) => (
	<div className="p-[16px] flex flex-col gap-[12px] border-b border-secondaryStroke">
		{children}
	</div>
);

const ToggleRow = ({ label }: { label: string }) => (
	<div className="flex items-center justify-between h-[32px]">
		<span className="text-textSecondary text-[14px] font-medium">{label}</span>
		<Toggle />
	</div>
);

const Toggle = () => (
	<div className="relative w-[52px] h-[24px] rounded-full bg-primaryBlue">
		<div className="absolute w-[18px] h-[18px] bg-white rounded-full top-[3px] left-[30px]" />
	</div>
);

const InfoBox = () => (
	<div className="px-[16px]">
		<div className="flex gap-[6px] items-center bg-secondaryStroke/50 p-[8px] rounded-[4px]">
			<i className="ri-information-line text-[13px] text-textSecondary" />
			<span className="text-[12px] text-textSecondary">
				Combine the Pause + Modifier + Row keys to buy tokens
			</span>
		</div>
	</div>
);

const KeyRow = ({ label, value }: { label: string; value: string }) => (
	<div className="flex items-center justify-between h-[32px]">
		<span className="text-textSecondary text-[14px] font-medium">{label}</span>
		<KeyButton value={value} />
	</div>
);

const KeyButton = ({ value }: { value: string }) => (
	<button className="w-[72px] h-[32px] border border-secondaryStroke rounded-[4px] hover:border-primaryBlue hover:bg-primaryBlue/5">
		<span className="text-[12px] text-textPrimary">{value}</span>
	</button>
);

const ModifierSection = () => (
	<div className="p-[16px] flex flex-col gap-[12px]">
		<span className="text-textPrimary text-[13px] font-medium">
			Table Modifier Keys
		</span>
		<ModifierRow label="New Pairs" active="Shift" />
		<ModifierRow label="Final Stretch" active="Ctrl" />
		<ModifierRow label="Migrated" active="Alt" />
	</div>
);

const ModifierRow = ({ label, active }: { label: string; active: string }) => (
	<div className="flex items-center justify-between">
		<span className="text-textSecondary text-[14px]">{label}</span>
		<div className="flex gap-[8px]">
			{["Shift", "Ctrl", "Alt", "Win"].map((key) => (
				<button
					key={key}
					className={`h-[32px] px-[12px] rounded-[4px] border text-[12px]
            ${
							key === active
								? "border-primaryBlue bg-primaryBlue/10 text-primaryBlue"
								: "border-secondaryStroke text-textSecondary hover:bg-secondaryStroke/20"
						}`}
				>
					{key}
				</button>
			))}
		</div>
	</div>
);

const RowKeysSection = () => (
	<div className="p-[16px] flex flex-col gap-[12px]">
		<span className="text-textPrimary text-[13px] font-medium">Row Keys</span>
		{Array.from({ length: 10 }).map((_, i) => (
			<KeyRow key={i} label={`Row ${i + 1}`} value={`${(i + 1) % 10}`} />
		))}
	</div>
);

const PulseHotkeysModal = () => {
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
            w-8 h-8 relative rounded-full
            hover:bg-primaryStroke/60 bg-transparent
            transition-all duration-[150ms]
            ease-[cubic-bezier(0.4,0,0.2,1)]
          "
				>
					<i className="ri-keyboard-box-line text-[16px] text-textSecondary group-hover:text-textPrimary" />
				</button>
			</span>

			{/* Modal */}
			{open && (
				<div
					className="
            fixed inset-0 z-[200]
            bg-[#090909]/80 backdrop-blur-[2px]
            flex items-center justify-center
          "
				>
					<div
						className="
              flex flex-col w-[452px] max-h-[90vh]
              bg-backgroundTertiary
              border border-secondaryStroke
              rounded-[4px]
              shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]
            "
					>
						{/* Header */}
						<div className="flex h-[44px] px-[16px] pr-[12px] items-center justify-between border-b border-secondaryStroke">
							<span className="text-textPrimary text-[14px] font-medium">
								Pulse Hotkeys
							</span>

							<button
								onClick={() => setOpen(false)}
								className="group p-[4px] w-[24px] h-[24px] rounded-[4px] hover:bg-secondaryStroke/20 transition-colors"
							>
								<i className="ri-close-line text-[16px] text-textSecondary group-hover:text-textPrimary" />
							</button>
						</div>

						{/* Body */}
						<div className="flex flex-col flex-1 overflow-y-auto">
							<Section>
								<ToggleRow label="Hotkeys" />
								<p className="text-textTertiary text-[12px]">
									Quick buy tokens with custom hotkeys
								</p>
							</Section>

							<Section>
								<ToggleRow label="Pause live feed on Hover" />
							</Section>

							<InfoBox />

							<Section>
								<KeyRow label="Pause Key" value="Space" />
							</Section>

							<ModifierSection />
							<RowKeysSection />
						</div>

						{/* Footer */}
						<div className="flex items-center h-[68px] px-[16px] border-t border-secondaryStroke/50">
							<button className="group flex items-center gap-[8px] px-[12px] h-[32px] rounded-full hover:brightness-110">
								<i className="ri-reset-left-line text-[14px] text-textTertiary group-hover:text-textSecondary" />
								<span className="text-[14px] text-textSecondary font-medium">
									Reset
								</span>
							</button>

							<div className="flex-1" />

							<button className="bg-primaryBlue px-[12px] h-[32px] rounded-full hover:bg-primaryBlue/80">
								<span className="text-[14px] font-bold text-background">
									Done
								</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PulseHotkeysModal;
