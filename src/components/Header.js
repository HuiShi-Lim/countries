import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="py-1 px-20 h-20	flex justify-between border items-center">
      <Link to="/" className="font-extrabold text-2xl">
        Where in the world?
      </Link>
      <div className="flex items-center">
        <FaRegMoon />
        <p className="text-base	font-semibold pl-2">Dark Mode</p>
      </div>
    </div>
  );
}
