
import Layout from "../components/Layout/Layout";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {Preferences} from "../components/Preferences/Preferences";
import {Cleaning} from "../components/Cleaning/Cleaning";
import {SoundSale} from "../components/SoundSale/SoundSale";
import {Shop} from "../components/Shop/Shop";
import React from "react";
import {Preferences_768} from "../components/Preferences/Right/right";
import {Preferences_360} from "../components/Preferences/Preferences_360/Preferences_360";
import {useWindowSize} from "../Hooks/useWindowSize";
import {Provider} from "react-redux";
import {store} from "../redux";
const Sound = ({  }) => {
    const size = useWindowSize();
    return (
      <Provider store={store}>
          <Layout >
              <MediumHeaderComponent
                  button_text='Рассчитать стоимость'
                  title='Звук, свет и окружение'
                  mainImg="/header/Sound/main.jpg"
                  img_360='/header/Sound/middle_360.jpg'
              />


              {size.width > 1200 ?
                  <Preferences
                      count={6}
                      rightTitle='Предусмотреть все нюансы'
                      rightText='Мы приложим все наши усилия и богатый
             опыт для того, чтобы всё прошло зрелищно и гладко.
             Для этого у нас в ассортименте есть всё необходимое!'
                      rightImg='/Preferences/Sound/1.jpg'
                      title='Что нужно для идеального мероприятия'
                  /> : null

              }
              {size.width < 1200 && size.width > 720 ?
                  <Preferences_768
                      count={6}
                      rightTitle='Предусмотреть все нюансы'
                      rightText='Мы приложим все наши усилия и богатый
             опыт для того, чтобы всё прошло зрелищно и гладко.
             Для этого у нас в ассортименте есть всё необходимое!'
                      rightImg='/Preferences/Sound/1.jpg'
                      title='Что нужно для идеального мероприятия'
                  /> : null
              }
              {
                  size.width <720 ?
                      <Preferences_360
                          count={6}
                          rightTitle='Предусмотреть все нюансы'
                          rightText='Мы приложим все наши усилия и богатый
             опыт для того, чтобы всё прошло зрелищно и гладко.
             Для этого у нас в ассортименте есть всё необходимое!'
                          rightImg='/Preferences/Sound/1.jpg'
                          mainTitle='Что нужно для идеального мероприятия'
                      /> : null
              }
              {/*<SoundSale />*/}
              <Shop page={8} />
              <Cleaning />
          </Layout>
      </Provider>
    )
}



export default Sound;