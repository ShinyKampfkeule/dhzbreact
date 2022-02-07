import icon from "../../icons/user.png"
import file from "../../icons/file.png"
import calendar from "../../icons/calendar.png"
import letter from "../../icons/letter.png"
import contacts from "../../icons/contacts.png"
import {useEffect, useState} from "react";

function Menu({active}) {

    useEffect(() => {
        (async () => {
            if (active === "profil") {
                newMenu(
                    <>
                        <div className="menu">
                            <div className="activeTab tabIcon rightLine">
                                <img src={icon} alt="" />
                            </div>
                            <div className="tabFile rightLine">
                                <img src={file} alt="" />
                            </div>
                            <div className="tabCalendar rightLine">
                                <img src={calendar} alt="" />
                            </div>
                            <div className="tabLetter rightLine">
                                <img src={letter} alt="" />
                            </div>
                            <div className="tabContacts">
                                <img src={contacts} alt="" />
                            </div>
                        </div>
                    </>
                )
            } else if (active === "tasks") {
                newMenu(
                    <>
                        <div className="menu">
                            <div className="tabIcon rightLine">
                                <img src={icon} alt="" />
                            </div>
                            <div className="activeTab tabFile rightLine">
                                <img src={file} alt="" />
                            </div>
                            <div className="tabCalendar rightLine">
                                <img src={calendar} alt="" />
                            </div>
                            <div className="tabLetter rightLine">
                                <img src={letter} alt="" />
                            </div>
                            <div className="tabContacts">
                                <img src={contacts} alt="" />
                            </div>
                        </div>
                    </>
                )
            } else {
                newMenu(
                    <>
                        <div className="menu">
                            <div className="tabIcon rightLine">
                                <img src={icon} alt="" />
                            </div>
                            <div className="tabFile rightLine">
                                <img src={file} alt="" />
                            </div>
                            <div className="tabCalendar rightLine">
                                <img src={calendar} alt="" />
                            </div>
                            <div className="tabLetter rightLine">
                                <img src={letter} alt="" />
                            </div>
                            <div className="tabContacts">
                                <img src={contacts} alt="" />
                            </div>
                        </div>
                    </>
                )
            }
        })()
    }, [active])

    const [element, newMenu] = useState()

    return(
        <>
            {element}
        </>
    )
}

export default Menu