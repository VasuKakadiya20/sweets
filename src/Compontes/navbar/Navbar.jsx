import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import Cartsidebar from "../cartsidebar/cartsidebar";
import AuthDialog from "../login/login";
import { mycontext } from "../../App";
import Logo from "../../assets/Logo_Marvel.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [opensidebar, setopensidebar] = useState(false)
  const [openAuth, setOpenAuth] = useState(false);
  const context = useContext(mycontext)
  const navigate = useNavigate();
  const activeLink = "relative text-[#713722] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#713722] border-b-3 border-[#713722]";
  const normalLink = "hover:text-[#713722]";

  return (
    <>
      <nav className="w-full bg-[#fbf8f4] border-b border-gray-200">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-3xl"></span>
            <Link to="/">
            <img src={Logo} alt="Logo" className="h-22 w-full"/>
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              HOME
            </NavLink>

            <NavLink to="/items" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              ITEMS
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              ABOUT US
            </NavLink>

            <NavLink to="/contect" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              CONTACTS
            </NavLink>
          </ul>

          <div className="hidden md:flex items-center">
            <button
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:text-[#713722]"
              onClick={() => {
                if (!context.islogin) {
                  setOpenAuth(true);
                } else {
                  navigate("/userinfo");
                }
              }}
            >
              <FaUserAlt className="h-10" />
            </button>

            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:text-[#713722]" onClick={() => setopensidebar(true)}>
              <FaShoppingBag className="h-10" />
            </button>

            <Cartsidebar
              opensidebar={opensidebar}
              setopensidebar={setopensidebar}
            />
          </div>

          <button className="mr-3 md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {menuOpen && (
          <ul className="flex flex-col gap-4 mt-4 md:hidden text-lg font-medium ml-5 mb-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              HOME
            </NavLink>

            <NavLink to="/items" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              ITEMS
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              ABOUT US
            </NavLink>

            <NavLink to="/contect" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              CONTACTS
            </NavLink>

            <NavLink
              to={context.islogin ? "/userinfo" : "/login-placeholder"}
              onClick={(e) => {
                if (!context.islogin) {
                  e.preventDefault();
                  setOpenAuth(true);
                }
                setMenuOpen(!menuOpen)
              }
            }
              className={({ isActive }) =>
                !context.islogin
                  ? normalLink
                  : isActive
                    ? activeLink
                    : normalLink
              }
            >
              ACCOUNT
            </NavLink>

            <NavLink to="/cart" className={({ isActive }) => (isActive ? activeLink : normalLink)} onClick={() => setMenuOpen(!menuOpen)}>
              CART
            </NavLink>
          </ul>
        )}
      </nav>
      
      {
        context.islogin === false && (
          <AuthDialog open={openAuth} setOpen={setOpenAuth} />
        )
      }
    </>
  );
}