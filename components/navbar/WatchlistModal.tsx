"use client";

import { useEffect, useRef, useState } from "react";

const WatchlistModal = () => {
	const [open, setOpen] = useState<boolean>(false);
	const modalRef = useRef<HTMLDivElement | null>(null);

	// Close on backdrop click & ESC
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setOpen(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<>
			{/* Trigger Button */}
			<button
				onClick={() => setOpen(true)}
				className="bg-primaryStroke hover:bg-secondaryStroke/80 flex w-[32px] h-[32px] justify-center items-center rounded-full"
			>
				<i className="ri-star-line text-textPrimary text-[18px]" />
			</button>

			{/* Modal */}
			{open && (
				<div className="fixed inset-0 z-[200] flex items-center justify-center">
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-[#090909]/80 backdrop-blur-[2px]"
						onClick={() => setOpen(false)}
					/>

					{/* Modal Content */}
					<div
						ref={modalRef}
						className="
              relative
              flex flex-col
              min-w-[596px] max-w-[596px]
              min-h-[520px]
              bg-backgroundTertiary
              border border-secondaryStroke
              rounded-[4px]
              shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]
            "
					>
						{/* Header */}
						<div className="border-b border-primaryStroke flex items-center justify-between h-[44px] pl-[16px] pr-[16px]">
							<span className="text-textPrimary text-[14px] font-medium">
								Watchlist
							</span>

							<button
								onClick={() => setOpen(false)}
								className="group p-[4px] w-[24px] h-[24px] hover:bg-secondaryStroke/20 rounded-[4px]"
							>
								<i className="ri-close-line text-textSecondary text-[16px] group-hover:text-textPrimary" />
							</button>
						</div>

						{/* Table Header */}
						<div className="border-b border-primaryStroke/50 flex h-[28px] px-[16px] sticky top-0 bg-backgroundTertiary z-10">
							{["Token", "Market Cap", "1h Volume ↓", "Liquidity"].map(
								(label) => (
									<div
										key={label}
										className="flex-1 flex items-center text-textTertiary text-[12px]"
									>
										{label}
									</div>
								)
							)}
							<div className="w-[32px] text-textTertiary text-[12px]">
								Actions
							</div>
						</div>

						{/* Body */}
						<div className="flex-1 overflow-y-auto flex items-center justify-center">
							<div className="flex flex-col items-center gap-[16px] p-[32px]">
								<i className="ri-star-line text-[32px] text-textTertiary" />
								<div className="flex flex-col items-center gap-[8px]">
									<span className="text-textSecondary text-[14px] font-medium">
										Your watchlist is empty
									</span>
									<span className="text-textTertiary text-[12px] text-center">
										Add tokens to your watchlist by clicking the star icon on
										any token page
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default WatchlistModal;
