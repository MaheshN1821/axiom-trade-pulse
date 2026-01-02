// Fisher–Yates shuffle (deterministic with seed)
export function shuffleWithSeed<T>(array: T[], seed: string): T[] {
	const result = [...array];
	let hash = 0;

	for (let i = 0; i < seed.length; i++) {
		hash = seed.charCodeAt(i) + ((hash << 5) - hash);
	}

	for (let i = result.length - 1; i > 0; i--) {
		hash = (hash * 9301 + 49297) % 233280;
		const j = Math.abs(hash) % (i + 1);
		[result[i], result[j]] = [result[j], result[i]];
	}

	return result;
}
