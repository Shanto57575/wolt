import Image from "next/image";
import play from "../../../public/play.png";
import { Globe, MapPin, Settings } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-zinc-900 text-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
					<div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-4">
						<h1 className="text-2xl sm:text-3xl font-extrabold italic">Wolt</h1>
						<Image
							src={play}
							alt="playstore img"
							width={200}
							height={40}
							className="w-auto h-auto"
						/>
					</div>
					<div>
						<h3 className="text-gray-400 font-semibold mb-2 text-sm">
							Partner with Wolt
						</h3>
						<ul className="space-y-1 text-xs sm:text-sm">
							<li>For couriers</li>
							<li>For merchants</li>
							<li>For affiliates</li>
						</ul>
					</div>
					<div>
						<h3 className="text-gray-400 font-semibold mb-2 text-sm">
							Company
						</h3>
						<ul className="space-y-1 text-xs sm:text-sm">
							<li>About us</li>
							<li>What we stand for</li>
							<li>Jobs</li>
							<li>Sustainability</li>
							<li>Security</li>
							<li>Investors</li>
						</ul>
					</div>
					<div>
						<h3 className="text-gray-400 font-semibold mb-2 text-sm">
							Products
						</h3>
						<ul className="space-y-1 text-xs sm:text-sm">
							<li>Wolt Drive</li>
							<li>Wolt Market</li>
							<li>Wolt+</li>
							<li>Wolt for Work</li>
							<li>Wolt Ads</li>
						</ul>
					</div>
					<div>
						<h3 className="text-gray-400 font-semibold mb-2 text-sm">
							Useful links
						</h3>
						<ul className="space-y-1 text-xs sm:text-sm">
							<li>Support</li>
							<li>Newsroom</li>
							<li>Contact</li>
							<li>Speak up</li>
							<li>Promo codes</li>
							<li>Developers</li>
						</ul>
					</div>
					<div>
						<h3 className="text-gray-400 font-semibold mb-2 text-sm">
							Follow us
						</h3>
						<ul className="space-y-1 text-xs sm:text-sm">
							<li>Blog</li>
							<li>Engineering Blog</li>
							<li>Instagram</li>
							<li>Facebook</li>
							<li>X</li>
							<li>LinkedIn</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="border-t border-gray-700 mt-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
					<div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
						<div className="flex flex-wrap justify-center sm:justify-start gap-4">
							<div className="flex items-center space-x-2 text-sm">
								<MapPin size={18} />
								<span>Choose country</span>
							</div>
							<div className="flex items-center space-x-2 text-sm">
								<Globe size={18} />
								<span>English</span>
							</div>
							<div className="flex items-center space-x-2 text-sm">
								<Settings size={18} />
								<span>Theme</span>
							</div>
						</div>
						<div className="text-center sm:text-right text-gray-400 text-xs sm:text-sm">
							<span className="block sm:inline-block sm:mx-2">
								Accessibility Statement
							</span>
							<span className="block sm:inline-block sm:mx-2">
								User Terms of Service
							</span>
							<span className="block sm:inline-block sm:mx-2">
								Privacy Statement
							</span>
							<span className="block sm:inline-block mt-2 sm:mt-0">
								©️ Wolt 2014–{new Date().getFullYear()}
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
