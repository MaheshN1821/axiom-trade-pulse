import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./proiders";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Axiom SOL | Pulse",
	description: "Built a replica of Axiom Pulse Table(only UI)",
	icons: {
		icon: "/images/axiom.svg",
		shortcut: "/favicon.ico",
		apple: "/images/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<head>
				<link
					href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
					rel="stylesheet"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
