import WhiteBoxTemplate from '@components/WhiteBoxTemplate';

interface ProjectProps {
    title: string;
    children: React.ReactNode;
}

export default function PrizeTemplate({ title, children }: ProjectProps) {
    return (
        <WhiteBoxTemplate>
            <p className="text-xl font-bold text-gray-800 mb-4">{title}</p>
            <div className="text-gray-700">{children}</div>
        </WhiteBoxTemplate>
    );
}
