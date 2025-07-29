"use client";

import React from "react";
import Image from "next/image";

type SquareImageProps = {
  src: string;
  alt: string;
  onClick: () => void;
};

const SquareImage: React.FC<SquareImageProps> = ({
  src,
  alt,
  onClick,
}: SquareImageProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-square w-16 h-16 rounded-md overflow-hidden cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover bg-zinc-100 dark:bg-zinc-800 transition-transform duration-300 ease-in-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
    </div>
  );
};

export default SquareImage;
