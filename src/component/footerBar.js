const Footer = () => {
    return(
        <footer id={window.location.href.includes("search") ? "search-footer" : "message-footer"}></footer>
    )
}

export default Footer