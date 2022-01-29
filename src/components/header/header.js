import impuls from "../../images/impuls.png";
import logo from "../../images/DHZB_Logo.png";

function Header({username}) {

    return(
        <>
            <div className="header">
                <img className="impuls" src={impuls} alt="Impuls"/>
                <img className="image" src={logo} alt="Logo" />
            </div>
            <p className="topic_dash">Willkommen</p>
            <p className="topic_dash">{username}</p>
        </>
    )
}

export default Header