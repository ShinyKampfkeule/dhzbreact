import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import icon from "../../icons/Icon awesome-exclamation-circle.png"

function Tasks({text, checked, page, rePage}) {
    
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            if (checked === false){
                if (page === "tasks") {
                    showContent(
                        <>
                            <div className="task_container" onClick={e => navigate(`${rePage}`)}>
                                <img src={icon} alt="" className="task_image" />
                                <label className="task_text">{text}</label>
                            </div>
                        </>
                    )
                } else if (page === "home") {
                    showContent(
                        <>
                            <div className="widget_task_design">
                                <img src={icon} alt="" className="task_image_home" />
                                <label className="widget_task_text">{text}</label>
                            </div>
                        </>
                    )
                }
            } else {
                if (page === "tasks") {
                    showContent(
                        <>
                            <div className="task_container_checked" onClick={e => navigate(`${rePage}`)}>
                                <label className="task_text_checked">{text}</label>
                            </div>
                        </>
                    )
                }
            }

        })()
    }, [page, text, checked, rePage, navigate])

    const [content, showContent] = useState()

    return(
        <>
            {content}
        </>
    )
}

export default Tasks