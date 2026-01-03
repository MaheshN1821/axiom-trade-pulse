import { NextResponse } from "next/server";
import { mockTokens } from "@/mocks/token";

export async function GET(
	req: Request,
	context: { params: Promise<{ column: string }> }
) {
	const { column } = await context.params; //

	// optional: column-based shuffling
	const shuffled = [...mockTokens].sort(() => 0.5 - Math.random());

	return NextResponse.json({
		column,
		tokens: shuffled.slice(0, 15),
	});
}
