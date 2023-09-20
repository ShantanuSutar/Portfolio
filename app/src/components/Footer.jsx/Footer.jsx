import Socials from "./Socials";
const Footer = () => {
  const socials = Socials;
  //   console.log(socials);
  return (
    <footer className=" w-full min-h-[60%] pt-24 border border-yellow-400 flex flex-col gap-10 text-center">
      <div className=" flex flex-col items-center gap-4">
        <h1 className=" uppercase text-4xl font-bold [word-spacing:14px]">
          the best is yet to come
        </h1>
        <div className=" mt-8">
          <ul className=" flex text-lg gap-7 text-slate-600">
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
        <div className=" flex text-3xl gap-8 text-slate-900 mt-2">
          {socials.map((social) => {
            return (
              <span
                key={social.id}
                className=" hover:text-slate-700 duration-150"
              >
                <a href={social.link}>{social.icon}</a>
              </span>
            );
          })}
        </div>
        <div className=" mt-10  text-slate-900 text-lg">Let's meet soon ;)</div>
      </div>
    </footer>
  );
};

export default Footer;
