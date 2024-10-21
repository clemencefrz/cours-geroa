import { Metadata } from "next";

export interface Post extends Pick<Metadata, "keywords" | "description"> {
  slug: string;
  title: string;
  date: string;
  content: string;
  coverImage: string;
}
