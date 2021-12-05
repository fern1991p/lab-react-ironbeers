import { Routes, Route } from  "react-router-dom";
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import axios from "axios";

import Homepage from './components/Homepage';
import Newbeer from "./components/Newbeer";
import Randombeer from "./components/Randombeer";
import Allbeers from "./components/Allbeers";
import Beerdetail from "./components/Beerdetail";
import NewBeer from "./components/Newbeer";





function App() {

  const [beers, setBeers] = useState([])

   const navigate = useNavigate()

  useEffect(() => {

  const getData = async () => {
      let response  = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
      setBeers(response.data)
  }

  getData()

  }, [])

  useEffect(() => {
      navigate('/')
    }, [beers])

    const handleSubmit = async (event) => {
      event.preventDefault()
      let newBeer = {
        name: event.target.name.value,
        tagline: event.target.tagline.value,
        description: event.target.description.value,
        first_brewed: event.target.first_brewed.value,
        brewers_tips: event.target.brewers_tips.value,
        attenuation_level: event.target.attenuation_level.value,
        contributed_by: event.target.contributed_by.value,
        completed: false,
      }
      // Pass an object as a 2nd param in POST requests
      let response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      setBeers([response.data, ...beers])
  }





  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Homepage/> } />
      <Route path="/beers" element={ <Allbeers beers={beers}/> } />
      <Route path="/beers" element={ <Beerdetail beers={beers}/> } />
      <Route path="/beers" element={ <Newbeer beers={beers}/> } />
      <Route path="/beers" element={ <Randombeer beers={beers}/> } />
      <Route path="/NewBeer" element={<NewBeer btnSubmit={handleSubmit}/> } />


    </Routes>

    </div>
  );
}

export default App;
