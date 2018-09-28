// components/Projects.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json'

// export  const myProjects = [
//     {
//         id: "1a",
//         name: "Simon (GIF attack Edition)",
//         year: 2017,
//         technologies: "JavaScript, jQuery",
//         description: "The first project game clone."
//     },
//     {
//         id: "2b",
//         name: "The Language Shop",
//         year: 2017,
//         technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
//         description: "Web App that allows logged in users to share their experiences about programming technologies"
//     },
//     {
//         id: "3c",
//         name: "Drinkologist",
//         year: 2017,
//         technologies: "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
//         description: "Web App that allows logged in users to add and search for cocktails as well as the recipe."
//     }
//   ]

class projects extends Component {
  render(){

    return (
      <div>
        <h2>Projects:</h2>
        {data.map((eachProject, index) => {
          return (
            <div key={eachProject.id}>
              <h3>
                <Link to={`/projects/${eachProject.id}`}>
                  {eachProject.name}
                </Link>
              </h3>
              <h4>{eachProject.technologies}</h4>
              <hr />
            </div>
          )
        })}
    </div>
    )
  }
}

export default projects;
