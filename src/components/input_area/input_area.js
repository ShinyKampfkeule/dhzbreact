import {Formik, Field, Form} from "formik";
import {useEffect, useState} from "react";

function InputArea({text}) {

    useEffect(() => {
        (async () => {
            if (text === "Nr.") {
                classname(
                    <>
                        <Form>
                            <label className="NrLabel">{text}</label>
                            <Field className="Nr" id="Nr" name="Nr" placeholder={text} />
                        </Form>
                    </>
                )
            } else {
                let newClass = text + "Label"
                classname(
                    <Form>
                        <label className={newClass}>{text}</label>
                        <Field className={text} id={text} name={text} placeholder={text} />
                    </Form>
                )
            }
        })()
    }, [text])

    const [element, classname] = useState()

    return(
        <>
            <Formik
                initialValues={{
                    titel: ''
                }}
            >
                {element}
            </Formik>
        </>
    )
}

export default InputArea