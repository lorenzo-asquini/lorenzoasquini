import { Fragment } from 'react';

import { WhiteBoxTemplate } from '@components/WhiteBoxTemplate';

export interface Venue {
    name: string;
    link: string;
}

export interface PublicationTemplateProps {
    title: string;
    authors: { name: string; isHighlighted?: boolean }[];
    venues: Venue[];
}

export function PublicationTemplate({ title, authors, venues }: PublicationTemplateProps) {
    const primaryLink = venues[0].link;

    return (
        <WhiteBoxTemplate>
            <div className="mb-1">
                <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-600 hover:underline">
                    {title}
                </a>
            </div>
            <div className="mb-1 text-gray-700">
                {authors.map((author, index) => (
                    <Fragment key={author.name}>
                        <span className={author.isHighlighted ? 'font-bold underline' : ''}>{author.name}</span>
                        {index < authors.length - 1 && ', '}
                    </Fragment>
                ))}
            </div>
            <div>
                {venues.map((venue, index) => (
                    <span key={venue.link}>
                        <a
                            href={venue.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline">
                            {venue.name}
                        </a>
                        {index < venues.length - 1 && <span className="p-2 text-gray-700">|</span>}
                    </span>
                ))}
            </div>
        </WhiteBoxTemplate>
    );
}
