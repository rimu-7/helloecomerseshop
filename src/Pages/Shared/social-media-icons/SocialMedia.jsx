import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  const socialLinks = {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    pinterest: "https://www.pinterest.com",
    whatsapp: "https://www.whatsapp.com",
    linkedin: "https://www.linkedin.com",
  };

  return (
    <div className="flex justify-center gap-4 py-4">
      {/* Facebook Icon */}
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition-all ease-in-out duration-300"
      >
        <FaFacebook className="h-6 w-6" />
      </a>

      {/* Instagram Icon */}
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-pink-500 transition-all ease-in-out duration-300"
      >
        <FaInstagram className="h-6 w-6" />
      </a>

      {/* Twitter Icon */}
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-400 transition-all ease-in-out duration-300"
      >
        <FaTwitter className="h-6 w-6" />
      </a>

      {/* Pinterest Icon */}
      <a
        href={socialLinks.pinterest}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
      >
        <FaPinterest className="h-6 w-6" />
      </a>

      {/* WhatsApp Icon */}
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-green-500 transition-all ease-in-out duration-300"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>

      {/* LinkedIn Icon */}
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-700 transition-all ease-in-out duration-300"
      >
        <FaLinkedin className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialMedia;
