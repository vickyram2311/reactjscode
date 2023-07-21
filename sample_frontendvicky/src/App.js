//import { FirstHook } from "./Usestatesample";
//import { Samplebootstrap } from "./bootstrapsample";
//import { useState } from "react";
//import { Samplebootstrap } from "./bootstrapsample";
//import Func, { Orderlist, Table } from "./function";
//import { Parameter } from "./parametercomponent";
//import { Usingbootstrap } from "./usingbootstrap"

import { Table } from "react-bootstrap";
import { Hook } from "./GetandSetAcess";
import { Mainpage } from "./homepage";
import { TernaryOperator } from "./terneryoperator";
import { Usestate2 } from "./usestateusingnumber";
import { TableCreate } from "./function";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



// import { Samplebootstrap } from "./bootstrapsample";
function App()
{
  return(
    <>
   {/* <h1>Welcome to Everyone</h1>
     <Hook/>
     <Usestate2/>
  <TernaryOperator/>*/}
  <BrowserRouter>
  <Mainpage/>
  <Routes>
    <Route path="update" exact element={<TableCreate/>}/>
    <Route path="create" exact element={<h2>Welcome to BrowserRouter Module</h2>}/>
  </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
