const DropSearch = ({onClick, text}) => {
    return(
            <button 
                type="button"
                id="search-button"
                className="btn btn-primary-reversed w-75 mx-auto d-block my-3 position-relative"
                onClick={onClick}
            >
                {text === ""? "Pick one based on your need": `${text}`}
            </button>   
    )
}

export default DropSearch