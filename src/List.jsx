//so we receive that tasks array here as props

//props is just like object 
//where tasks is stored as key value pair
// let props={
// tasks:[]
// }

//we made it as a function componenet and not class componenet as it doesnot have its own data which is need to be stored
//it gets its data from parent component
//data is stored in state so here is no requiremment of making a state as not data is to be stored(in case of class componnet)
let List = (props) => {

    return(
                <ul>
                   
                   {
                       //it select every element from tasks array and print in ul form
                       props.tasks.map((el) => { 
                       
                        return <li>
                        {el} {"  "} 
                           {/* delete button ke liye */}
                        <button 

                           onClick = {
                               
                               //here the deleteTask function is called using props and is passed the task to be deleted
                               () => {
                                  props.deleteTask(el);

                               }

                            }>
                        
                        Delete</button> 

                        </li>;

                      })

                   }

                </ul> 

    )
   
}

export default List;