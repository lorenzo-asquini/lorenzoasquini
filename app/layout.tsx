import type { ReactNode } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';

import './globals.css';

import { Navbar } from '@components/layout/Navbar';
import { Footer } from '@components/layout/Footer';

config.autoAddCss = false;

export const metadata: Metadata = {
    title: {
        default: 'Lorenzo Asquini',
        template: '%s | Lorenzo Asquini',
    },
    description: 'Student at ETH Zürich',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    const lastUpdated = new Date().toISOString().split('T')[0];

    return (
        <html lang="en">
            <body className="bg-gray-100">
                <Navbar />
                <main className="pt-20">{children}</main>
                <Footer lastUpdated={lastUpdated} />
            </body>
        </html>
    );
}
