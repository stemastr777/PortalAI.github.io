import { useEffect } from 'react';
import { Tooltip } from 'bootstrap';

const Index = () => {

    const getTogglers = () => {
        const togglers = document.querySelectorAll('[data-bs-toggle = "tooltip"]')
        togglers.forEach(el => {new Tooltip(el)})
    }

    useEffect(() => {setTimeout(() => { getTogglers()}, 1000)}, [])

    return(
        <div id='a' className="d-flex align-items-center bg-primary w-100 h-100 text-white">
            <div className=" w-75 mx-auto text-center ">
                <h1 className="fw-bold">PortalAI</h1>
                <h3>Search website or app based AI <br/> depends on your task.</h3>
                <div className="row row-cols-1 mx-auto mt-5 justify-content-center">
                    <a href="/search/type-pick" className="col-lg-3 btn btn-primary-reversed my-4 fs-5">Start searching</a>
                    <div className="col"></div>
                    <div 
                        className="col-lg-3 text-white" 
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="Sign In is currently unavailable"
                    >
                        <a href="" style={{ pointerEvents: "none", color: "white" }}>
                            Sign in
                        </a>
                    </div> 
                    
                </div>
            </div>
        </div>
    )
}

export default Index;