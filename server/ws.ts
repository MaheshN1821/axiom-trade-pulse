import { WebSocketServer } from "ws";
import { tokens, mutateTokens } from "./data.ts";

const wss = new WebSocketServer({ port: 4001 });

wss.on("connection", (ws) => {
	ws.send(JSON.stringify({ type: "INIT", payload: tokens }));
});

setInterval(() => {
	mutateTokens();

	const payload = JSON.stringify({
		type: "UPDATE",
		payload: tokens,
	});

	wss.clients.forEach((client) => {
		if (client.readyState === 1) {
			client.send(payload);
		}
	});
}, 1500);

console.log("WebSocket server running on ws://localhost:4001");
