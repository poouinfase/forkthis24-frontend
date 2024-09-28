import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <div className="relative w-full py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 lg:gap-16">
          <SocialLink icon={<FaInstagram size={40} />} handle="@csivitu" />
          <SocialLink icon={<FaFacebook size={40} />} handle="@csivitu" />
          <SocialLink
            icon={<FaLinkedin size={40} />}
            handle="Computer Society of India"
          />
          <SocialLink icon={<FaXTwitter size={40} />} handle="@csivitu" />
        </div>
      </div>
    </div>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode; handle: string }> = ({
  icon,
  handle,
}) => (
  <div className="flex items-center space-x-6">
    <span>{icon}</span>
    <span className="text-lg sm:text-xl lg:text-2xl">{handle}</span>
  </div>
);

export default Footer;
