import { Fragment } from 'react';

import { Card } from '@components/ui/Card';
import { ExternalLink } from '@components/ui/ExternalLink';

export interface Venue {
    name: string;
    link: string;
}

export interface PublicationItemProps {
    title: string;
    authors: { name: string; isHighlighted?: boolean }[];
    venues: Venue[];
}

export function PublicationItem({ title, authors, venues }: PublicationItemProps) {
    const primaryLink = venues[0].link;

    return (
        <Card>
            <ExternalLink href={primaryLink} className="text-xl font-bold text-blue-600 hover:underline">
                {title}
            </ExternalLink>
            <p className="mt-1 text-gray-700">
                {authors.map((author, index) => (
                    <Fragment key={author.name}>
                        <span className={author.isHighlighted ? 'font-bold underline' : ''}>{author.name}</span>
                        {index < authors.length - 1 && ', '}
                    </Fragment>
                ))}
            </p>
            <p className="mt-1 text-gray-500">
                {venues.map((venue, index) => (
                    <Fragment key={venue.link}>
                        <ExternalLink href={venue.link}>{venue.name}</ExternalLink>
                        {index < venues.length - 1 && <span className="mx-2 text-gray-400">|</span>}
                    </Fragment>
                ))}
            </p>
        </Card>
    );
}
