import Header from "../components/header/header"
import WidgetContainer from "../components/widget_container/widget_container";
import Menu from "../components/menu/menu";
import icon from "../user_related_data/users/lehmann_kevin/images/officer.png"
import {useEffect, useState} from "react";

function MenuPage() {

    let username = localStorage.getItem('name')

    useEffect(() => {
        (async () => {
            await fetch('http://localhost:3001/home', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: localStorage.getItem('token')
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    getTasks(data.task)
                    getSchedule(data.schedule)
                    getMessage(data.messages)
                })
        })()
    }, [])

    const [tasks, getTasks] = useState([])
    const [schedules, getSchedule] = useState([])
    const [messages, getMessage] = useState([])

    return (
        <>
            <Header klasse="menu_header" />
            <User username={username} />
            <WidgetContainer topic="Aufgaben" elements={tasks} page="/tasks" />
            <WidgetContainer topic="Termine" elements={schedules} page="/schedules" />
            <WidgetContainer topic="Nachrichten" elements={messages} page="/messages" />
            <Menu active="home"/>
        </>
    )
}

function User ({username}) {
    return (
        <table className="user-table">
            <tbody>
                <tr>
                    <td>
                        <img src={icon} alt="User-Icon" className="user_icon"/>
                    </td>
                    <td  className="spacer_w3"/>
                    <td>
                        <div className="user-name">Willkommen</div>
                        <div className="user-name"><b>{username}</b></div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default MenuPage