"use client";

import React from "react";
import { TabsContent } from "@/components/tabs/Main";
import ExperienceList from "@/constants/experience";

const TabsExperience: React.FC = () => {
  return (
    <TabsContent value="experience">
      <section className="mb-2">
        <ul className="space-y-5">
          {ExperienceList.map((item, index) => {
            return (
              <li key={`exp-${index}`}>
                <div className="flex flex-row items-start justify-between mb-1">
                  <h3 className="text-md font-medium">
                    {item.role} at {item.company}
                  </h3>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap items-center">
                  {item.technologies.map((tech, techIndex) => (
                    <div key={`tech-${techIndex}`}>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {tech}
                      </span>
                      {techIndex < item.technologies.length - 1 && (
                        <span className="mx-1 text-xs text-zinc-400 dark:text-zinc-500">
                          /
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </TabsContent>
  );
};

export default TabsExperience;
