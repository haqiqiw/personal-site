export type PortfolioType = {
  title: string;
  description: string;
  link: string;
  roles: string[];
  images: string[];
};

const PortfolioList: PortfolioType[] = [
  {
    title: "Mitra Branch",
    description:
      "A feature that allow owners to connect and manage their branch accounts. The system I built including account management, transaction history, and balance transfers, with premium features unlocked via subscription.",
    link: "https://play.google.com/store/apps/details?id=com.bukalapak.mitra&hl=id",
    roles: ["Backend", "Frontend", "Android"],
    images: [
      "/mitra-branch-1.webp",
      "/mitra-branch-2.webp",
      "/mitra-branch-3.webp",
      "/mitra-branch-4.webp",
      "/mitra-branch-5.webp",
      "/mitra-branch-6.webp",
    ],
  },
  {
    title: "Sales Army",
    description:
      "An internal tool for sales team. My contributions included re-architecting the payment system to enhance reliability and leading the migration to merge the entire system into another service.",
    link: "https://mitra.bukalapak.com/",
    roles: ["Backend", "Frontend"],
    images: [
      "/sales-army-1.webp",
      "/sales-army-2.webp",
      "/sales-army-3.webp",
      "/sales-army-4.webp",
    ],
  },
  {
    title: "Mitra Rewarded Ads",
    description:
      "A gamification feature to increase user engagement. I built the system for users to watch ads for points and implemented a rate-limiting mechanism to prevent abuse.",
    link: "https://play.google.com/store/apps/details?id=com.bukalapak.mitra&hl=id",
    roles: ["Backend", "Android"],
    images: [
      "/rewarded-ads-1.webp",
      "/rewarded-ads-2.webp",
      "/rewarded-ads-3.webp",
      "/rewarded-ads-4.webp",
    ],
  },
  {
    title: "Mitra Game Voucher Landing Revamp",
    description:
      "Revamped the page to improve user experience and product discovery. Key enhancements included a reorganized product layout, dynamic category filters, and promotional banners.",
    link: "https://play.google.com/store/apps/details?id=com.bukalapak.mitra&hl=id",
    roles: ["Android"],
    images: [
      "/game-voucher-1.webp",
      "/game-voucher-2.webp",
      "/game-voucher-3.webp",
    ],
  },
  {
    title: "Mitra Account Security Enhancement",
    description:
      "Redesigning the page and implementing new features, including suspicious phone number checker, login activity logs, and the ability to remotely log out from all devices.",
    link: "https://play.google.com/store/apps/details?id=com.bukalapak.mitra&hl=id",
    roles: ["Android"],
    images: [
      "/account-security-1.webp",
      "/account-security-2.webp",
      "/account-security-3.webp",
    ],
  },
  {
    title: "Mitra Loyalty Scheme Experiment",
    description:
      "A/B test to measure the impact of different loyalty schemes on user behavior. I developed the system that assigned users to various alternatives (e.g., Normal, Variant 1, Variant 2), each with a unique reward calculation logic.",
    link: "https://play.google.com/store/apps/details?id=com.bukalapak.mitra&hl=id",
    roles: ["Backend"],
    images: [
      "/loyalty-scheme-1.webp",
      "/loyalty-scheme-2.webp",
      "/loyalty-scheme-3.webp",
    ],
  },
];

export default PortfolioList;
