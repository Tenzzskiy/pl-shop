
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
import {Modal} from "../components/Modal/Modal";
import FeedBack from "../components/FeedBack/FeedBack";
import data from "../sources/data/cart_arenda-plasm77.ru.json";
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
        <>
        <Layout >
<MediumHeaderComponent
    button_text='Рассчитать стоимость'
    title='Аренда оборудования для дезинфекции'
    mainImg="/assets/images/tv_7.jpg"
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
                    leftImg='/assets/images/advantages_7-1.jpg'
                    rightTitle='Гарантия качества'
                    rightText='Мы работаем исключительно с сертифицированными
            специализированными санитарными средствами и оборудованием.'
                    rightImg='/assets/images/advantages_7-2.jpg'
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
                    leftImg='/assets/images/advantages_7-1.jpg'
                    rightTitle='Гарантия качества'
                    rightText='Мы работаем исключительно с сертифицированными
            специализированными санитарными средствами и оборудованием.'
                    rightImg='/assets/images/advantages_7-2.jpg'
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
                        leftImg='/assets/images/advantages_7-1.jpg'
                        rightTitle='Гарантия качества'
                        rightText='Мы работаем исключительно с сертифицированными
            специализированными санитарными средствами и оборудованием.'
                        rightImg='/assets/images/advantages_7-2.jpg'
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
            <Seo
                title='Обработка помещений от вирусов и бактерий'
                image1='/Seo/Desinfection/1.png'
                image2='/Seo/Desinfection/2.jpg'
                text1='В новых социальных условиях все большую важность приобретает соблюдение санитарно-гигиенических требований.
                Компания предлагает взять в аренду передовое оборудование для дезинфекции помещения по выгодной цене.
                Установка эффективной системы очистки позволяет избавить воздух от вирусов, а с помощью специальной дезинфекционной техники можно произвести стерилизацию поверхностей.'
                text2='Аренда средств и оборудования для качественной дезинфекции позволяет существенно сократить расходы. Нет необходимости приобретать
                дорогостоящие машины и искать место для их хранения. Гораздо выгоднее арендовать все необходимое и сконцентрироваться на прочих организационных вопросах.'
                text3='В каталоге представлены современные модификации и всегда есть возможность подобрать подходящую позицию. При наличии затруднений и сомнений можно получить консультацию представителей компании. Реализуется исключительно эффективные и
                 безопасные решения, гарантирующие абсолютную чистоту и нераспространение опасных заболеваний при проведении общественных мероприятий.'
                text4='Как заказать

Чтобы забронировать аренду оборудования для дезинфекции или профессиональную обработку помещений от вирусов и бактерий, нужно оставить заявку на сайте или по телефону. Заказчикам гарантируется безупречный сервис и четкое выполнение достигнутых договоренностей.
Стоимость услуг будет зависеть от продолжительности предоставления техники и спецсредств, адреса доставки и заказа дополнительных опций.'

            />
            <FeedBack setOfferModal={setOfferModal} />
        </Layout>
            <SitesModal sites={sites} setSites= {setSites} setOfferModal={setOfferModal} title='Получить расчет'/>
            <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
            <Modal active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default Index;