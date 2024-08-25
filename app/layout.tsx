import '@fortawesome/fontawesome-svg-core/styles.css';
import '@styles/global.css';

import Navbar from '@components/Navbar';

export const metadata = {
    title: 'Lorenzo Asquini',
    description: 'Student at ETH Zürich, Software Engineer at Synthara',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <body className="bg-gray-100">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
