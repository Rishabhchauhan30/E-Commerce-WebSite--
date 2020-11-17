import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby'

export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
        <div className="container">
        <Heading title={heading}/>
        <div className="row">
        <div className="col-9 col-sm-7 mx-auto text-center">
        <p className="lead text-white mb-4">
        Ullamco dolore veniam magna aliqua cillum incididunt adipisicing sit veniam.
        Ullamco nisi dolor labore nostrud cupidatat eiusmod sunt.
        Nisi aliquip anim officia mollit est. 
        Culpa adipisicing nulla consectetur amet non culpa dolore consequat. 
        Qui aute reprehenderit laborum do eu sunt consequat adipisicing irure ut veniam sit tempor.
        Anim reprehenderit magna esse qui ullamco culpa culpa mollit.
        </p>
        <Link to="/about/">
        <button className="btn btn-info btn-lg">
        {heading}
        </button>
        </Link>
        </div>
        </div>
        </div>
            
        </section>
    )
}
