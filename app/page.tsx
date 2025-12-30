import { Navbar } from "../components/navbar/Navbar";

export default function Home() {
	return (
		<main className="flex flex-col w-full h-screen bg-[#06070B]">
			<Navbar />
			<div className="flex-1 p-6">
				<h1 className="text-2xl font-bold text-[rgb(252,252,252)]">
					Axiom Trade - Pulse
				</h1>
			</div>
		</main>
	);
}
// import Navbar from "@/components/navbar/Navbar";

// export default function Home() {
// 	return (
// 		<>
//       <Navbar/>
// 		</>
// 	);
// }
