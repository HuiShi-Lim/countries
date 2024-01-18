import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

function CountryDetails() {
  const { name } = useParams();
  const [testCountry, setTestCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(testCountry);

  const getAllLanguages = (languages) => {
    if (!languages) return;
    return Object.values(languages);
  };

  const getAllCurrencies = (currency) => {
    if (!currency) return;
    return Object.values(currency).map((curr) => curr.name);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + name)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data :(");
        }
        return res.json();
      })
      .then((data) => {
        setTestCountry(data[0]);
        setIsLoading(false);
      });
  }, [name]);

  return (
    <div className="pt-16 px-20 ">
      <Link to="/" className="flex items-center pl-14 ">
        <i className="pr-2"><MdKeyboardBackspace /></i> Back
      </Link>
      
      {/* <div> */}
      {isLoading && <div>Loading...</div>}
        {Object.keys(testCountry).length > 0 && (
          <div className="mt-20 lg:flex justify-evenly sm:inline-block">
            <div className="border bg-gray-50	">
            <img
              src={testCountry.flags.svg}
              alt={testCountry.name.common}
              className="rounded-t h-[440px] w-[540px]"
            ></img>
            </div>
            <div className="pl-20">
              <p className="text-3xl font-extrabold pt-5">
                {testCountry.name.common}
              </p>
              <div className="pt-4 pb-11 grid grid-rows-5 grid-cols-2 gap-x-20 gap-y-3">
                <p>
                  <b>Native Name: </b>
                  {
                    testCountry.name.nativeName[
                      Object.keys(testCountry.name.nativeName)[0]
                    ]?.common
                  }
                </p>
                <p>
                  <b>Population:</b> {testCountry.population}
                </p>
                <p>
                  <b>Region:</b> {testCountry.region}
                </p>
                <p>
                  <b>Sub Region:</b> {testCountry.subregion}
                </p>
                <p>
                  <b>Capital:</b> {testCountry.capital}
                </p>
                  <p>
                    <b>Top Level Domain:</b> {testCountry.tld}
                  </p>
                  <p>
                    <b>Currencies: </b>
                    {getAllCurrencies(testCountry.currencies).join(", ")}
                  </p>
                  <p>
                    <b>Languages: </b>{getAllLanguages(testCountry.languages).join(", ")}
                  </p>
              </div>
              <div>
                  <b>Border Countries: </b>{testCountry.borders && testCountry.borders.length > 0 ? (testCountry.borders.map((countryBorders) => (
                    <button key={countryBorders} className="border px-4">{countryBorders}</button>
                  ))
                  ) : (
                    <span>None</span>
                  )}
              </div>
            </div>
          </div>
        )}
      {/* </div> */}
    </div>
  );
}

export default CountryDetails;
