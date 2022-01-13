import './App.css';
import Menu from "./menu/menu"
import TaskList from "./task_list/task_list";
import Tasks from "./task_list/tasks/tasks";
import Tabs from "./menu/tabs/tabs";
import user from "./icons/user_white.png"
import docs from "./icons/google-docs_white.png"
import calender from "./icons/calendar_white.png"
import message from "./icons/email_white.png"
import contacts from "./icons/notebook-of-contacts_white.png"
import impuls from "./images/impuls.png"
import logo from "./images/DHZB_Logo.png"
import login from "./login/login";

let task = [
            {
                "text": "Persönliche Informationen aktualisieren",
                "checked": true
            },
            {
                "text": "Vertrag/Erklärungen unterschreiben",
                "checked": true
            },
            {
                "text": "Ablauf erste Tage betrachten",
                "checked": false
            },
            {
                "text": "Erhaltene Nachrichten lesen",
                "checked": false
            },
            {
                "text": "Kontakte betrachten",
                "checked": true
            },
            {
                "text": "Notfallkontakt hinterlegen",
                "checked": false
            }
        ]

let menu = [user,
            docs,
            calender,
            message,
            contacts]

function App() {
    return (
        <div className="main">
            <div className="header">
                <img src={impuls} alt="Impuls"/>
                <label for="languages"></label>
                <select name="language" id="languages" className="language-container">
                    <option value="german">german</option>
                    <option value="english">english</option>
                    <option value="russian">russian</option>
                    <option value="arabic">arabic</option>
                    <option value="turkey">turkey</option>
                </select>
                <img src={logo} alt="Logo"/>
            </div>
            <login></login>
        </div>
    )
}

export default App;
