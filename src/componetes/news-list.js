import React, {useState, Component} from 'react';


class NewsList extends Component{

    state ={
        news:[]
    }
   
    render(){
   
    
    return(
        <div>
            { this.state.news &&  this.state.news.map(nw =>{ 
                return (
                    <div>
                        {nw.name}
                        </div>
                )
            })}
        </div>
    )
        }
}

export default NewsList