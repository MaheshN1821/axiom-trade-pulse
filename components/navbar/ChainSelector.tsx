"use client";
import Image from "next/image";

interface ChainSelectorProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function ChainSelector({ open, onOpenChange }: ChainSelectorProps) {
	return (
		<div className="relative">
			<button
				onClick={() => onOpenChange(!open)}
				className="hover:brightness-125 border-[2px] border-[rgba(20,241,149,0.1)] flex flex-shrink-0 flex-row h-[32px] pl-[8px] pr-[6px] gap-[6px] justify-center items-center rounded-full transition-all duration-150 ease-in-out active:scale-[0.96]"
			>
				<Image src="/sol-fill.svg" alt="SQL" width={16} height={16} />
				<span className="text-[14px] text-textPrimary font-medium">SOL</span>
				<i className="text-textPrimary ri-arrow-down-s-line text-[18px]"></i>
			</button>

			{open && (
				<div
					className="absolute top-full right-0 mt-1 bg-[rgb(24,24,26)] rounded shadow-lg z-50 p-1 flex flex-col gap-[4px] min-w-[152px] shadow-dropdown
				    bg-backgroundTertiary
				    border border-secondaryStroke"
				>
					{/* Solana */}
					<button
						type="button"
						className="
				        relative w-full px-[12px] h-[40px]
				        text-left text-[14px]
				        hover:bg-secondaryStroke/80
				        text-textSecondary
				        rounded-[4px]
				        transition-all duration-150
				        active:scale-[0.98]
				        bg-secondaryStroke/40
				      "
					>
						<div className="flex items-center gap-2">
							<img
								src="/images/sol-fill.svg"
								alt="Solana"
								width={18}
								height={18}
								className="flex-shrink-0"
							/>
							<span className="text-[14px] font-medium truncate text-textPrimary">
								Solana
							</span>
						</div>
					</button>

					{/* BNB */}
					<button
						type="button"
						className="
				        relative w-full px-[12px] h-[40px]
				        text-left text-[14px]
				        hover:bg-secondaryStroke/80
				        text-textSecondary
				        rounded-[4px]
				        transition-all duration-150
				        active:scale-[0.98]
				      "
					>
						<div className="flex items-center gap-2">
							<img
								src="/images/sol-fill.svg"
								alt="BNB"
								width={18}
								height={18}
								className="flex-shrink-0"
							/>
							<span className="text-[14px] font-medium truncate text-textSecondary">
								BNB
							</span>
						</div>
					</button>
				</div>
			)}
		</div>
	);
}

// above correct

// "use client";

// export default function ChainSelector() {
// 	return (
// 		<button
// 			type="button"
// 			className="
//         hidden sm:flex
//         h-[32px]
//         pl-[8px] pr-[6px]
//         gap-[6px]
//         items-center
//         rounded-full
//         border-[2px]
//         transition-all duration-150 ease-in-out
//         active:scale-[0.96]
//         hover:brightness-125
//       "
// 			style={{ borderColor: "rgba(20, 241, 149, 0.1)" }}
// 		>
// 			<img
// 				src="/images/sol-fill.svg"
// 				alt="Solana"
// 				className="w-[16px] h-[16px]"
// 			/>

// 			<span className="text-[14px] font-medium text-textPrimary">SOL</span>

// 			<i className="ri-arrow-down-s-line text-[18px] text-textPrimary" />
// 		</button>
// 	);
// }
