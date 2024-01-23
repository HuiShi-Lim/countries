import { IoSearch } from "react-icons/io5";
import FilterRegion from "./FilterRegion";

export default function SearchBar({region, setRegion, searchInput, setSearchInput}) {

  return (
    <div className="bg-[#FAFAFA] dark:bg-gray-800 px-4 py-8 justify-between md:flex md:px-20">
      <div className="bg-white dark:bg-[#2B3844] flex items-center border-transparent h-14 max-w-[343px] w-full shadow-md px-6 mb-6">
        <i className="dark:text-white"> <IoSearch /> </i>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="dark:bg-[#2B3844] dark:text-white pl-6 w-96 outline-none"
        />
      </div>
      <FilterRegion region={region} setRegion={setRegion}/>
    </div>
  );
}
