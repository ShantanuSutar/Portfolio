import { HiBadgeCheck } from "react-icons/hi";

const Point = ({ point }) => {
  return (
    <li>
      <p className=" flex items-center gap-2 text-slate-900 dark:text-slate-100">
        <HiBadgeCheck className=" text-xl" />
        {point}
      </p>
    </li>
  );
};

export default Point;
