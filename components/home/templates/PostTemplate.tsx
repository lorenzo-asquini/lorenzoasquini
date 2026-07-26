import Link from 'next/link';

import { WhiteBoxTemplate } from '@components/WhiteBoxTemplate';

export interface PostTemplateProps {
    title: string;
    description: string;
    slug: string;
}

export function PostTemplate({ title, description, slug }: PostTemplateProps) {
    return (
        <Link href={`/posts/${slug}`}>
            <WhiteBoxTemplate hoverEffect>
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </WhiteBoxTemplate>
        </Link>
    );
}
