import {useLocation} from "react-router-dom";
import {Formik, Field, Form} from "formik";

function Input_Area({text}) {
    return(
        <>
            <Formik
                initialValues={{
                    titel: ''
                }}
            >
                <Form>
                    <label>{text}</label>
                    <Field className={text} id={text} name={text} placeholder={text} />
                </Form>
            </Formik>
        </>
    )
}

export default Input_Area