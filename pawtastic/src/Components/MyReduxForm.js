import React from "react";
import { Field, reduxForm } from "redux-form";
import Form from './Form'

function MyReduxForm(props) {
  const {handleSubmit}= props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <Field name="Field-3" component={Form} />
      </form>
    </div>
  );
}

export default reduxForm({ form: "animalinfo" })(MyReduxForm);
