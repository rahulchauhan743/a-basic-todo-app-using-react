let input = (props)=>{


    return(

        <input type="text" className="input-box"
                //when we start typing so onchange get to work
                
                onChange = {
                //when onchange occurs it executes a function
                    (e) => {
                //here the typed value by user is stored in currInput using props
                       props.handleCurrInput(e.currentTarget.value);

                    }

                }  

                //when user pressed a key so onkeydown gets triggered 
                onKeyDown = {
                //when onKeyDown gets triggered the given function executes
                    (e) => {
                    //in function if pressed key was enter 
                        if(e.key === "Enter"){
                        
                            //if enter is pressed so tasks gets updated by 
                            //storing previous tasks(...this.state.tasks)
                            //ans the new input bu user(this.state.currInput)
                        
                            props.handleTasks();

                        }

                    }
            } 
            
            //it is basically for showing typed input by user in input box
            value = {props.currInput}

        />

    )



}

export default input;

