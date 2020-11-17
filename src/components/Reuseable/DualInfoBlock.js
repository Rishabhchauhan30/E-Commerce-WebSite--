import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoBlock({heading}) {
    return (
        <section className="my-3 py-3 bg-theme">
        <div className="container">
        <Heading title={heading}/>
        <div className="row">
        <div className="col-7 mx-auto">
        <p className="lead text-white mb-4">
          Nostrud nisi qui est reprehenderit nulla sit veniam excepteur minim ex laborum.
          Ea anim ad est adipisicing duis.
          Incididunt esse proident occaecat elit ea tempor ex quis minim in consectetur et
          .Irure aute qui incididunt ex non eiusmod.
          Sint ipsum esse consequat nisi aute in velit velit do non ea enim.In eiusmod et ad reprehenderit duis.
          Consequat commodo in nulla anim.Fugiat elit eiust minim ipsum exercitation aute aliquip eiusmod.
          Non officia proident Lorem deserunt ea.
          Culpa adipisicing nulla consectetur amet non culpa dolore consequat.
          Qui aute reprehenderit laborum do eu sunt consequat adipisicing irure ut veniam sit tempor.
          Anim reprehenderit magna esse qui ullamco culpa culpa mollit.
        </p>
        </div>
        <div className="col-4">
        <div class="card bg-dark">
  <img class="card-img-top" src="https://images.pexels.com/photos/3182827/pexels-photo-3182827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/100px180/" alt="Image goes here"/>
  <div class="card-body">
    <h5 class="card-title text-white">Just Develop Things</h5>
    <p class="card-text text-white">Voluptate reprehenderit qui amet pariatur veniam laborum consectetur minim aute aliquip consectetur.
    Culpa nostrud nulla dolore laborum ea elit duis proident occaecat aliqua fugiat consectetur quis reprehenderit.
    </p>
    <a href="#" class="btn btn-info btn-block">Our Team</a>
  </div>
</div>
        </div>
        </div>
        </div>
            
        </section>
    )
}
