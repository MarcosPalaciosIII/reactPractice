import React from 'react';
import data  from '../data.json';
import { Link } from 'react-router-dom';

const projectDetails = (props) => {
  console.log(props);
  console.log(data);

  // const getProject = (id) => {
  //   const theProject = oneProject => {
  //     return oneProject.id === id;
  //   }
  //   return data.find(theProject)
  // };

  const getProject = (id) => {
       return data.find((oneProject)=>{
         return  oneProject.id === id
       })
     };

  // const { params } = props.match;
  // const foundProject = getProject(params.id, 10);

  const foundProject = getProject(props.match.params.id);
  

  return (
    <div>
      <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
      <h3>Used technologies: { foundProject.technologies }</h3>
      <p>{ foundProject.description }</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default projectDetails;
