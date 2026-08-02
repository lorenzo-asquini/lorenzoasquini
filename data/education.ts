import type { EducationItemProps } from '@components/home/Education';

export const EDUCATION: EducationItemProps[] = [
    {
        educationType: 'Master in Computer Science',
        place: 'ETH Zürich, Zürich, Switzerland',
        startDate: 'September 2023',
        endDate: 'June 2026',
        grade: '5.8/6, with distinction',
        thesis: {
            title: 'Yet Another Torch Compiler: Design and Evaluation of a CPU Compilation Framework for PyTorch',
            link: 'https://doi.org/10.3929/ethz-c-000799770',
        },
        relevantCourses: [
            'Advanced Systems Lab',
            'Compiler Design',
            'Computer Architecture',
            'Design of Parallel and High-Performance Computing',
        ],
    },
    {
        educationType: 'Bachelor in Computer Engineering',
        place: 'Università degli Studi di Padova, Padua, Italy',
        startDate: 'September 2020',
        endDate: 'July 2023',
        grade: '110/110 cum Laude. GPA: 29.75/30',
        thesis: {
            title: 'Approximate triangle counting with vertex coloring on the UPMEM architecture',
            link: 'https://hdl.handle.net/20.500.12608/48323',
        },
        relevantCourses: ['Algorithms for Engineering', 'Computer Architecture', 'Operating Systems'],
    },
];
