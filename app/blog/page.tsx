import { getAllPosts } from "../../api/blog/utils";
import { Intro } from "./components/intro";
import { MoreStories } from "./components/more-stories";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <div>
      <Intro />
      <MoreStories posts={allPosts} />
    </div>
  );
}
