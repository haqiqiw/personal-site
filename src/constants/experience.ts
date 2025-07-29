export type ExperienceType = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

const ExperienceList: ExperienceType[] = [
  {
    role: "Software Engineer II",
    company: "PT. Bukalapak.com Tbk",
    period: "Oct 2022 - Jun 2025",
    description:
      "Managed and maintained core features across Mitra Bukalapak ecosystem, including Home, My Account, Transaction List, Loyalty Points, and Sales Army",
    technologies: [
      "Android",
      "Kotlin",
      "Golang",
      "Ruby",
      "JavaScript",
      "Vue.js",
      "MySQL",
      "Redis",
      "Kafka",
      "ArgoCD",
      "Kubernetes",
      "GCP",
      "Datadog",
      "Grafana",
      "OpenSearch",
      "Redash",
      "Looker",
    ],
  },
  {
    role: "Mobile Apps Developer II",
    company: "PT. Bukalapak.com Tbk",
    period: "Mar 2020 - Sep 2022",
    description:
      "Managed and maintained end-to-end buyer shopping flow within Marketplace Android app, covering features from Product Detail to Cart, Checkout, Transaction, and Invoice Detail",
    technologies: ["Android", "Kotlin", "Java", "Redash", "Looker"],
  },
  {
    role: "Mobile Apps Developer I",
    company: "PT. Bukalapak.com Tbk",
    period: "Aug 2018 - Feb 2020",
    description:
      "Managed and maintained features related to lower funnel in Marketplace Android app, including Product Detail, Product Review, Favorites, and Cart",
    technologies: ["Android", "Kotlin", "Java"],
  },
  {
    role: "Developer",
    company: "PT. Visionet Data Internasional",
    period: "Jun 2016 - Jul 2018",
    description:
      "​​Developed web and mobile applications to support clients in managing their IT operations",
    technologies: [
      "Android",
      "Java",
      "JavaScript",
      "React Native",
      "PHP",
      "Laravel",
      "MySQL",
    ],
  },
  {
    role: "Developer Intern",
    company: "PT. Inixindo Widya Utama",
    period: "Oct 2015 - Dec 2015",
    description:
      "Developed web-based application to help instructors easily record and manage class information",
    technologies: ["JavaScript", "PHP", "MySQL"],
  },
];

export default ExperienceList;
