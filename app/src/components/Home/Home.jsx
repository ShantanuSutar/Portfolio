import Info from "./Info";
import ScrollDown from "./ScrollDown";
import Socials from "./Socials";

const Home = () => {
  return (
    <section
      className="flex min-h-[100%] items-center    px-5 md:px-0 md:pt-12 lg:pt-20"
      id="home"
    >
      <div className=" mt-20">
        <div className=" mb-16 flex  md:flex-row md:gap-16 lg:gap-40">
          <Socials />
          <div className=" ml-10">
            <Info />
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
