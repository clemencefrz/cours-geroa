import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "./utils";
import ReactMarkdown from "react-markdown";
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
    <div className="flex justify-center py-8">
      <article className="max-w-4xl w-full bg-white rounded-lg p-8 shadow-lg">
        <ReactMarkdown className="prose prose-lg md:prose-lg px-10 md:px-0 md:max-w-[750px] prose-p:my-3">
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
