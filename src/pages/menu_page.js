import Header from "../components/header/header"
import DoubleBigButton from "../components/doubleBigButton/doubleBigButton"
import user from "../icons/user.png"
import file from "../icons/file.png"
import upload from "../icons/upload.png"
import calendar from "../icons/calendar.png"
import letter from "../icons/letter.png"
import contacts from "../icons/contacts.png"
import {useLocation} from "react-router-dom";
import WidgetContainer from "../components/widget_container/widget_container";

// function MenuPage() {
//     const {state} = useLocation();
//     const {username} = state
//     return(
//         <>
//             <Header username={username} topic="Willkommen" klasse="header"/>
//             <DoubleBigButton icon1={user} icon2={file} title1="Mitarbeiterprofil" title2="Aufgaben" url1="profil" url2="tasks" />
//             <DoubleBigButton icon1={upload} icon2={calendar} title1="Dokumente" title2="Kalender"  url1="documents" url2="calendar" />
//             <DoubleBigButton icon1={letter} icon2={contacts} title1="Nachrichten" title2="Kontakte" url1="messages" url2="contacts" />
//             <div className="greenLine" />
//         </>
//     )
// }

function MenuPage() {
    const {state} = useLocation();
    const {username} = state
    return(
        <>
            <Header username={username} topic="Willkommen" klasse="menu_header" />
            <img src={user} alt="User-Icon" />
            <WidgetContainer />
            <WidgetContainer />
            <WidgetContainer />
            <div className="greenLine" />
        </>
    )
}

export default MenuPage