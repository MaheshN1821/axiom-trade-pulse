"use client";

import { useState } from "react";

const Section = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => (
	<div className="flex flex-col gap-[12px] px-[16px] py-[16px]">
		<span className="text-textSecondary text-[12px]">{title}</span>
		{children}
	</div>
);

const MetricButton = ({
	label,
	active,
}: {
	label: string;
	active?: boolean;
}) => (
	<button
		className={`
      flex-1 h-[52px] rounded-[4px] border
      text-[12px] font-medium
      transition-colors duration-150
      ${
				active
					? "bg-secondaryStroke text-textSecondary"
					: "border-secondaryStroke/50 text-textTertiary hover:bg-secondaryStroke/40"
			}
    `}
	>
		{label}
	</button>
);

const QuickBuyButton = ({
	label,
	active,
}: {
	label: string;
	active?: boolean;
}) => (
	<button
		className={`
      flex-1 h-[52px] rounded-[4px] border
      text-[12px] transition-colors duration-150
      ${
				active
					? "bg-secondaryStroke border-secondaryStroke text-textSecondary"
					: "border-secondaryStroke/50 hover:bg-secondaryStroke/40 text-textTertiary"
			}
    `}
	>
		{label}
	</button>
);

const MenuItem = ({ icon, label }: { icon: string; label: string }) => (
	<button
		className="
      flex items-center gap-[8px] px-[12px]
      h-[36px] w-full rounded-[4px]
      hover:bg-secondaryStroke/60 transition-colors
    "
	>
		<i className={`${icon} text-[16px] text-textSecondary`} />
		<span className="text-[14px] text-textPrimary font-medium">{label}</span>
	</button>
);

const TabButton = ({ label, active }: { label: string; active?: boolean }) => (
	<button
		className={`
      h-[20px] px-[12px] rounded-full text-[14px] font-medium
      ${
				active
					? "bg-secondaryStroke text-textPrimary"
					: "bg-secondary/80 text-textTertiary"
			}
    `}
	>
		{label}
	</button>
);

const Chip = ({ label }: { label: string }) => (
	<button
		className="
      h-[28px] px-[7px] border rounded-[4px]
      border-secondaryStroke/50
      text-[12px] font-medium text-textSecondary
      hover:bg-secondaryStroke/30 transition-colors
    "
	>
		{label}
	</button>
);

const Divider = () => (
	<div className="h-[1px] bg-secondaryStroke/50 my-[16px]" />
);

const DisplayDropdownContainer = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="relative flex">
			{/* Trigger */}
			<button
				onClick={() => setOpen((prev) => !prev)}
				// onClick={() => console.log("im clikced")}
				className="
          bg-primaryStroke flex h-[32px] px-[12px] gap-[8px]
          justify-center items-center rounded-full
          hover:bg-secondaryStroke/80
          transition-colors duration-150 ease-in-out
        "
			>
				<i className="ri-list-check text-[18px] text-textPrimary" />
				<span className="text-[14px] font-bold text-textPrimary">Display</span>
				<i className="ri-arrow-down-s-line text-[18px] text-textPrimary" />
			</button>

			{/* Dropdown */}
			{open && (
				<div
					className="
            absolute right-0 top-[40px]
            z-[9999]
            shadow-dropdown
            bg-backgroundTertiary
            border border-secondaryStroke
            rounded-[4px]
            origin-top-right
          "
					style={{
						transform: "translateY(4px)",
						maxHeight: "579px",
					}}
				>
					<div className="flex flex-col min-w-[344px] overflow-hidden">
						{/* Metrics */}
						<Section title="Metrics">
							<div className="flex gap-[8px]">
								<MetricButton label="Small" active={false} />
								<MetricButton label="Large" active />
							</div>
						</Section>

						{/* Quick Buy */}
						<Section title="Quick Buy">
							<div className="flex flex-wrap gap-[8px]">
								<QuickBuyButton label="Small" active />
								<QuickBuyButton label="Large" />
								<QuickBuyButton label="Mega" />
								<QuickBuyButton label="Ultra" />
							</div>
						</Section>

						{/* Theme */}
						<div className="px-[16px] pb-[8px]">
							<MenuItem icon="ri-sun-line" label="Grey" />
						</div>

						{/* Tabs */}
						<div className="flex gap-[8px] px-[16px] py-[8px] border-b border-secondaryStroke">
							<TabButton label="Layout" active />
							<TabButton label="Metrics" />
							<TabButton label="Row" />
							<TabButton label="Extras" />
						</div>

						{/* Scrollable Options */}
						<div className="flex-1 overflow-y-auto px-[16px] py-[16px] space-y-[8px]">
							<MenuItem icon="ri-search-fill" label="Show Search Bar" />
							<MenuItem icon="ri-hashtag" label="No Decimals" />
							<MenuItem icon="ri-eye-line" label="Show Hidden Tokens" />
							<MenuItem icon="ri-rectangle-line" label="Circle Images" />
							<MenuItem icon="ri-loader-4-line" label="Progress Bar" />
							<MenuItem icon="ri-layout-grid-line" label="Spaced Tables" />
						</div>

						<Divider />

						{/* Customize rows */}
						<Section title="Customize rows">
							<div className="flex flex-wrap gap-[8px]">
								{[
									"Image Reuse",
									"Market Cap",
									"Volume",
									"Fees",
									"TX",
									"Socials",
									"Holders",
									"Pro Traders",
									"KOLs",
									"Bundlers",
									"Dex Paid",
								].map((item) => (
									<Chip key={item} label={item} />
								))}
							</div>
						</Section>
					</div>
				</div>
			)}
		</div>
	);
};

export default DisplayDropdownContainer;
