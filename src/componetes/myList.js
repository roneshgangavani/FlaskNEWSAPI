import React from 'react';

function MyList(props){

    return(
        <React.Fragment>
        { props.news.map(news =>{
            return <h3>{news}</h3>
        }
        )}
        </React.Fragment>
    )
}

export default MyList