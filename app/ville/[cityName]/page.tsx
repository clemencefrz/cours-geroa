import cityData from "@/app/city.json";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const citiesName = cityData.cities.map((city) => city.city_name);
  return citiesName;
};

export async function generateMetadata({
  params: { cityName },
}: {
  params: { cityName: string };
}) {
  const city = cityData.cities.find((city) => city.city_name === cityName);
  if (!city) {
    return notFound();
  }

  return {
    title: `Cours soutien scolaire à - ${city.city_name}`,
  };
}

const Page = () => {
  return <div>coucou</div>;
};

export default Page;
