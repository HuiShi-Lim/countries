import { IoSearch } from "react-icons/io5";
import FilterRegion from "./FilterRegion";

export default function SearchBar({region, setRegion, searchInput, setSearchInput}) {

  return (
    <div className="py-8 px-20 flex justify-between">
      <div className="flex items-center border h-14 w-96 shadow-md bg-white py-3.5 px-6">
        <IoSearch />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-6 w-96 outline-none"
        />
      </div>
      <FilterRegion region={region} setRegion={setRegion}/>
    </div>
  );
}
