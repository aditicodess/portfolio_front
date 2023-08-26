import React from 'react';
import {v4 as uuid} from 'uuid';

function Skill({name, imageUrl, starsTotal, starsActive}) {
    
  const starList = [];
  for(let i=0; i < starsTotal; i++){
    if(i<starsActive){
      starList.push(<span key={uuid()} className="text-info">★</span>);
    }
    else{
      starList.push(<span key={uuid()} className="">★</span>);
    }
  }
  return (
    <div>
        <img
            className="mystyle"
            src={imageUrl}
            alt={name}
            style={{width: "110px", objectFit: "contain", height: "110px"}}
        />
        <div>
            {starList}
        </div>
    </div>
  );
}

export default Skill;