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
      className=" w-full min-h-screen pt-14 border border-yellow-400 flex flex-col gap-10 text-center"
      id="contact"
    >
      <div className=" flex flex-col items-center gap-1">
        <h2 className=" text-4xl font-semibold">Contact</h2>
        <span className=" text-slate-500">Get in Touch</span>
      </div>
      <div className=" grid grid-cols-2">
        <div className=" flex flex-col gap-10">
          <h3 className="  text-2xl font-medium">Talk to me</h3>
          <div className=" flex flex-col gap-10">
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
                  <span className=" flex items-center gap-2 mt-2 clear-left text-slate-600 cursor-pointer hover:bg-slate-200 p-2 hover:rounded-lg duration-150">
                    Write me <BsArrowRight className="" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-8">
          <h3 className=" text-2xl font-medium">Write me a message</h3>
          <form
            action="https://formspree.io/f/xdorwzrj"
            method="POST"
            className=" w-96    group"
            noValidate
          >
            <div className=" relative m-2 h-16">
              <input
                type="text"
                name="name"
                placeholder=""
                id="name"
                required
                pattern=".{3,}"
                className="block py-3.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer rounded-xl absolute z-10   peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 bg-white left-5 z-20 origin-[0] peer-focus:left-5 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:text-lg
                "
              >
                Name
              </label>
              <span className=" absolute z-30 -top-2 left-3 bg-white hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter at least 3 characters
              </span>
            </div>
            <div className="  relative m-2 h-16">
              <input
                type="email"
                name="email"
                placeholder=""
                id="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className=" block py-3.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer rounded-xl absolute z-10 peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              />
              <label
                htmlFor="email"
                className=" peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 bg-white left-5 z-20 origin-[0] peer-focus:left-5 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:text-lg"
              >
                Email
              </label>
              <span className=" absolute z-30 -top-2 left-3 bg-white hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid email address
              </span>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="   relative m-2 h-60">
              <textarea
                cols={30}
                rows={10}
                name="message"
                placeholder=""
                id="message"
                required
                className=" block py-3.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer rounded-xl absolute z-10 resize-none"
              />
              <label
                htmlFor="message"
                className="  peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 bg-white left-5 z-20 origin-[0] peer-focus:left-5 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:text-lg"
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
              className=" px-6 py-4 bg-black text-slate-200 text-md rounded-xl max-w-[10rem] flex items-center justify-center font-medium hover:opacity-90 ease-in-out transition duration-75 gap-3    group-invalid:pointer-events-none group-invalid:opacity-30"
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
