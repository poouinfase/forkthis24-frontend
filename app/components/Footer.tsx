import Link from "next/link";
import type React from "react";
import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-12 lg:gap-16">
          <SocialLink icon={<FaInstagram size={40} />} handle="@csivitu" href="https://www.instagram.com/csivitu/"/>
          <SocialLink
            icon={<FaLinkedin size={40} />}
            handle="Computer Society of India"
            href="https://www.linkedin.com/company/csivitu"
            className="col-span-2 md:col-span-1 lg:col-span-2"
          />
          <SocialLink icon={<FaXTwitter size={40} />} handle="@csivitu" href = "https://x.com/csivitu"/>
          <SocialLink icon={<FaMedium size={40} />} handle="@csivit" href = "https://medium.com/csivit"/>
        </div>
      </div>
    </div>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode; handle: string; href: string; className?: string }> = ({
  icon,
  handle,
  href,
  className = "",
}) => (
  <Link className={`flex items-center space-x-6 ${className}`} href={href}>
    <span>{icon}</span>
    <span className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap">{handle}</span>
  </Link>
);

export default Footer;
