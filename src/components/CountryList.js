import { Link } from "react-router-dom";

function CountryList({ countries }) {
  return (
    <div className="py-8 px-20 grid lg:grid-cols-4 gap-20 sm:grid-rows-1">
      {countries.map((country) => (
        <div key={country.name.common} className="border rounded">
          <Link to={`/name/${country.name.common}`}>
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="rounded-t h-48 w-80 size-full"
            ></img>
            <div className="pl-6">
              <p className="text-lg font-extrabold pt-5">
                {country.name.common}
              </p>
              <div className="pt-4 pb-11">
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
