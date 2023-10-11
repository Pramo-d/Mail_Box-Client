import React from 'react'
import { Link } from 'react-router-dom'
 

const Home = () => {
  return (
    <div>
     
    <h2> Welcome to email box </h2> 
    <p>To write a email please click to ...{<Link to='/mail'>Email</Link>}</p>
    </div>
  )
}

export default Home
