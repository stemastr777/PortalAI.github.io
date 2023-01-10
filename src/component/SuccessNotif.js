import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";

const SuccessNotif = ({remove}) => {
    const [loading, setLoading] = useState(true);
    const [time, setTime] = useState(6)

    const override = {
        display: "block",
        margin: "1.25rem auto"
    };

    useEffect(() => { 
        setTimeout(() => { 
            setLoading(false); 
            setTime(time-1) 
        }, 1000)
    }, [time])

    return(
        (loading)?
        <ClipLoader
            color={"#3B1CB8"}
            loading={loading}
            cssOverride={override}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        :
        <motion.div
            className="text-bg-success d-flex top-50 w-100 p-2 px-3 position-relative align-items-center"
        >
            <span>
                Your message was succesfully uploaded. Thank you! 
                <span style={{fontSize: "12px"}}>(auto close in {time})</span>
            </span>
            <button className="btn btn-success ms-auto" onClick={remove}>
                x
            </button>
        </motion.div>
    )
}

export default SuccessNotif