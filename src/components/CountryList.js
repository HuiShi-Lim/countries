import { Link } from "react-router-dom";

export default function CountryList({ countries, isLoading, error }) {
  function renderContent() {
    if (isLoading) {
      return <p className="dark:text-white text-center">Loading...</p>;
    } else if (error) {
      return <p className="dark:text-white text-center">{error}</p>;
    } else if (countries.length === 0) {
      return <p className="dark:text-white text-center">No result</p>;
    } else {
      return (
        <div className="flex flex-wrap gap-y-[67px] mx-10 justify-center md:justify-between">
          {countries.map((country) => (
            <div
              key={country.name.common}
              className="dark:bg-[#2B3844] border-transparent rounded shadow mx-10 h-[336px] w-[264px] transition transform hover:-translate-y-1"
            >
              <Link to={`/name/${country.name.common}`}>
                <img
                  src={country.flags.svg}
                  alt={country.name.common}
                  className="rounded-t h-[130px] w-full object-cover md:h-[160px]"
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
  }

  return <div className="bg-[#fafafa] dark:bg-gray-800">{renderContent()}</div>;
}
