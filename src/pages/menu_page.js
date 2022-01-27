import Header from "../components/header/header"
import DoubleBigButton from "../components/doubleBigButton/doubleBigButton"
import user from "../icons/user.png"
import file from "../icons/file.png"
import upload from "../icons/upload.png"
import calendar from "../icons/calendar.png"
import letter from "../icons/letter.png"
import contacts from "../icons/contacts.png"

function MenuPage() {
    return(
        <>
            <Header />
            <DoubleBigButton icon1={user} icon2={file} title1="Mitarbeiterprofil" title2="Aufgaben"></DoubleBigButton>
            <DoubleBigButton icon1={upload} icon2={calendar} title1="Dokumente" title2="Kalender"></DoubleBigButton>
            <DoubleBigButton icon1={letter} icon2={contacts} title1="Nachrichten" title2="Kontakte"></DoubleBigButton>
            <div className="greenLine"></div>
        </>
    )
}

export default MenuPage