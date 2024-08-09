import {Header} from "../components/header/Header.jsx";
import {Footer} from "../components/footer/Footer.jsx";

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}