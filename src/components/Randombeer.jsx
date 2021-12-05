import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'



function Randombeer() {

  const [beersDetails, setBeersDetails] = useState([])

  useEffect(() => {
      const getData = async () => {
         let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
         setBeersDetails(response.data)
         console.log(response.data.name)
      }
      getData()
  }, [])

  if(!beersDetails.length) {
    return <img src="https://art.ngfiles.com/images/1227000/1227695_sinlessshadow_loading.gif?f1586321823" alt="" />
}


  return (
    <div>
    <img src={beersDetails.image_url} alt=""/>

    <h1>  {beersDetails.name} </h1>
    <h2>  {beersDetails.tagline} </h2>
    <h3>  {beersDetails.contributed_by} </h3>

    <Link to={`/beers/${beersDetails._id}`}> {beersDetails.name} </Link>
    </div>
  )
  }
export default Randombeer













