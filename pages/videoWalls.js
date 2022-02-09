
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
const VideoWalls = ({  cards}) => {
    const [id,setId] = useState(0);
    const [imgModal,setImgModal] = useState(false)
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
                    Аренда видеостен 🖥️ Бесшовные экраны различных размеров в москве
                </title>
                <meta
                    property="og:title"
                    content="Аренда видеостен 🖥️ Бесшовные экраны различных размеров в москве"
                />
                <meta
                    itemProp="description"
                    name="description"
                    content="Бесшовные видеостены из плазменных экранов различных размеров помогут провести выставку, презентацию, или качественную трансляцию. Доставим конструкцию на любое мероприятие и смонтируем на месте."
                />
                <meta
                    property="og:description"
                    content="Бесшовные видеостены из плазменных экранов различных размеров помогут провести выставку, презентацию, или качественную трансляцию. Доставим конструкцию на любое мероприятие и смонтируем на месте."
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
                <meta property="og:url" content="https://arenda-plazm77/videoWalls"/>
            </Head>
            <HeaderComponent
                title='Аренда видеостен'
                mainImg="/assets/images/tv_3.jpg"
                button_text='Рассчитать стоимость'
                setSites={setSites}
                setOfferModal={setOfferModal}
            />

            {size.width > 1200 ?
                <Preferences
                    count={6}
                    title='Преимущества бесшовных видеостен '
                    rightImg='/assets/images/advantages_3-1.jpg'
                    rightTitle='Визуализация '
                    rightText=' Идеальное решение для трансляции на большую аудиторию
                и привлечения внимания к вашему контенту!'
                /> : null

            }
            {size.width < 1200 && size.width > 720 ?
                <Preferences_768
                    count={6}
                    title='Преимущества бесшовных видеостен '
                    rightImg='/assets/images/advantages_3-1.jpg'
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
                        rightImg='/assets/images/advantages_3-1.jpg'
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
                    setImgModal={setImgModal}
                    imgModal={imgModal}
                    id={id}
                    setId={setId}
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
            <Seo
                title='Прокат видеостены'
                image1='/Seo/VideoWalls/1.png'
                image2='/Seo/VideoWalls/2.png'
                text1='Подготовка к проведению мероприятия, будь то большой семейный праздник, выставка, презентация или корпоративная встреча, подразумевает украшение зала и его оснащение современной аппаратурой. Интересно на тематических мероприятиях смотрятся видеостены. Смонтировав систему видеоотражающих устройств, которые образуют цельный экран, можно воспроизводить практически любую информацию. Это может быть как несколько независимых роликов, так и один клип, транслирующий информацию на большую поверхность. Добиться высокого качества при проведении такой презентации помогает большое количество источников видеосигнала.
'
                text2='Аренда бесшовной видеостены актуальна для проведения:
- свадьбы или семейного торжества. На экране могут транслироваться клипы, снятые про виновников мероприятия; - корпоративного праздника. Фоном может появляться информация о компании, руководстве, какие-то интересные моменты из жизни коллектива; - выставки или презентации нового направления деятельности компании; - спортивного мероприятия или городского праздника.

Для корректной работы видеостены важно не только использование качественного дополнительного оборудования. Целесообразно заранее проверить формат роликов, разрешение, на котором они были сняты. При необходимости можно будет провести дополнительную настройку до конца праздника.
'
                text3=' Трансляция любой информации на выгодных условиях

Аренда большого экрана на мероприятие любого формата – это способ быстро оформить отдельную зону, а также передать важную информацию гостям и участникам встречи.'
                text4=' Выбирая аренду в проверенной компании, клиенты могут рассчитывать на:
- большой выбор оборудование, подобрать которое можно будет с учетом специфики зала; - профессиональную поддержку на каждом этапе сотрудничества; - доставку, монтаж и демонтаж с вывозом после окончания встречи. В компании знают, какое решение предложить каждому клиенту с учетом специфики мероприятия.Чтобы обсудить подробности, выбрать подходящее время, а также заключить договор, достаточно воспользоваться формой обратной связи на сайте или связаться со специалистом по телефону.'
            />
            <FeedBack setOfferModal={setOfferModal} />
        </Layout>
        <SitesModal sites={sites} setSites= {setSites} setOfferModal={setOfferModal} title='Получить расчет'/>
        <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
        <Modal active={modalActive} setActive={setModalActive} />
        {size.width > 1200 ? <ImgModal active={imgModal} setActive={setImgModal}
                                       id={id}
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
        /> : null}
    </>
    )
}

export default VideoWalls;