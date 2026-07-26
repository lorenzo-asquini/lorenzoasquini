import { SectionTemplate } from '@components/home/templates/SectionTemplate';
import { PostTemplate } from '@components/home/templates/PostTemplate';

export function Posts() {
    const postPlaceholder = {
        title: 'Post Title Placeholder',
        description: 'Short Description',
        slug: 'post-slug',
    };

    return (
        <SectionTemplate title="Posts">
            <PostTemplate
                title={postPlaceholder.title}
                description={postPlaceholder.description}
                slug={postPlaceholder.slug}
            />
        </SectionTemplate>
    );
}
