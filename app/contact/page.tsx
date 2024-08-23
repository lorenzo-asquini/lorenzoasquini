import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import WhiteBoxTemplate from '@components/WhiteBoxTemplate';

export default function Contact() {
    return (
        <div className="flex justify-center">
            <div className="text-center m-20 w-full max-w-xl">
                <h1 className="text-4xl font-bold mb-6 text-center">Where You Can Find Me:</h1>
                <WhiteBoxTemplate>
                    <ul className="text-lg space-y-8">
                        <li>
                            <a
                                href="mailto:hi@lorenzoasquini.com"
                                className="flex items-center text-black hover:text-gray-500">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="mr-4 text-gray-700" />
                                hi@lorenzoasquini.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/lorenzo-asquini"
                                className="flex items-center text-black hover:text-gray-500">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="mr-4 text-gray-700" />
                                github.com/lorenzo-asquini
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/lorenzo-asquini/"
                                className="flex items-center text-black hover:text-gray-500">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-4 text-gray-700" />
                                linkedin.com/in/lorenzo-asquini
                            </a>
                        </li>
                    </ul>
                </WhiteBoxTemplate>
            </div>
        </div>
    );
}
