import {Formik, Field, Form} from "formik";
import {useEffect, useState} from "react";

function SelectArea({text, values}) {

    useEffect(() => {
        (async () => {
            let newClass = text + "Label"
            classname(newClass)
        })()
    }, [text])

    const [name, classname] = useState()

    return(
        <>
            <Formik
                initialValues={{
                    titel: ''
                }}
            >
                <Form>
                    <label className={name}>{text}</label>
                    <Field as="select" className={text} id={text} name={text} placeholder={text}>
                        <option value={values[0]}>{values[0]}</option>
                        <option value={values[1]}>{values[1]}</option>
                        <option value={values[2]}>{values[2]}</option>
                    </Field>
                </Form>
            </Formik>
        </>
    )
}

export default SelectArea