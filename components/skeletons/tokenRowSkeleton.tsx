export function TokenRowSkeleton() {
  return (
    <div className="border-b border-primaryStroke/50 h-[142px] sm:h-[116px] w-full flex gap-3 px-3 py-3">
      {/* Left image */}
      <div className="w-[74px] h-[74px] rounded bg-backgroundSecondary shimmer" />

      {/* Middle content */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="w-32 h-4 rounded shimmer" />
          <div className="w-24 h-3 rounded shimmer" />
        </div>

        <div className="flex gap-2">
          <div className="w-10 h-3 rounded shimmer" />
          <div className="w-10 h-3 rounded shimmer" />
          <div className="w-10 h-3 rounded shimmer" />
        </div>
      </div>

      {/* Right stats */}
      <div className="flex flex-col items-end justify-between">
        <div className="w-16 h-4 rounded shimmer" />
        <div className="w-14 h-3 rounded shimmer" />
      </div>
    </div>
  );
}
