import { useState } from "react";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDarkSide from "../useDarkSide";


export default function Header() {

  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = () => {
    const newTheme = darkSide ? 'light' : 'dark';
    setTheme(newTheme);
    setDarkSide(!darkSide);
  };

  return (
    <div className="bg-white dark:bg-[#2B3844] dark:border-transparent px-2 h-20 flex justify-between border items-center md:px-20">
      <Link to="/" className="dark:text-white font-extrabold text-2xl">
        Where in the world?
      </Link>
      <button className="dark:text-white flex items-center text-base font-semibold" onClick={toggleDarkMode}>
        <i className="pr-2">
          {darkSide ? <FaMoon /> : <FaRegMoon />}
          </i> 
          Dark Mode
      </button>
    </div>
  );
}
