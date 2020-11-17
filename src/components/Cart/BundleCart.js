import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'


export default class BundleCart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: props.bundle.edges,
            ourcourses: props.bundle.edges,
        }
    }
    render() {
        return (
            <section className="py-5">
            <div className="container">
                <Heading title="Bundles"/>
                <div className="row">
                {
                    this.state.ourcourses.map(({ node }) =>{
                        return(
                            <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                            <Img fixed={node.image.fixed}/>
                            <div className="flex-grow-1 px-3">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-0">{node.title}</h6>
                                <h6 className="mb-0">${node.price}</h6>
                            </div>
                            <button 
                                data-item-id= {node.id}
                                data-item-name={node.title}
                                data-item-price={node.price}
                                data-item-url="https://rishabh-chauhan-rs3020.netlify.app/"
                                data-item-image={node.image.fixed.src}
                                className = "btn btn-info snipcart-add-item">
                                Join Now
                            </button>
                        </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            </section>
        )}}
