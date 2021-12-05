import React from 'react'
import {Link} from  'react-router-dom'


function Homepage() {
  return (
    <div>

     <div>
          <img src="../assets/beers.png" alt="beers"/>
          <Link to="/beers"> All beer</Link>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ultrices mauris. Nulla elementum, eros id viverra euismod, tellus nunc tempor enim, sagittis hendrerit tortor nisl quis arcu. Sed massa risus, ultrices at elementum eget, efficitur non nunc. Aenean ipsum orci, eleifend eget tempor vitae, rhoncus eget nisl </p>
    </div>

    <div>
          <img src="../assets/random-beer.png" alt="random beer"/>
          <Link to="/random-beer"> Random beer </Link>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ultrices mauris. Nulla elementum, eros id viverra euismod, tellus nunc tempor enim, sagittis hendrerit tortor nisl quis arcu. Sed massa risus, ultrices at elementum eget, efficitur non nunc. Aenean ipsum orci, eleifend eget tempor vitae, rhoncus eget nisl</p>
    </div>

    <div>
          <img src="../assets/new-beer.png" alt="new beer"/>
          <Link to="/new-beer"> New beer </Link>
          <p> </p>
     </div>

    </div>
  )
}

export default Homepage
