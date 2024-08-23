import '@fortawesome/fontawesome-svg-core/styles.css';
import '@styles/global.css';

import Navbar from '@components/Navbar';

export const metadata = {
    title: 'Lorenzo Asquini',
    description: 'My personal page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
