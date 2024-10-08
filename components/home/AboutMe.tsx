import SectionTemplate from './templates/SectionTemplate';
import WhiteBoxTemplate from '../WhiteBoxTemplate';

export default function AboutMe() {
    return (
        <SectionTemplate title="About Me">
            <WhiteBoxTemplate>
                I am a Computer Science Master's student at
                <a href="https://ethz.ch/en.html" className="text-blue-600 hover:text-blue-800">
                    {' '}
                    ETH Zurich
                </a>
                , pursuing a major in Data Management Systems and a minor in Information Security.
                <br className="mb-4" />I am interested in High Performance Computing, with a focus on the
                Processing-In-Memory (PIM) paradigm, regarding which I had the pleasure to collaborate with the{' '}
                <a href="https://safari.ethz.ch/" className="text-blue-600 hover:text-blue-800">
                    SAFARI Research Group
                </a>
                . My work focuses on software engineering, optimizing integration with hardware to improve processing
                efficiency and speed.
            </WhiteBoxTemplate>
        </SectionTemplate>
    );
}
