import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export default function PostCard({
  post,
}: {
  post: { title: string; bio: string; slug: string };
}) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.bio}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{`     Photo? `}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>{`Lire l'article`}</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
