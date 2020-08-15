import React from "react";
import { Field, reduxForm } from "redux-form";
import Form from './Form'

function MyReduxForm(props) {
  
  return (
    <div>
      <form >
          <Field name="Field-3" component={Form} />
      </form>
    </div>
  );
}

export default reduxForm({ form: "animalinfo" })(MyReduxForm);
