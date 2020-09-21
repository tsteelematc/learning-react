import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import StudentList from './StudentList';

function App() {
  return (
    <>
    {/* <h1>
      Hello ReactJS ! ! !
    </h1> */}

    <Greeting name1="React JS" />
    <Greeting name="Albert" />
    <Greeting name="Maggie" />
    <p>
      ReactJS is fun : - )
    </p>

    <StudentList students={['Mitchell', 'Mike']} />
    </>
  );
}

export default App;
