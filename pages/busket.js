import React, {useState} from "react";
import Layout from "../components/Layout/Layout";
import {ResultBusket} from "../components/Busket/Busket";
import {OfferModal} from "../components/offerModal/OfferModal";
import data from "../sources/data/cart_arenda-plasm77.ru.json";
export  const getStaticProps = async () =>{
    return {
        props: {
            cards: data
        }
    };
}


const Busket = ( {cards }) => {
    const [offerModal,setOfferModal] = useState(false)
    return(
        <>
            <Layout>

                <ResultBusket  setOfferModal={setOfferModal} data={cards} />


            </Layout>
            <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
        </>
    )
}

export default Busket;