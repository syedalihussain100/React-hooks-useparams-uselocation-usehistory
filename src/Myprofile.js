import React from 'react';
import {useParams} from 'react-router-dom';

function Myprofile() {
    const {name} = useParams();
    console.log(name);  
    return (
        <div>
        <h1>Users: {name}</h1>
        </div>
    )
}

export default Myprofile
