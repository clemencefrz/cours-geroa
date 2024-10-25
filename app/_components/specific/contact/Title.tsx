"use client";
import { TextGenerateEffect } from "@/app/_components/design-system/text-generate-effect";
import { cn } from "@/src/utils/cn";

const Title = () => {
  return (
    <div className={cn("ContainerHeaderPage", "text-center")}>
      <h1>{`En basque, Geroa fait référence à l'avenir`}</h1>
      <TextGenerateEffect
        filter
        words={`Bâtissez le votre dès aujourd'hui.`}
        duration={1}
      />
    </div>
  );
};

export default Title;
