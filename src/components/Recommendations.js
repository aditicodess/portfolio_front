import React from 'react'
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";
import RecommendationModal from './RecommendationModal';

function Recommendations() {
  return (
    <Consumer>
      {(value) => {
        const { recommendations } = value;
        return (
          <div className="container-fluid my-5">
            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
              {recommendations.map((recommendation) =>(
                <RecommendationModal key={uuid()} id={recommendation.id} name={recommendation.name} company={recommendation.company} designation={recommendation.designation} message={recommendation.message} />
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Recommendations;