import { Link } from "react-router-dom";

import rectangleLogo from "../svg/rectangle.svg";

function Header() {
  return (
    <>
      <nav className="flex items-center justify-between px-3">
        <div className="flex items-center">
            <img src={ rectangleLogo } className="md:w-16"/>
          <h1 className="text-3xl italic ml-2 md:text-5xl md:ml-3">
            <Link to="/">
              Felipe <br/> Brandão
            </Link>
          </h1>
        </div>

        <div>
          <ul className="text-3xl hidden md:flex justify-around px-1">
            <li className="px-2 hover:text-cyan-400 transition ease-out duration-500">
              <Link to="/projects">
                <span>Projetos</span>
              </Link>
            </li>
            <li className="px-2 hover:text-cyan-400 transition ease-out duration-500">
              <Link to="/about">
                <span>Sobre mim</span>
              </Link>
            </li>
            <li className="px-2 hover:text-cyan-400 transition ease-out duration-500">
              <Link to="/contact">
                <span>Contato</span>
              </Link>
            </li>
          </ul>


          <div>
            <h1 className="flex text-2xl text-white bg-black px-2 py-1 md:hidden">Menu</h1>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;