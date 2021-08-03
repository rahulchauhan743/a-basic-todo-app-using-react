//this is a class based componenet

import React from "react";


class Mycomp extends React.Component{
   //state is piece of code which has some data
    state = {
        someNumber:0,
    }

   
     render = ()=>{

         return(

            //this refers to current componenet
          <div>

                 {/* this.setState is used to change current componenent state */}

             <button onClick = {
                 () => {
                this.setState({someNumber:this.state.someNumber + 1})
             }
             }>

              increament
             </button>

             <button onClick = {
                 () => {
                this.setState({someNumber:this.state.someNumber -1 })
             }
             }>

              decrement
             </button>



              <h1>{this.state.someNumber}</h1>
          </div>

         )

     }

}




export default Mycomp;