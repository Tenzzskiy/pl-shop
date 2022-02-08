
import Layout from "../components/Layout/Layout";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {Preferences} from "../components/Preferences/Preferences.js";
import {Conditions} from "../components/Conditions/Conditions";
import {Cleaning} from "../components/Cleaning/Cleaning";
import Sale from "../components/Sale/Sale";
import React, {useState} from "react";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import {Shop} from "../components/Shop/Shop";
import {Preferences_768} from "../components/Preferences/Right/right";
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360";
import {useWindowSize} from "../Hooks/useWindowSize";
import {Offer} from "../components/Offer/Offer";
import {Offer_768} from "../components/Offer/OfferCard/Offer_768";
import {Offer_360} from "../components/Offer/OfferCard/Offer_360";
import {Releases_768} from "../components/Relises/Releases_768/Releases_768";
import {store} from "../redux";
import {Provider} from "react-redux";
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
const Laptops = ({ cards }) => {
    const size = useWindowSize()
    const [modalActive,setModalActive] = useState(false)
    const [offerModal,setOfferModal] = useState(false)
    const [sites,setSites] = useState(false);
    return (
        <>
        <Layout >
<MediumHeaderComponent
    button_text='Рассчитать стоимость'
    title='Аренда ноутбуков'
    mainImg="/assets/images/tv_6.jpg"
    img_360='/assets/images/tv360_6.jpg'
    setSites={setSites}
    setOfferModal={setOfferModal}
/>

            {size.width > 1200 ?
                <Preferences
                    count={2}
                    leftText=' Арендовав ноутбук вы будете уверены в
                работоспособности всей цепочки оборудования.
И не будете беспокоиться о несовместимости разъёмов.'
                    leftTitle='Гарантия совместимости '
                    leftImg='/assets/images/advantages_6-1.jpg'
                    rightText='Ноутбук в аренду также может служить отличным резервным
                оборудованием на случай неожиданной неисправности вашего комьютера. '
                    rightTitle=' Страховой резерв'
                    rightImg='/assets/images/advantages_6-2.jpg'
                    title='Преимущества аренды ноутбуков '
                /> : null

            }
            {size.width < 1200 && size.width > 720 ?
                <Preferences_768
                    count={2}
                    leftText=' Арендовав ноутбук вы будете уверены в
                работоспособности всей цепочки оборудования.
И не будете беспокоиться о несовместимости разъёмов.'
                    leftTitle='Гарантия совместимости '
                    leftImg='/assets/images/advantages_6-1.jpg'
                    rightText='Ноутбук в аренду также может служить отличным резервным
                оборудованием на случай неожиданной неисправности вашего комьютера. '
                    rightTitle=' Страховой резерв'
                    rightImg='/assets/images/advantages_6-2.jpg'
                    title='Преимущества аренды ноутбуков '
                /> : null
            }
            {
                size.width <720 ?
                    <Preferences_360
                        count={2}
                        leftText=' Арендовав ноутбук вы будете уверены в
                работоспособности всей цепочки оборудования.
И не будете беспокоиться о несовместимости разъёмов.'
                        leftTitle='Гарантия совместимости '
                        leftImg='/assets/images/advantages_6-1.jpg'
                        rightText='Ноутбук в аренду также может служить отличным резервным
                оборудованием на случай неожиданной неисправности вашего комьютера. '
                        rightTitle=' Страховой резерв'
                        rightImg='/assets/images/advantages_6-2.jpg'
                        mainTitle='Преимущества аренды ноутбуков '
                    /> : null
            }
            <Conditions />
            <Shop page={7}  active={modalActive} setActive={setModalActive} data={cards}/>
            {size.width > 1200 ? <Offer active={modalActive} count={4} setActive={setModalActive}/> : null }
            {size.width > 720 && size.width<1200 ? <Offer_768 count={4}  active={modalActive} setActive={setModalActive}/> : null }
            {size.width < 720  ? <Offer_360 count={4} active={modalActive} setActive={setModalActive}
            /> : null }
            <Cleaning />
            <Sale />

            {size.width > 1200 ?
                <Releases
                    text1=' Ноутбук для обработки фотографий'
            text2=' Ноутбук для проведения температурного контроля'
            text3='Ноутбук для организаторского контроля сцены '
            text4=' Ноутбук для презентационных целей'
            text5='Ноутбук для организации температурного контроля '
            img1='/releases/Laptops/1.png'
            img2='/releases/Laptops/2.png'
            img3='/releases/Laptops/3.jpg'
            img4='/releases/Laptops/4.png'
            img5='/releases/Laptops/5.png'
                /> : null
            }
            { size.width < 1200  ?
                <Releases_768
                    text1=' Ноутбук для обработки фотографий'
            text2=' Ноутбук для проведения температурного контроля'
            text3='Ноутбук для организаторского контроля сцены '
            text4=' Ноутбук для презентационных целей'
            text5='Ноутбук для организации температурного контроля '
            img1='/releases/Laptops/1.png'
            img2='/releases/Laptops/2.png'
            img3='/releases/Laptops/3.jpg'
            img4='/releases/Laptops/4.png'
            img5='/releases/Laptops/5.png'
                /> : null
            }
            <Seo
                title='Прокат ноутбука'
            image1='/Seo/Laptops/1.png'
            image2='/Seo/Laptops/2.jpg'
            text1='Нередко техника выходит из строя в самый важный момент. В других ситуация ноутбук требуется для того, чтобы весело провести время на корпоративе, вечеринке или празднике. Чтобы в срочном порядке не покупать портативный компьютер, можно арендовать его на период ремонта или под мероприятие.
             Компания предлагает взять ноутбук в аренду с доставкой по выгодной цене. Осуществляется оперативная доставка техники до указанного адреса. '
            text2='Представители компании не только привезут оборудование, но и проведут инструктаж, проверят работу ПК. В процессе эксплуатации технические специалисты окажут необходимую поддержку и ответят на вопросы пользователей. Всегда в наличии различные модели и прочее оборудование от ведущих брендов. В компании можно подобрать ноутбук, который решит саму сложную задачу.

 '
            text3='Какие преимущества доступны арендаторам ноутбуков:
бесплатная доставка при аренде на несколько дней;
обучение и разъяснение тонкостей использования техники;
гарантия исправности ноутбуков и их безупречной работы;
прием различных способов оплаты услуг;
широкий ассортимент современных конфигураций;
онлайн поддержка заказчика;
возможность организации срочной доставки.
Аренда оформляется на сутки или несколько дней в зависимости от потребностей заказчика.'
            text4='В каталоге представлены конфигурации, имеющиеся в наличии и доступные на данный момент. При возникновении трудностей в выборе подходящей модели ноутбука можно получить консультацию представителя компании, сформулировав цели аренды.

Как заказать

Чтобы оформить аренду ноутбука на выгодных условиях, необходимо оформить заявку на услугу по телефону или через сайт. Стоимость будет зависеть от продолжительности предоставления оборудования, адреса доставки и модели техника. Осуществляется сотрудничество
 с физическими лицами и организациями. Клиентам сервиса доступны гибкие скидки, функционирует программа лояльности. '
            />
            <FeedBack setOfferModal={setOfferModal} />
        </Layout>
            <SitesModal sites={sites} setSites= {setSites} setOfferModal={setOfferModal} title='Получить расчет'/>
            <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
            <Modal active={modalActive} setActive={setModalActive} />
            </>
    )
}

export default Laptops;