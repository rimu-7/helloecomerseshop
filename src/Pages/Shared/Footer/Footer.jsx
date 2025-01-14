import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-neutral-900 py-6">
      <div className="container mx-auto px-4 text-center justify">
        <p className="text-sm">
          © {new Date().getFullYear()} Your
          <span className="font-bold"> Company Name</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
