import styles from './Slider.module.scss'
import cs from "classnames";
import {Arrow} from "../Offer/Offer";
import React, {useState} from "react";
import data from "../../sources/data/cart_arenda-plasm77.ru.json";
import {ModalCard} from "../Modal/ModalCard/ModalCard";
import {useKeenSlider} from "keen-slider/react";
import {useWindowSize} from "../../Hooks/useWindowSize";



export const Slider = ({perView,setActive}) =>{
    const size = useWindowSize();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 'auto',
            spacing:15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });
    const offers =  data.mainAdditionals.map(elem  =>
        <div className={cs("keen-slider__slide number-slide2",styles.slide)} key={elem.id}>
            <div className={styles.flex} >
                <ModalCard price={elem.price} title={elem.name} img={elem.img} data={elem} id={elem.id} setActive={setActive} detail1={elem.detail1} detail2={elem.detail2}
                           mainDetail2={elem.mainDetail2}
                           mainDetail={elem.mainDetail} total={elem.total} />
            </div>
        </div>

    )
    return(
        <>
            <div className={cs("navigation-wrapper", styles.navigation_wrapper)}>


                <div ref={sliderRef} className={cs("keen-slider",styles.Slider_keen)}>
                    {offers}


                </div>

                {size.width > 720 ?
                    loaded && instanceRef.current && (
                        <>
                        <div className={styles.button_left}>   <Arrow
                                left
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            /></div>

                            <div className={styles.button_right}>     <Arrow
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 3
                                }
                            /></div>
                        </>
                    ) : null


                }
                {size.width < 720 ?
                    loaded && instanceRef.current && (
                        <div className={styles.dots}>

                            {[
                                ...Array(instanceRef.current.track.details.slides.length ).keys()
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
                    ) : null

                }

            </div>
        </>
    )
}