import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

import logoSvg from "../assets/logo.svg"

function Header() {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const handleMenu = () => {
    setshowMenu(!showMenu);
  }

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    }
    
    setshowMenu(false);
    
    window.addEventListener('load', handleLoad);
  }, [location])

  return (
    <>
      <nav className={`flex items-center justify-between px-3 py-1
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
              <Link to="/about">
                <span>Sobre mim</span>
              </Link>
            </li>
            <li className="px-3 hover:text-teal-400 transition ease-out duration-500">
              <Link to="/projects">
                <span>Projetos</span>
              </Link>
            </li>
            <li className="px-3 hover:text-teal-400 transition ease-out duration-500">
              <a href="https://soundcloud.com/felipe-brandao-63641463" target="_blank" rel="noreferrer">
                <span>Portfólio musical</span>
              </a>
            </li>
            <li className="px-3 hover:text-teal-400 transition ease-out duration-500">
              <Link to="/contact">
                <span>Contato</span>
              </Link>
            </li>
          </ul>

          <div onClick={ handleMenu }>
            <h1 className="flex text-2xl text-white bg-black px-2 py-1 md:hidden">
              { showMenu ? "Fechar menu" : "Menu"}
            </h1>
          </div>
        </div>
      </nav>

      <div className={ showMenu ? "opacity-100 transition ease-in duration-100" : "opacity-0" }>
        <ul className={ `absolute w-full h-full text-3xl text-black bg-teal-400 py-3 md:hidden ${showMenu ? "" : "hidden"}` }>
              <li className="px-3 py-3" >
                <Link to="/about">
                  <span>Sobre mim</span>
                </Link>
              </li>
              <li className="px-3 py-3">
                <Link to="/projects">
                  <span>Projetos</span>
                </Link>
              </li>
              <li className="px-3 py-3">
                <a href="https://soundcloud.com/felipe-brandao-63641463" target="_blank" rel="noreferrer">
                  <span>Portfólio musical</span>
                </a>
            </li>
              <li className="px-3 py-3">
                <Link to="/contact">
                  <span>Contato</span>
                </Link>
              </li>
            </ul>
      </div>

      <Outlet />
    </>
  )
}

export default Header;