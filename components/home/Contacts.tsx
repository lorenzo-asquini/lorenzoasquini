import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Contacts() {
    const githubLink = 'https://github.com/lorenzo-asquini';
    const linkedInLink = 'https://www.linkedin.com/in/lorenzo-asquini/';
    const emailLink = 'mailto:hi@lorenzoasquini.com';

    return (
        <div className="flex flex-col items-center justify-center mt-6">
            <h1 className="text-3xl font-bold">Lorenzo Asquini</h1>
            <div className="flex space-x-4 mt-2">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href={emailLink} className="hover:text-gray-500">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </div>
        </div>
    );
}
