"use client";

import React, { useState } from "react";
import { TabsContent } from "@/components/tabs/Main";
import SquareImage from "@/components/SquareImage";
import PortfolioList from "@/constants/portfolio";
import type { PortfolioType } from "@/constants/portfolio";
import { track } from "@vercel/analytics";
import { slugify } from "@/utilities/utils";
import { ExternalLink } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

type PortfolioItemProps = {
  data: PortfolioType;
};

const TabsPortfolio: React.FC = () => {
  return (
    <TabsContent value="portfolio">
      <section className="mb-2">
        <ul className="space-y-6">
          {PortfolioList.map((item, index) => (
            <PortfolioItem key={`port-${index}`} data={item} />
          ))}
        </ul>
      </section>
    </TabsContent>
  );
};

const PortfolioItem = ({ data }: PortfolioItemProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const imageSlides = data.images
    ? data.images.map((img) => ({ src: img }))
    : [];

  return (
    <li>
      <div className="flex flex-row items-center justify-between mb-1">
        <h3 className="text-md font-medium">{data.title}</h3>
        <div className="flex flex-row gap-2">
          {data.link ? (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              onClick={() => track(`${slugify(data.title)}_preview_click`)}
            >
              View <ExternalLink className="w-3 h-3" />
            </a>
          ) : null}
        </div>
      </div>
      <div className="flex flex-wrap items-center mb-2">
        {data.roles.map((role, techIndex) => (
          <div key={`tech-${techIndex}`}>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">
              {role}
            </span>
            {techIndex < data.roles.length - 1 && (
              <span className="mx-1 text-xs text-zinc-400 dark:text-zinc-500">
                /
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
        {data.description}
      </p>
      {data.images && data.images.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {data.images.map((src, index) => (
            <SquareImage
              key={`img-${index}`}
              src={src}
              alt={`${data.title} screenshot ${index + 1}`}
              onClick={() => {
                track(`${slugify(data.title)}_image${index + 1}_click`);
                setIndex(index);
                setOpen(true);
              }}
            />
          ))}
        </div>
      )}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={imageSlides}
        plugins={[Counter, Zoom]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
      />
    </li>
  );
};

export default TabsPortfolio;
