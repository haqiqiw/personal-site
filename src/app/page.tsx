"use client";

import Introduction from "@/components/Introduction";
import { Tabs } from "@/components/tabs/Main";
import TabsOptions from "@/components/tabs/Options";
import TabsExperience from "@/components/tabs/contents/Experience";
import TabsSideProject from "@/components/tabs/contents/SideProject";
import TabsPortfolio from "@/components/tabs/contents/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 min-h-svh flex flex-col justify-between">
      <div>
        <Introduction />
        <Tabs defaultValue="experience">
          <TabsOptions />
          <TabsExperience />
          <TabsPortfolio />
          <TabsSideProject />
        </Tabs>
      </div>

      <Footer />
    </main>
  );
}
