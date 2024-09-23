import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-12 w-12">
        <Image
          src={picture}
          className="w-full h-full rounded-full object-cover"
          height={102}
          width={102}
          alt={name}
        />
      </div>

      <Link
        href={"/about#Clémence"}
        target="_blank"
        className="text-xl font-bold"
      >
        {name}
      </Link>
    </div>
  );
};

export default Avatar;
