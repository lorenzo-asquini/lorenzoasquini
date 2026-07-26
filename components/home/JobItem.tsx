import { Fragment } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { Card } from '@components/ui/Card';
import { ExternalLink } from '@components/ui/ExternalLink';

export interface JobItemProps {
    companyLogoSrc: string | StaticImageData;
    companyName: string;
    companyWebsiteUrl: string;
    location: string;

    jobTitle: string;
    employmentType: string;
    startDate: string;
    endDate: string;

    tasks: string[];
}

export function JobItem({
    companyLogoSrc,
    companyName,
    companyWebsiteUrl,
    location,
    jobTitle,
    employmentType,
    startDate,
    endDate,
    tasks,
}: JobItemProps) {
    return (
        <Card>
            <div className="flex gap-4">
                <div className="size-8 mt-1 flex-shrink-0 relative">
                    <Image
                        priority
                        src={companyLogoSrc}
                        alt={companyName}
                        fill
                        className="object-contain object-left"
                    />
                </div>
                <div className="min-w-0">
                    <ExternalLink href={companyWebsiteUrl} className="text-xl font-bold text-blue-600 hover:underline">
                        {companyName}
                    </ExternalLink>
                    <p className="text-gray-700">
                        <span className="font-semibold">{jobTitle}</span> ({location})
                    </p>
                    <p className="text-gray-500 mb-2">
                        {employmentType} | {startDate} - {endDate}
                    </p>
                    <ul className="list-disc text-gray-700 space-y-2 ml-3">
                        {tasks.map((task) => (
                            <li key={task}>
                                {task.split('C++').map((part, i, arr) => (
                                    <Fragment key={`${task}-${i}`}>
                                        {part}
                                        {i < arr.length - 1 && <span className="whitespace-nowrap">C++</span>}
                                    </Fragment>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
}
