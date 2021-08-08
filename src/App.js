import React from "react";

import "./App.css"

import List from "./List";

import Input from "./input";

//App is a class component so it will have a state
class App extends React.Component{
     
      state = {
        tasks: ["make coffee", "make notes", "go for a jog", "new task"],
        currInput: "",
      }

      //this function is used to update state with currinput given by user
      handleCurrInput = (value) => {
        
        this.setState({
           currInput : value,
        });

      }

      handleTasks = () => {

        this.setState({
          tasks : [...this.state.tasks,this.state.currInput], 
          currInput : "",//the currInput is set to empty for next user input   
        })

      }
      
      //deleteTask function get a task to be deleted  
        deleteTask = (singleTask) =>{
        
        let currTaskArr = this.state.tasks;
                                 
        //phir jho task delete karna he
        //filter se us task hta diyo
        //usko he return kiya jho us delete task ke equal nhi he taki jab render ho updated tasks he print ho

         let filteredArr = currTaskArr.filter( (element) => {
             return element !== singleTask;
         })
          
         //phir us filteredarray ko state me update kiya 
        this.setState( { tasks : filteredArr } );


      } 


      render = () => {
       
        return(
            <div>

                  <Input 
                    handleCurrInput = {this.handleCurrInput} 
                    handleTasks = {this.handleTasks}  
                    currInput = {this.state.currInput}
                  /> 

                  {/* here we pass the tasks array from parent state to child using props */}
                  {/* props is just like object where attibute given to it will be stored in key-value pair */}

                  {/* here we pass deleteTask function defintion to child component list.jsx  */}


                  <List 
                    tasks = {this.state.tasks}  
                    deleteTask = {this.deleteTask} 
                  />

            </div>

        )

        
      }

}





export default App;