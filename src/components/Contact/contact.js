import React from 'react'
import Heading from '../Reuseable/Heading'


export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us" /> 
                <div className="col-10 col-sm-8 mx-auto">
                    <form action="https://formspree.io/f/moqpldpn" method="POST">
                            <div className="form-group">
                                <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Your Name" 
                                className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                type="e-mail" 
                                name="e-mail" 
                                id="e-mail" 
                                placeholder="Your Email" 
                                className="form-control"
                                />
                            </div>

                            <div className="form-group"> 
                                <input 
                                type="text" 
                                name="mobile" 
                                id="mobile" 
                                placeholder="Your Contact No" 
                                className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                type="text" 
                                name="description" 
                                id="description" 
                                placeholder="Your Words" 
                                className="form-control"
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-info btn-block">Submit</button>

                    </form>
                </div>
        </section>
    )
}
