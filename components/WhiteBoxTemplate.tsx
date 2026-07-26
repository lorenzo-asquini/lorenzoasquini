import type { ReactNode } from 'react';

export interface WhiteBoxTemplateProps {
    children: ReactNode;
    hoverEffect?: boolean;
}

export function WhiteBoxTemplate({ children, hoverEffect = false }: WhiteBoxTemplateProps) {
    const className = `block text-justify bg-white shadow-lg rounded-lg p-4 my-3 ${
        hoverEffect ? 'hover:bg-blue-200' : ''
    }`;

    return <div className={className}>{children}</div>;
}
