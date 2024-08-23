import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import CodeEditor from "../CodeEditor/CodeEditor"

function router(){
    return(
      <>
         <BrowserRouter>
          <Routes>

            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/CodeEditor" element={<CodeEditor/>}></Route>
          </Routes>
         
         </BrowserRouter>
      
      </>
    )
}
export default router;
