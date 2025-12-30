"use client";

import { useEffect, useRef, useState } from "react";

const UserMenuDropdown = () => {
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
				className="bg-primaryStroke flex flex-row w-[32px] h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-secondaryStroke/80"
				aria-haspopup="menu"
				aria-expanded={open}
			>
				<i className="text-textPrimary ri-user-settings-line text-[18px]" />
			</button>

			{/* Dropdown */}
			{open && (
				<div
					className="
            absolute right-0 top-[36px]
            z-[9999]
            shadow-dropdown
            bg-backgroundTertiary
            border border-secondaryStroke
            rounded-[4px]
            origin-top-right
          "
				>
					<div className="flex flex-col gap-[4px] p-[4px] w-[216px]">
						<MenuItem icon="ri-user-line" label="Account and Security" />
						<MenuItem icon="ri-settings-2-line" label="Settings" />
						<MenuItem icon="ri-translate-2" label="Auto Translate" />
						<MenuItem icon="icon-rocket" label="Feature Updates" />

						<MenuItem
							icon="ri-logout-box-line"
							label="Log Out"
							danger
							className="mt-[4px]"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenuDropdown;

type MenuItemProps = {
	icon: string;
	label: string;
	danger?: boolean;
	className?: string;
};

const MenuItem = ({
	icon,
	label,
	danger = false,
	className = "",
}: MenuItemProps) => {
	return (
		<button
			type="button"
			className={`
        flex items-center gap-[8px]
        px-[12px]
        w-full h-[40px] sm:h-[36px]
        text-left justify-start
        rounded-[8px] sm:rounded-[4px]
        transition-colors duration-0
        hover:bg-secondaryStroke/60
        group
        ${className}
      `}
		>
			<i
				className={`
          ${icon} text-[16px]
          transition-colors
          ${
						danger
							? "text-decrease group-hover:text-decrease"
							: "text-textSecondary group-hover:text-textPrimary"
					}
        `}
			/>
			<span
				className={`
          text-[14px] font-medium
          ${danger ? "text-decrease" : "text-textPrimary"}
        `}
			>
				{label}
			</span>
		</button>
	);
};
