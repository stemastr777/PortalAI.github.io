import Header from "./Header.js";
import Footer from "./footerBar.js";
import MessageBox from "./MessageBox.js";
import { useState } from "react";
import SuccessNotif from "./SuccessNotif.js";

const Message = () => {
    const [send, setSend] = useState(false)
    

    const sendMessage = () => {
        setSend(true)
        setTimeout(() => { setSend(false) }, 6000)
    }

    return (
        <>
            <div>
                <Header />
                {(send) ? <SuccessNotif remove={() => {setSend(false)}} /> : null}
            </div>
            <MessageBox sending={sendMessage}  />
            <Footer />
        </>
    )
}

export default Message