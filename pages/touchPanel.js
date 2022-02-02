
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
import {Offer_768} from "../components/Offer/OfferCard/Offer_768";
import {Offer_360} from "../components/Offer/OfferCard/Offer_360";
import {Releases_768} from "../components/Relises/Releases_768/Releases_768";
import {Provider} from "react-redux";
import {store} from "../redux";
import {Modal} from "../components/Modal/Modal";
import FeedBack from "../components/FeedBack/FeedBack";
import data from "../components/Shop/cart_arenda-plasm77.ru.json";
import {OfferModal} from "../components/offerModal/OfferModal";

export  const getStaticProps = async () =>{
    return {
        props: {
            cards: data
        }
    };
}
const TouchPanel = ({ cards}) => {
    const size =useWindowSize();
    const [modalActive,setModalActive] = useState(false)
    const [offerModal,setOfferModal] = useState(false)
    return (
      <Provider store={store}>
          <Layout >
              <HeaderComponent
                  button_text='Рассчитать стоимость'
                  title='Аренда сенсорных тач -панелей'
                  mainImg="/header/TouchPanel/main.jpg"
              />

              {size.width > 1200 ?
                  <Preferences
                      count={2}
                      title='Ваши выгоды с PLAZMA77'
                      leftImg="/Preferences/TouchPanel/1.png"
                      rightImg="/Preferences/TouchPanel/2.png"
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
              {size.width < 1200 && size.width > 720 ?
                  <Preferences_768
                      count={2}
                      title='Ваши выгоды с PLAZMA77'
                      leftImg="/Preferences/TouchPanel/1.png"
                      rightImg="/Preferences/TouchPanel/2.png"
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
                          count={2}
                          mainTitle='Преимущества сенсорных панелей'
                          leftImg="/Preferences/TouchPanel/1.png"
                          rightImg="/Preferences/TouchPanel/2.png"
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
              <Shop page={5} active={modalActive} setActive={setModalActive} data={cards}/>
              {size.width > 1200 ? <Offer active={modalActive} setActive={setModalActive} /> : null }
              {size.width > 720 && size.width<1200 ? <Offer_768 active={modalActive} setActive={setModalActive}  /> : null }
              {size.width < 720  ? <Offer_360 active={modalActive} setActive={setModalActive}
              /> : null }
              <Cleaning />
              <Sale />

              {size.width > 1200 ?
                  <Releases
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
              {/*<Seo*/}
              {/*image1='/Seo/TouchPanel/1.png'*/}
              {/*image2='/Seo/TouchPanel/2.svg'*/}
              {/*text1='Банальные, но неопровержимые выводы,*/}
              {/*а также акционеры крупнейших компаний, которые*/}
              {/*представляют собой яркий пример континентально-европейского*/}
              {/* типа политической культуры, будут превращены в посмешище, хотя*/}
              {/*  само их существование приносит несомненную пользу обществу.*/}
              {/*   Высокий уровень вовлечения представителей целевой аудитории*/}
              {/*    является четким доказательством простого факта: экономическая*/}
              {/*     повестка сегодняшнего дня требует от нас анализа системы обучения*/}
              {/*     кадров, соответствующей насущным потребностям.  экономическая повестка*/}
              {/*      сегодняшнего дня требует от нас анализа системы*/}
              {/*обучения кадров, соответствующей насущным потребностям. '*/}
              {/*text2=' Банальные, но неопровержимые выводы,*/}
              {/*а также акционеры крупнейших компаний, которые представляют собой яркий*/}
              {/*пример континентально-европейского типа политической культуры, будут*/}
              {/* превращены в посмешище, хотя само их существование приносит несомненную*/}
              {/* пользу обществу. Высокий уровень вовлечения представителей целевой*/}
              {/* аудитории является четким доказательством простого факта: экономическая*/}
              {/*  повестка сегодняшнего дня требует от нас анализа системы обучения кадров,*/}
              {/*соответствующей насущным потребностям.'*/}
              {/*text3=' Банальные, но неопровержимые выводы, а также акционеры*/}
              {/*крупнейших компаний, которые представляют собой яркий пример*/}
              {/*континентально-европейского типа политической культуры, будут*/}
              {/*превращены в посмешище, хотя само их существование приносит*/}
              {/*несомненную пользу обществу. Высокий уровень вовлечения*/}
              {/*представителей целевой аудитории является четким доказательством*/}
              {/*простого факта: экономическая повестка сегодняшнего дня требует от*/}
              {/*нас анализа системы обучения кадров, соответствующей насущным*/}
              {/*потребностям.  экономическая повестка сегодняшнего дня требует от*/}
              {/*нас анализа системы обучения кадров,*/}
              {/* соответствующей насущным потребностям.'*/}
              {/*text4=' Банальные, но неопровержимые выводы,*/}
              {/*а также акционеры крупнейших компаний, которые*/}
              {/*представляют собой яркий пример континентально-европейского*/}
              {/* типа политической культуры, будут превращены в посмешище,*/}
              {/*  хотя само их существование приносит несомненную пользу обществу.*/}
              {/*  Высокий уровень вовлечения представителей целевой аудитории является*/}
              {/*  четким доказательством простого факта: экономическая повестка сегодняшнего*/}
              {/*   дня требует от нас анализа системы обучения*/}
              {/* кадров, соответствующей насущным потребностям.'*/}
              {/*/>*/}
              <FeedBack setOfferModal={setOfferModal} />
          </Layout>
          <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
          <Modal active={modalActive} setActive={setModalActive} />
      </Provider>
    )
}

export default TouchPanel;