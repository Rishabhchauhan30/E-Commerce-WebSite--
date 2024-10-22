import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopSection from '../components/Reuseable/TopSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import DualInfoBlock from '../components/Reuseable/DualInfoBlock'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <TopSection 
    img = {data.img.childImageSharp.fluid}

    title=""
    subtitle="MyWebsite.com"
    topclass="top-background"
    />
    <InfoBlock heading="About Us" />
    <DualInfoBlock heading="Our Team"/>
  </Layout>
)
export const query = graphql`
{
  img : file(relativePath: { eq: "new.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
         }
      }
    }mycourses:allContentfulCources{
      edges{
        node{
          title
          price
          category
          description{
            description
          }
          image{
            fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }bundle:allContentfulBundles {
	  edges {
	    node {
	      id
        title
        price
        image{
          fixed(width: 200,height: 120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
	    }
	  }
	}      

}
`

export default IndexPage
