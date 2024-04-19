import Header from "../Header/Header";
import {FC} from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
    return (
        <>
            <Header />
            <main className='main container'>
                <Outlet />
            </main>
        </>

    )
}
export default Layout;
