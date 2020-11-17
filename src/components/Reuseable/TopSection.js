import React from "react"
import BackgroundImage from 'gatsby-background-image'

export default function TopSection( {img, title, subtitle, topclass} ) {
    return (
        <BackgroundImage
        className={topclass}
          fluid={img}
        >
        <h1 className="text-secondary text-uppercase text-center display-6">
        {title}
        </h1>
        <div>
        <h4 className="text-danger  display-6">{subtitle}</h4>
        </div>
        </BackgroundImage>
    )
}
