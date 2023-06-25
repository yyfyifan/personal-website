import Image, { StaticImageData } from "next/image";
import React from "react";

interface OrganizationLogoProps {
  src: StaticImageData;
  name: string;
}

const OrganizationLogo: React.FC<OrganizationLogoProps> = ({ src, name }) => {
  return <Image src={src} alt={`${name} logo`} height={18} className="object-contain" />;
};
OrganizationLogo.displayName = "OrganizationLogo";
export default OrganizationLogo;
