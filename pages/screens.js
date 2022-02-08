import Layout from "../components/Layout/Layout";
import {Conditions} from "../components/Conditions/Conditions";
import {Preferences} from "../components/Preferences/Preferences";
import React, {FunctionComponent, ReactNode, useState} from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import {Cleaning} from "../components/Cleaning/Cleaning";
import Sale from "../components/Sale/Sale";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import {Shop} from "../components/Shop/Shop";
import {Releases_768} from "../components/Relises/Releases_768/Releases_768";
import {useWindowSize} from "../Hooks/useWindowSize";
import {Offer} from "../components/Offer/Offer";
import {Offer_768} from "../components/Offer/OfferCard/Offer_768";
import {Offer_360} from "../components/Offer/OfferCard/Offer_360";
import {Preferences_768} from "../components/Preferences/Right/right";
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360";
import {Provider} from "react-redux";
import {store} from "../redux";
import {Modal} from "../components/Modal/Modal";
import FeedBack from "../components/FeedBack/FeedBack";
import data from "../sources/data/cart_arenda-plasm77.ru.json";
import {OfferModal} from "../components/offerModal/OfferModal";
import SitesModal from "../components/SitesModal/SitesModal";
import MediumHeader from "../components/HeaderComponent/MediumHeader/MediumHeader";

export const getStaticProps = async () => {
    return {
        props: {
            cards: data
        }
    };
}

const Screens = ({cards}) => {
    const size = useWindowSize();
    const [modalActive, setModalActive] = useState(false)
    const [offerModal, setOfferModal] = useState(false)
    const [sites, setSites] = useState(false);
    return (
        <>
            <Layout>
                <MediumHeader
                    img_360='/header/Screen/main_360.jpg'
                    title='Аренда  светодиодных экранов'
                    mainImg='/header/Screen/main2.jpg'
                    button_text='Рассчитать стоимость'
                    purple={true}
                    setSites={setSites}
                    setOfferModal={setOfferModal}
                />
                {size.width > 1200 ?
                    <Preferences
                        count={1}
                        leftImg='/assets/images/advantages_2-1.jpg'
                        mainTitle=' Преимущества светодиодных экранов'
                        leftTitle='Зрелищность '
                        leftText='Выгодно выделяют ваш стенд, презентацию или сцену,
                         а также зрелищно организуют пространство в вашем заведении! '
                        title=' Преимущества светодиодных экранов'
                    /> : null

                }
                {size.width < 1200 && size.width > 720 ?
                    <Preferences_768
                        count={1}
                        leftImg='/assets/images/advantages_2-1.jpg'
                        title=' Преимущества светодиодных экранов'
                        leftTitle='Зрелищность '
                        leftText='Выгодно выделяют ваш стенд, презентацию или сцену,
                         а также зрелищно организуют пространство в вашем заведении! '
                    /> : null
                }
                {
                    size.width < 720 ?
                        <Preferences_360
                            count={1}
                            leftImg='/assets/images/advantages_2-1.jpg'
                            mainTitle=' Преимущества светодиодных экранов'
                            leftTitle='Зрелищность '
                            leftText='Выгодно выделяют ваш стенд, презентацию или сцену,
                         а также зрелищно организуют пространство в вашем заведении! '
                        /> : null
                }

                <Conditions/>
                <Shop page={3} active={modalActive} setActive={setModalActive} data={cards} count={0}/>
                {size.width > 1200 ? <Offer active={modalActive} setActive={setModalActive}/> : null}
                {size.width > 720 && size.width < 1200 ?
                    <Offer_768 active={modalActive} setActive={setModalActive}/> : null}
                {size.width < 720 ? <Offer_360 active={modalActive} setActive={setModalActive}
                /> : null}
                <Cleaning/>
                <Sale/>
                {size.width > 1200 ?
                    <Releases
                        img1='/releases/Screen/1.jpg'
                        img2='/releases/Screen/2.jpg'
                        img3='/releases/Screen/3.jpg'
                        img4='/releases/Screen/4.jpg'
                        img5='/releases/Screen/5.jpg'
                        text1='Угловая LED фотозона'
                        text2='Брендированный экспостенд'
                        text3='LED экраны в оформлении сцены для презентации нового продукта'
                        text4='Светодиодный экран для оформления сцены'
                        text5='Светодиодный экран для оформления фотозоны'
                    /> : null
                }
                {size.width < 1200 ?
                    <Releases_768
                        img1='/releases/Screen/1.jpg'
                        img2='/releases/Screen/2.jpg'
                        img3='/releases/Screen/3.jpg'
                        img4='/releases/Screen/4.jpg'
                        img5='/releases/Screen/5.jpg'
                        text1='Угловая LED фотозона'
                        text2='Брендированный экспостенд'
                        text3='LED экраны в оформлении сцены для презентации нового продукта'
                        text4='Светодиодный экран для оформления сцены'
                        text5='Светодиодный экран для оформления фотозоны'
                    /> : null
                }

                <Seo
                    title='Прокат светодиодных экранов'
                    image1='/Seo/Screen/1.jpg'
                    image2='/Seo/Screen/2.jpg'
                    text1='Довольно часто на развлекательных и информационных мероприятиях используется оборудование, позволяющее транслировать информацию на большой экран. Речь идет о светодиодных экранах, которые отличаются способностью передавать изображение высокого качества с отличной яркостью. Отдельно можно отметить работоспособность оборудования.

Чаще всего LED экраны используются при проведении:
- выставок; - спортивных мероприятий, фестивалей, соревнований; - музыкальных выступлений и концертов.

Довольно часто именно на LED экранах, расположенных на проходимых точках города, транслируют рекламу. Конструкцию целесообразно
 устанавливать в местах скопления людей, транспортного потока. При таком формате эффективно размещать ролики, не превышающие по длительности пяти секунд. '
                    text2='Не менее популярны экраны для проведения свадеб, промоакций, корпоративных встреч, презентаций нового продукта или услуги. Технология дает возможность использования не только в помещении, но и на улице практически при любых погодных условиях. Использование светодиодного экрана дает возможность привлечь внимание участников мероприятия и донести до них важную информацию.

Установка светодиодного экрана позволяет настроить оптимальный уровень яркости и цвета в зависимости от условий,
 где будет использоваться оборудование. Несомненное преимущество – низкий уровень шума и энергопотребления при работе. '
                    text3='Оформить заказ на выгодных условиях

Взять в аренду LED экран и дополнительное оборудование можно, обратившись в специализированную компанию. Специалисты не только доставят и смонтируют установку. При необходимости можно подобрать ноутбук или другие аксессуары, необходимые для работы. После завершения мероприятия экран будет демонтирован и вывезен на склад силами команды. '
                    text4=' Чтобы обсудить условия аренды, достаточно воспользоваться формой обратной связи или позвонить по указанному на сайте телефону.'

                />
                <FeedBack setOfferModal={setOfferModal}/>
            </Layout>
            <SitesModal sites={sites} setSites={setSites} setOfferModal={setOfferModal} title='Получить расчет'/>
            <OfferModal offerModal={offerModal} setOfferModal={setOfferModal}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </>
    )
}

export default Screens;