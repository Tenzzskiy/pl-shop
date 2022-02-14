
import Layout from "../components/Layout/Layout";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import React, {useState} from "react";
import {Preferences} from "../components/Preferences/Preferences";
import {Conditions} from "../components/Conditions/Conditions";
import {Cleaning} from "../components/Cleaning/Cleaning";
import Sale from "../components/Sale/Sale";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import {Shop} from "../components/Shop/Shop";
import {Preferences_768} from "../components/Preferences/Right/right";
import {useWindowSize} from "../Hooks/useWindowSize";
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360";
import {Offer} from "../components/Offer/Offer";
import {Releases_768} from "../components/Relises/Releases_768/Releases_768";
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
const TouchPanel = ({ cards}) => {
    const [id,setId] = useState(0);
    const [imgModal,setImgModal] = useState(false)
    const [sites,setSites] = useState(false);
    const size =useWindowSize();
    const [modalActive,setModalActive] = useState(false)
    const [offerModal,setOfferModal] = useState(false)
    const [touchPanel,setTouchPanel] = useState(false);
    return (
      <>
          <Layout >
              <Head>
                  <meta charSet="UTF-8"/>
                  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  <title itemProp="headline">
                      Аренда сенсорных панелей | Интерактивные мультитач экраны на мероприятие
                  </title>
                  <meta
                      property="og:title"
                      content="Аренда сенсорных панелей | Интерактивные мультитач экраны на мероприятие"
                  />
                  <meta
                      itemProp="description"
                      name="description"
                      content="Интерактивное оборудование с сенсорными экранами для организации презентации, выставки или рекламной кампании. Тачскрины различных размеров по выгодной цене с доставкой в Москве."
                  />
                  <meta
                      property="og:description"
                      content="Интерактивное оборудование с сенсорными экранами для организации презентации, выставки или рекламной кампании. Тачскрины различных размеров по выгодной цене с доставкой в Москве."
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
                  <meta property="og:url" content="https://arenda-plazm77/touchPanel"/>

              </Head>
              <HeaderComponent
                  button_text='Рассчитать стоимость'
                  title='Аренда сенсорных тач -панелей'
                  mainImg="/assets/images/tv_4.jpg"
                  setSites={setSites}
                  setOfferModal={setOfferModal}
                  touchpanel={1}
                  setTouchPanel={setTouchPanel}
              />

              {size.width > 1200 ?
                  <Preferences
                      count={2}
                      title='Ваши выгоды с PLAZMA77'
                      leftImg='/assets/images/advantages_4-1.jpg'
                      rightImg='/assets/images/advantages_4-2.jpg'
                      leftText='Позволяют презентовать информацию с возможностью
                многопользовательтского взаимодействия без дополнительных устройств! '
                      rightText=' Наша IT команда
                 разработает интерфейс любой сложности по
                 вашему тех.заданию: от брендированного каталога
                  до сложной интерактивной игры!'
                      leftTitle=' Встроенный процессор и ОС'
                      rightTitle='Любой контент! '
                      button={true}
                      setSites={setSites}
                  /> : null

              }
              {size.width < 1200 && size.width > 720 ?
                  <Preferences_768
                      setSites={setSites}
                      count={2}
                      title='Ваши выгоды с PLAZMA77'
                      leftImg='/assets/images/advantages_4-1.jpg'
                      rightImg='/assets/images/advantages_4-2.jpg'
                      leftText='Позволяют презентовать информацию с возможностью
                многопользовательтского взаимодействия без дополнительных устройств! '
                      rightText=' Наша IT команда
                 разработает интерфейс любой сложности по
                 вашему тех.заданию: от брендированного каталога
                  до сложной интерактивной игры!'
                      leftTitle=' Встроенный процессор и ОС'
                      rightTitle='Любой контент! '
                      button={true}
                  /> : null
              }
              {
                  size.width <720 ?
                      <Preferences_360
                          setSites={setSites}
                          count={2}
                          mainTitle='Преимущества сенсорных панелей'
                          leftImg='/assets/images/advantages_4-1.jpg'
                          rightImg='/assets/images/advantages_4-2.jpg'
                          leftText='Позволяют презентовать информацию с возможностью
                многопользовательтского взаимодействия без дополнительных устройств! '
                          rightText=' Наша IT команда
                 разработает интерфейс любой сложности по
                 вашему тех.заданию: от брендированного каталога
                  до сложной интерактивной игры!'
                          leftTitle=' Встроенный процессор и ОС'
                          rightTitle='Любой контент! '
                          button={true}
                      /> : null
              }
              <Conditions />
              <Shop page={5} active={modalActive} setActive={setModalActive} data={cards.touchScreenCatalogue}/>
          <Offer data={cards.touchAdditionals} active={modalActive} setActive={setModalActive} count={2}/>

              <Cleaning />
              <Sale />

              {size.width > 1200 ?
                  <Releases
                      setImgModal={setImgModal}
                      imgModal={imgModal}
                      id={id}
                      setId={setId}
                      img1='/releases/TouchPanel/1.png'
                      img2='/releases/TouchPanel/2.png'
                      img3='/releases/TouchPanel/3.jpg'
                      img4='/releases/TouchPanel/4.png'
                      img5='/releases/TouchPanel/5.png'


                      text1='Интерактивные панели для ознакомления с шоу-программой'
                      text2='Тач-панель при фотозоне для отбора готовых фото'
                      text3='Брендированный стенд с интерактивными панелями на презентации нового продукта'
                      text4='Интерактичный стол с занимательной игрой для гостей'
                      text5='Сенсорная панель'
                  /> : null
              }
              { size.width < 1200  ?
                  <Releases_768
                      img1='/releases/TouchPanel/1.png'
                      img2='/releases/TouchPanel/2.png'
                      img3='/releases/TouchPanel/3.jpg'
                      img4='/releases/TouchPanel/4.png'
                      img5='/releases/TouchPanel/5.png'


                      text1='Интерактивные панели для ознакомления с шоу-программой'
                      text2='Тач-панель при фотозоне для отбора готовых фото'
                      text3='Брендированный стенд с интерактивными панелями на презентации нового продукта'
                      text4='Интерактичный стол с занимательной игрой для гостей'
                      text5='Сенсорная панель'
                  /> : null
              }
              <Seo
                  title='Сенсорные столы и киоски в аренду'
              image1='/assets/images/info_4-1.jpg'
              image2='/assets/images/info_4-2.jpg'
              text1='Банальные, но неопровержимые выводы,
              а также акционеры крупнейших компаний, которые
              представляют собой яркий пример континентально-европейского
               типа политической культуры, будут превращены в посмешище, хотя
                само их существование приносит несомненную пользу обществу.
                 Высокий уровень вовлечения представителей целевой аудитории
                  является четким доказательством простого факта: экономическая
                   повестка сегодняшнего дня требует от нас анализа системы обучения
                   кадров, соответствующей насущным потребностям.  экономическая повестка
                    сегодняшнего дня требует от нас анализа системы
              обучения кадров, соответствующей насущным потребностям. '
              text2=' Банальные, но неопровержимые выводы,
              а также акционеры крупнейших компаний, которые представляют собой яркий
              пример континентально-европейского типа политической культуры, будут
               превращены в посмешище, хотя само их существование приносит несомненную
               пользу обществу. Высокий уровень вовлечения представителей целевой
               аудитории является четким доказательством простого факта: экономическая
                повестка сегодняшнего дня требует от нас анализа системы обучения кадров,
              соответствующей насущным потребностям.'
              text3=' Банальные, но неопровержимые выводы, а также акционеры
              крупнейших компаний, которые представляют собой яркий пример
              континентально-европейского типа политической культуры, будут
              превращены в посмешище, хотя само их существование приносит
              несомненную пользу обществу. Высокий уровень вовлечения
              представителей целевой аудитории является четким доказательством
              простого факта: экономическая повестка сегодняшнего дня требует от
              нас анализа системы обучения кадров, соответствующей насущным
              потребностям.  экономическая повестка сегодняшнего дня требует от
              нас анализа системы обучения кадров,
               соответствующей насущным потребностям.'
              text4=' Банальные, но неопровержимые выводы,
              а также акционеры крупнейших компаний, которые
              представляют собой яркий пример континентально-европейского
               типа политической культуры, будут превращены в посмешище,
                хотя само их существование приносит несомненную пользу обществу.
                Высокий уровень вовлечения представителей целевой аудитории является
                четким доказательством простого факта: экономическая повестка сегодняшнего
                 дня требует от нас анализа системы обучения
               кадров, соответствующей насущным потребностям.'
              />
              <FeedBack setOfferModal={setOfferModal} />
          </Layout>
          <SitesModal sites={sites} setSites= {setSites} setOfferModal={setOfferModal}  />
          <SitesModal TouchPanel={touchPanel} setTouchPanel= {setTouchPanel} setOfferModal={setOfferModal} touchpanel={1} title='Получить расчет'/>
          <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
          <Modal active={modalActive} setActive={setModalActive}  />
          {size.width > 1200 ? <ImgModal active={imgModal} setActive={setImgModal}
                                         id={id}
                                         img1='/Gallery/TouchScreenPage/804x603@ts5.jpg'
                                         img2='/Gallery/TouchScreenPage/804x603@ts3.jpg'
                                         img3='/Gallery/TouchScreenPage/804x603@ts1.jpg'
                                         img4='/Gallery/TouchScreenPage/804x603@ts4.jpg'
                                         img5='/Gallery/TouchScreenPage/804x603@ts2.jpg'


                                         text1='Интерактивные панели для ознакомления с шоу-программой'
                                         text2='Тач-панель при фотозоне для отбора готовых фото'
                                         text3='Брендированный стенд с интерактивными панелями на презентации нового продукта'
                                         text4='Интерактичный стол с занимательной игрой для гостей'
                                         text5='Сенсорная панель'
          /> : null}
      </>
    )
}

export default TouchPanel;