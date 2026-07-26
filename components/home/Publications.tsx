import { SectionTemplate } from '@components/home/templates/SectionTemplate';
import { PublicationTemplate } from '@components/home/templates/PublicationTemplate';

export function Publications() {
    const placeholder = {
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
    };

    return (
        <SectionTemplate title="Publications">
            <PublicationTemplate title={placeholder.title} authors={placeholder.authors} venues={placeholder.venues} />
        </SectionTemplate>
    );
}
