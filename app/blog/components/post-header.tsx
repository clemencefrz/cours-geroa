import { Post } from "@/app/api/blog/utils";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./post-title";

type Props = Pick<Post, "coverImage" | "date" | "title">;

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="hidden md:block md:mb-12">
        <Avatar name={"Clémence Fernandez"} picture={"/images/clemence.jpeg"} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 ">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar
            name={"Clémence Fernandez"}
            picture={"/images/clemence.jpeg"}
          />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
