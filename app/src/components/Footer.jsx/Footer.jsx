import Socials from "./Socials";
const Footer = () => {
  const socials = Socials;
  //   console.log(socials);
  return (
    <footer className=" flex min-h-[60%] w-full  flex-col gap-10  py-10 text-center sm:py-24 ">
      <div className=" flex scale-75 flex-col items-center gap-4 sm:scale-90 md:scale-100">
        <h1 className="  text-2xl font-bold uppercase text-slate-900 [word-spacing:14px] dark:text-slate-100 sm:text-3xl md:text-4xl">
          the best is yet to come
        </h1>
        <div className=" mt-4 sm:mt-8">
          <ul className=" flex gap-7 text-lg text-slate-600 dark:text-slate-300">
            <li>
              <a
                href="#about"
                className=" hover:text-slate-900 dark:hover:text-slate-100"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className=" hover:text-slate-900 dark:hover:text-slate-100"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className=" hover:text-slate-900 dark:hover:text-slate-100"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className=" flex gap-8 text-2xl text-slate-900 dark:text-slate-100 sm:mt-2 sm:text-3xl">
          {socials.map((social) => {
            return (
              <span
                key={social.id}
                className=" duration-150 hover:text-slate-700 dark:hover:text-slate-400"
              >
                <a href={social.link}>{social.icon}</a>
              </span>
            );
          })}
        </div>
        <div className=" my-6 text-lg  text-slate-900 dark:text-slate-100 sm:mt-10">
          Let's meet soon ;)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
