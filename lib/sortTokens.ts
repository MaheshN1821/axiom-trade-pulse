import { TokenRowData } from "@/types/token";
import { SortState } from "@/types/sort";

function parseDollar(value: string) {
	return Number(value.replace("$", "").replace("K", ""));
}

export function sortTokens(
	tokens: TokenRowData[],
	sort: SortState
): TokenRowData[] {
	const sorted = [...tokens];

	sorted.sort((a, b) => {
		let av = 0;
		let bv = 0;

		switch (sort.key) {
			case "marketCap":
				av = parseDollar(a.marketCap);
				bv = parseDollar(b.marketCap);
				break;
			case "volume":
				av = parseDollar(a.volume);
				bv = parseDollar(b.volume);
				break;
			case "txCount":
				av = a.txCount;
				bv = b.txCount;
				break;
			case "age":
				av = parseInt(a.age);
				bv = parseInt(b.age);
				break;
		}

		return sort.direction === "asc" ? av - bv : bv - av;
	});

	return sorted;
}
