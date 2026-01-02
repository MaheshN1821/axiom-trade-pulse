import { TokenRowData } from "@/types/token";

export function splitPinned(tokens: TokenRowData[]) {
	const pinned: TokenRowData[] = [];
	const rest: TokenRowData[] = [];

	tokens.forEach((t) => {
		if (t.txCount > 20 || t.views > 50) {
			pinned.push(t);
		} else {
			rest.push(t);
		}
	});

	return { pinned, rest };
}
