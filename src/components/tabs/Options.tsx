"use client";

import React from "react";
import { TabsList, TabsTrigger } from "@/components/tabs/Main";
import { cn } from "@/utilities/utils";

const Options: React.FC = () => {
  return (
    <TabsList className="mb-2 border-none bg-transparent p-0 -ml-[8px]">
      <TabsTrigger
        value="experience"
        className={cn(
          "!bg-transparent !border-none !shadow-none",
          "!font-light data-[state=active]:!font-bold transition-all duration-300 ease-out",
          "!text-neutral-400 dark:!text-neutral-400",
          "data-[state=active]:!text-neutral-800 dark:data-[state=active]:!text-neutral-100"
        )}
      >
        Experience
      </TabsTrigger>
      <TabsTrigger
        value="portfolio"
        className={cn(
          "!bg-transparent !border-none !shadow-none",
          "!font-light data-[state=active]:!font-bold transition-all duration-300 ease-out",
          "!text-neutral-400 dark:!text-neutral-400",
          "data-[state=active]:!text-neutral-800 dark:data-[state=active]:!text-neutral-100"
        )}
      >
        Portfolio
      </TabsTrigger>
      <TabsTrigger
        value="side-project"
        className={cn(
          "!bg-transparent !border-none !shadow-none",
          "!font-light data-[state=active]:!font-bold transition-all duration-300 ease-out",
          "!text-neutral-400 dark:!text-neutral-400",
          "data-[state=active]:!text-neutral-800 dark:data-[state=active]:!text-neutral-100"
        )}
      >
        Side Project
      </TabsTrigger>
    </TabsList>
  );
};

export default Options;
