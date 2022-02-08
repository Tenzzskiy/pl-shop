import React, {useState} from "react";
import Layout from "../components/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "../redux";
import {ResultBusket} from "../components/Busket/Busket";
import {OfferModal} from "../components/offerModal/OfferModal";


const Busket = ( { }) => {
    const [offerModal,setOfferModal] = useState(false)
    return(
        <>
            <Layout>

                <ResultBusket setOfferModal={setOfferModal} />


            </Layout>
            <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
        </>
    )
}

export default Busket;