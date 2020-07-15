import React, {useState, Component} from 'react';


class NewsList extends Component{

    state ={
        news:[]
    }
   
    render(){
   
    
    return(
        <div>
            { this.props.nn && this.props.nn.map(nw =>{ 
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