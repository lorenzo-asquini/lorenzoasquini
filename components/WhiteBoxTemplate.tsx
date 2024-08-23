interface WhiteBoxTemplateProps {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export default function WhiteBoxTemplate({ children, hoverEffect = false }: WhiteBoxTemplateProps) {
    const className = `block text-justify bg-white shadow-lg rounded-lg p-4 my-3 ${
        hoverEffect ? 'hover:bg-blue-200' : ''
    }`;

    return <div className={className}>{children}</div>;
}
