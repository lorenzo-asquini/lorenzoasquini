import Image from 'next/image';
import WhiteBoxTemplate from '../../WhiteBoxTemplate';

interface JobProps {
    companyLogoSrc: string;
    companyName: string;
    companyWebsiteUrl: string;
    location: string;

    jobPosition: string;
    startDate: string;
    endDate: string;

    tasks: string[];
}

export default function JobTemplate({
    companyLogoSrc,
    companyName,
    companyWebsiteUrl,
    location,
    jobPosition,
    startDate,
    endDate,
    tasks,
}: JobProps) {
    return (
        <WhiteBoxTemplate>
            <div className="flex">
                {/* The margin right must be the same as the padding in WhiteBoxTemplate*/}
                <div className="w-14 h-14 sm:w-10 sm:h-10 mr-4 mt-2">
                    <Image priority src={companyLogoSrc} alt={companyName} />
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
                        <span className="font-semibold">{jobPosition}</span> ({location})
                    </p>
                    <p className="text-gray-500 mb-2">
                        {startDate} - {endDate}
                    </p>
                    <ul className="list-disc text-gray-700 space-y-2 ml-3">
                        {tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </WhiteBoxTemplate>
    );
}
