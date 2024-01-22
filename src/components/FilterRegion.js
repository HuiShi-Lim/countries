function FilterRegion({ region, setRegion }) {
  return (
    <div className="bg-white dark:bg-[#2B3844] border-transparent h-14 w-48 shadow-md">
      <select
        className="dark:bg-[#2B3844] dark:text-white mx-7 my-4 outline-none"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </div>
  );
}

export default FilterRegion;
