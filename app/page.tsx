import { Hero } from '@components/home/Hero';
import { AboutMe } from '@components/home/AboutMe';
import { WorkExperience } from '@components/home/WorkExperience';
import { Publications } from '@components/home/Publications';
import { Education } from '@components/home/Education';

export default function Home() {
    return (
        <>
            <Hero />
            <AboutMe />
            <WorkExperience />
            <Publications />
            <Education />
        </>
    );
}
