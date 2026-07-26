import { Card } from '@components/ui/Card';
import { ExternalLink } from '@components/ui/ExternalLink';

export interface EducationItemProps {
    educationType: string;
    place: string;
    startDate: string;
    endDate: string;

    finalScore?: string;
    gpa?: string;
    thesis?: { title: string; link: string };
    thesisSupervisor?: { name: string; link: string };
    relevantCourses?: string[];
}

export function EducationItem({
    educationType,
    place,
    startDate,
    endDate,
    finalScore,
    gpa,
    thesis,
    thesisSupervisor,
    relevantCourses,
}: EducationItemProps) {
    return (
        <Card>
            <div>
                <h3 className="text-xl font-bold text-gray-800">{educationType}</h3>
                <p className="text-gray-600">{place}</p>
                <p className="text-gray-600">
                    {startDate} - {endDate}
                </p>
                {(finalScore || gpa) && (
                    <p className="text-gray-600">
                        {finalScore && `Final Score: ${finalScore}`}
                        {finalScore && gpa && '. '}
                        {gpa && `GPA: ${gpa}`}
                    </p>
                )}
            </div>
            <div className="mt-4">
                {thesis && (
                    <p className="text-gray-600 font-bold">
                        Thesis: <ExternalLink href={thesis.link}>{thesis.title}</ExternalLink>
                    </p>
                )}
                {thesisSupervisor && (
                    <p className="text-gray-600 font-semibold">
                        Thesis Supervisor:{' '}
                        <ExternalLink href={thesisSupervisor.link}>{thesisSupervisor.name}</ExternalLink>
                    </p>
                )}
            </div>
            {relevantCourses && (
                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Relevant Courses:</h4>
                    <p className="text-gray-700">{relevantCourses.join(', ')}</p>
                </div>
            )}
        </Card>
    );
}
