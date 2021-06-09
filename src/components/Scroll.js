import React from 'react';

const Scroll = (props) => { // Scroll wrapped CardList, поэтому CardList - Children
    console.log(props) // Object, у которого в children будет указано CardList
    return (
        //  первая скобка - JS expression, вторая - returning an object
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '800px'}}> 
            {props.children}
        </div> 
    )
};

export default Scroll;
