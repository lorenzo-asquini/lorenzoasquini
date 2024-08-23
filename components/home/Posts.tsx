import SectionTemplate from './templates/SectionTemplate';
import PostTemplate from './templates/PostTemplate';

export default function Posts() {
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
