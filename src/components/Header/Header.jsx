import React from "react";
import "../Header/Header.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div>
      <nav className="navBar flex justify-between items-center p-5 md:p-7">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
          src="/images/logo.svg"
          alt=""
        />
        <motion.ul
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-5 md:gap-10 text-white"
        >
          <li className="md:text-xl font-light hover:cursor-pointer hover:text-white hover:border-b-2 hover:border-b-white transition ease-in delay-75">
            Features
          </li>
          <li className="md:text-xl font-light hover:cursor-pointer hover:text-white hover:border-b-2 hover:border-b-white transition ease-in delay-75">
            Team
          </li>
          <li className="md:text-xl font-light hover:cursor-pointer hover:text-white hover:border-b-2 hover:border-b-white transition ease-in delay-75">
            Sign In
          </li>
        </motion.ul>
      </nav>
    </div>
  );
};

export default Header;
