
import Layout from "../components/Layout/Layout";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {Preferences} from "../components/Preferences/Preferences";
import React, {useState} from "react";
import {Choose} from "../components/Choose/Choose";
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
export  const getStaticProps = async () =>{
    return {
        props: {
            cards: data
        }
    };
}
const Projectors = ({ cards }) => {
    const size =useWindowSize();
    const [modalActive,setModalActive] = useState(false)
    return (
      <Provider store={store}>
          <Layout >
              <MediumHeaderComponent
                  button_text='Рассчитать стоимость'
                  title='Аренда проекторов'
                  mainImg="/header/Projectors/main.jpg"
                  img_360='/header/Projectors/middleHeader_360.jpg'
              />

              {size.width > 1200 ?
                  <Preferences
                      count={1}
                      title='Преимущества аренды проекторов'
                      leftImg="/Preferences/Projectors/1.png"
                      leftText='Универсальное средство для трансляции презентаций
                и видеороликов для малых аудиторий и больших залов. '
                      leftTitle=' Доступность и удобство'
                  /> : null

              }
              {size.width < 1200 && size.width > 720 ?
                  <Preferences_768
                      count={1}
                      title='Преимущества аренды проекторов'
                      leftImg="/Preferences/Projectors/1.png"
                      leftText='Универсальное средство для трансляции презентаций
                и видеороликов для малых аудиторий и больших залов. '
                      leftTitle=' Доступность и удобство'
                  /> : null
              }
              {
                  size.width <720 ?
                      <Preferences_360
                          count={1}
                          mainTitle='Преимущества аренды проекторов'
                          leftImg="/Preferences/Projectors/1.png"
                          leftText='Универсальное средство для трансляции презентаций
                и видеороликов для малых аудиторий и больших залов. '
                          leftTitle=' Доступность и удобство'
                      /> : null
              }
              <Choose />
              <Conditions />
              <Shop page={6} active={modalActive} setActive={setModalActive} data={cards}/>
              {size.width > 1200 ? <Offer /> : null }
              {size.width > 720 && size.width<1200 ? <Offer_768  /> : null }
              {size.width < 720  ? <Offer_360
              /> : null }
              <Cleaning />
              <Sale />

              {size.width > 1200 ?
                  <Releases
                      img1='/releases/Projectors/1.png'
                      img2='/releases/Projectors/2.png'
                      img3='/releases/Projectors/3.jpg'
                      img4='/releases/Projectors/4.png'
                      img5='/releases/Projectors/5.png'


                      text1='Применение проектора на форумах'
                      text2='Применение проектора для бизнес встреч'
                      text3='Применение проектора на форумах и корпоративах'
                      text4='Применение проектора на тренингах'
                      text5='Применение проектора в игровых зонах'
                  /> : null
              }
              { size.width < 1200  ?
                  <Releases_768
                      img1='/releases/Projectors/1.png'
                      img2='/releases/Projectors/2.png'
                      img3='/releases/Projectors/3.jpg'
                      img4='/releases/Projectors/4.png'
                      img5='/releases/Projectors/5.png'


                      text1='Применение проектора на форумах'
                      text2='Применение проектора для бизнес встреч'
                      text3='Применение проектора на форумах и корпоративах'
                      text4='Применение проектора на тренингах'
                      text5='Применение проектора в игровых зонах'
                  /> : null
              }
              {/*<Seo*/}
              {/*image1='/Seo/Projectors/1.png'*/}
              {/*image2='/Seo/Projectors/2.svg'*/}
              {/*text1=' Банальные, но неопровержимые выводы, а*/}
              {/* также акционеры крупнейших компаний, которые представляют*/}
              {/* собой яркий пример континентально-европейского типа политической*/}
              {/* культуры, будут превращены в посмешище, хотя само их существование*/}
              {/* приносит несомненную пользу обществу. Высокий уровень вовлечения*/}
              {/* представителей целевой аудитории является четким доказательством*/}
              {/* простого факта: экономическая повестка сегодняшнего дня требует от*/}
              {/* нас анализа системы обучения кадров, соответствующей насущным потребностям.*/}
              {/*   экономическая повестка сегодняшнего дня требует от нас анализа*/}
              {/*системы обучения кадров, соответствующей насущным потребностям.'*/}
              {/*text2='Банальные, но неопровержимые выводы,*/}
              {/* а также акционеры крупнейших компаний, которые представляют собой*/}
              {/* яркий пример континентально-европейского типа политической культуры,*/}
              {/*  будут превращены в посмешище, хотя само их существование приносит*/}
              {/*   несомненную пользу обществу. Высокий уровень вовлечения представителей*/}
              {/*   целевой аудитории является четким доказательством простого факта:*/}
              {/*   экономическая повестка сегодняшнего дня требует от нас анализа системы*/}
              {/*   обучения*/}
              {/* кадров, соответствующей насущным потребностям. '*/}
              {/*text3='Банальные, но неопровержимые выводы,*/}
              {/*а также акционеры крупнейших компаний, которые представляют собой яркий*/}
              {/* пример континентально-европейского типа политической культуры, будут*/}
              {/*  превращены в посмешище, хотя само их существование приносит несомненную*/}
              {/*   пользу обществу. Высокий уровень вовлечения представителей целевой*/}
              {/*   аудитории является четким доказательством простого факта: экономическая*/}
              {/*    повестка сегодняшнего дня требует от нас анализа системы обучения*/}
              {/*     кадров, соответствующей насущным потребностям.  экономическая*/}
              {/*     повестка сегодняшнего дня требует от нас анализа системы обучения*/}
              {/*      кадров,*/}
              {/* соответствующей насущным потребностям. '*/}
              {/*text4='Банальные, но неопровержимые выводы,*/}
              {/*а также акционеры крупнейших компаний, которые*/}
              {/*представляют собой яркий пример континентально-европейского*/}
              {/* типа политической культуры, будут превращены в посмешище,*/}
              {/* хотя само их существование приносит несомненную пользу обществу.*/}
              {/*  Высокий уровень вовлечения представителей целевой аудитории является*/}
              {/*   четким доказательством простого факта: экономическая повестка*/}
              {/*    сегодняшнего дня требует от нас анализа системы обучения кадров,*/}
              {/* соответствующей насущным потребностям. '*/}
              {/*/>*/}
              <FeedBack />
          </Layout>
          <Modal active={modalActive} setActive={setModalActive} />
      </Provider>
    )
}

export default Projectors;

