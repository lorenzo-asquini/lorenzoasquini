import { Card } from '@components/ui/Card';
import { ExternalLink } from '@components/ui/ExternalLink';
import { Section } from '@components/ui/Section';
import { EDUCATION } from '@data/education';

export interface EducationItemProps {
    educationType: string;
    place: string;
    startDate: string;
    endDate: string;

    grade?: string;
    thesis?: { title: string; link: string };
    relevantCourses: string[];
}

function EducationItem({
    educationType,
    place,
    startDate,
    endDate,
    grade,
    thesis,
    relevantCourses,
}: EducationItemProps) {
    return (
        <Card>
            <h3 className="text-xl font-bold text-gray-800">{educationType}</h3>
            <p className="text-gray-700">{place}</p>
            <p className="text-gray-500">
                {startDate} - {endDate}
            </p>
            {grade && (
                <p className="text-gray-500">
                    <span className="font-semibold">Grade:</span> {grade}
                </p>
            )}

            <div className="mt-3 space-y-1 text-gray-700">
                {thesis && (
                    <p className="flex gap-1">
                        <span className="font-semibold shrink-0">Thesis:</span>
                        <ExternalLink href={thesis.link}>{thesis.title}</ExternalLink>
                    </p>
                )}
                <p className="flex gap-1">
                    <span className="font-semibold shrink-0">Relevant Courses:</span>
                    <span>{relevantCourses.join(', ')}</span>
                </p>
            </div>
        </Card>
    );
}

export function Education() {
    return (
        <Section title="Education">
            {EDUCATION.map((education) => (
                <EducationItem key={education.educationType} {...education} />
            ))}
        </Section>
    );
}
