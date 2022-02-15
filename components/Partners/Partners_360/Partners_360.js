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
            <h1 className={styles.title}>
                Наши клиенты
            </h1>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className={cn("keen-slider__slide",styles.slider)}>
                        <div className={styles.flex}>


                            <div className={styles.faded}> <MyImage src={"/Clients/client_1.svg"} alt="maximice" />   </div>
                            <div className={styles.faded}><MyImage src={ "/Clients/client_2.svg"} alt="mega" />    </div>
                        </div>
                    </div>
                    <div className={cn("keen-slider__slide",styles.slider)}>
                        <div className={styles.flex}>
                            <div className={styles.faded}><MyImage src={ "/Clients/client_3.svg"} alt="volkswagen" /></div>
                            <div className={styles.faded}><MyImage src={"/Clients/client_4.svg"} alt="porsche" /></div>
                        </div>

                    </div>
                    <div className={cn("keen-slider__slide",styles.slider)}>
                        <div className={styles.flex}>
                            <div className={styles.faded}><MyImage src={{default: "/Clients/client_5.svg"}} alt="lacoste" /></div>
                            <div className={styles.faded}><MyImage src={{default: "/Clients/client_6.svg"}} alt="adidas" /></div>
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