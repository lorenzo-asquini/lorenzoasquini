import SectionTemplate from './templates/SectionTemplate';
import JobTemplate from './templates/JobTemplate';

import SyntharaLogo from './images/SyntharaLogo.svg';

export default function WorkExperience() {
    const syntharaInternJob = {
        companyLogoSrc: SyntharaLogo,
        companyName: 'Synthara',
        companyWebsiteUrl: 'https://synthara.ai/',
        location: 'Zürich, CH',
        jobTitle: 'Software Engineer Intern',
        employmentType: 'Internship',
        startDate: 'June 2020',
        endDate: 'Present',
        tasks: [
            'I worked on implementing and integrating multiple features in a functional simulation model to accurately replicate custom hardware behavior.',
            'I was responsible for designing, implementing, and deploying automated tests to verify the proper functionality of custom hardware.',
        ],
    };

    return (
        <SectionTemplate title="Work Experience">
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
