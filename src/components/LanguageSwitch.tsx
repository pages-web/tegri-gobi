"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const languages = [
	{ code: "en", label: "English", flag: "🇺🇸" },
	{ code: "mn", label: "Монгол", flag: "🇲🇳" },
];

interface LanguageSwitcherProps {
	isScrolled: boolean;
}

export default function LanguageSwitcher({ isScrolled }: LanguageSwitcherProps) {
	const params = useParams();
	const pathname = usePathname();
	const router = useRouter();

	const currentLocale = params.locale as string;
	const currentLanguage = languages.find(lang => lang.code === currentLocale);

	const handleLanguageChange = (newLocale: string) => {
		const pathWithoutLocale = pathname.split("/").slice(2).join("/");
		const newPath = `/${newLocale}/${pathWithoutLocale}`;
		router.push(newPath);
	};

	return (
		<Select value={currentLocale} onValueChange={handleLanguageChange}>
			<SelectTrigger className={`w-fit bg-transparent border-none shadow-none ${isScrolled ? 'text-gray-900 [&_svg]:!text-gray-900' : 'text-white [&_svg]:!text-white'
				}`}>
				<SelectValue>
					<div className="flex items-center gap-2">
						{/* <span>{currentLanguage?.flag}</span> */}
						<span className="font-medium">{currentLanguage?.code.toUpperCase()}</span>
					</div>
				</SelectValue>
			</SelectTrigger>
			<SelectContent>
				{languages.map((language) => (
					<SelectItem key={language.code} value={language.code}>
						<div className="flex items-center gap-2">
							{/* <span>{language.flag}</span> */}
							<span>{language.label}</span>
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}