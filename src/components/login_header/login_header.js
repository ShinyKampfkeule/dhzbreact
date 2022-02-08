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
                    <option value="russian">русский</option>
                    <option value="arabic">عربى</option>
                    <option value="turkey">türkçe</option>
                </select>
                <img className="image" src={logo} alt="Logo"/>
            </div>
            <p className="topic">Willkommen</p>
        </>
    )
}

export default LoginHeader