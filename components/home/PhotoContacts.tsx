import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function PhotoContacts() {
    const githubLink = 'https://github.com/lorenzo-asquini';
    const linkedInLink = 'https://www.linkedin.com/in/lorenzo-asquini/';
    const emailLink = 'mailto:hi@lorenzoasquini.com';

    return (
        <div className="flex flex-col items-center justify-center mt-6">
            {/* //TODO
            <div className="w-52 h-52 bg-gray-300 rounded-full overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="MyPhoto" className="w-full h-full object-cover" />
            </div>
            */}
            <h1 className="text-3xl font-bold mt-4">Lorenzo Asquini</h1>
            <div className="flex space-x-4 mt-2">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href={emailLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </div>
        </div>
    );
}
