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
                <br className="mb-4" />
                My focus is on software-hardware co-design and developing hardware-specific software to maximize
                efficiency and speed. I am also interested in applying these computing techniques to solve complex
                problems in finance.
            </WhiteBoxTemplate>
        </SectionTemplate>
    );
}
