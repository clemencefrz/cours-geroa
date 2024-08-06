import { Metadata } from "next";
import NosCours from "./components/NosCours";
export const metadata: Metadata = {
  title: "Nos cours",
  description: "Catalogue des différents cours à Geroa",
};

const Page = () => {
  return <NosCours />;
};
export default Page;
