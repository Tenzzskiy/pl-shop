
import Layout from "../components/Layout/Layout";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {Preferences} from "../components/Preferences/Preferences.js";
import Sale from "../components/Sale/Sale";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import {Certificates} from "../components/Certificates/Certificates";
import {Shop} from "../components/Shop/Shop";
import React, {useState} from "react";
import {Preferences_768} from "../components/Preferences/Right/right";
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360";
import {useWindowSize} from "../Hooks/useWindowSize";
import {Releases_768} from "../components/Relises/Releases_768/Releases_768";
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
const Index = ({ cards}) => {
    const [sites,setSites] = useState(false);
    const [offerModal,setOfferModal] = useState(false)
    const size = useWindowSize();
    const [modalActive,setModalActive] = useState(false)
    return (
        <Provider store={store} >
        <Layout >
<MediumHeaderComponent
    button_text='Рассчитать стоимость'
    title='Аренда оборудования для дезинфекции'
    mainImg="/header/Desinfection/main.jpg"
    img_360='/header/Desinfection/middle_360.jpg'
    setSites={setSites}
    setOfferModal={setOfferModal}
/>

            {size.width > 1200 ?
                <Preferences
                    count={2}
                    title='Почему это важно'
                    leftTitle='Безопасность'
                    leftText=' В текущей неблагоприятной
             санэпидемиологической обстановке жизненно важно обеспечить
            санитарную безопасность на мероприятиях любого профиля.'
                    leftImg='/Preferences/Desinfection/1.png'
                    rightTitle='Гарантия качества'
                    rightText='Мы работаем исключительно с сертифицированными
            специализированными санитарными средствами и оборудованием.'
                    rightImg='/Preferences/Desinfection/2.png'
                /> : null

            }
            {size.width < 1200 && size.width > 720 ?
                <Preferences_768
                    count={2}
                    title='Почему это важно'
                    leftTitle='Безопасность'
                    leftText=' В текущей неблагоприятной
             санэпидемиологической обстановке жизненно важно обеспечить
            санитарную безопасность на мероприятиях любого профиля.'
                    leftImg='/Preferences/Desinfection/1.png'
                    rightTitle='Гарантия качества'
                    rightText='Мы работаем исключительно с сертифицированными
            специализированными санитарными средствами и оборудованием.'
                    rightImg='/Preferences/Desinfection/2.png'
                /> : null
            }
            {
                size.width <720 ?
                    <Preferences_360
                        count={2}
                        mainTitle='Почему это важно'
                        leftTitle='Безопасность'
                        leftText=' В текущей неблагоприятной
             санэпидемиологической обстановке жизненно важно обеспечить
            санитарную безопасность на мероприятиях любого профиля.'
                        leftImg='/Preferences/Desinfection/1.png'
                        rightTitle='Гарантия качества'
                        rightText='Мы работаем исключительно с сертифицированными
            специализированными санитарными средствами и оборудованием.'
                        rightImg='/Preferences/Desinfection/2.png'
                    /> : null
            }
            <Certificates />
            <Shop page={9} active={modalActive} setActive={setModalActive} data={cards} />
            <Sale />

            {size.width > 1200 ?
                <Releases
                    text1='Портал для дезинфекции на входе'
                    text2='Стойка для дезинфекции рук и ног'
                    text3='Дезинфекция помещения до и после мероприятия'
                    text4='Аренда бактерицидный рециркуляторов и санитайзеров'
                    text5='температурный контроль на входной группе'
                    img1='/releases/Desinfection/1.png'
                    img2='/releases/Desinfection/2.png'
                    img3='/releases/Desinfection/3.jpg'
                    img4='/releases/Desinfection/4.png'
                    img5='/releases/Desinfection/5.png'
                /> : null
            }
            { size.width < 1200  ?
                <Releases_768
                    text1='Портал для дезинфекции на входе'
                    text2='Стойка для дезинфекции рук и ног'
                    text3='Дезинфекция помещения до и после мероприятия'
                    text4='Аренда бактерицидный рециркуляторов и санитайзеров'
                    text5='температурный контроль на входной группе'
                    img1='/releases/Desinfection/1.png'
                    img2='/releases/Desinfection/2.png'
                    img3='/releases/Desinfection/3.jpg'
                    img4='/releases/Desinfection/4.png'
                    img5='/releases/Desinfection/5.png'
                /> : null
            }
            {/*<Seo*/}
            {/*    image1='/Seo/Desinfection/1.png'*/}
            {/*    image2='/Seo/Desinfection/2.jpg'*/}
            {/*    text1='Банальные, но неопровержимые выводы, а также акционеры*/}
            {/*    крупнейших компаний, которые представляют собой яркий пример*/}
            {/*    континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит*/}
            {/*    несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством*/}
            {/*     простого факта: экономическая повестка сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей*/}
            {/*      насущным потребностям.  экономическая повестка сегодняшнего дня требует от нас анализа*/}
            {/*     системы обучения кадров, соответствующей насущным потребностям.'*/}
            {/*    text2='Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, которые представляют собой яркий пример*/}
            {/*     континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит*/}
            {/*      несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством*/}
            {/*       простого факта: экономическая повестка сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей*/}
            {/*     насущным потребностям.'*/}
            {/*    text3='Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, которые представляют собой яркий пример*/}
            {/*     континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит*/}
            {/*      несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством*/}
            {/*       простого факта: экономическая повестка*/}
            {/*     сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей насущным потребностям.  экономическая*/}
            {/*      повестка сегодняшнего дня требует от нас анализа системы*/}
            {/*     обучения кадров, соответствующей насущным потребностям.'*/}
            {/*    text4='Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, которые представляют собой яркий пример*/}
            {/*     континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит*/}
            {/*      несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством*/}
            {/*       простого факта: экономическая повестка сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей*/}
            {/*        насущным потребностям.'*/}

            {/*/>*/}
            <FeedBack setOfferModal={setOfferModal} />
        </Layout>
            <SitesModal sites={sites} setSites= {setSites} setOfferModal={setOfferModal} title='Получить расчет'/>
            <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
            <Modal active={modalActive} setActive={setModalActive} />
        </Provider>
    )
}

export default Index;