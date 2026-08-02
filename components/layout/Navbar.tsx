'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
    { href: '/', label: 'HOME' },
    { href: '/contact/', label: 'CONTACT' },
];

function MenuIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
            )}
        </svg>
    );
}

function DesktopNavLinks() {
    return (
        <div className="hidden md:flex md:items-center">
            {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="mx-4 hover:text-gray-300">
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

function MobileNavLinks({ onLinkClick }: { onLinkClick: () => void }) {
    return (
        <div className="bg-gray-800 w-full flex flex-col md:hidden">
            {NAV_LINKS.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="w-full p-4 border-t border-gray-700 last:border-b hover:bg-gray-700"
                    onClick={onLinkClick}>
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navbarRef = useRef<HTMLElement>(null);

    // Close the mobile menu when clicking outside the navbar
    useEffect(() => {
        if (!isMobileMenuOpen) {
            return;
        }

        function handleClickOutside(event: MouseEvent) {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <nav ref={navbarRef} className="fixed top-0 w-full bg-gray-800 text-white h-16 z-50">
            <div className="mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-2xl font-bold">
                    Lorenzo Asquini
                </Link>

                <DesktopNavLinks />

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={isMobileMenuOpen}
                    className="md:hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    <MenuIcon isOpen={isMobileMenuOpen} />
                </button>
            </div>

            {isMobileMenuOpen && <MobileNavLinks onLinkClick={() => setIsMobileMenuOpen(false)} />}
        </nav>
    );
}
