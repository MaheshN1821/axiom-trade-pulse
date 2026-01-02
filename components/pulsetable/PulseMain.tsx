"use client";

import PulseHeaderBar from "./PulseHeaderBar";
import NewPairsHeaderWithTradingSettings from "./PulseSubHeader";
import TokenColumn from "./TokenColumns";
import { useSyncScroll } from "@/hooks/useSyncScroll";

export default function Pulse() {
	const scrollSync = useSyncScroll();

	return (
		<div className="flex flex-1 flex-row min-h-0 overflow-hidden relative">
			<div className="flex flex-1 min-h-0 overflow-auto">
				<div className="flex flex-col w-full h-full gap-[16px] py-[24px] px-[16px] lg:px-[24px] justify-start items-center overflow-hidden">
					<PulseHeaderBar />
					<div className="flex-1 border-primaryStroke bg-backgroundSecondary border-[1px] flex flex-row w-full justify-start items-start rounded-[8px] sm:rounded-[4px] overflow-hidden">
						<div className="flex flex-1 h-full bg-backgroundSecondary rounded-[8px] sm:rounded-[4px] overflow-hidden">
							<div className="border-r-[1px] border-primaryStroke flex flex-1 flex-col h-full justify-start items-center overflow-hidden">
								<NewPairsHeaderWithTradingSettings title="New Pairs" />
								<div className="flex flex-1 w-full relative">
									<div className="absolute inset-0 overflow-y-auto">
										<TokenColumn title="New Pairs" scrollSync={scrollSync} />
									</div>
								</div>
							</div>
							<div className="border-r-[1px] border-primaryStroke flex flex-1 flex-col h-full justify-start items-center overflow-hidden">
								<NewPairsHeaderWithTradingSettings title="Final Stretch" />
								<div className="flex flex-1 w-full relative">
									<div className="absolute inset-0 overflow-y-auto">
										<TokenColumn
											title="Final Stretch"
											scrollSync={scrollSync}
										/>
									</div>
								</div>
							</div>
							<div className="border-r-[1px] border-primaryStroke flex flex-1 flex-col h-full justify-start items-center overflow-hidden">
								<NewPairsHeaderWithTradingSettings title="Migrated" />
								<div className="flex flex-1 w-full relative">
									<div className="absolute inset-0 overflow-y-auto">
										<TokenColumn title="Migrated" scrollSync={scrollSync} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
