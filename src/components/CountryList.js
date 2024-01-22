import { Link } from "react-router-dom";

export default function CountryList({ countries, isLoading, error}) {
  return (
    <div className="bg-[#fafafa] dark:bg-gray-800 flex flex-wrap gap-[75px] justify-center">
      {isLoading && <div className="dark:text-white">Loading...</div>}
      {error && <div>{error}</div>}
      {countries.map((country) => (
        <div key={country.name.common} className="dark:bg-[#2B3844] border-transparent rounded shadow mx-10 w-[264px] transition transform hover:-translate-y-1">
          <Link to={`/name/${country.name.common}`}>
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="rounded-t h-[150px] w-full object-cover md:h-[180px]"
            ></img>
            <div className="dark:text-white pl-2">
              <p className="text-lg font-extrabold pt-5">
                {country.name.common}
              </p>
              <div className="pt-4 pb-14">
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}