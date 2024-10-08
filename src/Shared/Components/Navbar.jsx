const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start flex-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>|</li>
            <li>
              <a>About</a>
            </li>

            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="text-xl">SakibProdhan</a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu-horizontal">
          <li className="mr-4">
            <a>About</a>
          </li>

          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
