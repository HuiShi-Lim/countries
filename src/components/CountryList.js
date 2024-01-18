import { Link } from "react-router-dom";

function CountryList({ countries, isLoading, error}) {
  return (
    <div className="bg-[#FAFAFA] content-between py-8 px-20 grid lg:grid-cols-4 gap-x-60 gap-y-24 sm:grid-rows-1">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {countries.map((country) => (
        <div key={country.name.common} className="border rounded shadow w-[280px]">
          <Link to={`/name/${country.name.common}`}>
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="rounded-t h-[200px] w-auto object-cover"
            ></img>
            <div className="pl-2">
              <p className="text-lg font-extrabold pt-5">
                {country.name.common}
              </p>
              <div className="pt-4 pb-20">
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

export default CountryList;
