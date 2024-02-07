import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import logoSvg from "../assets/logo.svg"

function Header() {
  const [loaded, setLoaded] = useState(false);
  const [menuNav, setMenuNav] = useState(false);

  const handleMenu = () => {
    setMenuNav(!menuNav);
  }

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    }

    window.addEventListener('load', handleLoad);
  }, [])

  return (
    <>
      <nav className={`flex items-center justify-between px-3
        md:${loaded ? "opacity-100 transition ease-in duration-1000" : "opacity-0"}
      `}>
        <div className="flex items-center">
            <img 
              src={ logoSvg } 
              className="md:w-16"
            />

          <h1 className="text-3xl italic ml-2 md:text-5xl md:ml-3">
            <Link to="/">
              Felipe <br/> Brandão
            </Link>
          </h1>
        </div>

        <div>
          <ul className="text-3xl hidden md:flex justify-around px-1">
            <li className="px-3 hover:text-teal-400 transition ease-out duration-500">
              <Link to="/projects">
                <span>Projetos</span>
              </Link>
            </li>
            <li className="px-3 hover:text-teal-400 transition ease-out duration-500">
              <Link to="/about">
                <span>Sobre mim</span>
              </Link>
            </li>
            <li className="px-3 hover:text-teal-400 transition ease-out duration-500">
              <Link to="/contact">
                <span>Contato</span>
              </Link>
            </li>
          </ul>

          <div onClick={ handleMenu }>
            <h1 className="flex text-2xl text-white bg-black px-2 py-1 md:hidden">
              { menuNav ? "Fechar menu" : "Menu"}
            </h1>
          </div>
        </div>
      </nav>

      <div>
        <ul className={ `text-3xl text-black bg-teal-400 py-3 md:hidden ${menuNav ? "opacity-100 transition ease-in duration-500" : "opacity-0 transition ease-out duration-300"}` }>
              <li className="px-3 py-3">
                <Link to="/projects">
                  <span>Projetos</span>
                </Link>
              </li>
              <li className="px-3 py-3" >
                <Link to="/about">
                  <span>Sobre mim</span>
                </Link>
              </li>
              <li className="px-3 py-3">
                <Link to="/contact">
                  <span>Contato</span>
                </Link>
              </li>
            </ul>
      </div>
    </>
  )
}

export default Header;