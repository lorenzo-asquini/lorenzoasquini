import { SectionTemplate } from '@components/home/templates/SectionTemplate';
import { EducationTemplate } from '@components/home/templates/EducationTemplate';

export function Education() {
    const masterETH = {
        educationType: 'Master in Computer Science',
        place: 'ETH Zürich, Zürich, Switzerland',
        startDate: 'September 2023',
        endDate: '2026',
        relevantCourses: [
            'Advanced Systems Lab',
            'Compiler Design',
            'Computer Architecture',
            'Design of Parallel and High-Performance Computing',
        ],
    };

    const bachelorUNIPD = {
        educationType: 'Bachelor in Computer Engineering',
        place: 'Università degli Studi di Padova, Padua, Italy',
        startDate: 'September 2020',
        endDate: 'July 2023',
        finalScore: '110/110 cum Laude',
        gpa: '29.75/30',
        thesis: {
            title: 'Approximate triangle counting with vertex coloring on the UPMEM architecture',
            link: 'https://thesis.unipd.it/handle/20.500.12608/48323',
        },
        thesisSupervisor: {
            name: 'Francesco Silvestri',
            link: 'https://www.dei.unipd.it/~silvestri/',
        },
        relevantCourses: ['Algorithms for Engineering', 'Computer Architecture', 'Operating Systems'],
    };

    return (
        <SectionTemplate title="Education">
            <EducationTemplate
                educationType={masterETH.educationType}
                place={masterETH.place}
                startDate={masterETH.startDate}
                endDate={masterETH.endDate}
                relevantCourses={masterETH.relevantCourses}
            />

            <EducationTemplate
                educationType={bachelorUNIPD.educationType}
                place={bachelorUNIPD.place}
                startDate={bachelorUNIPD.startDate}
                endDate={bachelorUNIPD.endDate}
                finalScore={bachelorUNIPD.finalScore}
                thesis={bachelorUNIPD.thesis}
                thesisSupervisor={bachelorUNIPD.thesisSupervisor}
                gpa={bachelorUNIPD.gpa}
                relevantCourses={bachelorUNIPD.relevantCourses}
            />
        </SectionTemplate>
    );
}
