import {useEffect, useState} from "react";

function Tasks({text, checked, page}) {

    useEffect(() => {
        (async () => {
            if (page === "tasks") {
                showContent(
                    <>
                        <div className="task_container">
                            <input type="checkbox" disabled="disabled" checked={checked} className="checkbox"/>
                            <label className="task_text">{text}</label>
                        </div>
                    </>
                )
            } else if (page === "home") {
                showContent(
                    <>
                        <div className="widget_task_design">
                            <input type="checkbox" disabled="disabled" checked={checked} className="widget_task_checkbox"/>
                            <label className="widget_task_text">{text}</label>
                        </div>
                    </>
                )
            }
        })()
    }, [page, text, checked])

    const [content, showContent] = useState()

    return(
        <>
            {content}
        </>
    )
}

export default Tasks