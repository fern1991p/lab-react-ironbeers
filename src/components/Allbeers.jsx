import React from 'react'
import {Link} from 'react-router-dom'

export default function Allbeers(props) {

     const {beers} = props 

     if(!beers.length) {
          return <img src="https://art.ngfiles.com/images/1227000/1227695_sinlessshadow_loading.gif?f1586321823" alt="" />
      }


  return (
       
    <div>

          <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
          <img src="..\assets\house-door-fill.svg" width="30" height="30" alt=""/>
          </a>
          </nav>

          <div> All beers </div>
          {
               beers.map((elem) => {
                    return (
                         <div>
                         <img src={elem.image_url} alt=""/>

                         <h1> {elem.name} </h1>
                         <h2> {elem.tagline} </h2>
                         <h3> {elem.contributed_by} </h3>

                         <Link to={`/beers/${elem._id}`}> {elem.name} </Link>
                         </div>


                    )



               })
          }







    </div>
  )
}
