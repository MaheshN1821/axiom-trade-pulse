"use client";

import Tooltip from "./Tooltiphelper";

const Additional = () => {
	return (
		<div className="hidden sm:block">
			<div
				className="
          grayscale-[30%] hover:grayscale-0 transition-[filter]
          relative flex w-full h-[28px] gap-[8px]
          px-[16px] pb-[1px]
          border-b border-primaryStroke sm:border-primaryStroke/50
        "
			>
				{/* Left controls */}
				<Tooltip label="Settings">
					<div className="flex h-full items-center z-20 gap-[8px]">
						<button
							type="button"
							className="
              min-w-[24px] min-h-[24px]
              flex items-center justify-center
              text-textTertiary hover:text-textSecondary
              hover:bg-primaryStroke/60
              transition-colors duration-125 ease-in-out
              rounded-[4px]
            "
						>
							<i className="ri-settings-3-line text-[14px]" />
						</button>
					</div>
				</Tooltip>

				{/* Divider */}

				<div className="flex h-full items-center z-20 gap-[8px]">
					<div className="w-[1px] h-[16px] bg-primaryStroke" />
				</div>

				{/* Star / Chart */}

				<div className="flex h-full items-center z-20 gap-[8px]">
					<Tooltip label="WatchList">
						<button
							type="button"
							className="
              min-w-[24px] min-h-[24px]
              flex items-center justify-center
              text-textTertiary hover:text-textSecondary
              hover:bg-primaryStroke/60
              transition-colors duration-125 ease-in-out
              rounded-[4px]
            "
						>
							<i className="ri-star-line text-[14px]" />
						</button>
					</Tooltip>

					<Tooltip label="Active Positions">
						<button
							type="button"
							className="
              min-w-[24px] min-h-[24px]
              flex items-center justify-center
              text-textSecondary
              hover:bg-primaryStroke/60
              transition-colors duration-125 ease-in-out
              rounded-[4px]
            "
						>
							<i className="ri-line-chart-line text-[14px]" />
						</button>
					</Tooltip>
				</div>

				{/* Divider */}
				<div className="flex h-full items-center z-20 gap-[8px]">
					<div className="w-[1px] h-[16px] bg-primaryStroke" />
				</div>

				{/* Ticker / Scroll Area */}
				<div className="flex flex-1 items-center overflow-hidden">
					<div
						className="
              h-full flex gap-[1px] pt-[1px] items-center
              overflow-x-auto
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              animate-ticker
            "
					>
						<div
							style={{
								width: 0,
								height: "100%",
								position: "relative",
								display: "flex",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Additional;
