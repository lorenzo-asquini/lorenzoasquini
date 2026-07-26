import { Section } from '@components/ui/Section';
import { Card } from '@components/ui/Card';
import { ExternalLink } from '@components/ui/ExternalLink';

export function AboutMe() {
    return (
        <Section title="About Me">
            <Card>
                I am a Computer Science Master's student at
                <ExternalLink href="https://ethz.ch/en.html">{' '}ETH Zurich</ExternalLink>, pursuing a major in Data
                Management Systems and a minor in Information Security.
                <br className="mb-4" />
                My focus is on software-hardware co-design and developing hardware-specific software to maximize
                efficiency and speed. I am also interested in applying these computing techniques to solve complex
                problems in finance.
            </Card>
        </Section>
    );
}
