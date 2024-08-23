import SectionTemplate from './templates/SectionTemplate';
import EducationTemplate from './templates/EducationTemplate';

export default function Education() {
    const masterETH = {
        educationType: 'Master in Computer Science',
        place: 'ETH Zürich, Zürich, Switzerland',
        startDate: 'September 2023',
        endDate: 'Present',
        relevantCourses: [
            'Advanced Systems Lab',
            'Algorithms Lab',
            'Cloud Computing Architecture',
            'Computer Architecture',
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

    // Leaving this here even though it is not displayed
    const highSchool = {
        educationType: 'High School Diploma',
        place: 'Liceo Scientifico Niccolò Copernico, Udine, Italy',
        startDate: 'September 2015',
        endDate: 'June 2020',
        finalScore: '100/100 cum Laude',
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
