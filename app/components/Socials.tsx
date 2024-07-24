"use client";

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const icons = [
  {
    path: "fake-url",
    name: "",
  },
];

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <a
          target="_blank"
          key={index}
          href={icon.path}
          aria-label={`Link to ${icon.name}`}
        >
          <div className={`${iconStyles}`}>{icon.name}</div>
        </a>
      ))}
    </div>
  );
};
export default Socials;
