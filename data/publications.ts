import type { PublicationItemProps } from '@components/home/Publications';

export const PUBLICATIONS: PublicationItemProps[] = [
    {
        title: 'Accelerating Triangle Counting with Real Processing-in-Memory Systems',
        authors: [
            { name: 'Lorenzo Asquini', isHighlighted: true },
            { name: 'Manos Frouzakis' },
            { name: 'Juan Gómez-Luna' },
            { name: 'Mohammad Sadrosadati' },
            { name: 'Onur Mutlu' },
            { name: 'Francesco Silvestri' },
        ],
        venues: [
            { name: "IPDPSW '25", link: 'https://ieeexplore.ieee.org/document/11105853' },
            { name: "arXiv '25", link: 'https://arxiv.org/abs/2505.04269' },
        ],
    },
];
