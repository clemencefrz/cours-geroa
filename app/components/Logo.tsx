import Image from "next/image";
import Link from "next/link";
const SRC_LOGO =
  "https://media.istockphoto.com/id/1454316655/vector/cute-red-panda-waving-in-round-frame-cartoon-vector-icon-illustration-animal-nature-icon.jpg?s=612x612&w=0&k=20&c=01vs8aWZloueN-XGiMSxqhHvUNczJHTc0LRohERlxQ4=";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={SRC_LOGO} alt={"logo"} width={60} height={60} />
    </Link>
  );
};

export default Logo;
