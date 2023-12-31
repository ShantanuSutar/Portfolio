import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="my-24 flex scale-90 flex-col gap-6 text-slate-950 dark:text-white sm:scale-100 md:my-auto">
      <a
        href="https://www.linkedin.com/in/shantanu-sutar-425591238/"
        className=" transition-all duration-200 ease-in-out hover:translate-y-[-6px]"
      >
        <FaLinkedin className=" text-2xl" />
      </a>
      <a
        href="https://twitter.com/ShantanuSutar17"
        className=" transition-all duration-200 ease-in-out hover:translate-y-[-4px]"
      >
        <FaTwitter className=" text-2xl" />
      </a>
      <a
        href="https://github.com/ShantanuSutar"
        className=" transition-all duration-200 ease-in-out hover:translate-y-[-4px]"
      >
        <FaGithub className=" text-2xl" />
      </a>
    </div>
  );
};

export default Socials;
