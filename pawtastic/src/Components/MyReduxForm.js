import React from 'react';
import {Field , reduxForm} from 'redux-form';

function MyReduxForm(props) {
    const hello = (value) => console.log(value) ;
    return (
        <div>
            <form onSubmit={props.handleSubmit(hello)}>
      <label>
      Callback - Trial 2:
        {/* field generate a object{Field_name : field_value}and pass on submit */}
        {/* Here field_name is inputname and field_value is value we put on UI */}
        <Field name="Field-3" component="input" type="text" />
      </label>
      <button >Submit</button>  
    </form>
            
        </div>
    );
}

export default reduxForm({form : 'animalinfo'})(MyReduxForm);