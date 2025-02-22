import { Fragment } from 'react';

import Image from 'next/image';
import WhiteBoxTemplate from '../../WhiteBoxTemplate';

interface JobProps {
    companyLogoSrc: string;
    companyName: string;
    companyWebsiteUrl: string;
    location: string;

    jobTitle: string;
    employmentType: string;
    startDate: string;
    endDate: string;

    tasks: string[];
}

export default function JobTemplate({
    companyLogoSrc,
    companyName,
    companyWebsiteUrl,
    location,
    jobTitle,
    employmentType,
    startDate,
    endDate,
    tasks,
}: JobProps) {
    return (
        <WhiteBoxTemplate>
            <div className="flex">
                {/* The margin right must be the same as the padding in WhiteBoxTemplate*/}
                <div className="w-10 h-10 sm:w-8 sm:h-8 mr-4 mt-2 flex-shrink-0 relative">
                    <Image priority src={companyLogoSrc} alt={companyName} fill />
                </div>
                <div>
                    <a
                        href={companyWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-blue-600 hover:underline">
                        {companyName}
                    </a>
                    <p className="text-gray-700">
                        <span className="font-semibold">{jobTitle}</span> ({location})
                    </p>
                    <p className="text-gray-500 mb-2">
                        {employmentType} | {startDate} - {endDate}
                    </p>
                    <ul className="list-disc text-gray-700 space-y-2 ml-3">
                        {tasks.map((task, index) => (
                            <li key={index}>
                                {task.split('C++').map((part, i, arr) => (
                                    <Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && <span className="whitespace-nowrap">C++</span>}
                                    </Fragment>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </WhiteBoxTemplate>
    );
}
