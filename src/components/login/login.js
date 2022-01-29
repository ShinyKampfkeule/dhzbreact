import {Formik, Field, Form} from "formik"
import {useNavigate} from "react-router-dom";
import eye from "../../icons/eye.png";
import blind from "../../icons/blind.png";

const crypto = require('crypto')

function Login() {
    const navigate = useNavigate();
    return(
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={async (values) => {
                    let sha256 = crypto.createHash('sha256')
                    let hashPassword = sha256.update(values.password).digest('base64');
                    await fetch(`http://localhost:3001/`, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: values.email,
                            password: hashPassword,
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            let message = data.message
                            if (message !== "User found") {
                                let error = document.getElementById('Error')
                                error.innerText = message
                            } else {
                                localStorage.setItem('token', data.token)
                                navigate(`/home`, {
                                    state: {
                                        username: data.username
                                    }
                                })
                            }
                        })
                }}
            >
                <Form>
                    <div className="loginField">
                        <div className="full">
                            <label htmlFor="email" className="label">E-MAIL</label>
                            <Field id="email" name="email" placeholder="" className="input" />
                            <label htmlFor="password" className="label password">PASSWORT</label>
                            <Field type="password" id="password" name="password" placeholder="" className="input" />
                        </div>
                        <div className="pwForgotten">
                            <p className="pw">Passwort vergessen?</p>
                        </div>
                        <div className="eyeContainer" id="hide" onClick={changePasswordVisibility}>
                            <img src={eye} className="eye" id="eye" alt=""/>
                        </div>
                    </div>
                    <div className="flex">
                        <button type="submit" className="button">EINLOGGEN</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

function changePasswordVisibility() {
    let eyeIcon = document.getElementById('eye')
    let password = document.getElementById('password')

    if (password.type === "password") {
        password.type = "input"
        eyeIcon.src = blind
    } else {
        password.type = "password"
        eyeIcon.src = eye
    }
}

export default Login