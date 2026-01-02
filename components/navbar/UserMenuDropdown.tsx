"use client";

import { useEffect, useRef, useState } from "react";

const UserMenuDropdown = () => {
	const [open, setOpen] = useState<boolean>(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

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
      `}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-rocket-icon lucide-rocket"
							>
								<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
								<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
								<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
								<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
							</svg>
							<span
								className={`
          text-[14px] font-medium
          "text-textPrimary"
        `}
							>
								Feature Updates
							</span>
						</button>
						<MenuItem
							icon="ri-logout-box-line"
							label="Log Out"
							danger={true}
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
