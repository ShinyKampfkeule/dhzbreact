import icon from "../../icons/Icon awesome-user-alt.png"
import file from "../../icons/file2.png"
import calendar from "../../icons/calendar.png"
import letter from "../../icons/letter.png"
import contacts from "../../icons/contacts.png"
import home from "../../icons/Icon awesome-home.png"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Menu({active}) {

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            if (active === "profil") {
                newMenu(
                    <>
                        <div className="menu">
                            <div className="tabHome rightLine" onClick={e => navigate("/home")}>
                                <img src={home} alt="" />
                            </div>
                            <div className="activeTab tabIcon rightLine">
                                <img src={icon} alt="" />
                            </div>
                            <div className="tabFile rightLine" onClick={e => navigate("/documents")}>
                                <img src={file} alt="" />
                            </div>
                            <div className="tabCalendar rightLine" onClick={e => navigate("/schedules")}>
                                <img src={calendar} alt="" />
                            </div>
                            <div className="tabLetter rightLine" onClick={e => navigate("/messages")}>
                                <img src={letter} alt="" />
                            </div>
                            <div className="tabContacts" onClick={e => navigate("/contacts")}>
                                <img src={contacts} alt="" />
                            </div>
                        </div>
                    </>
                )
            } else if (active === "documents") {
                newMenu(
                    <>
                        <div className="menu">
                            <div className="tabHome rightLine" onClick={e => navigate("/home")}>
                                <img src={home} alt="" />
                            </div>
                            <div className="tabIcon rightLine" onClick={e => navigate("/profil")}>
                                <img src={icon} alt="" />
                            </div>
                            <div className="activeTab tabFile rightLine">
                                <img src={file} alt="" />
                            </div>
                            <div className="tabCalendar rightLine" onClick={e => navigate("/schedules")}>
                                <img src={calendar} alt="" />
                            </div>
                            <div className="tabLetter rightLine" onClick={e => navigate("/messages")}>
                                <img src={letter} alt="" />
                            </div>
                            <div className="tabContacts" onClick={e => navigate("/contacts")}>
                                <img src={contacts} alt="" />
                            </div>
                        </div>
                    </>
                )
            } else if (active === "home") {
                newMenu(
                    <>
                        <div className="menu">
                            <div className="activeTab tabHome rightLine">
                                <img src={home} alt="" />
                            </div>
                            <div className="tabIcon rightLine" onClick={e => navigate("/profil")}>
                                <img src={icon} alt="" />
                            </div>
                            <div className="tabFile rightLine" onClick={e => navigate("/documents")}>
                                <img src={file} alt="" />
                            </div>
                            <div className="tabCalendar rightLine" onClick={e => navigate("/schedules")}>
                                <img src={calendar} alt="" />
                            </div>
                            <div className="tabLetter rightLine" onClick={e => navigate("/messages")}>
                                <img src={letter} alt="" />
                            </div>
                            <div className="tabContacts" onClick={e => navigate("/contacts")}>
                                <img src={contacts} alt="" />
                            </div>
                        </div>
                    </>
                )
            } else {
                newMenu(
                    <>
                        <div className="menu">
                            <div className="tabHome rightLine" onClick={e => navigate("/home")}>
                                <img src={home} alt="" />
                            </div>
                            <div className="tabIcon rightLine" onClick={e => navigate("/profil")}>
                                <img src={icon} alt="" />
                            </div>
                            <div className="tabFile rightLine" onClick={e => navigate("/documents")}>
                                <img src={file} alt="" />
                            </div>
                            <div className="tabCalendar rightLine" onClick={e => navigate("/schedules")}>
                                <img src={calendar} alt="" />
                            </div>
                            <div className="tabLetter rightLine" onClick={e => navigate("/messages")}>
                                <img src={letter} alt="" />
                            </div>
                            <div className="tabContacts" onClick={e => navigate("/contacts")}>
                                <img src={contacts} alt="" />
                            </div>
                        </div>
                    </>
                )
            }
        })()
    }, [active, navigate])

    const [element, newMenu] = useState()

    return(
        <>
            {element}
        </>
    )
}

export default Menu