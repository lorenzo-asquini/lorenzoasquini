import { Fragment } from 'react';

import WhiteBoxTemplate from '../../WhiteBoxTemplate';

interface PublicationProps {
    title: string;
    link: string;
    authors: { name: string; isHighlighted?: boolean }[];
    conferenceName: string;
}

export default function PublicationTemplate({ title, link, authors, conferenceName }: PublicationProps) {
    return (
        <WhiteBoxTemplate>
            <div className="mb-1">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-600 hover:underline">
                    {title}
                </a>
            </div>
            <div className="mb-1 text-gray-700">
                {authors.map((author, index) => (
                    <Fragment key={index}>
                        <span className={author.isHighlighted ? 'font-bold underline' : ''}>{author.name}</span>
                        {index < authors.length - 1 && ', '}
                    </Fragment>
                ))}
            </div>
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    {conferenceName}
                </a>
            </div>
        </WhiteBoxTemplate>
    );
}
