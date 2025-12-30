"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

const WalletDropdown = () => {
	const [open, setOpen] = useState<boolean>(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	// Close on outside click & ESC
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};

		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEsc);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEsc);
		};
	}, []);

	return (
		<div ref={wrapperRef} className="relative flex">
			{/* Trigger */}
			<button
				onClick={() => setOpen((prev) => !prev)}
				className="w-fit min-w-max bg-primaryStroke flex h-[32px] px-[12px] py-[8px] gap-[8px] items-center rounded-full hover:bg-secondaryStroke/80 transition-colors"
			>
				<i className="ri-wallet-line text-textPrimary text-[18px]" />

				<div className="hidden xl:flex gap-[4px] items-center">
					<Image src="/images/sol-fill.svg" alt="SOL" width={16} height={16} />
					<span className="text-[14px] font-semibold text-textPrimary">0</span>
				</div>

				<div className="hidden xl:block w-[1px] h-full bg-secondaryStroke" />

				<div className="hidden xl:flex gap-[4px] items-center">
					<Image
						src="/images/usdc-perps.svg"
						alt="USDC"
						width={18}
						height={18}
					/>
					<span className="text-[14px] font-semibold text-textPrimary">0</span>
				</div>

				<i className="ri-arrow-down-s-line text-textPrimary text-[18px]" />
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
				>
					<div className="flex flex-col w-[264px]">
						{/* Total value */}
						<div className="border-b border-secondaryStroke p-[16px]">
							<div className="flex justify-between items-center mb-[8px]">
								<span className="text-textSecondary text-[12px]">
									Total Value
								</span>

								<div className="flex gap-[8px]">
									{["Solana", "Perps"].map((label) => (
										<button
											key={label}
											className="group flex gap-[4px] px-[4px] h-[24px] items-center rounded-[4px] hover:bg-primaryStroke/60"
										>
											<i className="ri-file-copy-line text-[14px] text-textTertiary group-hover:text-textSecondary" />
											<span className="text-textSecondary text-[12px]">
												{label}
											</span>
										</button>
									))}
								</div>
							</div>

							<span className="text-textPrimary text-[18px]">$0</span>
						</div>

						{/* Balance row */}
						<div className="group border-b border-secondaryStroke/50 h-[48px] flex items-center hover:bg-secondaryStroke/40 cursor-pointer">
							<div className="flex w-full px-[16px] justify-between items-center">
								<div className="flex gap-[4px] items-center">
									<img src="/images/sol-fill.svg" alt="SOL" width={18} />
									<span className="text-textPrimary text-[16px] font-medium">
										0
									</span>
								</div>

								<i className="ri-arrow-left-right-line text-[16px] text-textSecondary group-hover:text-textPrimary" />

								<div className="flex gap-[4px] items-center">
									<img src="/images/usdc-perps.svg" alt="USDC" width={18} />
									<span className="text-textPrimary text-[16px] font-medium">
										0
									</span>
								</div>
							</div>
						</div>

						{/* Actions */}
						<div className="p-[16px] pb-[20px] flex gap-[16px]">
							<button className="bg-primaryBlue flex-1 h-[28px] rounded-full hover:bg-primaryBlueHover">
								<span className="text-background text-[12px] font-bold">
									Deposit
								</span>
							</button>

							<button className="bg-secondaryStroke flex-1 h-[28px] px-[12px] flex flex-row justify-center items-center rounded-full hover:bg-secondaryStroke/80">
								<span className="text-textPrimary text-[12px] leading-[16px] font-bold">
									Withdraw
								</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default WalletDropdown;
