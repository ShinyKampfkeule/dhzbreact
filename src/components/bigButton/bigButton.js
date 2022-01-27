function BigButton({icon, title}) {
    return(
        <>
            <button className="bigBlueButton">
                <img src={icon} className="icon"/>
                <span className="btnText">{title}</span>
            </button>
        </>
    )
}

export default BigButton