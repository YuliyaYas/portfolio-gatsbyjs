import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const data = graphql`
  {
    file(relativePath: {eq: "logo_yy.png"}) {
      relativePath
    }
  }  
`
const Navbar = () => {
    const logo = useStaticQuery(data).file.relativePath
    return (
        <nav>
            <a href="/"><img id="logo-mobile" src={require(`../images/${logo}`)} alt="yasenetska logo"/></a>
            <ul>
                <li><Link to='/paintings'>Paintings</Link></li>
                <li><Link to='/illustrations'>Illustrations</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                

            </ul>
        </nav>
    )
}

export default Navbar