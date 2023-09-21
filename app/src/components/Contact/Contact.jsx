import { BsArrowRight, BsFillSendFill } from "react-icons/bs";
import Socials from "./Socials";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const socials = Socials;
  const [state] = useForm("xdorwzrj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  // console.log(socials);
  return (
    <section
      className=" flex min-h-screen w-full flex-col gap-10 border border-yellow-400 pt-14 text-center"
      id="contact"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-3xl font-semibold sm:text-4xl">Contact</h2>
        <span className=" text-sm text-slate-500 sm:text-base">
          Get in Touch
        </span>
      </div>
      <div className=" flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-0">
        <div className=" flex flex-col gap-6 md:gap-10">
          <h3 className=" text-xl font-medium md:text-2xl">Talk to me</h3>
          <div className=" flex flex-col gap-6 md:gap-10">
            {socials.map((social) => {
              return (
                <div
                  key={social.id}
                  className=" flex flex-col items-center text-base"
                >
                  <span className=" text-3xl text-slate-700">
                    {social.icon}
                  </span>
                  <h3 className=" text-slate-700">{social.title}</h3>
                  <span className=" text-xs text-slate-500">
                    {social.username}
                  </span>
                  <span className=" clear-left mt-2 flex cursor-pointer items-center gap-2 p-2 text-slate-600 duration-150 hover:rounded-lg hover:bg-slate-200">
                    Write me <BsArrowRight className="" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4 md:gap-8">
          <h3 className=" text-xl font-medium md:text-2xl">
            Write me a message
          </h3>
          <form
            action="https://formspree.io/f/xdorwzrj"
            method="POST"
            className=" group w-96"
            noValidate
          >
            <div className=" relative m-2 h-14 scale-75 sm:scale-90 md:scale-100">
              <input
                type="text"
                name="name"
                placeholder=""
                id="name"
                required
                pattern=".{3,}"
                className="peer peer absolute z-10 block  w-[90%] appearance-none rounded-xl border-2  border-gray-300 bg-transparent  px-2 py-3.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0 md:w-full invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              />
              <label
                htmlFor="name"
                className="absolute left-5 top-3 z-20  origin-[0] -translate-y-6 scale-75 transform bg-white text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-5 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:text-lg peer-focus:font-medium peer-focus:text-black peer-focus:dark:text-black
                "
              >
                Name
              </label>
              <span className=" absolute -top-2 left-3 z-30 hidden bg-white text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter at least 3 characters
              </span>
            </div>
            <div className=" relative  m-2 h-14 scale-75 sm:scale-90 md:scale-100">
              <input
                type="email"
                name="email"
                placeholder=""
                id="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className=" peer peer absolute z-10 block w-[90%] appearance-none rounded-xl border-2  border-gray-300 bg-transparent  px-2 py-3.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0 md:w-full invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              />
              <label
                htmlFor="email"
                className=" absolute left-5 top-3 z-20  origin-[0] -translate-y-6 scale-75 transform bg-white text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-5 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:text-lg peer-focus:font-medium peer-focus:text-black peer-focus:dark:text-black"
              >
                Email
              </label>
              <span className=" absolute -top-2 left-3 z-30 hidden bg-white text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid email address
              </span>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className=" relative m-2 h-40 scale-75 sm:scale-90 md:scale-100">
              <textarea
                cols={30}
                rows={10}
                name="message"
                placeholder=""
                id="message"
                required
                className=" peer absolute z-10 block w-[90%] resize-none appearance-none rounded-xl border-2  border-gray-300 bg-transparent  px-2 py-3.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0 md:w-full"
              />
              <label
                htmlFor="message"
                className="  absolute left-5 top-3 z-20  origin-[0] -translate-y-6 scale-75 transform bg-white text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-5 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:text-lg peer-focus:font-medium peer-focus:text-black peer-focus:dark:text-black"
              >
                Message
              </label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className=" text-md ml-14 mt-12 flex max-w-[10rem] scale-90 items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 font-medium text-slate-200 transition duration-75 ease-in-out hover:opacity-90 group-invalid:pointer-events-none group-invalid:opacity-30 sm:ml-8  sm:mt-16 sm:scale-100 md:ml-2 md:mt-24"
            >
              Send <BsFillSendFill />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
