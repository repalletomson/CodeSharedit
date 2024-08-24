// import { RouterProvider } from "react-router-dom";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./collabmode/Home";
import EditorPage from "./collabmode/EditorPage"
import HomePage from "./components/HomePage"
import CodeEditor from './CodeEditor/CodeEditor'
import toast, {Toaster} from 'react-hot-toast'
import { SpeedInsights } from "@vercel/speed-insights/react"


const App = () => {
  return (
    <div>
    <div> 
      <SpeedInsights />
    </div>
      <div >
        <Toaster 
          position="top-tight"
          toastOptions={{
            success:{
              theme:{
                primary:'#4aed99',
              }
            }}
          }
        
        />
      </div>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/codeeditor" element={<CodeEditor/>}></Route> 
            <Route path="/collabmode" element={<Home/>}></Route> 
            <Route path="/editor/:roomID" element={<EditorPage/>}></Route> 
          </Routes>
         
         </BrowserRouter>
    </div>
  );
};
export default App;
