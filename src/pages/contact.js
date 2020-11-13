import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopSection from '../components/Reuseable/TopSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import Contact from '../components/Contact/contact'

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <TopSection 
    img = {data.img.childImageSharp.fluid}
    title="Contact Us"
    subtitle=""
    topclass = "about-background"
    />
    <InfoBlock heading="How Can We Help?" />
    <Contact/>
  </Layout>
)
export const query = graphql`
{
  img : file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
         }
      }
    }
}
`
export default ContactPage
