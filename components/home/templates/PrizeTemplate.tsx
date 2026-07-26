import { WhiteBoxTemplate } from '@components/WhiteBoxTemplate';

export interface PrizeTemplateProps {
    title: string;
    year: string;
    issuer: string;
    description: string;
}

export function PrizeTemplate({ title, year, issuer, description }: PrizeTemplateProps) {
    return (
        <WhiteBoxTemplate>
            <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600">
                    {year} | {issuer}
                </p>
            </div>
            <p className="text-gray-700">{description}</p>
        </WhiteBoxTemplate>
    );
}
