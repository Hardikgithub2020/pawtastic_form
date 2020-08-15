

import React from 'react';
import MyReduxForm from './MyReduxForm';

const submit=(values)=> console.log(values)

function Infopage(props) {
    return (
        <div>
            <h1>Yay, we love dogs! Give us the basic about your pup</h1>
            <MyReduxForm  onSubmit={submit}/>
        </div>
    );
}

export default Infopage;