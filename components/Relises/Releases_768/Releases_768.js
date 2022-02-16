import React, {useState} from "react";
import styles  from './Releases_768.module.scss'
import {useKeenSlider} from "keen-slider/react";
import {PreferenceCard} from "../../Preferences/PreferenceCard/PreferenceCard";
import data from "../../../sources/data/cart_arenda-plasm77.ru.json";
import {ShopItem} from "../../Shop/ShopItem/ShopItem";
import cs from 'classnames'
import {MyImage} from "../../MyImage";
export const Releases_768 = ( {img1,img2,img3,img4,img5,text1,text2,text3,text4,text5 }) =>{
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 1,
            spacing:15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return(
        <section>
            <div className={styles.releases}>
            <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Реализованные проекты

                </h2>
                <div className={cs("navigation-wrapper",styles.navigation_wrapper)}>
                    <div ref={sliderRef} className="keen-slider">
                        <div className={cs("keen-slider__slide number-slide1",styles.slider_item)}> <ReleasesSlider img={img1} text={text1}/></div>
                        <div className={cs("keen-slider__slide number-slide1",styles.slider_item)}> <ReleasesSlider img={img2} text={text2}/></div>
                        <div className={cs("keen-slider__slide number-slide1",styles.slider_item)}> <ReleasesSlider img={img3} text={text3}/></div>
                        <div className={cs("keen-slider__slide number-slide1",styles.slider_item)}> <ReleasesSlider img={img4} text={text4}/></div>
                        <div className={cs("keen-slider__slide number-slide1",styles.slider_item)}> <ReleasesSlider img={img5} text={text5}/></div>


                    </div>

                </div>
                {loaded && instanceRef.current && (
                    <div className={styles.dots}>

                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                />
                            )
                        })}

                    </div>
                )}


            </div>
            </div>
            </div>
        </section>
    )
}

const ReleasesSlider = ({img,text} ) => {
    return(
        <>
        <div className={styles.slider_container} itemScope itemType="http://schema.org/ImageObject">

                <MyImage  itemProp="contentUrl" src={{default: img}} alt={text} />
                <div className={styles.faded_text} itemProp="name"> {text}</div>


        </div>
        </>
    )
}