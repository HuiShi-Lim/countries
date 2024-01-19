import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDarkSide from "../useDarkSide";

export default function Header() {

  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
    console.log(checked);
  };

  return (
    <div className="bg-white dark:bg-[#2B3844] py-1 px-20 h-20	flex justify-between border-transparent items-center">
      <Link to="/" className="dark:text-white font-extrabold text-2xl">
        Where in the world?
      </Link>
      <button className="dark:text-white flex items-center text-base font-semibold" onClick={() => toggleDarkMode(!darkSide)}> <i className="pr-2"><FaRegMoon /></i> Dark Mode</button>
    </div>
  );
}
