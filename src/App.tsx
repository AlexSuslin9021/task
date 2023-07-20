import React, { useEffect} from 'react';
import './App.css';
import {Paginator} from "./component/paginator";
import {Tables} from "./component/table";

function App() {


  return (
     <>
       <Tables/>
       <Paginator/>
     </>
  );
}

export default App;


