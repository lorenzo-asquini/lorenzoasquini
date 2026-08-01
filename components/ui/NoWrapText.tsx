import { Children, cloneElement, isValidElement } from 'react';
import type { ReactNode } from 'react';

const NO_WRAP_TOKENS = ['C++'];

const NO_WRAP_PATTERN = new RegExp(
    `(${NO_WRAP_TOKENS.map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g'
);

export function noWrapText(text: string): ReactNode {
    return text.split(NO_WRAP_PATTERN).map((part, index) =>
        NO_WRAP_TOKENS.includes(part) ? (
            <span key={index} className="whitespace-nowrap">
                {part}
            </span>
        ) : (
            part
        )
    );
}

function applyNoWrap(node: ReactNode): ReactNode {
    return Children.map(node, (child) => {
        if (typeof child === 'string') {
            return noWrapText(child);
        }
        if (isValidElement<{ children?: ReactNode }>(child) && child.props.children) {
            return cloneElement(child, undefined, applyNoWrap(child.props.children));
        }
        return child;
    });
}

export function NoWrapText({ children }: { children: ReactNode }) {
    return applyNoWrap(children);
}
