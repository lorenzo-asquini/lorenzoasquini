import type { ReactNode } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';

import '@styles/global.css';

import { Navbar } from '@components/Navbar';

config.autoAddCss = false;

export const metadata: Metadata = {
    title: 'Lorenzo Asquini',
    description: 'Student at ETH Zürich',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
