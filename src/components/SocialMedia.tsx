"use client";

import React, { SVGProps } from "react";
import Link from "next/link";
import Email from "@/components/icons/Email";
import LinkedIn from "@/components/icons/LinkedIn";
import Github from "@/components/icons/Github";
import SocialMediaList from "@/constants/social-media";
import { track } from "@vercel/analytics";

type IconProps = SVGProps<SVGSVGElement> & { name: string };

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    email: <Email {...props} />,
    linkedin: <LinkedIn {...props} />,
    github: <Github {...props} />,
  };

  return icons[name];
};

const SocialMedia: React.FC = () => {
  return (
    <div className="flex flex-row gap-4">
      {SocialMediaList.map((link) => (
        <Link
          key={link.name}
          href={link.link}
          target="_blank"
          className="overflow-hidden transition-all text-zinc-900/60 dark:text-zinc-100/60 hover:text-zinc-900/100 dark:hover:text-zinc-100/100"
          onClick={() => track(`${link.name}_click`)}
        >
          <p className="sr-only">{link.name}</p>
          <Icon name={link.name} className="transition-all h-5 w-5" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
