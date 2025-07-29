"use client";

import React from "react";
import { TabsContent } from "@/components/tabs/Main";
import SideProjectList from "@/constants/side-project";
import { track } from "@vercel/analytics";
import { ExternalLink } from "lucide-react";

const TabsSideProject: React.FC = () => {
  return (
    <TabsContent value="side-project">
      <section className="mb-2">
        <ul className="space-y-4">
          {SideProjectList.map((item, index) => {
            return (
              <li key={`proj-${index}`}>
                <div className="flex flex-row items-center justify-between mb-1">
                  <h3 className="text-md font-medium">{item.title}</h3>
                  <div className="flex flex-row gap-2">
                    {item.github ? (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        onClick={() => track(`${item.title}_github_click`)}
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : null}
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        onClick={() => track(`${item.title}_link_click`)}
                      >
                        View <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : null}
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </TabsContent>
  );
};

export default TabsSideProject;
