import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import GridLoader from "react-spinners/GridLoader";
import Card from "./Card";
import websites from "../websites.json"

const containerVariant = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5, 
            duration: 0.1 
        }
    }
}

const CardGrid = ({ sameType, object }) => {
    const [loading, setLoading] = useState(false);
    const [more, setMore] = useState(false);

    useEffect(
        () => {
            setLoading(true)     
            setTimeout(() => setLoading(false), 1000)
        },[]
    )
    
    //Take only website that suitable with the type

    let eligible = sameType.map(el => (el.object === object) ? el : null).filter(el => { return(el !== null) })

    if (loading) {
        return(
            <motion.div 
                id="load-icon"
                variants={containerVariant} 
                initial="hidden"
                animate="visible"
            >
                <GridLoader
                    color="#cbbeff"
                    loading={loading}
                    size={10}
                    aria-label="Loading Spinner"
                    objectdata-testid="loader"
                />
            </motion.div>
        )
    }
    else {
        return(
            <>
                <motion.div 
                    id="load-box"
                    variants={containerVariant}
                    initial="hidden"
                    animate="visible"
                    className="row row-cols-lg-3 w-75 mx-auto mt-5"
                >
                    {   
                        (eligible.length == 0) ? 
                            //Display top 3 random websites
                            websites.slice(0,3).map(el => <Card key={el.name} name={el.name} link={el.url} desc={el.desc} icon={el.icon}></Card>)
                            :
                            eligible.slice(0,3).map(el => <Card key={el.name} name={el.name} link={el.url} desc={el.desc} icon={el.icon}></Card>)
                    }
                    { (!more) ? null : 
                        <>
                            {eligible.slice(3).map(el => <Card key={el.name} name={el.name} link={el.url} desc={el.desc} icon={el.icon}></Card>)}
                        </>
                    }
                    { (eligible.length > 3) ?
                        <button
                            type="button"
                            className="btn btn-primary-reversed ms-auto text-end"
                            id="show-more"
                            onClick={() => { setMore(!more) }}
                        >
                            <u>{more ? "Show less" : "Show more"}</u>
                        </button>
                        :
                        null
                    }
                </motion.div>
            </>
        )
    }
}

export default CardGrid