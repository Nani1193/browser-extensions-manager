import type { IconProps } from "../../interfaces/IconProps";

export default function Icon({
  src,
  alt,
  className = "",
}: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
}