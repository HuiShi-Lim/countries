import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]);
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
      <div className="">
        <Header />
        <SearchBar
          region={region}
          setRegion={setRegion}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <div>
          <Routes>
            <Route
              path="/"
              element={<CountryList countries={filterCountries} />}
            />
            <Route path="/name/:name" element={<CountryDetails  countries={countries} setCountries={setCountries}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
