import Link from 'next/link';

import WhiteBoxTemplate from '@components/WhiteBoxTemplate';

interface PostProps {
    title: string;
    description: string;
    slug: string;
}

export default function PostTemplate({ title, description, slug }: PostProps) {
    return (
        <Link href={`/posts/${slug}`}>
            <WhiteBoxTemplate hoverEffect={true}>
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
            </WhiteBoxTemplate>
        </Link>
    );
}
