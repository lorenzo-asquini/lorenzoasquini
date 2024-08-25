import SectionTemplate from './templates/SectionTemplate';
import PrizeTemplate from './templates/PrizeTemplate';

export default function Prizes() {
    const premioAtena = {
        title: 'Premio Atena',
        year: '2022',
        issuer: 'Università degli Studi di Padova, Padua, Italy',
        description:
            'Privately funded prize awarded to 14 winners, selected from a pool of up to 6,000 eligible applicants.',
    };

    const milleUnaLode = {
        title: 'Mille e Una Lode',
        year: '2022',
        issuer: 'Università degli Studi di Padova, Padua, Italy',
        description:
            'Prize awarded to the top 3% of Computer Engineering bachelor’s students, out of approximately 900 students.',
    };

    return (
        <SectionTemplate title="Prizes">
            <PrizeTemplate
                title={premioAtena.title}
                year={premioAtena.year}
                issuer={premioAtena.issuer}
                description={premioAtena.description}
            />

            <PrizeTemplate
                title={milleUnaLode.title}
                year={milleUnaLode.year}
                issuer={milleUnaLode.issuer}
                description={milleUnaLode.description}
            />
        </SectionTemplate>
    );
}
