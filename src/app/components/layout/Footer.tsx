import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default function Footer() {
	const t = useTranslations('Footer');

	const aboutLinks = [
		{ name: t('New Opening'), href: '#' },
		{ name: t('Sustainability'), href: '#' },
		{ name: t('Careers'), href: '#' },
		{ name: t('Blog'), href: '#' },
	];

	const experienceLinks = [
		{ name: t('Legal Notice'), href: '#' },
		{ name: t('Download brochure'), href: '#' },
		{ name: t('Gallery'), href: '#' },
		{ name: t('FAQ'), href: '#' },
	];

	const socialLinks = [
		{ name: t('Instagram'), href: '#' },
		{ name: t('Facebook'), href: '#' },
		{ name: t('Youtube'), href: '#' },
		{ name: t('Mail'), href: '#' },
	];

	return (
		<footer className="w-full bg-white border-t border-[#DADADA]">
			<div className="flex w-full px-8 md:px-16 lg:px-24 py-12 justify-between items-start">
				<div className="flex flex-col items-start gap-4">
					<h3 className="text-black font-medium text-sm tracking-wider">
						{t('About')}
					</h3>
					<div className="flex flex-col gap-3">
						{aboutLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="text-gray-600 text-sm font-normal hover:text-black transition-colors cursor-pointer"
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>

				<div className="flex flex-col items-center gap-6 max-w-md">
					<Image
						alt="Tegri Gobi logo"
						src="/images/footer-logo.png"
						width={120}
						height={48}
						className="object-contain"
					/>

					<div className="text-center">
						<p className="text-gray-700 text-sm leading-relaxed mb-4">
							{t('Visit hotels')}<br />
							{t('For customizations')}
						</p>

						<div className="text-gray-700 text-sm">
							<p>info@tegrigobi.mn</p>
							<p>+976 7777 3331</p>
						</div>
					</div>

					<Button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 text-sm font-medium hover:bg-gray-50 transition-colors rounded-2xl">
						{t('Contact Us')}
					</Button>
				</div>

				<div className="flex flex-col items-start gap-4">
					<h3 className="text-black font-medium text-sm tracking-wider">
						{t('Experience')}
					</h3>
					<div className="flex flex-col gap-3">
						{experienceLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="text-gray-600 text-sm font-normal hover:text-black transition-colors cursor-pointer"
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</div>

			<div className="border-t border-gray-200 px-8 md:px-16 lg:px-24 py-6">
				<div className="flex justify-between items-center">
					<p className="text-gray-500 text-sm">
						{t('Copyright')}
					</p>

					<div className="flex gap-6">
						{socialLinks.map((social, index) => (
							<Link
								key={index}
								href={social.href}
								className="text-gray-500 text-sm hover:text-black transition-colors cursor-pointer"
							>
								{social.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}