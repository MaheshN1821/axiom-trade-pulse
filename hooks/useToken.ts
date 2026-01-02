import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/lib/api/fetchTokens";
import { queryKeys } from "@/lib/queryKeys";

export function useTokens(column: string) {
	return useQuery({
		queryKey: queryKeys.tokens(column),
		queryFn: () => fetchTokens(column),
	});
}
