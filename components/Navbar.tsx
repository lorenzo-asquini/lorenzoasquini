'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [isDropdownMenuOpen, setisDropdownMenuOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Close dropdown menu if screen gets bigger
        function handleResize() {
            if (window.innerWidth >= 768) {
                setisDropdownMenuOpen(false);
            }
        }

        // Close dropdown menu if click on page
        function handleClickOutside(event: MouseEvent) {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setisDropdownMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        if (isDropdownMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownMenuOpen]);

    const closeDropdown = () => {
        setisDropdownMenuOpen(false);
    };

    return (
        <div>
            <nav ref={navbarRef} className="fixed top-0 w-full bg-gray-800 text-white h-16 z-100">
                <div className="mx-auto flex justify-between items-center p-4">
                    <Link href="/" className="text-2xl font-bold">
                        Lorenzo Asquini
                    </Link>

                    <div className="hidden md:flex md:items-center md:justify-between">
                        <Link href="/" className="mx-4 hover:text-gray-300">
                            HOME
                        </Link>
                        {/* //TODO
                        <Link href="/posts/" className="mx-4 hover:text-gray-300">
                            POSTS
                        </Link>
                        */}
                        <Link href="/contact/" className="mx-4 hover:text-gray-300">
                            CONTACT
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setisDropdownMenuOpen(!isDropdownMenuOpen)}
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
                        <Link
                            href="/posts/"
                            className="w-full border p-4 border-gray-700 hover:bg-gray-700"
                            onClick={closeDropdown}>
                            POSTS
                        </Link>
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
