import impuls from "../../images/impuls.png";
import logo from "../../images/DHZB_Logo.png";

function LoginHeader() {
    return(
        <>
            <div className="header">
                <img className="impuls" src={impuls} alt="Impuls"/>
                <label htmlFor="languages"/>
                <select name="language" id="languages" className="language-container">
                    <option value="german">german</option>
                    <option value="english">english</option>
                    <option value="russian">russian</option>
                    <option value="arabic">arabic</option>
                    <option value="turkey">turkey</option>
                </select>
                <img className="image" src={logo} alt="Logo"/>
            </div>
            <p className="topic">Willkommen</p>
        </>
    )
}

export default LoginHeader