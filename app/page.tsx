import { Navbar } from "../components/navbar/Navbar";
import Pulse from "@/components/pulsetable/PulseMain";
import PulseFooter from "@/components/footer/footer";

export default function Home() {
	return (
		<main className="flex flex-col w-full h-screen bg-[#06070B]">
			<Navbar />
			<Pulse />
			<PulseFooter />
		</main>
	);
}
