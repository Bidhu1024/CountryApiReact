import React, {useState,useEffect} from "react";

import { Link,useParams } from "react-router-dom";
const Country = () => {
const [country, setCountry] = useState([]);
const {name} = useParams()

useEffect(()=>{
  const fetchCountryData = async ()=>{
    const response = await fetch(`https://restcountries.com/v3.1/${name}`)
    const country = await response.json()
    setCountry(country);
    console.log(country)
  }
fetchCountryData()
}, [])




  return (
    <>
    <Link to='/'><button className="backbtn">Back</button></Link>
      <h2>Country Data</h2>
    </>
  );
};

export default Country;
