import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "SMP-KKP",
    title: "SMP-KKP (Sistem Manajemen Pembiayaan) App",
    description:
      "System Financing Management Application developed using Express.Js, Prisma ORM, and MySQL. Key feature: secure user authentication, installment payments, loan applications, billing information, overdue payment management, operational expense tracking, and production monitoring for Debtors and Partners.",
    icon: "/skills/express.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "NONE",
    url: "NONE",
    tags: ["Javascript", "Node.Js", "Express.Js", "Prisma"],
  },
  {
    id: "Stock Wise",
    title: "Stock Wise: Inventory Management",
    description:
      "Stock Wise is a platform for direct bulk orders between customers and suppliers, offering inventory management with categorized product lists, quantity tracking across warehouses, and real- time business insights.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "NONE",
    url: "NONE",
    tags: ["Javascript", "Node.Js", "Express.Js", "Sequelize", "React", "Cakra UI"],
  },
  {
    id: "User Profile",
    title: "User Profile API",
    description:
      "A User Profile API developed using Gin and Gorm. The User Endpoint comprised functionalities such as user registration, login, user information updates, and user deletion. Similarly, the Photos Endpoint facilitated adding, retrieving, updating, and deleting photos.",
    icon: "/skills/gin.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "NONE",
    url: "NONE",
    tags: ["GO", "Gin Go", "GORM", "MySQL"],
  },
  {
    id: "ecommerce-app",
    title: "StoreHub: E-Commerce API",
    description:
      "This e-commerce API provides flexibility for developers to build different types of e-commerce platforms. Using [technology used], it simplifies store, product, and order management through user-friendly endpoints. Admins and customers can seamlessly interact, performing actions like launching new stores, adding items to carts, and tracking shipments.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "NONE",
    url: "NONE",
    tags: ["Node.js", "Nest.js", "Prisma", "WebSocket", "PostgreSQL"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
