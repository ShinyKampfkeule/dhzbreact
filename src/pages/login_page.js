import LoginHeader from "../components/login_header/login_header"
import Login from "../components/login/login";

function LoginPage() {
    return(
        <>
            <LoginHeader />
            <Login />
            <div className="ErrorContainer">
                <p  id="Error"/>
            </div>
            <div className="hinweisText">
                <p><b>Achtung:</b></p>
                <p className="abstand"><b>Nutzername und Passwort bekommen</b></p>
                <p className="abstand"><b>Sie von unserer Personalabteilung vorab</b></p>
                <p className="abstand"><b>per E-Mail oder Post zugesendet</b></p>
            </div>
            <div className="greenLine"></div>
        </>
    )
}

export default LoginPage