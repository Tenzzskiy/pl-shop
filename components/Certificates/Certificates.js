import styles from './Certificates.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import React, {useState} from "react";
import {useKeenSlider} from "keen-slider/react";
import cs from "classnames";


export const Certificates = () =>{
    const size = useWindowSize();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: size.width < 600 ? 1.3 :  size.width > 600 && size.width < 800 ? 2.2 : size.width>800 && size.width < 1200 ?   3 : null ,
            spacing:15,
            // perView:"auto",
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });
    return(
        <>
        <div className={styles.certificates}>
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Сертификаты на оборудование и антисептики </div>
                {size.width > 1200 ?


                    <div className={styles.grid}>
                        <picture>
                            <img src="/Certificates/1.png" alt=""/>
                        </picture>
                        <picture>
                            <img src="/Certificates/2.png" alt=""/>
                        </picture>
                        <picture>
                            <img src="/Certificates/3.png" alt=""/>
                        </picture>
                        <picture>
                            <img src="/Certificates/4.png" alt=""/>
                        </picture>


                    </div> : null}
                {size.width < 1200 ?
                        <>
                    <div className={cs("navigation-wrapper", styles.navigation_wrapper)}>

                        <div ref={sliderRef} className="keen-slider">
                            <div className={cs("keen-slider__slide number-slide2",styles.slider_slide)} >
                                <picture >
                                    <img src="/Certificates/1.png" alt=""/>
                                </picture>
                            </div>

                        <div className={cs("keen-slider__slide number-slide2",styles.slider_slide)} >
                            <picture>
                                <img src="/Certificates/2.png" alt=""/>
                            </picture>
                        </div>

                        <div className={cs("keen-slider__slide number-slide2",styles.slider_slide)} >
                            <picture>
                                <img src="/Certificates/3.png" alt=""/>
                            </picture>
                        </div>

                        <div className={cs("keen-slider__slide number-slide2",styles.slider_slide)} >
                            <picture>
                                <img src="/Certificates/4.png" alt=""/>
                            </picture>
                        </div>

                        </div>
                    </div>
                    {loaded && instanceRef.current && (
                        <div className={styles.dots}>

                            {[
                                ...Array(instanceRef.current.track.details.slides.length- (size.width > 600 && size.width <800 ? 1 : size.width > 800? 2 : null) ).keys()
                            ].map((idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(idx);
                                        }}
                                        className={"dot" + (currentSlide === idx ? " active" : "")}
                                    > </button>
                                );
                            })}

                        </div>
                    )} </> : null
                }


            </div>
            </div>
        </div>
        </>
    )
}