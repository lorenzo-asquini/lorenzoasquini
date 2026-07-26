import { SectionTemplate } from '@components/home/templates/SectionTemplate';
import { WhiteBoxTemplate } from '@components/WhiteBoxTemplate';

export function AboutMe() {
    return (
        <SectionTemplate title="About Me">
            <WhiteBoxTemplate>
                I am a Computer Science Master's student at
                <a
                    href="https://ethz.ch/en.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
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
