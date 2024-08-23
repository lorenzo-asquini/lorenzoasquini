import SectionTemplate from './templates/SectionTemplate';
import ProjectTemplate from './templates/ProjectTemplate';

export default function SelectedProjects() {
    return (
        <SectionTemplate title="Selected Projects">
            <ProjectTemplate title="Optimizing a Ternary Neural Network for single-core performance on x86-64 CPUs">
                As part of a group project for the{' '}
                <a href="https://acl.inf.ethz.ch/teaching/fastcode/2024/" className="text-blue-600 hover:text-blue-800">
                    Advanced Systems Lab
                </a>{' '}
                course at ETH Zürich, we optimized the performance of a Ternary Neural Network from the
                <a href="https://dl.acm.org/doi/full/10.1145/3508390" className="text-blue-600 hover:text-blue-800">
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
                            className="text-blue-600 hover:text-blue-800">
                            Skiver
                        </a>{' '}
                        - An arcade game developed in Java
                    </li>
                    <li>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.moonClicker"
                            className="text-blue-600 hover:text-blue-800">
                            Moon Clicker
                        </a>{' '}
                        - A space-themed incremental game created using Unity.
                    </li>
                    <li>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.project_photopro"
                            className="text-blue-600 hover:text-blue-800">
                            PhotoPro
                        </a>{' '}
                        - A custom camera app developed in Kotlin as a university group project. [
                        <a
                            href="https://github.com/lorenzo-asquini/PhotoPro"
                            className="text-blue-600 hover:text-blue-800">
                            Source Code
                        </a>
                        ]
                    </li>
                </ul>
            </ProjectTemplate>
        </SectionTemplate>
    );
}
