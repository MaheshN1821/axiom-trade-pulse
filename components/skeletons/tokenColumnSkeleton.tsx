import { TokenRowSkeleton } from "./tokenRowSkeleton";

export function TokenColumnSkeleton() {
	return (
		<div className="flex flex-col">
			{Array.from({ length: 5 }).map((_, i) => (
				<TokenRowSkeleton key={i} />
			))}
		</div>
	);
}
