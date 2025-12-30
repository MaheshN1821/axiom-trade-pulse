export default function DepositButton() {
	return (
		<button
			type="button"
			className="
        hidden sm:flex
        h-[32px]
        px-[12px]
        items-center
        rounded-full
        bg-primaryBlue
        hover:bg-primaryBlueHover
        transition-colors
      "
		>
			<span className="text-[14px] font-bold text-background whitespace-nowrap">
				Deposit
			</span>
		</button>
	);
}
