import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center text-center px-4">
      <div>
        <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Sorry, the page you are looking for either moved or doesn&apos;t
          exist.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/"
            prefetch={true}
            className="rounded-full bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 dark:focus-visible:outline-zinc-300 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
