import Info from "./Info";
import ScrollDown from "./ScrollDown";
import Socials from "./Socials";

const Home = () => {
  return (
    <section className=" h-[90%] flex items-center">
      <div>
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
