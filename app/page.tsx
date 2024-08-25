import Link from 'next/link';

import PhotoContacts from '@components/home/PhotoContacts';
import AboutMe from '@components/home/AboutMe';
import WorkExperience from '@components/home/WorkExperience';
import Publications from '@components/home/Publications';
import Education from '@components/home/Education';
import Prizes from '@components/home/Prizes';
import SelectedProjects from '@components/home/SelectedProjects';
import Posts from '@components/home/Posts';
import Footer from '@components/Footer';

export default function Home() {
    return (
        <div>
            <PhotoContacts />
            <AboutMe />
            <WorkExperience />
            {/* //TODO: 
                <Publications />
            */}
            <Education />
            <Prizes />
            <SelectedProjects />
            {/* //TODO: 
                <Posts />
            
            <div className="text-center">
                <Link href="/posts">
                    <button className="px-4 py-2 mt-4 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                        All Posts
                    </button>
                </Link>
            </div>
            */}

            <Footer lastModified="2024-08-25"></Footer>
        </div>
    );
}
