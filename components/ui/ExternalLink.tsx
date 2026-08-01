import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ExternalLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge('text-blue-600 hover:underline', className)}>
            {children}
        </a>
    );
}
