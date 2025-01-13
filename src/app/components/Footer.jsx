"use client";
import React, { useState } from "react";
import Image from "next/image";
import apple from "../../../public/apple.jpg";
import android from "../../../public/android.jpg";
import { Globe, MapPin, Settings, ChevronDown } from "lucide-react";

const Footer = () => {
	const [openSection, setOpenSection] = useState(null);

	const footerSections = [
		{
			title: "Partner with Wolt",
			items: ["For couriers", "For merchants", "For affiliates"],
		},
		{
			title: "Company",
			items: [
				"About us",
				"What we stand for",
				"Jobs",
				"Sustainability",
				"Security",
				"Investors",
			],
		},
		{
			title: "Products",
			items: [
				"Wolt Drive",
				"Wolt Market",
				"Wolt+",
				"Wolt for Work",
				"Wolt Ads",
			],
		},
		{
			title: "Useful links",
			items: [
				"Support",
				"Newsroom",
				"Contact",
				"Speak up",
				"Promo codes",
				"Developers",
			],
		},
		{
			title: "Follow us",
			items: [
				"Blog",
				"Engineering Blog",
				"Instagram",
				"Facebook",
				"X",
				"LinkedIn",
			],
		},
	];

	const toggleSection = (index) => {
		setOpenSection(openSection === index ? null : index);
	};

	return (
		<footer className="bg-zinc-900 text-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				{/* Mobile View */}
				<div className="lg:hidden">
					<div className="mb-8">
						<h1 className="text-2xl font-extrabold italic mb-4">Wolt</h1>
						<div className="space-y-4">
							<Image
								src={android}
								alt="playstore img"
								width={150}
								height={20}
								className="w-auto h-auto"
							/>
							<Image
								src={apple}
								alt="playstore img"
								width={150}
								height={20}
								className="w-auto h-auto"
							/>
						</div>
					</div>

					<div className="space-y-2">
						{footerSections.map((section, index) => (
							<div key={index} className="border-b border-gray-800">
								<button
									onClick={() => toggleSection(index)}
									className="w-full py-3 flex justify-between items-center text-left"
								>
									<span className="text-gray-400 font-semibold text-sm">
										{section.title}
									</span>
									<ChevronDown
										size={20}
										className={`transform transition-transform duration-200 ${
											openSection === index ? "rotate-180" : ""
										}`}
									/>
								</button>
								<div
									className={`overflow-hidden transition-all duration-200 ${
										openSection === index ? "max-h-48 py-2" : "max-h-0"
									}`}
								>
									<ul className="space-y-2 text-sm">
										{section.items.map((item, idx) => (
											<li
												key={idx}
												className="hover:text-gray-300 cursor-pointer"
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Desktop View */}
				<div className="hidden lg:grid grid-cols-6 gap-6">
					<div className="col-span-1 space-y-4">
						<h1 className="text-3xl font-extrabold italic">Wolt</h1>
						<Image
							src={android}
							alt="playstore img"
							width={150}
							height={20}
							className="w-auto h-auto"
						/>
						<Image
							src={apple}
							alt="playstore img"
							width={150}
							height={20}
							className="w-auto h-auto"
						/>
					</div>
					{footerSections.map((section, index) => (
						<div key={index}>
							<h3 className="text-gray-400 font-semibold mb-4 text-sm">
								{section.title}
							</h3>
							<ul className="space-y-2 text-sm">
								{section.items.map((item, idx) => (
									<li key={idx} className="hover:text-gray-300 cursor-pointer">
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="border-t border-gray-800 mt-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
					<div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
						<div className="flex flex-wrap justify-center sm:justify-start gap-4">
							<button className="flex items-center space-x-2 text-sm hover:text-gray-300">
								<MapPin size={18} />
								<span>Choose country</span>
							</button>
							<button className="flex items-center space-x-2 text-sm hover:text-gray-300">
								<Globe size={18} />
								<span>English</span>
							</button>
							<button className="flex items-center space-x-2 text-sm hover:text-gray-300">
								<Settings size={18} />
								<span>Theme</span>
							</button>
						</div>
						<div className="text-center sm:text-right text-gray-400 text-xs sm:text-sm">
							<div className="space-x-2 hidden sm:block">
								<span className="hover:text-gray-300 cursor-pointer">
									Accessibility Statement
								</span>
								<span>·</span>
								<span className="hover:text-gray-300 cursor-pointer">
									User Terms of Service
								</span>
								<span>·</span>
								<span className="hover:text-gray-300 cursor-pointer">
									Privacy Statement
								</span>
							</div>
							<div className="sm:hidden space-y-2">
								<div className="hover:text-gray-300 cursor-pointer">
									Accessibility Statement
								</div>
								<div className="hover:text-gray-300 cursor-pointer">
									User Terms of Service
								</div>
								<div className="hover:text-gray-300 cursor-pointer">
									Privacy Statement
								</div>
							</div>
							<div className="mt-2">
								©️ Wolt 2014–{new Date().getFullYear()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
