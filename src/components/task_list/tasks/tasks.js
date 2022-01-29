function Tasks({text, checked}) {

    return(
        <div className="task_container">
            <input type="checkbox" disabled="disabled" checked={checked} className="checkbox"/>
            <label className="task_text">{text}</label>
        </div>
    )
}

export default Tasks