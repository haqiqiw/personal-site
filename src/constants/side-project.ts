export type SideProjectType = {
  title: string;
  description: string;
  link?: string;
  github?: string;
};

const SideProjectList: SideProjectType[] = [
  {
    title: "react-native-slideshow",
    description:
      "A quick and easy slideshow for React Native (Andriud & iOS), which was previously used for development at my previous company.",
    link: "",
    github: "https://github.com/haqiqiw/react-native-slideshow",
  },
  {
    title: "spark-elements",
    description:
      "A collection of custom, reusable components for React Native. This component library was used to speed up development at my previous company.",
    link: "",
    github: "https://github.com/haqiqiw/spark-elements",
  },
  {
    title: "personal-site",
    description:
      "The source code for this personal website, built with Next.js and Tailwind CSS to document my professional journey, portfolio, and side project.",
    link: "https://haqiqiw.dev/",
    github: "https://github.com/haqiqiw/personal-site",
  },
];

export default SideProjectList;
