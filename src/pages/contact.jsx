import React from 'react'
import { Link } from 'gatsby'

const Contact = () => {	
	const text = 'hello world!!'

  return(
    <>
			<nav>
				<Link to="/about" activeStyle={{color: "red", fontFamily: "sans-serif"}} activeClassName="active">About</Link> |  
				<Link to="/contact" activeStyle={{color: "red", fontFamily: "sans-serif"}} activeClassName="active">Contact</Link>
			</nav>

    
      <h1>Contact</h1>
      <h2>{ text }</h2>
    </>
  )
}

export default Contact