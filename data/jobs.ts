import type { JobItemProps } from '@components/home/WorkExperience';

import PascalResearchLogo from './logos/Pascal.svg';
import RibotLogo from './logos/Ribot.svg';
import OptiverLogo from './logos/Optiver.svg';
import ETHLogo from './logos/ETH.svg';
import SyntharaLogo from './logos/Synthara.svg';

export const JOBS: JobItemProps[] = [
    {
        companyLogoSrc: PascalResearchLogo,
        companyName: 'Pascal Research',
        companyWebsiteUrl: 'https://pascal.trade/',
        location: 'Remote',
        jobTitle: 'Software Engineer',
        employmentType: 'Full-time',
        startDate: 'June 2026',
        endDate: 'Present',
        tasks: ['Building and maintaining trading and market-making systems in C++ for prediction markets.'],
    },
    {
        companyLogoSrc: RibotLogo,
        companyName: 'Ribot',
        companyWebsiteUrl: 'https://ribot.co/',
        location: 'Remote',
        jobTitle: 'Technical Co-Founder & Software Engineer',
        employmentType: 'Part-time',
        startDate: 'September 2025',
        endDate: 'April 2026',
        tasks: [
            'Designed, implemented, and deployed systems in C++ for continuous trading and low-latency arbitrage across prediction markets, supporting roughly $2.5M in weekly volume.',
        ],
    },
    {
        companyLogoSrc: OptiverLogo,
        companyName: 'Optiver',
        companyWebsiteUrl: 'https://optiver.com/',
        location: 'Amsterdam, NL',
        jobTitle: 'Software Engineer Intern',
        employmentType: 'Internship',
        startDate: 'July 2025',
        endDate: 'August 2025',
        tasks: [
            'Designed and implemented a server automating trade confirmations using the FIX protocol, saving tens of minutes daily and reducing errors in trade handling.',
        ],
    },
    {
        companyLogoSrc: ETHLogo,
        companyName: 'ETH Zürich',
        companyWebsiteUrl: 'https://ethz.ch/',
        location: 'Zürich, CH',
        jobTitle: 'Student Teaching Assistant',
        employmentType: 'Part-time',
        startDate: 'February 2025',
        endDate: 'June 2025',
        tasks: ['Prepared and graded homework assignments for the Advanced Systems Lab course.'],
    },
    {
        companyLogoSrc: SyntharaLogo,
        companyName: 'Synthara',
        companyWebsiteUrl: 'https://synthara.ai/',
        location: 'Zürich, CH',
        jobTitle: 'Software Engineer Intern',
        employmentType: 'Internship',
        startDate: 'June 2024',
        endDate: 'September 2024',
        tasks: [
            "Implemented and integrated multiple features in a functional simulation model written in C++ to accurately replicate Synthara's custom hardware behavior.",
            "Designed, implemented, and deployed automated tests written in C++ to verify the correct functionality of Synthara's custom hardware.",
        ],
    },
];
