import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function CountryDetails({ countries }) {
  const { name } = useParams();
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getAllLanguages = (languages) => {
    if (!languages) return;
    return Object.values(languages);
  };

  const getAllCurrencies = (currency) => {
    if (!currency) return;
    return Object.values(currency).map((curr) => curr.name);
  };

  function handleClick() {
    navigate("/");
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("https://restcountries.com/v3.1/name/" + name + "?fullText=true")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data :(");
        }
        return res.json();
      })
      .then((data) => {
        setCountry(data[0]);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
    }, 1000);
  }, [name]);

  return (
    <div className="h-screen bg-[#fafafa] dark:bg-gray-800 pt-16 px-7 md:px-20">
      <div>
        <button onClick={handleClick} className="bg-white dark:bg-[#2B3844] dark:text-white flex items-center border-transparent rounded-md px-8 py-2"> 
        <i className="pr-2"><MdKeyboardBackspace /></i> Back</button>
      </div>
      {isLoading && <p className="dark:text-white text-center">Loading...</p>}
      {error && <p className="dark:text-white text-center">{error}</p>}
        {Object.keys(country).length > 0 && (
          <div className="dark:text-white mt-20 justify-evenly md:flex">
              <div className="basis-1/2 md:pr-6">
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="rounded w-[500px]"
              ></img>
              </div>
              <div className="basis-1/2">
              <div className="text-3xl font-extrabold pt-5">
                <p>
                  {country.name.common}
                </p>
              </div>
              <div className="text-base	pt-10 pb-9 md:flex">
                <div className="pb-8 md:pr-32">
                  <p>
                    <b>Native Name: </b>
                    {
                      country.name.nativeName[
                        Object.keys(country.name.nativeName)[0]
                      ]?.common
                    }
                  </p>
                  <p>
                    <b>Population:</b> {country.population}
                  </p>
                  <p>
                    <b>Region:</b> {country.region}
                  </p>
                  <p>
                    <b>Sub Region:</b> {country.subregion}
                  </p>
                  <p>
                    <b>Capital:</b> {country.capital}
                  </p>
                </div>
                <div>
                    <p>
                      <b>Top Level Domain:</b> {country.tld}
                    </p>
                    <p>
                      <b>Currencies: </b>
                      {getAllCurrencies(country.currencies).join(", ")}
                    </p>
                    <p>
                      <b>Languages: </b>{getAllLanguages(country.languages).join(", ")}
                    </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <b>Border Countries:  </b>
                <div className="flex flex-wrap">
                  {country.borders && country.borders.length > 0 ? (
                    country.borders.map((countryBorder) => {
                      const matchingCountry = countries.find(
                        (c) => c.cca3 === countryBorder
                      );

                      return matchingCountry ? (
                        <Link to={`/name/${matchingCountry.name.common}`} key={countryBorder}>
                          <div>
                            <button className="dark:bg-[#2B3844] dark:text-white border text-sm px-6 mb-2 mr-3 md:ml-3">
                            {matchingCountry.name.common}
                            </button>
                          </div>
                        </Link>
                      ) : (
                        null
                      );
                    })
                  ) : (
                    <span className="dark:text-white"> None</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}