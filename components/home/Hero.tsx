import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { EMAIL_HREF, LINKS } from '@data/links';

export function Hero() {
    return (
        <div className="flex flex-col items-center justify-center mt-6">
            <h1 className="text-3xl font-bold">Lorenzo Asquini</h1>
            <div className="flex space-x-4 mt-2">
                <a href={EMAIL_HREF} aria-label="Email" className="hover:text-gray-500">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
                <a
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="hover:text-gray-500">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="hover:text-gray-500">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </div>
    );
}
