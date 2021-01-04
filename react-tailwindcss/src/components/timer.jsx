import React, { Component } from 'react'

class Timer extends Component {
     state={
        date :new Date(),
     }
     callMe(){
         setInterval(() => {
             this.setState({date : new Date()});
         },1000);
        
         }
         
     render() { 
         return ( 
             <div class="flex justify-center ">
                <div class="pill bg-yellow-300 rounded-full px-4 text-xs mr-2 py-1 mt-5 text-4xl font-extrabold">
                    {this.state.date.toLocaleTimeString()}
                </div>
                {this.callMe()}
             </div>
            
         );
     }
 }

 export default Timer ;