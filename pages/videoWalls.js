
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
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360";
import {useWindowSize} from "../Hooks/useWindowSize";
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
const VideoWalls = ({  cards}) => {
    const size = useWindowSize();
    const [modalActive,setModalActive] = useState(false)
    const [offerModal,setOfferModal] = useState(false)
    return (
    <Provider store={store}>
        <Layout >

            <HeaderComponent
                title='Аренда видеостен'
                mainImg="/header/VideoWalls/main.jpg"
                button_text='Рассчитать стоимость'

            />

            {size.width > 1200 ?
                <Preferences
                    count={6}
                    title='Преимущества бесшовных видеостен '
                    rightImg="/Preferences/VideoWalls/1.jpg"
                    rightTitle='Визуализация '
                    rightText=' Идеальное решение для трансляции на большую аудиторию
                и привлечения внимания к вашему контенту!'
                /> : null

            }
            {size.width < 1200 && size.width > 720 ?
                <Preferences_768
                    count={6}
                    title='Преимущества бесшовных видеостен '
                    rightImg="/Preferences/VideoWalls/1.jpg"
                    rightTitle='Визуализация '
                    rightText=' Идеальное решение для трансляции на большую аудиторию
                и привлечения внимания к вашему контенту!'
                /> : null
            }
            {
                size.width <720 ?
                    <Preferences_360
                        count={6}
                        mainTitle='Преимущества бесшовных видеостен '
                        rightImg="/Preferences/VideoWalls/1.jpg"
                        rightTitle='Визуализация '
                        rightText=' Идеальное решение для трансляции на большую аудиторию
                и привлечения внимания к вашему контенту!'
                    /> : null
            }

            <Conditions />
            <Shop page={4} active={modalActive} setActive={setModalActive} data={cards}/>

            {size.width > 1250 ? <Offer  active={modalActive} setActive={setModalActive}/> : null }
            {size.width > 720 && size.width<1250 ? <Offer_768 active={modalActive} setActive={setModalActive} /> : null }
            {size.width < 720  ? <Offer_360 active={modalActive} setActive={setModalActive}
            /> : null }
            <Cleaning />
            <Sale />

            {size.width > 1200 ?
                <Releases
                    img1='/releases/VideoWalls/1.png'
                    img2='/releases/VideoWalls/2.png'
                    img3='/releases/VideoWalls/3.png'
                    img4='/releases/VideoWalls/4.png'
                    img5='/releases/VideoWalls/5.png'
                    text1='Видеостена с промо-роликами в ТЦ'
                    text2='Видеостена на мероприятии по тим билдингу'
                    text3='Видеостена в ТЦ для демонстрации новой рекламной кампании'
                    text4='Видеостена на мероприятии по тим билдингу'
                    text5='Видеостена на научном фестивале'
                /> : null
            }
            { size.width < 1200  ?
                <Releases_768
                    img1='/releases/VideoWalls/1.png'
                    img2='/releases/VideoWalls/2.png'
                    img3='/releases/VideoWalls/3.png'
                    img4='/releases/VideoWalls/4.png'
                    img5='/releases/VideoWalls/5.png'
                    text1='Видеостена с промо-роликами в ТЦ'
                    text2='Видеостена на мероприятии по тим билдингу'
                    text3='Видеостена в ТЦ для демонстрации новой рекламной кампании'
                    text4='Видеостена на мероприятии по тим билдингу'
                    text5='Видеостена на научном фестивале'
                /> : null
            }
            {/*<Seo*/}
            {/*    image1='/Seo/VideoWalls/1.png'*/}
            {/*    image2='/Seo/VideoWalls/2.png'*/}
            {/*    text1='Банальные, но неопровержимые выводы, а также акционеры*/}
            {/*     крупнейших компаний, которые представляют собой яркий*/}
            {/*     пример континентально-европейского типа политической культуры,*/}
            {/*      будут превращены в посмешище, хотя само их существование*/}
            {/*      приносит несомненную пользу обществу. Высокий уровень*/}
            {/*      вовлечения представителей целевой аудитории является четким*/}
            {/*       доказательством простого факта: экономическая повестка*/}
            {/*       сегодняшнего дня требует от нас анализа системы обучения*/}
            {/*       кадров, соответствующей насущным потребностям.  экономическая*/}
            {/*        повестка сегодняшнего дня требует от нас анализа системы*/}
            {/*         обучения кадров, соответствующей насущным потребностям. '*/}
            {/*    text2='Банальные, но неопровержимые выводы,*/}
            {/*     а также акционеры крупнейших компаний, которые*/}
            {/*     представляют собой яркий пример континентально-европейского*/}
            {/*     типа политической культуры, будут превращены в посмешище,*/}
            {/*     хотя само их существование приносит несомненную пользу обществу.*/}
            {/*      Высокий уровень вовлечения представителей целевой аудитории является*/}
            {/*      четким доказательством простого факта: экономическая повестка сегодняшнего*/}
            {/*       дня требует от нас анализа системы обучения кадров,*/}
            {/*     соответствующей насущным потребностям. '*/}
            {/*    text3=' Банальные, но неопровержимые выводы,*/}
            {/*     а также акционеры крупнейших компаний, которые представляют собой*/}
            {/*     яркий пример континентально-европейского типа политической культуры,*/}
            {/*      будут превращены в посмешище, хотя само их существование приносит*/}
            {/*      несомненную пользу обществу. Высокий уровень вовлечения представителей*/}
            {/*       целевой аудитории является четким доказательством простого факта:*/}
            {/*       экономическая повестка сегодняшнего дня требует от нас анализа системы*/}
            {/*       обучения кадров, соответствующей насущным потребностям.  экономическая*/}
            {/*       повестка сегодняшнего дня требует от нас анализа системы обучения кадров,*/}
            {/*    соответствующей насущным потребностям.'*/}
            {/*    text4=' Банальные, но неопровержимые выводы,*/}
            {/*     а также акционеры крупнейших компаний, которые*/}
            {/*     представляют собой яркий пример континентально-европейского*/}
            {/*     типа политической культуры, будут превращены в посмешище,*/}
            {/*     хотя само их существование приносит несомненную пользу обществу*/}
            {/*     . Высокий уровень вовлечения представителей целевой аудитории*/}
            {/*      является четким доказательством простого факта: экономическая*/}
            {/*       повестка сегодняшнего дня требует от нас анализа*/}
            {/*       системы обучения*/}
            {/*    кадров, соответствующей насущным потребностям.'*/}
            {/*/>*/}
            <FeedBack setOfferModal={setOfferModal} />
        </Layout>
        <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
        <Modal active={modalActive} setActive={setModalActive} />
    </Provider>
    )
}

export default VideoWalls;