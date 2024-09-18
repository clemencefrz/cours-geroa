import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/images/Logo.svg"} alt={"logo"} width={40} height={40} />
    </Link>
  );
};

export default Logo;
