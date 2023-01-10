import { motion } from "framer-motion"
import { useState } from "react"

const Card = (props) => {
    const [hover, setHover] = useState(0)

    return(
            <motion.div 
                className="card mb-4 border-0" 
                style={{height: "230px", zIndex: hover}}
                whileHover={{scale: 1.03, y:-20, duration: 0.3, boxShadow: "0 5px 5px grey"}}
                onHoverStart={() => setHover(1)}
                onHoverEnd={() => setHover(0)}
            >
                <div className="row row-cols-2 align-items-center">
                    <img src={props.icon} className=" web-icon" />
                    <p className="d-inline-block h5">{props.name}</p>  
                </div>
                <div className="web-necklace"></div>
                <p>{props.desc}</p>
                <a href={props.link} target="_blank" className="btn-portal">Go to official website</a>
            </motion.div>
    )
}

export default Card