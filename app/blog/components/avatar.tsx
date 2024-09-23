import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <Link
      className="flex items-center gap-2"
      href={"/about#Clémence"}
      target="_blank"
    >
      <div className="h-12 w-12">
        <Image
          src={picture}
          className="w-full h-full rounded-full object-cover"
          height={102}
          width={102}
          alt={`Photo de ${name}`}
        />
      </div>

      <div className="text-xl font-bold">{name}</div>
    </Link>
  );
};

export default Avatar;
