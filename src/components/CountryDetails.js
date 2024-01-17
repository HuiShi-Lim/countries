import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails({ countries: country, setCountries }) {
  const { name } = useParams();
//   const [testCountry, setTestCountry] = useState({});
  console.log(country);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + name.toLowerCase())
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data :(");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
      });
  }, [name]);

  return (
    <>
      <Link to="/">Back</Link>
      <div>
        CountryDetails
        {Object.keys(country).length > 0 && (
          <article>
            <img
              src={country?.flags}
              alt={country?.name}
              className="rounded-t h-48 w-80 size-full"
            ></img>
            {/* <div className="pl-6">
              <p className="text-lg font-extrabold pt-5">{country?.name}</p>
              <div className="pt-4 pb-11">
                <p>Native Name: {country?.nativeName}</p>
                <p>Population: {country.population}</p>
                <p>Region: {testCountry.region}</p>
                <p>Capital: {testCountry.capital}</p>
              </div>
            </div> */}
          </article>
        )}
      </div>
    </>
  );
}

export default CountryDetails;
