import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Card } from '@components/ui/Card';
import { ExternalLink } from '@components/ui/ExternalLink';
import { EMAIL_HREF, LINKS } from '@data/links';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Where you can find Lorenzo Asquini',
};

export default function Contact() {
    return (
        <div className="flex justify-center">
            <div className="text-center m-20 w-full max-w-xl">
                <h1 className="text-4xl font-bold mb-6 text-center">Where You Can Find Me:</h1>
                <Card>
                    <ul className="text-lg space-y-8">
                        <li>
                            <a href={EMAIL_HREF} className="flex items-center text-black hover:text-gray-500">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="mr-4 text-gray-700" />
                                {LINKS.email}
                            </a>
                        </li>
                        <li>
                            <ExternalLink
                                href={LINKS.linkedin}
                                className="flex items-center text-black hover:text-gray-500">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-4 text-gray-700" />
                                linkedin.com/in/lorenzo-asquini
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink
                                href={LINKS.github}
                                className="flex items-center text-black hover:text-gray-500">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="mr-4 text-gray-700" />
                                github.com/lorenzo-asquini
                            </ExternalLink>
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    );
}
