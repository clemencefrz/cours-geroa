import Markdown from "markdown-to-jsx";

import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "./utils";
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
    <article>
      <Markdown>{post.content}</Markdown>
    </article>
  );
}
