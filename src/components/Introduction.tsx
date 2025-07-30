"use client";

import React from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import SocialMedia from "@/components/SocialMedia";

const Introduction: React.FC = () => {
  return (
    <section className="mb-4">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/avatar.webp"
          width={128}
          height={128}
          alt="Haqqi's Avatar"
          className="h-12 w-12 rounded-full"
          priority
        />
        <h1 className="text-xl font-medium tracking-tight flex items-baseline justify-between w-full">
          <span>Hello, I&apos;m Haqqi</span>
          <ThemeToggle />
        </h1>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-2">
        I&apos;m a software engineer with over 7 years of experience, starting
        my career as an Android developer before moving into a full-stack role.
        For more than 6 years, I helped build products at{" "}
        <a
          href="https://www.bukalapak.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          Bukalapak
        </a>{" "}
        and{" "}
        <a
          href="https://mitra.bukalapak.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          Mitra Bukalapak
        </a>
        .
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-4">
        Based in Jakarta, I&apos;m currently looking for new opportunities. Feel
        free to connect with me below.
      </p>

      <div className="flex items-center justify-between">
        <SocialMedia />
        {/* <a
          href="/resume-haqqi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium transition-colors rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
        >
          View Resume
        </a> */}
      </div>
    </section>
  );
};

export default Introduction;
