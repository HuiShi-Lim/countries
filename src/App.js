import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CountryList from "./components/CountryList";
import SearchBar from "./components/SearchBar";
import CountryDetails from "./components/CountryDetails";
import Layout from "./components/Layout";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCountries, setFilterCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data :(");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setFilterCountries(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    filter();
  }, [region, searchInput]);

  function filter() {
    let tempFilteredCountries = countries;

    // filter by region
    if (region !== "") {
      tempFilteredCountries = tempFilteredCountries.filter((country) => {
        return country.region === region;
      });
    }

    // search
    tempFilteredCountries = tempFilteredCountries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });

    setFilterCountries(tempFilteredCountries);
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={
            <> 
            <SearchBar region={region} setRegion={setRegion} searchInput={searchInput} setSearchInput={setSearchInput}/> 
            <CountryList countries={filterCountries} isLoading={isLoading} error={error}/> 
            </>} 
            />
            <Route path="/name/:name" element={<CountryDetails countries={countries}/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}