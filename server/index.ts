import "./ws.ts";
import express from "express";
import cors from "cors";
import { tokens, mutateTokens } from "./data.ts";

const app = express();
app.use(cors());

app.get("/tokens", (_, res) => {
	res.json(tokens);
});

app.listen(4000, () => {
	console.log("REST API running on http://localhost:4000");
});

// NOTE:
// This Express + WebSocket server is for local development only.
// It is intentionally excluded from the Next.js build and not deployed to Vercel.
