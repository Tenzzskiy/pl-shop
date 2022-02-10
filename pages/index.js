import Layout from "../components/Layout/Layout";
import Releases from "../components/Relises/Relises";
import React, {useState} from "react";
import Head from 'next/head'
import Sale from "../components/Sale/Sale";
import {Partners} from "../components/Partners/Partners";
import {Conditions} from "../components/Conditions/Conditions";
import {Cleaning} from "../components/Cleaning/Cleaning";
import {Shop} from "../components/Shop/Shop";
import {Offer} from "../components/Offer/Offer";
import MainHeaderComponent from "../components/HeaderComponent/MainHeaderComponent/MainHeaderComponent";
import {Preferences_768, Right} from "../components/Preferences/Right/right";
import {useWindowSize} from "../Hooks/useWindowSize";
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360.js";
import {Preferences} from "../components/Preferences/Preferences";
import {Offer_768} from "../components/Offer/OfferCard/Offer_768";
import {Offer_360} from "../components/Offer/OfferCard/Offer_360";
import {Releases_768} from "../components/Relises/Releases_768/Releases_768";
import {Modal} from "../components/Modal/Modal";
import FeedBack from "../components/FeedBack/FeedBack";
import data from '../sources/data/cart_arenda-plasm77.ru.json'
import {OfferModal} from "../components/offerModal/OfferModal";
import SitesModal from "../components/SitesModal/SitesModal";
import Seo from "../components/SEO/SEO";
import styles from './../styles/index.module.scss'
import ImgModal from "../components/Img_modal/ImgModal";
export  const getStaticProps = async () =>{
    return {
        props: {
            cards: data
        }
    };
}

const Home = ({ cards }) => {
    const [id,setId] = useState(0);
    const [sites,setSites] = useState(false);
    const [offerModal,setOfferModal] = useState(false)
    const [totalPrice,setTotalPrice] = useState()
    const size = useWindowSize();
    const [modalActive,setModalActive] = useState(false)
    const [imgModal,setImgModal] = useState(false)
  return (


      <>
    <Layout>
        <Head itemscope itemtype="http://schema.org/WPHeader">
            {/*<meta itemProp="keywords" name="keywords" content="ключевые_слова_для_страницы">*/}
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title itemProp="headline">
                Аренда плазм 🖥️ Плазменные панели на мероприятие в Москве
            </title>
            <meta
                property="og:title"
                content="Аренда плазм 🖥️ Плазменные панели на мероприятие в Москве"
            />
            <meta
                itemProp="description"
                name="description"
                content="Большой выбор телевизоров и плазменных панелей 32, 42, 55, 65 дюймов. Подберем оборудование для презентации, выставки или конференции по выгодной цене. Доставка и монтаж на мероприятие."
            />
            <meta
                property="og:description"
                content="Большой выбор телевизоров и плазменных панелей 32, 42, 55, 65 дюймов. Подберем оборудование для презентации, выставки или конференции по выгодной цене. Доставка и монтаж на мероприятие."
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
            <meta property="og:url" content="https://arenda-plazm77.ru"/>

        </Head>
        <div className={styles.header}>
         <MainHeaderComponent  setSites={setSites}
            setOfferModal={setOfferModal}/>
        </div>
        <div className={styles.preferences}>
        {size.width > 1200 ?
            <Preferences
                count={4}
                title='Ваши выгоды с PLAZMA77'
                leftImg="/assets/images/advantages_1.jpg"
                rightImg="/assets/images/advantages_2.jpg"
                secondLeftImg='/assets/images/advantages_3.jpg'
                secondRightImg='/assets/images/advantages_4.jpg'
                leftText='Гибкая система скидок и бонусов для ивент менеджеров
            и организаторов мероприятий. Мы за долгосрочное сотрудничество!'
                leftSecondText='Работаем в сфере организации частных
            и корпоративных мероприятий с 2007 года, и точно знаем своё дело!'
                leftTitle='Клиентоориентированность'
                leftSecondTitle='Квалификация'
                rightText='В зависимости от задач мы подберем для вас плазму
            либо соберем видеостену, либо смонтируем масштабную светодиодную сцену!'
                rightSecondText='Возьмём на себя все вопросы по инсталяции и избавим вас от
            головной боли! Монтаж и демонтаж уже включены в стоимость!'
                rightTitle='Огромный выбор'
                rightSecondTitle='Под ключ'

            /> : null

        }
        {size.width < 1200 && size.width > 720 ?
            <Preferences_768
                count={4}
                title='Ваши выгоды с PLAZMA77'
                leftImg="/assets/images/advantages_1.jpg"
                rightImg="/assets/images/advantages_2.jpg"
                secondLeftImg='/assets/images/advantages_3.jpg'
                secondRightImg='/assets/images/advantages_4.jpg'
                leftText='Гибкая система скидок и бонусов для ивент менеджеров
            и организаторов мероприятий. Мы за долгосрочное сотрудничество!'
                leftSecondText='Работаем в сфере организации частных
            и корпоративных мероприятий с 2007 года, и точно знаем своё дело!'
                leftTitle='Клиентоориентированность'
                leftSecondTitle='Квалификация'
                rightText='В зависимости от задач мы подберем для вас плазму
            либо соберем видеостену, либо смонтируем масштабную светодиодную сцену!'
                rightSecondText='Возьмём на себя все вопросы по инсталяции и избавим вас от
            головной боли! Монтаж и демонтаж уже включены в стоимость!'
                rightTitle='Огромный выбор'
                rightSecondTitle='Под ключ'
            /> : null
        }
        {
            size.width <720 ?
                <Preferences_360
                    count={4}
                    mainTitle='Ваши выгоды с PLAZMA77'
                    leftImg="/assets/images/advantages_1.jpg"
                    rightImg="/assets/images/advantages_2.jpg"
                    secondLeftImg='/assets/images/advantages_3.jpg'
                    secondRightImg='/assets/images/advantages_4.jpg'
                    leftText='Гибкая система скидок и бонусов для ивент менеджеров
            и организаторов мероприятий. Мы за долгосрочное сотрудничество!'
                    leftSecondText='Работаем в сфере организации частных
            и корпоративных мероприятий с 2007 года, и точно знаем своё дело!'
                    leftTitle='Клиентоориентированность'
                    leftSecondTitle='Квалификация'
                    rightText='В зависимости от задач мы подберем для вас плаsзму
            либо соберем видеостену, либо смонтируем масштабную светодиодную сцену!'
                    rightSecondText='Возьмём на себя все вопросы по инсталяции и избавим вас от
            головной боли! Монтаж и демонтаж уже включены в стоимость!'
                    rightTitle='Огромный выбор'
                    rightSecondTitle='Под ключ'
                /> : null
        }
         </div>
            <div className={styles.partners}>
        <Partners />
            </div>
        <div className={styles.conditions}>
        <Conditions />
        </div>
        <div className={styles.shop}>
        <Shop page={1} active={modalActive} setActive={setModalActive} data={cards.mainCatalogue} />
        </div>
<div className={styles.offer}>
        {size.width > 1200 ? <Offer count={1} active={modalActive} setActive={setModalActive} title={' С этим товаром часто берут'} /> : null }
        {size.width > 720 && size.width<1200 ? <Offer_768 count={1} active={modalActive} setActive={setModalActive} title={' С этим товаром часто берут'} /> : null }
        {size.width < 720  ? <Offer_360 count={1} active={modalActive} setActive={setModalActive} title={' С этим товаром часто берут'}
                                                           /> : null } </div>

        <div className={styles.cleaning}>
        <Cleaning />
        </div>
        <div className={styles.sale}>
<Sale />
        </div>

        <div className={styles.releases}>
        {size.width > 1200 ?
            <Releases
                setImgModal={setImgModal}
                imgModal={imgModal}
                img1='/releases/releases1(1).png'
                img2='/releases/releases1(2).png'
                img3='/releases/releases1(3).png'
                img4='/releases/releases1(4).png'
                img5='/releases/releases1(5).png'
                id={id}
                setId={setId}
                text1='Плазма на стойке для трансляции спортивных матчей'
                text2='Брендированный экспостенд с плазмой для интерактивной зоны'
                text3='Плазма на стойке для трансляции кибер-спортивных матчей'
                text4='Плазма на брендированной стойке для интерактивной зоны'
                text5='Плазма на брендированной стойке для игровой VR зоны'
            /> : null
        }
        { size.width < 1200  ?
            <Releases_768
                img1='/releases/releases1(1).png'
                img2='/releases/releases1(2).png'
                img3='/releases/releases1(3).png'
                img4='/releases/releases1(4).png'
                img5='/releases/releases1(5).png'

                text1='Плазма на стойке для трансляции спортивных матчей'
                text2='Брендированный экспостенд с плазмой для интерактивной зоны'
                text3='Плазма на стойке для трансляции кибер-спортивных матчей'
                text4='Плазма на брендированной стойке для интерактивной зоны'
                text5='Плазма на брендированной стойке для игровой VR зоны'
            /> : null
        } </div>
        <div className={styles.seo}>
        <Seo
            title='Телевизоры в аренду'
            image1='/Seo/seo1FirstPicture.png'
            image2='/Seo/2.png'
        text1='Намечается торжественное мероприятие, планируется выставка или понадобилось организовать деловую встречу?
        Наверняка для организации понадобится современное оборудование. Установка жк телевизоров поможет только сделать зал
        более современным. Кроме того, это отличный способ донести важную информацию гостям мероприятия.
На большом экране удобно транслировать:
- информацию о компании, презентацию, преимущества сотрудничества, если речь идет о выставке; - клип о виновниках торжества, что особенно актуально на свадьбах, юбилеях и выпускных; - фоновое изображение и музыку для создания более непринужденной атмосферы; - демонстрацию слайдов или важной информации при проведении семинаров, деловых встреч, официальных мероприятий;
- изображение с камеры, расположенной в какой-либо зоне проведения мероприятия, чтобы каждый гость смог разглядеть интересующие его детали.'
        text2='
Презентацию для просмотра можно разработать заранее. Выигрышное решение для неформальных встреч и праздников – съемка ролика в течение вечера и его трансляция ближе к окончанию торжества. Большой экран даст возможность привлечь внимание гостей, рассказать о важной информации, задать тон празднику.

Аренда – это удобно

Выбирая аренду оборудования в профессиональной компании, можно рассчитывать на комплексное обслуживание высшего качества. Речь идет о подборе необходимого оборудования.'
        text3='В зависимости от особенностей зала можно взять напрокат телевизоры с экранами 32, 42, 55 или 65 дюймов. К ним легко подобрать стойку для установки. Если есть необходимость, в наличии имеется дополнительное оборудование для полного технического сопровождения мероприятия.

Высокое качество изображения достигается благодаря использованию только современной аппаратуры, а также грамотной настройки с учетом формата встрече, особенностей зала, где будет транслироваться видео. Заказывая услуги по аренде,
клиент получает полный спектр для проведения праздника. Специалисты привезут оборудование, заранее осуществят монтаж.
          '
        text4='После завершения мероприятия вся техника будет собрана, надежно упакована и доставлена на склад. Все организационные моменты решаются исполнителем.

Цена на аренду оборудования формируется с учетом особенностей заказываемой техники, расположения зала, а также необходимости предоставления дополнительных услуг.
 Для получения подробной консультации и согласования времени аренды достаточно воспользоваться формой обратной связи на сайте. '

        />
        </div>
<div className={styles.feedback}>
        <FeedBack setOfferModal={setOfferModal} /> </div>
    </Layout>
          <SitesModal sites={sites} setSites= {setSites} setOfferModal={setOfferModal} title='Получить расчет'/>
          <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
          <Modal active={modalActive} setActive={setModalActive} />
          {size.width > 1200 ? <ImgModal active={imgModal} setActive={setImgModal}
                                         id={id}
                                         img1='/releases/releases1(1).png'
                                         img2='/releases/releases1(2).png'
                                         img3='/releases/releases1(3).png'
                                         img4='/releases/releases1(4).png'
                                         img5='/releases/releases1(5).png'

                                         text1='Плазма на стойке для трансляции спортивных матчей'
                                         text2='Брендированный экспостенд с плазмой для интерактивной зоны'
                                         text3='Плазма на стойке для трансляции кибер-спортивных матчей'
                                         text4='Плазма на брендированной стойке для интерактивной зоны'
                                         text5='Плазма на брендированной стойке для игровой VR зоны'
          /> : null}
    </>
  )
}

export default Home;
