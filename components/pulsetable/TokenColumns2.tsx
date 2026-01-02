"use client";

import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import TokenRow from "./tokenRow";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { startMockTokenSocket } from "@/lib/ws/mockTokenSocket";
import { useTokens } from "../../hooks/useToken";
import { useMemo, useState } from "react";
import { sortTokens } from "@/lib/sortTokens";
import { splitPinned } from "@/lib/pinTokens";
import { SortState } from "@/types/sort";
import { TokenColumnSkeleton } from "../skeletons/tokenColumnSkeleton";
import "@/app/globals.css";

type Props = {
	title: string;
	scrollSync: {
		register: (el: HTMLDivElement | null) => void;
		onScroll: (el: HTMLDivElement) => void;
	};
};

const ROW_HEIGHT = 142;

export default function TokenColumn2({ title, scrollSync }: Props) {
	const parentRef = useRef<HTMLDivElement>(null);

	const queryClient = useQueryClient();

	const { data: tokens = [], isLoading } = useTokens(title);

	const [sort, setSort] = useState<SortState>({
		key: "marketCap",
		direction: "desc",
	});

	const visibleTokens = useMemo(() => {
		const { pinned, rest } = splitPinned(tokens);
		const sortedRest = sortTokens(rest, sort);
		return [...pinned, ...sortedRest];
	}, [tokens, sort]);

	useEffect(() => {
		startMockTokenSocket(queryClient, title);
	}, [queryClient, title]);

	const rowVirtualizer = useVirtualizer({
		count: visibleTokens.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => ROW_HEIGHT,
		overscan: 4,
	});

	if (isLoading) {
		return <TokenColumnSkeleton />;
	}

	const setRefs = (el: HTMLDivElement | null) => {
		parentRef.current = el;
		scrollSync.register(el);
	};

	return (
		<div className="flex flex-col w-full min-w-[300px]">
			{/* SCROLL CONTAINER */}
			<div
				ref={setRefs}
				onScroll={(e) => scrollSync.onScroll(e.currentTarget)}
				className="relative flex-1 overflow-hidden"
			>
				{/* TOTAL HEIGHT PLACEHOLDER */}
				<div
					style={{
						height: `${rowVirtualizer.getTotalSize()}px`,
						position: "relative",
					}}
				>
					{rowVirtualizer.getVirtualItems().map((virtualRow) => {
						const token = visibleTokens[virtualRow.index];

						return (
							<TokenRow
								key={token.id}
								token={token}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									transform: `translateY(${virtualRow.start}px)`,
								}}
								title={title}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
