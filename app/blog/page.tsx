import { getAllPosts } from "../../src/infrastructure/blog";
import { Intro } from "../_components/specific/blog/intro";
import { MoreStories } from "../_components/specific/blog/more-stories";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <div>
      <Intro />
      <MoreStories posts={allPosts} />
    </div>
  );
}
