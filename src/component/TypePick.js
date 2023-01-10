import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const pickBlock = {
    onHover: {
        y: -10,
        scale: 1.05,
        transition: {duration: 0.3, type: "tween"}
    }
}

const TypePick = () => {
    return (
        <>
        <motion.div 
            initial={{y: -30, opacity: 0}}
            animate={{ y:  0,  opacity: 1}}
            transition={{ type: "tween", duration: 0.3 }} 
            className="text-center text-primary" 
            id="home-block">
            <motion.label 
                htmlFor="input-job" 
                className="form-label fw-bold fs-1 mb-5"
            >
                What do you want to use?
            </motion.label>
            <div className="row row-cols-2 w-75 mx-auto justify-content-center">
                <motion.div
                    variants={pickBlock}
                    whileHover="onHover"
                    className="pick-generator"
                >
                    <Link to="/search/generator" >
                        <h2 className="fw-semibold text-black">Generator</h2>
                        <p className="w-75 mx-auto text-black">AI-driven website that auto-generates content based on your need </p>
                    </Link>
                </motion.div>
                <motion.div
                    variants={pickBlock}
                    whileHover="onHover"
                    className="pick-platform"
                >
                    <Link to="/search/platform">
                        <h2 className="fw-semibold text-black">Platform</h2>
                        <p className="w-75 mx-auto text-black">AI-driven website that helps you in making product using its workplace</p>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
        </>
    )
}

export default TypePick