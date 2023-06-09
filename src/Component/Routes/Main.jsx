import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navber/Nav";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;