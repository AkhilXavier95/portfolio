import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function SkillIcon({ src, alt = "icon", className }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      className="object-contain rounded"
      width={40}
      height={40}
    />
  );
}
