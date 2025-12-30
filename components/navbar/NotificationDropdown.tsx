"use client";

import { useEffect, useRef, useState } from "react";

const NotificationDropdown = () => {
	const [open, setOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	// Close on click outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEscape);
		};
	}, []);

	return (
		<div ref={dropdownRef} className="relative flex">
			{/* Trigger Button */}
			<button
				onClick={() => setOpen((prev) => !prev)}
				aria-haspopup="true"
				aria-expanded={open}
				className="relative bg-primaryStroke hover:bg-secondaryStroke/80 flex w-[32px] h-[32px] justify-center items-center rounded-full"
			>
				<i className="ri-notification-3-line text-[18px] text-textPrimary" />
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
            animate-in fade-in zoom-in-95
          "
				>
					<div className="flex flex-col w-[300px] h-[396px]">
						{/* Header */}
						<div className="border-b border-secondaryStroke flex items-center pl-[16px] pr-[12px] h-[44px]">
							<span className="flex-1 text-textPrimary text-[14px]">
								Notifications
							</span>

							<button className="group flex flex-row p-[6px] h-[24px] mr-2 justify-center items-center hover:bg-primaryStroke/60 duration-150 ease-in-out cursor-pointer rounded-[4px] text-[14px]">
								<span className="text-textTertiary group-hover:text-textPrimary">
									Clear All
								</span>
							</button>

							<button
								onClick={() => setOpen(false)}
								className="group flex flex-row p-[4px] w-[22px] h-[22px] justify-center items-center hover:bg-primaryStroke/60 duration-150 ease-in-out cursor-pointer rounded-[4px]"
							>
								<i className="ri-close-line text-[18px] text-textTertiary group-hover:text-textPrimary" />
							</button>
						</div>

						{/* Body */}
						<div className="flex-1 overflow-y-auto" />
					</div>
				</div>
			)}
		</div>
	);
};

export default NotificationDropdown;
