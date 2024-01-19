function FilterRegion({ region, setRegion }) {
  return (
    <div className="dark:bg-[#2B3844] border-transparent h-14 w-48 shadow-md">
      <select
        className="dark:bg-[#2B3844] dark:text-white py-3.5 px-6 content-center outline-none"
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
