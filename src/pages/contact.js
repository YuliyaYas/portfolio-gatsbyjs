import React from "react"
import Layout from '../components/layout'
import {useStaticQuery, graphql} from 'gatsby';

const data = graphql`
  query Contact {
    allContentfulContact(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        subtitle
        title
        iframeSrc
      }
    }
  }
  `

  const Contact = () =>  {    
    const info = useStaticQuery(data).allContentfulContact.nodes[0]
        return <Layout>
          <div id="contact-form">
          <center>
            <b><h3>{info.title}</h3></b>
            <p>{info.subtitle}</p>
          </center>
            <iframe height="497"
              frameBorder="0"
              scrolling="no"
              style={{width: '80%', border: 'none', display: 'block', margin: '0 auto', marginTop: '50px', backgroundColor: 'green !important'}}
              src={info.iframeSrc}
              title="questions form">
            </iframe>
          </div>
        </Layout>
    
}

export default Contact
