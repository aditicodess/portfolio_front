import React from 'react';
import Aditi from '../assets/aditi.jpeg'

function Title({name, leadText}) {
  return (

     <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={Aditi}
            alt="Aditi singh"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{fontSize: "50px"}}>
            Hi, I am <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">{leadText}</h4>
        </div>
      </div>
    </div>

    // <div className="container">
    // <div className="intro py-5 my-5" id="home">
    //     <h1 className="section__title section__title--intro">
    //         Hi, I am <strong>Aditi Singh</strong>
    //     </h1>
    //     <p className="section__subtitle section__subtitle--intro">Web Developer</p>
    //     <img src={Aditi} className="intro-img" alt="Aditi Singh" />
    // </div>
    // </div>
  )
}

export default Title


   