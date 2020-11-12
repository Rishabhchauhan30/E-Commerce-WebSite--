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
        Nostrud nisi qui est reprehenderit nulla sit veniam excepteur minim ex laborum.Ea anim ad est adipisicing duis.
        Incididunt esse proident occaecat elit ea tempor ex quis minim in consectetur et.Irure aute qui incididunt ex non eiusmod.
        Sint ipsum esse consequat nisi aute in velit velit do non ea enim.In eiusmod et ad reprehenderit duis.
        Consequat commodo in nulla anim.Fugiat elit eiusmod reprehenderit dolore sunt elit eiusmod.
        Incididunt qui quis nulla id nostrud irure anim non cillum. Consectetur reprehenderit excepteur adipisicing tempor cillum cillum laborum qui enim proident do cillum amet occaecat. Nulla adipisicing aliquip consectetur consectetur incididunt ex culpa commodo magna do dolore commodo minim ex. Sunt laboris Lorem fugiat mollit pariatur incididunt non adipisicing deserunt fugiat magna proident. Culpa aliquip amet qui ad dolore quis velit.
        Sint Lorem fugiat duis veniam consequat adipisicing. Amet minim ipsum exercitation aute aliquip eiusmod. Non officia proident Lorem deserunt ea. Eu consectetur et id officia anim velit qui. Enim quis officia proident veniam ipsum qui. Nostrud deserunt id quis adipisicing est dolor mollit pariatur aliqua ex ullamco mollit quis sit. Et sint sit nisi sunt.
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
