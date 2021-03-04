import React from 'react'
import { Link } from 'gatsby'  

const About = () => {	
	const text = 'hello world!!'

  return(
    <>
			<nav>
				<Link to="/contact" activeStyle={{color: "red", fontFamily: "sans-serif"}} activeClassName="active">Contact</Link> | 
				<Link to="/about" activeStyle={{color: "red", fontFamily: "sans-serif"}} activeClassName="active">About</Link>
			</nav>

      <h1>About</h1>
      <h2>{ text }</h2>
			<a href="https://youtube.com">Youtube</a>
    </>
  )
}

export default About