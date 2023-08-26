import React from 'react'

function ModelContent(props) {
  return (
    <div className="col-12 col-md-4">
        <div className="card shadow h-100">
            <div className="card-body">
            <h4 className="card-text">
                { props.message }
            </h4>
            <p className="card-text text-secondary mb-0">{ props.name }</p>
            <p className="card-text text-secondary">
            { props.designation } at { props.company }
            </p>
            </div>
        </div>
    </div>
  )
}

export default ModelContent