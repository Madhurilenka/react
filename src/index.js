import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const path =require('path')

// const_dirname = path.dirname("")
// const buildPath =path.join(_dirname ,"../Movie-App-master/build")

//    App.use(express.static(buildPath))
//    App.get("/*",function(req,res){
//      res.sendFile(
//         path.join(_dirname,"../Movie-App-master/build/index.css"),
//         function(err){
//           if(err){
//             return res.status(500).send(err)
//           }
//         }
//      )
// })   sayili.zip


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
