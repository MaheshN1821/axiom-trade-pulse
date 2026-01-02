"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { getRandomTextColor } from "@/lib/randomTextColor";

type Placement = "top" | "bottom" | "left" | "right";

type TooltipProps = {
	label: string;
	children: ReactNode;
};

const Tooltip = ({ label, children }: TooltipProps) => {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const tooltipRef = useRef<HTMLSpanElement | null>(null);
	const randomColor = getRandomTextColor();

	const [placement, setPlacement] = useState<Placement>("top");

	useEffect(() => {
		if (!wrapperRef.current || !tooltipRef.current) return;

		const wrapperRect = wrapperRef.current.getBoundingClientRect();
		const tooltipRect = tooltipRef.current.getBoundingClientRect();

		const space = {
			top: wrapperRect.top,
			bottom: window.innerHeight - wrapperRect.bottom,
			left: wrapperRect.left,
			right: window.innerWidth - wrapperRect.right,
		};

		const fits = {
			top: space.top >= tooltipRect.height,
			bottom: space.bottom >= tooltipRect.height,
			left: space.left >= tooltipRect.width,
			right: space.right >= tooltipRect.width,
		};

		// Priority order (you can change this)
		if (fits.top) setPlacement("top");
		else if (fits.bottom) setPlacement("bottom");
		else if (fits.right) setPlacement("right");
		else if (fits.left) setPlacement("left");
	}, []);

	return (
		<div ref={wrapperRef} className="relative lg:inline-flex group">
			{children}

			<span
				ref={tooltipRef}
				style={{ color: randomColor }}
				className={`
          absolute z-50
          px-2 py-1 text-xs rounded
          bg-backgroundTertiary 
          border border-secondaryStroke
          shadow-dropdown
          whitespace-nowrap
          pointer-events-none
          transition-opacity duration-150
          opacity-0 group-hover:opacity-100
          ${getPlacementClasses(placement)}
        `}
			>
				{label}
			</span>
		</div>
	);
};

export default Tooltip;

function getPlacementClasses(p: Placement) {
	switch (p) {
		case "top":
			return "bottom-full mb-2 left-1/2 -translate-x-1/2";
		case "bottom":
			return "top-full mt-2 left-1/2 -translate-x-1/2";
		case "left":
			return "right-full mr-2 top-1/2 -translate-y-1/2";
		case "right":
			return "left-full ml-2 top-1/2 -translate-y-1/2";
	}
}
