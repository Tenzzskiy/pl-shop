
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
import data from "../components/Shop/cart_arenda-plasm77.ru.json";
import {OfferModal} from "../components/offerModal/OfferModal";
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
    return (
        <Provider store={store} >
        <Layout >
<MediumHeaderComponent
    button_text='Рассчитать стоимость'
    title='Аренда ноутбуков'
    mainImg="/header/Laptops/main.jpg"
    img_360='/header/Laptops/middle_360.jpg'
/>

            {size.width > 1200 ?
                <Preferences
                    count={2}
                    leftText=' Арендовав ноутбук вы будете уверены в
                работоспособности всей цепочки оборудования.
И не будете беспокоиться о несовместимости разъёмов.'
                    leftTitle='Гарантия совместимости '
                    leftImg='/Preferences/Laptops/1.png'
                    rightText='Ноутбук в аренду также может служить отличным резервным
                оборудованием на случай неожиданной неисправности вашего комьютера. '
                    rightTitle=' Страховой резерв'
                    rightImg='/Preferences/Laptops/2.png'
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
                    leftImg='/Preferences/Laptops/1.png'
                    rightText='Ноутбук в аренду также может служить отличным резервным
                оборудованием на случай неожиданной неисправности вашего комьютера. '
                    rightTitle=' Страховой резерв'
                    rightImg='/Preferences/Laptops/2.png'
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
                        leftImg='/Preferences/Laptops/1.png'
                        rightText='Ноутбук в аренду также может служить отличным резервным
                оборудованием на случай неожиданной неисправности вашего комьютера. '
                        rightTitle=' Страховой резерв'
                        rightImg='/Preferences/Laptops/2.png'
                        mainTitle='Преимущества аренды ноутбуков '
                    /> : null
            }
            <Conditions />
            <Shop page={7}  active={modalActive} setActive={setModalActive} data={cards}/>
            {size.width > 1200 ? <Offer active={modalActive} setActive={setModalActive}/> : null }
            {size.width > 720 && size.width<1200 ? <Offer_768  active={modalActive} setActive={setModalActive}/> : null }
            {size.width < 720  ? <Offer_360 active={modalActive} setActive={setModalActive}
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
            {/*<Seo*/}
            {/*image1='/Seo/Laptops/1.png'*/}
            {/*image2='/Seo/Laptops/2.jpg'*/}
            {/*text1='Банальные, но неопровержимые выводы,*/}
            {/* а также акционеры крупнейших компаний, которые*/}
            {/* представляют собой яркий пример континентально-европейского*/}
            {/*  типа политической культуры, будут превращены в посмешище*/}
            {/*  , хотя само их существование приносит несомненную пользу обществу.*/}
            {/*   Высокий уровень вовлечения представителей целевой аудитории является*/}
            {/*    четким доказательством простого факта: экономическая повестка*/}
            {/*    сегодняшнего дня требует от нас анализа системы обучения кадров,*/}
            {/*     соответствующей насущным потребностям.  экономическая повестка*/}
            {/*      сегодняшнего дня требует от нас анализа системы обучения кадров,*/}
            {/*соответствующей насущным потребностям. '*/}
            {/*text2='Банальные, но неопровержимые выводы,*/}
            {/* а также акционеры крупнейших компаний, которые представляют*/}
            {/*  собой яркий пример континентально-европейского типа политической*/}
            {/*  культуры, будут превращены в посмешище, хотя само их существование*/}
            {/*  приносит несомненную пользу обществу. Высокий уровень вовлечения*/}
            {/*  представителей целевой аудитории является четким доказательством простого*/}
            {/*   факта: экономическая повестка сегодняшнего дня требует от нас анализа*/}
            {/*   системы обучения кадров,*/}
            {/*соответствующей насущным потребностям. '*/}
            {/*text3='Банальные, но неопровержимые выводы,*/}
            {/* а также акционеры крупнейших компаний, которые*/}
            {/* представляют собой яркий пример континентально-европейского*/}
            {/* типа политической культуры, будут превращены в посмешище, хотя*/}
            {/* само их существование приносит несомненную пользу обществу. Высокий*/}
            {/*  уровень вовлечения представителей целевой аудитории является четким*/}
            {/*   доказательством простого факта: экономическая повестка сегодняшнего*/}
            {/*   дня требует от нас анализа системы обучения кадров, соответствующей*/}
            {/*   насущным потребностям.  экономическая повестка сегодняшнего дня требует*/}
            {/*    от нас анализа системы*/}
            {/* обучения кадров, соответствующей насущным потребностям. '*/}
            {/*text4='Банальные, но неопровержимые выводы, а также*/}
            {/*акционеры крупнейших компаний, которые представляют собой*/}
            {/*яркий пример континентально-европейского типа политической культуры,*/}
            {/* будут превращены в посмешище, хотя само их существование приносит*/}
            {/* несомненную пользу обществу. Высокий уровень вовлечения представителей*/}
            {/* целевой аудитории является четким доказательством простого факта:*/}
            {/* экономическая повестка сегодняшнего дня требует от нас анализа системы*/}
            {/*  обучения кадров,*/}
            {/*соответствующей насущным потребностям. '*/}
            {/*/>*/}
            <FeedBack setOfferModal={setOfferModal} />
        </Layout>
            <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
            <Modal active={modalActive} setActive={setModalActive} />
            </Provider>
    )
}

export default Laptops;