const MessageBox = ( { sending } ) => {

    const handleSubmit = (e) => {
        let obj = document.getElementById("message-form")
        setTimeout(() => obj.reset(), 1000)
        e.preventDefault()
    }

    return (
        <>
            <div id="message-block">
                <div className="row row-cols-2 align-items-center">
                    <img id="message-web-icon"/>
                    <p className="d-inline-block h5">Anonymous</p>
                </div>
                <form onSubmit={handleSubmit} action="" id="message-form">
                    <textarea placeholder="Write what you want to say to us here..."></textarea>
                    <div style={{display: "flex", width: "100%", justifyContent: "flex-end"}}>
                        <button 
                            type="submit"
                            className="btn btn-primary text-center" 
                            style={{width: "120px"}}
                            onClick={() => window.confirm("Your message can't be updated once you send. Proceed?")? sending():null}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default MessageBox