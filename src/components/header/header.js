import impuls from "../../images/impuls.png";
import logo from "../../images/DHZB_Logo.png";
import {useParams} from "react-router-dom"

function Header() {
    let {username} = useParams()
    return(
        <>
            <div className="header">
                <img className="impuls" src={impuls} alt="Impuls"/>
                <img className="image" src={logo} alt="Logo"/>
            </div>
            <p className="topic_dash">Willkommen</p>
            <p className="topic_dash">{username}</p>
        </>
    )
}

export default Header