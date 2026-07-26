import type { ReactNode } from 'react';

export interface SectionProps {
    title: string;
    children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
    return (
        <section className="mx-auto pt-6 px-3 max-w-3xl">
            <h2 className="text-left text-xl font-bold pb-4">{title}</h2>
            <div className="text-justify text-base">{children}</div>
        </section>
    );
}
