import SectionTemplate from './templates/SectionTemplate';
import PublicationTemplate from './templates/PublicationTemplate';

export default function Publications() {
    const placeholder = {
        title: 'Placeholder Paper',
        titleLink: 'https://example.com',
        authors: [
            { name: 'Lorenzo Asquini', isHighlighted: true },
            { name: 'Second Author' },
            { name: 'Third Author' },
        ],
        conferenceName: "arXiv '24",
    };

    return (
        <SectionTemplate title="Publications">
            <PublicationTemplate
                title={placeholder.title}
                link={placeholder.titleLink}
                authors={placeholder.authors}
                conferenceName={placeholder.conferenceName}
            />
        </SectionTemplate>
    );
}
