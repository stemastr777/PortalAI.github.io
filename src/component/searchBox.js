import { useState } from "react"


const SearchBox = ({ passing, sameType }) => {
    const [object, setObject] = useState("")
    const [check, setCheck] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        passing(object)
    }

    //Get every kind of object property values.
    let obj = []
    for (let i=0; i<sameType.length; i++) {
        if (obj.includes(sameType[i].object)) {
            continue
        }
        else {
            obj.push(sameType[i].object)
        }  
    }


    return (
        <form onSubmit={handleSubmit} className="position-relative d-flex flex-column rounded-3 w-75 bg-white" id="search-box">
            <div className=" row mb-4">
                {
                    obj.map(el => 
                        <label key={el} style={{ backgroundColor: (check === obj.indexOf(el)) ? "#84a7ff" : "#C2D3FF" }} className="text-center object-picker" onClick={() => setCheck(obj.indexOf(el))} htmlFor={el}>
                            <input className="position-absolute" type="radio" value={el} id={el} name="type" onChange={(e) => setObject(e.target.value)}></input>
                            {el}
                        </label>
                    )
                }
            </div>
            <button type="submit"  className="btn btn-primary" id="search-button-sb">Search</button>
        </form>
    )
}

export default SearchBox