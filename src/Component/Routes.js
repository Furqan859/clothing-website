import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Header from "./Header";
import Main from "../Main";
import Footer from "./Footer";
import Carousels from "./Carousels";
const Routes = () => {
    return(<div>
        <Header/>
        <Carousels/>
        <BrowserRouter>
            <Route exact path="/" component={Main}/>
        </BrowserRouter>
        <Footer/>
    </div>)
}
export default Routes;