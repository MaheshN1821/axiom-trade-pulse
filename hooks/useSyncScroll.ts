import { useRef } from "react";

export function useSyncScroll() {
	const refs = useRef<HTMLDivElement[]>([]);
	const isSyncing = useRef(false);

	function register(el: HTMLDivElement | null) {
		if (el && !refs.current.includes(el)) {
			refs.current.push(el);
		}
	}

	function onScroll(source: HTMLDivElement) {
		if (isSyncing.current) return;

		isSyncing.current = true;
		refs.current.forEach((el) => {
			if (el !== source) {
				el.scrollTop = source.scrollTop;
			}
		});

		requestAnimationFrame(() => {
			isSyncing.current = false;
		});
	}

	return { register, onScroll };
}
