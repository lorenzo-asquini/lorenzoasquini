import { Section } from '@components/ui/Section';
import { Card } from '@components/ui/Card';
import { ExternalLink } from '@components/ui/ExternalLink';
import { NoWrapText } from '@components/ui/NoWrapText';

export function AboutMe() {
    return (
        <Section title="About Me">
            <Card>
                <NoWrapText>
                    <p>
                        I am a software engineer currently working at{' '}
                        <ExternalLink href="https://pascal.trade/">Pascal Research</ExternalLink> on low-latency trading
                        systems. I hold a Master&apos;s degree in Computer Science from{' '}
                        <ExternalLink href="https://ethz.ch/en.html">ETH Zürich</ExternalLink>, with a major in Data
                        Management Systems and a minor in Information Security.
                    </p>
                    <p className="mt-3">
                        I focus on writing highly optimized software to get the best possible speed and efficiency. I
                        use these techniques to solve complex technical problems in finance.
                    </p>
                </NoWrapText>
            </Card>
        </Section>
    );
}
