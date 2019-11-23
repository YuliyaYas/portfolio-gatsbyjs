import React from "react";
import Layout from '../components/layout';
import styles from '../sass/home.module.scss';
import {useStaticQuery, graphql} from 'gatsby';

const data = graphql`
      query Home {
        allContentfulHome(filter: {node_locale: {eq: "en-US"}}, limit: 1) {
          nodes {
            img {
              fluid {
                srcSet
              }
            }
            title
            size
            description {
              description
            }
          }
        }
      }
    `
    
export default () => {
  const info = useStaticQuery(data).allContentfulHome.nodes[0]
  const desc = info.description.description
    return(<Layout>   
        <img id={styles.homeImg} src={require("../images/Snaility.jpg")} alt="home page"/>
        <div className="title">
          <p>{info.title}</p>
          <i>{info.size}</i>
        </div>
        <p className="desc">{desc}</p>
  </Layout>
  )
}
