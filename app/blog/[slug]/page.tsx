import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "./utils";
import { PostHeader } from "./components/post-header";
import { PostBody } from "./components/post-body";

import Container from "./components/container";
interface Params {
  slug: string;
}
function getPostContent(slug: string) {
  const folder = "blog/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("blog");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params }: { params: Params }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `Blog de Cours Geroa - ${id.replaceAll("_", " ")}`,
  };
}

export default function BlogPage(props: { params: Params }) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <Container>
        <article className="mb-32">
          <PostHeader
            title={"post.title"}
            coverImage={"/images/etudiante-devant-ordi.jpg"}
            date={"2024-10-10"}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </>
  );
}
