import { Link } from "react-router-dom";

export default function CountryList({ countries, isLoading, error}) {
  return (
    <div className="bg-[#FAFAFA] dark:bg-gray-800 py-8 px-20 grid lg:grid-cols-4 gap-x-36 gap-y-24 sm:grid-rows-1">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {countries.map((country) => (
        <div key={country.name.official} className="dark:bg-[#2B3844] border-transparent rounded shadow w-[280px] transition transform hover:-translate-y-1">
          <Link to={`/name/${country.name.official}`}>
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="rounded-t h-[200px] w-auto object-cover"
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