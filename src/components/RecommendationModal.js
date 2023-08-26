import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuid } from "uuid";
import ModelContent from './ModelContent';
import RecommendationCard from './RecommendationCard';


function RecommendationModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const id = props.match.params.id;
    // const recommendation = recommendations.filter((recommendation) => props.id == id)[0];
    // console.log(recommendation);
    const { name, company, designation, message } = props;
  
    return (
            <>
                <div className="col-12 col-md-4"onClick={handleShow}>
                    <RecommendationCard key={uuid()} name={props.name} company={props.company} designation={props.designation} message={props.message} />
                </div>

                <Modal show={show} onHide={handleClose}>
                    <ModelContent name={name} company={company} message={message} designation={designation}/>
                </Modal>
            </>
    )
}

export default RecommendationModal;









