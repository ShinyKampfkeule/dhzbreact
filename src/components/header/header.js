import impuls from "../../images/impuls.png";
import logo from "../../images/DHZB_Logo.png";
import {useEffect, useState} from "react";

function Header({topic, username, klasse}) {

    useEffect(() => {
        (async () => {
            if (klasse === "header") {
                showLogo(
                    <>
                        <div className={klasse}>
                            <img className="impuls" src={impuls} alt="Impuls"/>
                            <img className="image" src={logo} alt="Logo" />
                        </div>
                        <p className="topic_dash">{topic}</p>
                        <p className="topic_dash">{username}</p>
                    </>
                )
            } else if (klasse === "menu_header") {
                showLogo(
                    <>
                        <div>
                            <img className="impuls" src={impuls} alt="Impuls"/>
                            <img className="menu_image" src={logo} alt="Logo" />
                            <p className="topics"><b>{topic}</b></p>
                        </div>
                    </>
                )
            } else {
                showLogo(
                    <>
                        <div>
                            <img className="impuls" src={impuls} alt="Impuls"/>
                            <p className="topics"><b>{topic}</b></p>
                        </div>
                    </>
                )
            }
        })()
    }, [topic, username, klasse])

    const [element, showLogo] = useState()

    return(
        <>
            {element}
        </>
    )
}

export default Header