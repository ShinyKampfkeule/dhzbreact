import LoginField from "./login_field/login_field";
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import * as Yup from 'yup';

function Login() {
    return (
        <div>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required("Required"),
                    password: Yup.string()
                        .password()
                        .required("Required")
                })}
            >
                <Form>
                    <label htmlFor="email">EMAIL</label>
                    <Field id="email" name="email" placeholder="Email eintragen" />
                    <label htmlFor="password">PASSWORT</label>
                    <Field id="password" name="password" placeholder="Passwort eintippen" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login