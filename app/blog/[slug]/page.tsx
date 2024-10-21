import { PostHeader } from "../../_components/specific/blog/post-header";
import { PostBody } from "../../_components/specific/blog/post-body";
import Container from "../../_components/specific/blog/container";
import { getAllPosts, getPostBySlug } from "@/src/application/services/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata | null {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Cours Geroa Blog Soutien Scolaire Anglet`;

  return {
    title,
    keywords: post.keywords,
    description: post.description,
    openGraph: {
      title,
    },
  };
}

const BlogPage = ({ params }: { params: Params }) => {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <Container>
      <article className="mb-32">
        <PostHeader {...post} />
        <PostBody {...post} />
      </article>
    </Container>
  );
};

export default BlogPage;
