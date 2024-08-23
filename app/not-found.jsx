import '@styles/global.css';
import Link from 'next/link';

export default function notFound() {
    return (
        <div className="flex items-center justify-center mt-20">
            <div className="text-center">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">Four, Oh Four!</h1>
                <p className="text-l sm:text-xl mb-4">
                    It seems that the page you were looking for does not exist.
                    <br />
                    Will it be here in the future?
                </p>
                <Link href="/">
                    <button className="px-4 py-2 mt-4 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                        Return home
                    </button>
                </Link>
            </div>
        </div>
    );
}
