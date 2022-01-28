
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FeedBack from "../FeedBack/FeedBack";
import React,{FunctionComponent} from "react";




const Layout:FunctionComponent = ({children }) =>{
    return(
   <>
       <Header />
       {children}


       <Footer />
   </>
    )
}

export default Layout;