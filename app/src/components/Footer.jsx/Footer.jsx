import Socials from "./Socials";
const Footer = () => {
  const socials = Socials;
  //   console.log(socials);
  return (
    <footer className=" flex min-h-[60%] w-full scale-75 flex-col gap-10 border border-yellow-400 pt-24 text-center sm:scale-90 md:scale-100">
      <div className=" flex flex-col items-center gap-4">
        <h1 className="  text-2xl font-bold uppercase [word-spacing:14px] sm:text-3xl md:text-4xl">
          the best is yet to come
        </h1>
        <div className=" mt-4 sm:mt-8">
          <ul className=" flex gap-7 text-lg text-slate-600">
            <li>
              <a href="#about" className=" hover:text-slate-900">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className=" hover:text-slate-900">
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonials" className=" hover:text-slate-900">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className=" flex gap-8 text-2xl text-slate-900 sm:mt-2 sm:text-3xl">
          {socials.map((social) => {
            return (
              <span
                key={social.id}
                className=" duration-150 hover:text-slate-700"
              >
                <a href={social.link}>{social.icon}</a>
              </span>
            );
          })}
        </div>
        <div className=" mt-6 text-lg  text-slate-900 sm:mt-10">
          Let's meet soon ;)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
