import { Server } from "socket.io";
import { NextResponse } from "next/server";

let io: Server | null = null;

export async function GET() {
	if (!io) {
		io = new Server({
			path: "/api/socket",
			cors: { origin: "*" },
		});

		io.on("connection", (socket) => {
			console.log("Client connected:", socket.id);

			const interval = setInterval(() => {
				socket.emit("token:update", {
					id: crypto.randomUUID(),
					price: (Math.random() * 100).toFixed(2),
				});
			}, 2000);

			socket.on("disconnect", () => {
				clearInterval(interval);
				console.log("Client disconnected:", socket.id);
			});
		});
	}

	return NextResponse.json({ ok: true });
}