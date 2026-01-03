import { QueryClient } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";

export function initTokenSocket(queryClient: QueryClient, column: string) {
	const ws = new WebSocket("ws://localhost:4001");

	ws.onmessage = (event) => {
		const message = JSON.parse(event.data);

		if (message.type === "TOKEN_UPDATE") {
			queryClient.setQueryData(queryKeys.tokens(column), message.data);
		}
	};

	return () => ws.close();
}
