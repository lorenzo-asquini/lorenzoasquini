import WhiteBoxTemplate from '@components/WhiteBoxTemplate';

interface PrizeProps {
    title: string;
    year: string;
    issuer: string;
    description: string;
}

export default function PrizeTemplate({ title, year, issuer, description }: PrizeProps) {
    return (
        <WhiteBoxTemplate>
            <div className="mb-4">
                <p className="text-xl font-bold text-gray-800">{title}</p>
                <p className="text-gray-600">
                    {year} | {issuer}
                </p>
            </div>
            <p className="text-gray-700">{description}</p>
        </WhiteBoxTemplate>
    );
}
