import { SectionTemplate } from '@components/home/templates/SectionTemplate';
import { JobTemplate } from '@components/home/templates/JobTemplate';

import OptiverLogo from './images/OptiverLogo.svg';
import ETHLogo from './images/ETHLogo.svg';
import SyntharaLogo from './images/SyntharaLogo.svg';

export function WorkExperience() {
    const optiverInternJob = {
        companyLogoSrc: OptiverLogo,
        companyName: 'Optiver',
        companyWebsiteUrl: 'https://optiver.com//',
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
            "I worked on implementing and integrating multiple features in a functional simulation model written in C++ to accurately replicate Synthara's custom hardware behavior.",
            "I was responsible for designing, implementing, and deploying automated tests written in C++ to verify the proper functionality of Synthara's custom hardware.",
        ],
    };

    return (
        <SectionTemplate title="Work Experience">
            <JobTemplate
                companyLogoSrc={optiverInternJob.companyLogoSrc}
                companyName={optiverInternJob.companyName}
                companyWebsiteUrl={optiverInternJob.companyWebsiteUrl}
                location={optiverInternJob.location}
                jobTitle={optiverInternJob.jobTitle}
                employmentType={optiverInternJob.employmentType}
                startDate={optiverInternJob.startDate}
                endDate={optiverInternJob.endDate}
                tasks={optiverInternJob.tasks}
            />

            <JobTemplate
                companyLogoSrc={ethTAJob.companyLogoSrc}
                companyName={ethTAJob.companyName}
                companyWebsiteUrl={ethTAJob.companyWebsiteUrl}
                location={ethTAJob.location}
                jobTitle={ethTAJob.jobTitle}
                employmentType={ethTAJob.employmentType}
                startDate={ethTAJob.startDate}
                endDate={ethTAJob.endDate}
                tasks={ethTAJob.tasks}
            />

            <JobTemplate
                companyLogoSrc={syntharaInternJob.companyLogoSrc}
                companyName={syntharaInternJob.companyName}
                companyWebsiteUrl={syntharaInternJob.companyWebsiteUrl}
                location={syntharaInternJob.location}
                jobTitle={syntharaInternJob.jobTitle}
                employmentType={syntharaInternJob.employmentType}
                startDate={syntharaInternJob.startDate}
                endDate={syntharaInternJob.endDate}
                tasks={syntharaInternJob.tasks}
            />
        </SectionTemplate>
    );
}
