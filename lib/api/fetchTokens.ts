import { TokenRowData } from "@/types/token";
import { mockTokens } from "../../mocks/token";
import { shuffleWithSeed } from "@/lib/utils/shuffle";

export async function fetchTokens(column: string): Promise<TokenRowData[]> {
	// simulate network latency
	await new Promise((r) => setTimeout(r, 300));

	const shuffled = shuffleWithSeed(mockTokens, column);

	return shuffled.map((t) => ({
		...t,
		id: `${column}-${t.id}`,
	}));
}
