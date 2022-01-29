import icon from "../../icons/user.png"
import file from "../../icons/file.png"
import calendar from "../../icons/calendar.png"
import letter from "../../icons/letter.png"
import contacts from "../../icons/contacts.png"

function Menu() {
    return(
        <div className="menu">
            <div className="tabIcon rightLine">
                <img src={icon} alt="" />
            </div>
            <div className="tabIcon rightLine">
                <img src={file} alt="" />
            </div>
            <div className="tabIcon rightLine">
                <img src={calendar} alt="" />
            </div>
            <div className="tabIcon rightLine">
                <img src={letter} alt="" />
            </div>
            <div className="tabIcon">
                <img src={contacts} alt="" />
            </div>
        </div>
    )
}

export default Menu