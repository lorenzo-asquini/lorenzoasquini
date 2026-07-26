import { SectionTemplate } from '@components/home/templates/SectionTemplate';
import { ProjectTemplate } from '@components/home/templates/ProjectTemplate';

export function SelectedProjects() {
    return (
        <SectionTemplate title="Selected Projects">
            <ProjectTemplate title="Analyzing the Impact of RowClone Operations on RowHammer Attack Amplification">
                In collaboration with the{' '}
                <a
                    href="https://safari.ethz.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    SAFARI Research Group
                </a>
                , I investigated how the Processing-Using-Memory operation RowClone can amplify the RowHammer attack.
            </ProjectTemplate>

            <ProjectTemplate title="Optimizing a Ternary Neural Network for single-core performance on x86-64 CPUs">
                As part of a group project for the{' '}
                <a
                    href="https://acl.inf.ethz.ch/teaching/fastcode/2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    Advanced Systems Lab
                </a>{' '}
                course at ETH Zürich, we optimized the performance of a Ternary Neural Network from the{' '}
                <a
                    href="https://dl.acm.org/doi/full/10.1145/3508390"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    TAB inference method
                </a>{' '}
                on a single-core x86-64 CPU. Our optimizations involved leveraging AVX2 vector instructions, improving
                data access patterns, and maximizing data reuse.
            </ProjectTemplate>

            <ProjectTemplate title="Android Application Development">
                <ul className="list-disc text-gray-700 space-y-2 ml-3">
                    <li>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.skiver"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline">
                            Skiver
                        </a>{' '}
                        - An arcade game developed in Java.
                    </li>
                    <li>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.moonClicker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline">
                            Moon Clicker
                        </a>{' '}
                        - A space-themed incremental game created using Unity.
                    </li>
                    <li>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.project_photopro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline">
                            PhotoPro
                        </a>{' '}
                        - A custom camera app developed in Kotlin as a university group project. [
                        <a
                            href="https://github.com/lorenzo-asquini/PhotoPro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline">
                            Source Code
                        </a>
                        ]
                    </li>
                </ul>
            </ProjectTemplate>
        </SectionTemplate>
    );
}
