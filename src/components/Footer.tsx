"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
      <div>&copy; {new Date().getFullYear()} Haqqi</div>
      <div>Built with Next.js</div>
    </footer>
  );
};

export default Footer;
