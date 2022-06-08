import React from "react";
// import Person from "./Person";

function PersonList() {
  const names = ['Bruce', 'Clark', 'Daina']
  /* const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Daina",
      age: 28,
      skill: "Vue",
    },
  ]; */

  // const personList = persons.map((person) => <Person key={person.id} person={person} />);

  //Using the array index as key for list, but shows issues if the list is altered/sorted, so for last resort
  const nameList = names.map((name, index)=> <div key={index}> {index} {name}</div>)
  return <div>{nameList}</div>;
}

export default PersonList;
