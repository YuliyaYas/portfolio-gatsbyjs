import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const data = graphql`
  {
    file(relativePath: {eq: "logo_yy.png"}) {
      relativePath
    }
    allContentfulArtPage(sort: {fields: order}) {
      nodes {
        title
        order
      }
    }
  }  
`
const Navbar = () => {
    const logo = useStaticQuery(data).file.relativePath
    const pages = useStaticQuery(data).allContentfulArtPage.nodes
    const menu = pages.map(({title}, i) => {
      return (<li key={i}><Link to={title}>{title.toUpperCase()}</Link></li>)
    })
    return (
        <nav>
            <a href="/"><img id="logo-mobile" src={require(`../images/${logo}`)} alt="yasenetska logo"/></a>
            <ul>
              {menu}
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              
            </ul>
        </nav>
    )
}

export default Navbar