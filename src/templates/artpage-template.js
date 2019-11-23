import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ArtPage = () => {
    console.log(data)
    return(
        <Layout>
            template
        </Layout>
    )
}
export const data = graphql`
query($slug:String!){
    allContentfulArtPage(filter: {node_locale: {eq: "en-US"}, title: {eq: $slug}}) {
        nodes {
        title
        columnOne {
          fluid {
            src
          }
          description
          title      
        }
      }
    }
  }`
export default ArtPage