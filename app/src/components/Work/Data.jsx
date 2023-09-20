import { BsPencilSquare } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { TfiLayout } from "react-icons/tfi";

const Data = [
  {
    id: 1,
    icon: <TfiLayout />,
    title: "Open Source Contributions",
    modalTitle: "Open Source",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente maiores atque aspernatur modi quos excepturi",
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
    modalTitle: "Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente maiores atque aspernatur modi quos excepturi",
    points: [
      {
        point: "portfolio",
      },
      {
        point: "react , tailwind",
      },
      {
        point: "animations",
      },
      {
        point: "ui/ux",
      },
      {
        point: "optimization",
      },
    ],
  },
  {
    id: 3,
    icon: <BsPencilSquare />,
    title: "Current Project",
    modalTitle: "The Wild Oasis",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente maiores atque aspernatur modi quos excepturi",
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
