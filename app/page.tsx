import { Contacts } from '@components/home/Contacts';
import { AboutMe } from '@components/home/AboutMe';
import { WorkExperience } from '@components/home/WorkExperience';
import { Publications } from '@components/home/Publications';
import { Education } from '@components/home/Education';
import { Footer } from '@components/layout/Footer';

export default function Home() {
    return (
        <div>
            <Contacts />
            <AboutMe />
            <WorkExperience />
            <Publications />
            <Education />
            <Footer lastUpdated="2026-01-30" />
        </div>
    );
}
