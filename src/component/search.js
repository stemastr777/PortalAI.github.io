import { Outlet } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./footerBar.js";

const Search = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Search