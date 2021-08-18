import {Navbar} from "./Navbar";
import {Footer} from "./Footer";

export const GlobalLayout = ({children}) => {
    return(
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>

    )
}