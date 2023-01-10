import CardGrid from "./CardGrid"
import DropSearch from "./DropSearch"
import SearchBox from "./searchBox"
import { useState } from "react"
import websites from "../websites.json"

const WebSearch = ( { type } ) => {
    const [pop, setPop] = useState(false);
    const [object, setObject] = useState(""); 

    const getObject = (new_object) => {
        setObject(new_object)
        setPop(false)
    }

    const showPop = () => {
        setPop(!pop)
    }

    const isType = (el) => {
        return ((el.type == type) ? el : null)
    }

    let sameType = websites.map(el => isType(el)).filter(el => { return (el !== null) })    

    return(
        <>  
            <div id={`top-bar-${type}`}></div>
            <DropSearch onClick={showPop} text={object}/>
            {pop ? <SearchBox passing={getObject} sameType={sameType} /> : null}
            <CardGrid object={object} sameType={sameType} />
        </>
    )
}

export default WebSearch