import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopSection from '../components/Reuseable/TopSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import DualInfoBlock from '../components/Reuseable/DualInfoBlock'
import TeamSection from '../components/About/TeamSection'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <TopSection 
    img = {data.img.childImageSharp.fluid}
    title="About Our team"
    subtitle=""
    topclass = "about-background"
    />
    <InfoBlock heading="Our Vision" />
    <TeamSection />
    <DualInfoBlock heading="Words From Our CEO"/>
  </Layout>
)
export const query = graphql`
{
  img : file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
         }
      }
    }
}
`
export default AboutPage
