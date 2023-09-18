const Header = () => {
  return (
    <header className=" border border-red-500 p-3">
      <nav className=" flex justify-between items-center">
        <a href="">Shantanu</a>
        <div className="nav-menu">
          <ul className=" flex gap-8">
            <li>
              <a href="" className="">
                Home
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
