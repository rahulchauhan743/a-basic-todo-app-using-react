import React from "react";// creation logic


import ReactDOM from "react-dom"; // render logic


//App is a component we have imported
import App from "./App";
// import Mycomp from "./Mycomp";
// import Mycompclassbased from "./Mycomp(class based)";
// import Mycompdecrement from "./Mycompdecrement"

//.render only takes one componenet
ReactDOM.render( 

<App/> , // app ek component he jho hamne design kiya
  
    document.getElementById('root')// aur ek jagah jha  <App/> component ko show karna hai us element ko select karliya html se

);