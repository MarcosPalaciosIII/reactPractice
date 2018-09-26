// components/ListDemo.js
import React from 'react';
import Card from './Card';

const numbers = [1, 2, 3, 4, 5, 6];


// array of list item HTML elements that needs to be displayed

export const listItems = numbers.map((oneNumber, index) =>
  <li key={index}>{oneNumber}</li>
);

// export const listItems = [
//   <li>1</li>,
//   <li>2</li>,
//   <li>3</li>,
//   <li>4</li>,
//   <li>5</li>,
// ];


const movies = [
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" }
];

export const MoviesList = () =>{
  return (
    <ul>
      { movies.map((oneMovie,index) =>
        <Card key={index} title={oneMovie.title} director={oneMovie.director} />)
      }
    </ul>
  )
};
