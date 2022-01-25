import styles from './../styles/index.module.scss'
import Layout from "../components/Layout/Layout";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import React from "react";
import Sale from "../components/Sale/Sale";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import {Partners} from "../components/Partners/Partners";
import {Conditions} from "../components/Conditions/Conditions";
import {Cleaning} from "../components/Cleaning/Cleaning";
import {Shop} from "../components/Shop/Shop";
import {Offer} from "../components/Offer/Offer";
import {Selector} from "../components/Select/Select";
import MainHeaderComponent from "../components/HeaderComponent/MainHeaderComponent/MainHeaderComponent";
import Sale_768 from "../components/Sale/Sale_768/Sale_768";
import {PreferenceCard} from "../components/Preferences/PreferenceCard/PreferenceCard";
import {Left} from "../components/Preferences/LeftPreference_tablet/left";
import {Preferences_768, Right} from "../components/Preferences/Right/right";
import {useWindowSize} from "../Hooks/useWindowSize";
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360.js";
import {Preferences} from "../components/Preferences/Preferences";
import {Offer_768} from "../components/Offer/OfferCard/Offer_768";
import data from "../components/Shop/cart_arenda-plasm77.ru.json";
import {OfferCard} from "../components/Offer/OfferCard/OfferCard";
import {Offer_360} from "../components/Offer/OfferCard/Offer_360";
import {Releases_768} from "../components/Relises/Releases_768/Releases_768";

const Home = ({  }) => {
    const size = useWindowSize();

  return (
    <Layout>
        <MainHeaderComponent />
        {size.width > 1200 ?
            <Preferences
                count={4}
                title='Ваши выгоды с PLAZMA77'
                leftImg="/Preferences/1.png"
                rightImg="/Preferences/2.png"
                secondLeftImg='/Preferences/3.png'
                secondRightImg='/Preferences/4.png'
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
                leftImg="/Preferences/1.png"
                rightImg="/Preferences/2.png"
                secondLeftImg='/Preferences/3.png'
                secondRightImg='/Preferences/4.png'
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
                    mainTitle='Ваши выгоды с PLAZMA77'
                    leftImg="/Preferences/1.png"
                    rightImg="/Preferences/2.png"
                    secondLeftImg='/Preferences/3.png'
                    secondRightImg='/Preferences/4.png'
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


        <Partners />
        <Conditions />
        <Shop page={1} />


        {size.width > 1200 ? <Offer /> : null }
        {size.width > 720 && size.width<1200 ? <Offer_768  /> : null }
        {size.width < 720  ? <Offer_360
                                                           /> : null }
        <Cleaning />
<Sale />


        {size.width > 1200 ?
            <Releases
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
        }
        <Seo
            image1='/Seo/seo1FirstPicture.png'
            image2='/Seo/2.png'
        text1='Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, которые представляют собой яркий пример
        континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит несомненную пользу
         обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: экономическая
         повестка сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей насущным потребностям.
          экономическая повестка сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей насущным потребностям. '
        text2=' Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством
         простого факта: экономическая повестка сегодняшнего дня
         требует от нас анализа системы обучения кадров, соответствующей насущным потребностям.'
        text3='Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний,
         которые представляют собой яркий пример континентально-европейского типа политической культуры,
         будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
          '
        text4='Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, которые представляют
        собой яркий пример континентально-европейского типа политической культуры, будут превращены в посмешище,
        хотя само их существование приносит несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством
         простого факта: экономическая повестка сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей насущным потребностям. '
            otherText=' Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого
           факта: экономическая повестка сегодняшнего дня требует от нас анализа системы обучения кадров,
         соответствующей насущным потребностям.  экономическая повестка сегодняшнего
          дня требует от нас анализа системы обучения кадров, соответствующей насущным потребностям. '
        />



    </Layout>
  )
}

export default Home;
