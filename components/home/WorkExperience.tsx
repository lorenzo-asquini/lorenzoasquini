import { Section } from '@components/ui/Section';
import { NoWrap } from '@components/ui/NoWrap';
import { JobItem } from '@components/home/JobItem';

import OptiverLogo from './logos/OptiverLogo.svg';
import ETHLogo from './logos/ETHLogo.svg';
import SyntharaLogo from './logos/SyntharaLogo.svg';

export function WorkExperience() {
    const optiverInternJob = {
        companyLogoSrc: OptiverLogo,
        companyName: 'Optiver',
        companyWebsiteUrl: 'https://optiver.com/',
        location: 'Amsterdam, NL',
        jobTitle: 'Software Engineer Intern',
        employmentType: 'Internship',
        startDate: 'July 2025',
        endDate: 'August 2025',
        tasks: [
            'I worked on designing and implementing a server to automate trade confirmations using the FIX protocol, saving tens of minutes daily and reducing errors in trade handling.',
        ],
    };

    const ethTAJob = {
        companyLogoSrc: ETHLogo,
        companyName: 'ETH Zürich',
        companyWebsiteUrl: 'https://ethz.ch/',
        location: 'Zürich, CH',
        jobTitle: 'Student Teaching Assistant',
        employmentType: 'Part-time',
        startDate: 'February 2025',
        endDate: 'June 2025',
        tasks: [
            'I was responsible for helping prepare and grade homework assignments for the Advanced Systems Lab course.',
        ],
    };

    const syntharaInternJob = {
        companyLogoSrc: SyntharaLogo,
        companyName: 'Synthara',
        companyWebsiteUrl: 'https://synthara.ai/',
        location: 'Zürich, CH',
        jobTitle: 'Software Engineer Intern',
        employmentType: 'Internship',
        startDate: 'June 2024',
        endDate: 'September 2024',
        tasks: [
            <>
                I worked on implementing and integrating multiple features in a functional simulation model written in
                <NoWrap>C++</NoWrap>
                to accurately replicate Synthara's custom hardware behavior.
            </>,
            <>
                I was responsible for designing, implementing, and deploying automated tests written in
                <NoWrap>C++</NoWrap>
                to verify the proper functionality of Synthara's custom hardware.
            </>,
        ],
    };

    return (
        <Section title="Work Experience">
            <JobItem {...optiverInternJob} />
            <JobItem {...ethTAJob} />
            <JobItem {...syntharaInternJob} />
        </Section>
    );
}
