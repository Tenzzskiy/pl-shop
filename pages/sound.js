
import Layout from "../components/Layout/Layout";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {Preferences} from "../components/Preferences/Preferences";
import {Cleaning} from "../components/Cleaning/Cleaning";
import {SoundSale} from "../components/SoundSale/SoundSale";
import {Shop} from "../components/Shop/Shop";
import React, {useState} from "react";
import {Preferences_768} from "../components/Preferences/Right/right";
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360";
import {useWindowSize} from "../Hooks/useWindowSize";
import {Provider} from "react-redux";
import {store} from "../redux";
import {Modal} from "../components/Modal/Modal";
import FeedBack from "../components/FeedBack/FeedBack";
import data from "../components/Shop/cart_arenda-plasm77.ru.json";
import {OfferModal} from "../components/offerModal/OfferModal";
import SitesModal from "../components/SitesModal/SitesModal";
export  const getStaticProps = async () =>{
    return {
        props: {
            cards: data
        }
    };
}
const Sound = ({ cards }) => {
    const size = useWindowSize();
    const [modalActive,setModalActive] = useState(false)
    const [offerModal,setOfferModal] = useState(false)
    const [sites,setSites] = useState(false);
    return (
      <Provider store={store}>
          <Layout >
              <MediumHeaderComponent
                  button_text='Рассчитать стоимость'
                  title='Звук, свет и окружение'
                  mainImg="/assets/images/tv_8.jpg"
                  img_360='/assets/images/tv360_8.jpg'
                  setSites={setSites}
                  setOfferModal={setOfferModal}
              />


              {size.width > 1200 ?
                  <Preferences
                      count={6}
                      rightTitle='Предусмотреть все нюансы'
                      rightText='Мы приложим все наши усилия и богатый
             опыт для того, чтобы всё прошло зрелищно и гладко.
             Для этого у нас в ассортименте есть всё необходимое!'
                      rightImg='/assets/images/advantages_8.jpg'
                      title='Что нужно для идеального мероприятия'
                  /> : null

              }
              {size.width < 1200 && size.width > 720 ?
                  <Preferences_768
                      count={6}
                      rightTitle='Предусмотреть все нюансы'
                      rightText='Мы приложим все наши усилия и богатый
             опыт для того, чтобы всё прошло зрелищно и гладко.
             Для этого у нас в ассортименте есть всё необходимое!'
                      rightImg='/assets/images/advantages_8.jpg'
                      title='Что нужно для идеального мероприятия'
                  /> : null
              }
              {
                  size.width <720 ?
                      <Preferences_360
                          count={6}
                          rightTitle='Предусмотреть все нюансы'
                          rightText='Мы приложим все наши усилия и богатый
             опыт для того, чтобы всё прошло зрелищно и гладко.
             Для этого у нас в ассортименте есть всё необходимое!'
                          rightImg='/assets/images/advantages_8.jpg'
                          mainTitle='Что нужно для идеального мероприятия'
                      /> : null
              }
              {/*<SoundSale />*/}
              <Shop page={8} active={modalActive} setActive={setModalActive} data={cards}/>
              <Cleaning />
              <FeedBack setOfferModal={setOfferModal} />
          </Layout>
          <SitesModal sites={sites} setSites= {setSites} setOfferModal={setOfferModal} title='Получить расчет'/>
          <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
          <Modal active={modalActive} setActive={setModalActive} />
      </Provider>
    )
}



export default Sound;