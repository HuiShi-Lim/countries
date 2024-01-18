import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

function CountryDetails() {
  const { name } = useParams();
  const [testCountry, setTestCountry] = useState({});
  console.log(testCountry);

  const printAllLanguages = (languages) => {
    if (!languages) return;
    return Object.values(languages);
  };

  const printAllCurrencies = (currency) => {
    if (!currency) return;
    return Object.values(currency).map((curr) => curr.name);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + name.toLowerCase())
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data :(");
        }
        return res.json();
      })
      .then((data) => {
        setTestCountry(data[0]);
      });
  }, [name]);

  return (
    <div>
      <Link to="/" className="py-1 px-20 flex items-center">
        <MdKeyboardBackspace /> Back
      </Link>
      <div>
        {Object.keys(testCountry).length > 0 && (
          <div className="flex justify-center">
            <img
              src={testCountry.flags.svg}
              alt={testCountry.name.common}
              className="rounded-t h-48 w-80 size-full"
            ></img>
            <div className="pl-20">
              <p className="text-lg font-extrabold pt-5">
                {testCountry.name.common}
              </p>
              <div className="pt-4 pb-11 grid grid-cols-2 gap-2">
                <p>
                  <b>Native Name:</b>
                  {
                    testCountry.name.nativeName[
                      Object.keys(testCountry.name.nativeName)[2]
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
                <div>
                  <p>
                    <b>Top Level Domain:</b> {testCountry.tld}
                  </p>
                  {/* <p>Currencies: {testCountry.currencies[Object.keys(testCountry.currencies)[0]].name}</p>
                <p>Languages: {testCountry.languages[Object.keys(testCountry.languages)[0]]}</p> */}

                  <p>
                    <b>Currencies:</b>{" "}
                    {printAllCurrencies(testCountry.currencies)}
                  </p>
                  <p>
                    <b>Languages:</b> {printAllLanguages(testCountry.languages)}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <b>Border Countries</b> {testCountry.borders}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;
