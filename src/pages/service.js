import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopSection from '../components/Reuseable/TopSection'
import CourseCart from '../components/Cart/CourseCart'
import BundleCart from '../components/Cart/BundleCart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <TopSection 
    img = {data.img.childImageSharp.fluid}

    title=""
    subtitle=""
    topclass="service-background"
    />
    <CourseCart mycourses={data.mycourses}/>
    <BundleCart bundle={data.bundle}/>
  </Layout>
)
export const query = graphql`
{
  img : file(relativePath: { eq: "online_-courses_programs.png" }) {
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
