import { QueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { TokenRowData } from "@/types/token";

export function startMockTokenSocket(queryClient: QueryClient, column: string) {
	setInterval(() => {
		queryClient.setQueryData<TokenRowData[]>(
			queryKeys.tokens(column),
			(old) => {
				if (!Array.isArray(old)) return old;

				return old.map((token) => {
					// randomly update 1–2 fields
					if (Math.random() < 0.3) {
						return {
							...token,
							marketCap: `$${(Math.random() * 10).toFixed(2)}K`,
							volume: `$${(Math.random() * 5).toFixed(1)}K`,
							txCount: token.txCount + Math.floor(Math.random() * 3),
							views: token.views + 1,
						};
					}
					return token;
				});
			}
		);
	}, 1500);
}
