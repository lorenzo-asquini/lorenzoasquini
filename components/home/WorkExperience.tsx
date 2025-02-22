import SectionTemplate from './templates/SectionTemplate';
import JobTemplate from './templates/JobTemplate';

import ETHLogo from './images/ETHLogo.svg';
import SyntharaLogo from './images/SyntharaLogo.svg';

export default function WorkExperience() {
    const ethTAJob = {
        companyLogoSrc: ETHLogo,
        companyName: 'ETH Zürich',
        companyWebsiteUrl: 'https://ethz.ch/',
        location: 'Zürich, CH',
        jobTitle: 'Student Teaching Assistant',
        employmentType: 'Part-time',
        startDate: 'February 2025',
        endDate: 'Present',
        tasks: ['Student Teaching Assistant in the Advanced Systems Lab course.'],
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
            'I worked on implementing and integrating multiple features in a functional simulation model written in C++ to accurately replicate custom hardware behavior.',
            'I was responsible for designing, implementing, and deploying automated tests written in C++ to verify the proper functionality of custom hardware.',
        ],
    };

    return (
        <SectionTemplate title="Work Experience">
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
