import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
    handler = (action, newObject) => {
        // eslint-disable-next-line default-case
        switch(action) {
            case "ADD_PROJECT":
                this.setState({
                    projects: [newObject, ...this.state.projects],
                });
                break;

            case "ADD_BLOG":
                this.setState({
                    blogs: [newObject, ...this.state.blogs],
                });
                break;

            case "ADD_RECOMMENDATION":
                this.setState({
                    recommendations: [newObject, ...this.state.recommendations],
                });
                break;
        } 
    };
    state = {
        handler: this.handler,

        blogs: [
            {
                id: 1,
                title: "Blog1",
                body: "This is the blog about...",
                imageUrl: "images/free-stock-image-1.jpg",
            },
            {
                id: 2,
                title: "Blog2",
                body: "This is the blog about...",
                imageUrl: "images/free-stock-image-2.jpg",
            },
            {
                id: 3,
                title: "Blog3",
                body: "This is the blog about...",
                imageUrl: "images/free-stock-image-3.jpg",
            },
    
        ],

        recommendations: [
            {
              id: 1,
              name: "Random guy 1",
              company: "ABC company",
              designation: "CEO",
              message: "He is a good engineer",
            },
            {
              id: 1,
              name: "Random guy 2",
              company: "ABC company",
              designation: "Director",
              message: "He is a lazy person",
            },
            {
              id: 1,
              name: "Random guy 3",
              company: "ABC company",
              designation: "Manager",
              message: "He is a execellent developer",
            },
            {
              id: 1,
              name: "Random guy 4",
              company: "ABC company",
              designation: "SDE",
              message: "He gets things done so quickly",
            },
            {
              id: 1,
              name: "Random guy 5",
              company: "ABC company",
              designation: "CEO",
              message: "He is a good engineer",
            },
            {
              id: 1,
              name: "Random guy 6",
              company: "ABC company",
              designation: "CEO",
              message: "He is a good engineer",
            }
        ],

        skills: [
            {
                id: 1,
                name: "HTML5",
                imageUrl: "images/html5.png",
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 2,
                name: "CSS3",
                imageUrl: "images/css3.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 3,
                name: "Javascript",
                imageUrl: "images/javascript.png",
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 4,
                name: "Bootstrap4",
                imageUrl: "images/bootstrap4.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 5,
                name: "React",
                imageUrl: "images/react.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 6,
                name: "Node.JS/Express",
                imageUrl: "images/Node.js_logosvg.png",
                starsTotal: 3,
                starsActive: 2,
            },
            
            {
                id: 7,
                name: "MongoDB",
                imageUrl: "images/mongodb.webp",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 8,
                name: "Django",
                imageUrl: "images/django.jpg",
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 9,
                name: "PostgreSQL",
                imageUrl: "images/postgresql.webp",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 10,
                name: "SASS",
                imageUrl: "images/sass.png",
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 11,
                name: "C++",
                imageUrl: "images/C++.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 12,
                name: "Python",
                imageUrl: "images/python.png",
                starsTotal: 3,
                starsActive: 2,
            },
        ],

        projects: [
            {
                id: 1,
                title: "Project1", 
                imageUrl: "images/free-stock-image-1.jpg",
                body: "Body1"
            },
            {
                id: 2,
                title: "Project2",
                imageUrl: "images/free-stock-image-2.jpg",
                body: "Body2"
            },
            {
                id: 3,
                title: "Project3",    
                imageUrl: "images/free-stock-image-3.jpg",
                body: "Body3"
            },
        ],
    };

    async componentDidMount() {
        const [
            responseRecommendations,
            responseSkills,
            responseProjects,
            responseBlogs,
        ] = await Promise.all([
            axios.get("http://127.0.0.1:9000/api/recommendations"),
            axios.get("http://127.0.0.1:9000/api/skills"),
            axios.get("http://127.0.0.1:9000/api/projects"),
            axios.get("http://127.0.0.1:9000/api/blogs"),
        ]);
        console.log(responseBlogs);
        console.log(responseProjects.data.results.length);
        console.log(responseRecommendations.data.results.length);

        const newState = {};
        if(
            responseRecommendations.data.isSuccessful &&
            responseRecommendations.data.results.length !== 0
        ){
            newState.recommendations = responseRecommendations.data.results;
        }
        if(
            responseSkills.data.isSuccessful &&
            responseSkills.data.results.length !== 0
        ){
            newState.skills = responseSkills.data.results;
        }
        if(
            responseProjects.data.isSuccessful &&
            responseProjects.data.results.length !== 0
        ){
            newState.projects = responseProjects.data.results;
        }
        if(
            responseBlogs.data.isSuccessful &&
            responseBlogs.data.results.length !== 0
        ){
            newState.blogs = responseBlogs.data.results;
        }
        console.log(newState);
        this.setState(newState);
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;