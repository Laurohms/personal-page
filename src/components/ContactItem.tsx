import { Flex, IconProps, Link, Tooltip } from "@radix-ui/themes";
import React from "react";

interface ContactItemProps {
  name: string;
  link: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  name,
  link,
  url,
  icon,
}) => {
  return (
    <>
      <Tooltip content={name}>
        <Flex gap={"1"}>
          {React.createElement(icon, { width: 18, height: 18 })}
          <Link href={url}>{link}</Link>
        </Flex>
      </Tooltip>
    </>
  );
};
