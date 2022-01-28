import React from "react";
import Layout from "../components/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "../redux";
import {ResultBusket} from "../components/Busket/Busket";


const Busket = ( { }) => {
    return(
        <Provider store={store} >
            <Layout>

                <ResultBusket  />


            </Layout>
        </Provider>
    )
}

export default Busket;