import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="flex flex-col my-auto gap-6">
      <a
        href=""
        className=" hover:translate-y-[-6px] transition-all ease-in-out duration-200"
      >
        <FaLinkedin className=" text-2xl" />
      </a>
      <a
        href=""
        className=" hover:translate-y-[-4px] transition-all ease-in-out duration-200"
      >
        <FaTwitter className=" text-2xl" />
      </a>
      <a
        href=""
        className=" hover:translate-y-[-4px] transition-all ease-in-out duration-200"
      >
        <FaGithub className=" text-2xl" />
      </a>
    </div>
  );
};

export default Socials;
