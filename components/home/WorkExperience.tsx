import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { Card } from '@components/ui/Card';
import { ExternalLink } from '@components/ui/ExternalLink';
import { noWrapText } from '@components/ui/NoWrapText';
import { Section } from '@components/ui/Section';
import { JOBS } from '@data/jobs';

export interface JobItemProps {
    companyLogoSrc: StaticImageData | string;
    companyName: string;
    companyWebsiteUrl: string;
    location: string;

    jobTitle: string;
    employmentType: string;
    startDate: string;
    endDate: string;

    tasks: string[];
}

function JobItem({
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
                <div className="relative size-8 mt-1 shrink-0">
                    <Image priority src={companyLogoSrc} alt="" fill className="object-contain object-left" />
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
                        {tasks.map((task, index) => (
                            <li key={index}>{noWrapText(task)}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
}

export function WorkExperience() {
    return (
        <Section title="Work Experience">
            {JOBS.map((job) => (
                <JobItem key={`${job.companyName}-${job.jobTitle}`} {...job} />
            ))}
        </Section>
    );
}
