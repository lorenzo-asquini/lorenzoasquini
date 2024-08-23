import WhiteBoxTemplate from '@components/WhiteBoxTemplate';

interface EducationProps {
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

export default function EducationTemplate({
    educationType,
    place,
    startDate,
    endDate,
    finalScore,
    gpa,
    thesis,
    thesisSupervisor,
    relevantCourses,
}: EducationProps) {
    return (
        <WhiteBoxTemplate>
            <div>
                <h2 className="text-xl font-bold text-gray-800">{educationType}</h2>
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
                        Thesis:{' '}
                        <a
                            href={thesis.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline">
                            {thesis.title}
                        </a>
                    </p>
                )}
                {thesisSupervisor && (
                    <p className="text-gray-600 font-semibold">
                        Thesis Supervisor:{' '}
                        <a
                            href={thesisSupervisor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline">
                            {thesisSupervisor.name}
                        </a>
                    </p>
                )}
            </div>
            {relevantCourses && (
                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Relevant Courses:</h4>
                    <p className="text-gray-700">{relevantCourses.join(', ')}</p>
                </div>
            )}
        </WhiteBoxTemplate>
    );
}
