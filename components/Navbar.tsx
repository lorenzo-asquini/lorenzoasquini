'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export function Navbar() {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsDropdownMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isDropdownMenuOpen) {
            return;
        }

        function handleClickOutside(event: MouseEvent) {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsDropdownMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownMenuOpen]);

    const closeDropdown = () => {
        setIsDropdownMenuOpen(false);
    };

    return (
        <div>
            <nav ref={navbarRef} className="fixed top-0 w-full bg-gray-800 text-white h-16 z-50">
                <div className="mx-auto flex justify-between items-center p-4">
                    <Link href="/" className="text-2xl font-bold">
                        Lorenzo Asquini
                    </Link>

                    <div className="hidden md:flex md:items-center md:justify-between">
                        <Link href="/" className="mx-4 hover:text-gray-300">
                            HOME
                        </Link>
                        <Link href="/contact/" className="mx-4 hover:text-gray-300">
                            CONTACT
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
                            aria-label="Toggle Menu"
                            className="outline-none focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {isDropdownMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12h18M3 6h18M3 18h18"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {isDropdownMenuOpen && (
                    <div className="bg-gray-800 w-full flex flex-col">
                        <Link
                            href="/"
                            className="w-full p-4 border-t border-gray-700 hover:bg-gray-700"
                            onClick={closeDropdown}>
                            HOME
                        </Link>
                        {/* //TODO
                        <Link
                            href="/posts/"
                            className="w-full border p-4 border-gray-700 hover:bg-gray-700"
                            onClick={closeDropdown}>
                            POSTS
                        </Link>
                        */}
                        <Link
                            href="/contact/"
                            className="w-full border-b p-4 hover:bg-gray-700"
                            onClick={closeDropdown}>
                            CONTACT
                        </Link>
                    </div>
                )}
            </nav>

            <div className="h-20" />
        </div>
    );
}
