const Header = () => {
  return (
    <header className=" text-lg font-medium p-3 shadow-md">
      <nav className=" flex justify-between items-center sticky">
        <a href="" className=" text-2xl">
          Shantanu
        </a>
        <div className="nav-menu">
          <ul className=" flex gap-8">
            <li>
              <a href="" className=" hover:border-b-2 border-black">
                Home
              </a>
            </li>
            <li>
              <a href="" className=" hover:border-b-2 border-black">
                About
              </a>
            </li>
            <li>
              <a href="" className=" hover:border-b-2 border-black">
                Skills
              </a>
            </li>
            <li>
              <a href="" className=" hover:border-b-2 border-black">
                Services
              </a>
            </li>
            <li>
              <a href="" className=" hover:border-b-2 border-black">
                Portfolio
              </a>
            </li>
            <li>
              <a href="" className=" hover:border-b-2 border-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
