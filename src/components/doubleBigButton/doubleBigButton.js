import BigButton from "../bigButton/bigButton"

function DoubleBigButton({icon1, icon2, title1, title2, url1, url2}) {
    return(
        <>
            <div className="flex">
                <BigButton icon={icon1} title={title1} url={url1}></BigButton>
                <BigButton icon={icon2} title={title2} url={url2}></BigButton>
            </div>
        </>
    )
}

export default DoubleBigButton