import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const order = ["columnOne", "columnTwo", "columnThree", "columnFour"]

const ArtPage = ({data}) => {
    const info = data.allContentfulArtPage.nodes[0]

    const columns = order.map((column,i) => {
        const col = info[column]
        return col.map((art, i)=>{
            const specsAndDescription = art.description.split('//')
            const specs = specsAndDescription[0]
            const description = specsAndDescription[1]
            return <div key={i}>
                        <div className="column-grid">
                            <img src={art.file.url} title={art.title} style={{width:'100%'}} name={art.title} alt={art.title} />
                         <div className="mobile-info"><p className="all-caps">{art.title}</p><i><p className="title">{specs}</p></i><p className="desc">{description}</p><hr /></div></div>
                    </div>
        })
    })

    const colOne = info.columnOne.map((art, i)=>{
        const specsAndDescription = art.description.split('//')
        const specs = specsAndDescription[0]
        const description = specsAndDescription[1]
        return  <div key={i}>
                    <div className="column-grid">
                        <img src={art.file.url} title={art.title} style={{width:'100%'}} name={art.title} alt={art.title} />
                    <div className="mobile-info"><p className="all-caps">{art.title}</p><i><p className="title">{specs}</p></i><p className="desc">{description}</p><hr /></div></div>
                </div>
    })
    return(
        <Layout>
            <p className="click">Click on image to read more about the work</p>
            <div className="row-grid">
                {columns}
            </div>
        </Layout>
    )
}
export default ArtPage

export const query = graphql`
query($slug:String!){
    allContentfulArtPage(filter: {title: {eq: $slug}}) {
        nodes {
            columnOne {
                title
                description
                file {
                url
                }
            }
            columnTwo {
                title
                description
                file {
                url
                }
            }
            columnThree {
                title
                description
                file {
                url
                }
            }
            columnFour {
                title
                description
                file {
                url
                }
            }
        }
    }
  }
`