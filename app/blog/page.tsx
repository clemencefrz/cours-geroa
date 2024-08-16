import getPostMetadata from "./[slug]/utils";
import SearchView from "./components/SearchView";

export default function Home() {
  const postMetadata = getPostMetadata("blog");

  return <SearchView postMetadata={postMetadata} />;
}
