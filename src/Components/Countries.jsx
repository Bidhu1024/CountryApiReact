import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const url = "https://restcountries.com/v3.1/all";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  const removeCountry = (indexx)=>{
    const newCountry = countries.filter((country,index)=>indexx !== index
    )
    setCountries(newCountry);
    // console.log(newCountry);
  }
  return (
    <>
      <section className="grid">
        {countries.map((country, index) => {
          const { name, population, region, capital, flags } = country;
          return (
            <>
            <article key={index}>
              <div>
                <img src={flags.svg} alt={name} />
                <div className="details">
                  <h3>Name: {name.common}</h3>
                  <h4>
                    Population:<span> {population}</span>
                  </h4>
                  <h4>
                    Region:<span> {region}</span>
                  </h4>
                  <h4>
                    Capital:<span>{capital}</span>
                  </h4>
                  <div className="buttons">
                  <Link to={`/countries/${name.common}`} className='learnmore'>Learn More</Link>
                  <button className="learnmore" onClick={()=> removeCountry(index)}>Remove Country</button>
                </div>
              </div>
              </div>
            </article>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
