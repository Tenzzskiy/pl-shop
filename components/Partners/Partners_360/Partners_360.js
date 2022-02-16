import React from "react"
import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from './Partners_360.module.scss'
import {useState} from "react";
import cn from 'classnames'
import {MyImage} from "../../MyImage";
export const Partners_360 = ({}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })


    // @ts-ignore
    return (
        <section className={styles.partners_360}>
            <h2 className={styles.title}>
                Наши клиенты
            </h2>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className={cn("keen-slider__slide",styles.slider)}>
                        <div className={styles.flex}>


                            <div className={styles.faded}> <MyImage width='156' height='104' src={{default: "/assets/images/clients_1.jpg"}} alt="maximice" />   </div>
                            <div className={styles.faded}><MyImage width='156' height='104' src={{default: "/assets/images/clients_2.jpg"}} alt="mega" />    </div>
                        </div>
                    </div>
                    <div className={cn("keen-slider__slide",styles.slider)}>
                        <div className={styles.flex}>
                            <div className={styles.faded}><MyImage width='156' height='104' src={{default: "/assets/images/clients_3.jpg"}} alt="volkswagen" /></div>
                            <div className={styles.faded}><MyImage width='156' height='104' src={{default: "/assets/images/clients_4.jpg"}} alt="porsche" /></div>
                        </div>

                    </div>
                    <div className={cn("keen-slider__slide",styles.slider)}>
                        <div className={styles.flex}>
                            <div className={styles.faded}><MyImage width='156' height='104' src={{default: "/assets/images/clients_5.jpg"}} alt="lacoste" /></div>
                            <div className={styles.faded}><MyImage width='156' height='104' src={{default: "/assets/images/clients_6.jpg"}} alt="adidas" /></div>
                        </div>
                    </div>
                    {loaded && instanceRef.current && (
                        <div className={styles.dots}>
                            <div className="dots">
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
                        </div>
                    )}
                </div>

            </div>
        </section>

    )
}