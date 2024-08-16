"use client";
import PostCard from "./PostCard";

export default function SearchView(props: any) {
  const { postMetadata } = props;

  return (
    <div>
      {postMetadata.map((post: any, postIndex: any) => {
        return <PostCard key={postIndex} post={post} />;
      })}
    </div>
  );
}
