import React from 'react'
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  const {id, title, body, imageUrl} = props;
  return (
    <div className="card shadow h-100">
        <img
            className="card-img-top"
            src={imageUrl}
            alt={title}
        />
        <div className="card-body">
            <h4 className="card-title">
            {title}
            </h4>
            <p className="card-text">{body}</p>
            <Link to={`/project/${id}`} className="stretched-link"></Link>
        </div>
    </div>
  )
}

export default ProjectCard