"use client";

import { CircleChevronUp, MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SearchBox from "./SearchBox";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="mt-4 border-b-2 pb-4 px-4 sm:px-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2 sm:gap-4">
					<Link className="italic font-black text-2xl sm:text-3xl" href="/">
						Wolt
					</Link>
					<div className="hidden sm:flex items-center gap-2">
						<MapPin
							size={32}
							className="text-orange-600 bg-rose-200 rounded-full p-1 sm:p-2"
						/>
						<div className="flex items-center gap-1 sm:gap-2">
							<p className="text-orange-600 font-semibold text-sm sm:text-base">
								Almaty
							</p>
							<CircleChevronUp className="text-orange-600" />
						</div>
					</div>
				</div>

				<div className="hidden md:block flex-grow max-w-md mx-4">
					<SearchBox />
				</div>

				<div className="hidden sm:flex items-center gap-4">
					<Link
						href="/login"
						className="text-sm sm:text-base hover:text-orange-600 transition-colors"
					>
						Log in
					</Link>
					<Link
						href="/signup"
						className="text-orange-600 bg-rose-200 font-bold px-3 py-2 sm:px-5 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-rose-300 transition-colors"
					>
						Sign up
					</Link>
				</div>

				<button
					className="sm:hidden text-orange-600"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="sm:hidden mt-4 flex flex-col gap-4">
					<SearchBox />
					<div className="flex items-center gap-2">
						<MapPin
							size={24}
							className="text-orange-600 bg-rose-200 rounded-full p-1"
						/>
						<div className="flex items-center gap-1">
							<p className="text-orange-600 font-semibold text-sm">Almaty</p>
							<CircleChevronUp className="text-orange-600" size={16} />
						</div>
					</div>
					<Link
						href="/login"
						className="text-sm hover:text-orange-600 transition-colors"
					>
						Log in
					</Link>
					<Link
						href="/signup"
						className="text-orange-600 bg-rose-200 font-bold px-3 py-2 rounded-lg text-sm text-center hover:bg-rose-300 transition-colors"
					>
						Sign up
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
