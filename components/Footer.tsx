interface FooterProps {
    lastUpdated?: string;
}

export default function Footer({ lastUpdated }: FooterProps) {
    return (
        <div className="w-full bg-gray-800 text-white text-center py-2 mt-4">
            {lastUpdated && <p className="font-bold">Last updated on: {lastUpdated}</p>}
        </div>
    );
}
