import React from "react"
import Layout from '../components/layout'
import {useStaticQuery, graphql} from 'gatsby';
var parse = require('html-react-parser');

const data = graphql`
query About {
    allContentfulAbout(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        profileImage {
          fluid {
            src
          }
          title
        }
        paragraphs {
          paragraphs
        }
        cta
        ctaText
      }
    }
  }`

  const About = () =>  {    
    const info = useStaticQuery(data).allContentfulAbout.nodes[0]
        return <Layout>
          <div id="about">
             <img id="profile-pic" src={info.profileImage.fluid.src} alt={info.profileImage.title}/>
            {parse(info.paragraphs.paragraphs)}
          </div>
          <br/>
          <a href={info.cta}><h4>{info.ctaText}</h4></a>
        </Layout>
    
}

export default About
