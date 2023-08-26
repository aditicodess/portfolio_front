import React from "react";
import ReactMarkDown from "react-markdown";
import { Consumer } from "../context";

function ProjectPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        const id = props.match.params.id;
        const project = projects.filter((project) => project.id === id)[0];
        console.log(project);
        const { imageUrl, title, body } = project;
        return (
          <div className="container my-5 py-5 markdown">
            <div className="justify-content-center">
              <img
                className="w-100"
                src={`http://localhost:3000/${imageUrl}`}
                alt={title}
              />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkDown children={body} />
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectPage;
