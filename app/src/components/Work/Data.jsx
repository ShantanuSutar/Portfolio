import { BsPencilSquare } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { TfiLayout } from "react-icons/tfi";

const Data = [
  {
    id: 1,
    icon: <TfiLayout />,
    title: "Open Source Contributions",
    modalTitle: "Open Source",
    desc: "Open source is a decentralized software development model that involves making source code freely available for modification and redistribution",
    points: [
      {
        point: "Actively contributing to opensource",
      },
      {
        point: "Solve issues with UI/UX",
      },
      {
        point: "Active in the community",
      },
      {
        point: "Review commits",
      },
      {
        point: "Learning in public",
      },
    ],
  },
  {
    id: 2,
    icon: <SiAntdesign />,
    title: "Previous Project",
    modalTitle: "Blog App",
    desc: ` "Unsaid - Stories and More", a full-stack blog application that seamlessly integrates a React front end styled with Sass, a Node.js and Express backend for robust server operations, JWT authentication for security, and a MySQL database for efficient data management`,
    points: [
      {
        point: "JWT Authentication",
      },
      {
        point: "Sass Styling",
      },
      {
        point: "MySQL Database",
      },
      {
        point: "Light/Dark Mode",
      },
      {
        point: "Write, Edit, Delete, Comment a Blog",
      },
    ],
  },
  {
    id: 3,
    icon: <BsPencilSquare />,
    title: "Current Project",
    modalTitle: "The Wild Oasis",
    desc: "Dashboard Application",
    points: [
      {
        point: "the wild oasis - dashboard",
      },
      {
        point: "single page application",
      },
      {
        point: "styled components",
      },
      {
        point: "react-query",
      },
      {
        point: "supabase",
      },
    ],
  },
];

export default Data;
