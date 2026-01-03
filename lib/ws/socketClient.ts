import { io, Socket } from "socket.io-client";
import { QueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { TokenRowData } from "@/types/token";

let socket: Socket | null = null;

export function initSocket(queryClient: QueryClient, column: string) {
	if (!socket) {
		socket = io({
			path: "/api/socket",
		});

		socket.on("token:update", (update) => {
			queryClient.setQueryData<TokenRowData[]>(
				queryKeys.tokens(column),
				(old) => {
					if (!old) return old;

					return old.map((t) => ({
						...t,
						marketCap: update.marketCap,
						volume: update.volume,
						txCount: t.txCount + update.txInc,
						views: t.views + 1,
					}));
				}
			);
		});
	}
}
