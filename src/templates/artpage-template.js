import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ArtPage = ({data}) => {
    const info = data.allContentfulArtPage.nodes[0]
    return(
        <Layout>
            template {info.title}
        </Layout>
    )
}
export default ArtPage

export const query = graphql`
query($slug:String!){
    allContentfulArtPage(filter: {title: {eq: $slug}}) {
      nodes {
        title
        columnOne {
            title
          }
      }
    }
  }
`