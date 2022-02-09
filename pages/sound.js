
import Layout from "../components/Layout/Layout";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {Preferences} from "../components/Preferences/Preferences";
import {Cleaning} from "../components/Cleaning/Cleaning";
import {Shop} from "../components/Shop/Shop";
import React, {useState} from "react";
import {Preferences_768} from "../components/Preferences/Right/right";
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360";
import {useWindowSize} from "../Hooks/useWindowSize";
import {Modal} from "../components/Modal/Modal";
import FeedBack from "../components/FeedBack/FeedBack";
import data from "../sources/data/cart_arenda-plasm77.ru.json";
import {OfferModal} from "../components/offerModal/OfferModal";
import SitesModal from "../components/SitesModal/SitesModal";
import Head from 'next/head'
import ImgModal from "../components/Img_modal/ImgModal";
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
      <>
          <Layout >
              <Head>
                  <meta charSet="UTF-8"/>
                  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  <title itemProp="headline">
                      Звуковое и световое оборудование в аренду на мероприятие
                  </title>
                  <meta
                      property="og:title"
                      content="Звуковое и световое оборудование в аренду на мероприятие"
                  />
                  <meta
                      itemProp="description"
                      name="description"
                      content="Прокат звука и света для организации мероприятия по выгодной цене. Производим доставку и монтаж технического обеспечения на любое событие в Москве."
                  />
                  <meta
                      property="og:description"
                      content="Прокат звука и света для организации мероприятия по выгодной цене. Производим доставку и монтаж технического обеспечения на любое событие в Москве."
                  />
                  <meta property="og:type" content="website"/>

                  <meta property="og:image:type" content="image/jpeg"/>
                  <meta property="og:image" content="/assets/images/preview1080.jpg"/>
                  <meta property="og:image:width" content="1080"/>
                  <meta property="og:image:height" content="1080"/>
                  <meta property="og:image" content="/assets/images/preview565.jpg"/>
                  <meta property="og:image:width" content="1080"/>
                  <meta property="og:image:height" content="565"/>
                  <meta property="og:site_name" content="Аренда плазм"/>
                  <meta property="og:locale" content="ru_RU"/>
                  <meta
                      property="og:url"
                      content="https://arenda-plazm77/sound"
                  />


              </Head>
              <MediumHeaderComponent
                  button_text='Рассчитать стоимость'
                  title='Звук, свет и окружение'
                  mainImg="/Hero Blocks/newSound1920.jpg"
                  img_360="/Hero Blocks/newSound360.jpg"
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

      </>
    )
}



export default Sound;