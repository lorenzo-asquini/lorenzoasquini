import type { EducationItemProps } from '@components/home/Education';

export const EDUCATION: EducationItemProps[] = [
    {
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
    },
    {
        educationType: 'Bachelor in Computer Engineering',
        place: 'Università degli Studi di Padova, Padua, Italy',
        startDate: 'September 2020',
        endDate: 'July 2023',
        grade: '110/110 cum Laude. GPA: 29.75/30',
        thesis: {
            title: 'Approximate triangle counting with vertex coloring on the UPMEM architecture',
            link: 'https://thesis.unipd.it/handle/20.500.12608/48323',
        },
        relevantCourses: ['Algorithms for Engineering', 'Computer Architecture', 'Operating Systems'],
    },
];
