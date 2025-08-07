'use client';

import LanguageSwitcher from '../LanguageSwitch';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import CurrentUser from '@/containers/auth/current-user';
import { useState, useEffect } from 'react';


export default function Header() {
  const t = useTranslations('Header');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Navbar = [
    {
      name: t("Accommodation"),
      href: '/accommodation'
    },
    {
      name: t("Activities"),
      href: '/activities'
    },
    {
      name: t("Dining"),
      href: '/dining'
    },
    {
      name: t("Lodge stays"),
      href: '/lodge-stays'
    },
    {
      name: t("Spa & Wellness"),
      href: '/spa-wellness'
    },
    {
      name: t("Offers"),
      href: '/offers'
    },
    {
      name: t("About"),
      href: '/about-us'
    },
    {
      name: t("Shop"),
      href: '/shop'
    },
  ];


  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md top-0 py-5' : 'bg-transparent top-9'
      }`}>
      <div className="max-w-none px-15">
        <div className="flex justify-between items-center h-10">

          <Link className="flex items-center" href="/">
            <Image
              src="/images/header-logo.png"
              alt="Tegri Gobi Resort"
              width={101}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {Navbar.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${isScrolled
                  ? 'text-gray-900 hover:text-gray-600'
                  : 'text-white hover:text-white/80'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            <CurrentUser isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </header>
  );
}