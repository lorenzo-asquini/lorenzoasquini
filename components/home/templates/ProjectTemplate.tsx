import type { ReactNode } from 'react';

import { WhiteBoxTemplate } from '@components/WhiteBoxTemplate';

export interface ProjectTemplateProps {
    title: string;
    children: ReactNode;
}

export function ProjectTemplate({ title, children }: ProjectTemplateProps) {
    return (
        <WhiteBoxTemplate>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
            <div className="text-gray-700">{children}</div>
        </WhiteBoxTemplate>
    );
}
