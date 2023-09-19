import Info from "./Info";
import ScrollDown from "./ScrollDown";
import Socials from "./Socials";

const Home = () => {
  return (
    <section
      className="h-[100%] flex items-center   border border-yellow-400 pt-20"
      id="home"
    >
      <div className=" mt-20">
        <div className=" flex gap-40 mb-16">
          <Socials />
          <div>
            <Info />
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
