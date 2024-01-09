import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./Custominput";
import { advancedSchema } from "../Schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};


const AdvancedForm = () => {
  return (
    <Formik 
     initialValues={{ username: "", jobType:"", acceptedTos: false}} 
     validationSchema={advancedSchema}
     onSubmit={onSubmit}
     >
       {({isSubmitting}) => (
         <Form>
          <CustomInput 
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />

          <CustomSelect 
            label="Job Type"
            name="jopType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          
           {/* <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name}
             name="name"
           /> */}
           
          <CustomCheckbox type="checkbox" name="acceptedTos" />

          <button disabled={isSubmitting} type="submit">Submit</button>
         </Form>
       )}
     </Formik>
  );
};
export default AdvancedForm;
