import { ReactNode } from 'react';

interface SectionProps {
    title: string;
    children: ReactNode;
}

export default function SectionTemplate({ title, children }: SectionProps) {
    return (
        <div className="mx-auto pt-6 px-3 max-w-3xl">
            <h1 className="text-left text-xl font-bold pb-4">{title}</h1>
            <div className="text-justify text-base">{children}</div>
        </div>
    );
}
