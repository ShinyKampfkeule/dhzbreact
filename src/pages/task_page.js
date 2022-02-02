import Tasks from "../components/task_list/tasks/tasks";
import Menu from "../components/menu/menu";
import {useEffect, useState} from "react";
import Header from "../components/header/header";

function TaskPage() {

    useEffect(() => {
        (async () => {
            let res = await fetch('http://localhost:3001/task', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: localStorage.getItem('token')
                }),
            })

            if (res.status === 200) {
                const json = await res.json();
                setTasks(json.tasks)
            }
        })()
    },[])

    const [tasks, setTasks] = useState([])

    return (
        <>
            <Header topic="Aufgaben" />
            {tasks.length > 0
                ? tasks.map(e => {return <Tasks text={e.title} checked={e.status} key={e.title}/>})
            :null}
            <Menu active="tasks" />
        </>
    )
}

export default TaskPage