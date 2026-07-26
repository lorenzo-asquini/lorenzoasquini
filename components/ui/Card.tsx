import type { ReactNode } from 'react';

export interface CardProps {
    children: ReactNode;
}

export function Card({ children }: CardProps) {
    return <div className="block text-left bg-white shadow-lg rounded-lg p-4 my-3">{children}</div>;
}
