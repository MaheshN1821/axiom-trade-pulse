export type SortKey = "marketCap" | "volume" | "age" | "txCount";

export type SortDirection = "asc" | "desc";

export type SortState = {
	key: SortKey;
	direction: SortDirection;
};
