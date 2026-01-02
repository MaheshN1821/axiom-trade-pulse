// lib/randomTextColor.ts
export const TEXT_COLORS = ["rgb(16, 185, 129)", "#F25461"] as const;

export type TextColorClass = (typeof TEXT_COLORS)[number];

export function getRandomTextColor(): TextColorClass {
	return TEXT_COLORS[Math.floor(Math.random() * TEXT_COLORS.length)];
}
