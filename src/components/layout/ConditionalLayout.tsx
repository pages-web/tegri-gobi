'use client';

import { usePathname } from 'next/navigation';
import Header from "./Header";
import SecondaryHeader from "./SecondaryHeader";
import Footer from "./Footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();

  const noLayoutRoutes = ['/login', '/signup'];
  const secondaryHeaderRoutes = ['/contact-us'];

  const hideLayout = noLayoutRoutes.some(route => pathname.endsWith(route));
  const useSecondaryHeader = secondaryHeaderRoutes.some(route => pathname.endsWith(route)) || pathname.includes('/rooms/');

  return (
    <div className='flex flex-col h-screen'>
      {!hideLayout && (useSecondaryHeader ? <SecondaryHeader /> : <Header />)}
      {children}
      <div className='flex flex-col h-full justify-end items-end'>      {!hideLayout && <Footer />}</div>
    </div>
  );
}