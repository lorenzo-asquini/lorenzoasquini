interface FooterProps {
    lastModified?: string;
}

export default function Footer({ lastModified }: FooterProps) {
    return (
        <div className="w-full bg-gray-800 text-white text-center py-2 mt-4">
            {lastModified && <p className="font-bold">Last modified on: {lastModified}</p>}
        </div>
    );
}
