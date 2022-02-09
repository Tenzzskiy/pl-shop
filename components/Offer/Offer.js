import React from "react";
import styles from './Offer.module.scss'
import {OfferCard} from "./OfferCard/OfferCard";
import {useState} from "react";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';
import data from '../../sources/data/cart_arenda-plasm77.ru.json'
import {useWindowSize} from "../../Hooks/useWindowSize";
import cs from 'classnames'


export const Offer = ({count=0,active,setActive,title=' С этим товаром часто берут',busket=0 }) =>{



    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 4,
            spacing:15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });


    const items =  data.mainAdditionals.map(elem  =>
        <div className="keen-slider__slide number-slide2" key={elem.id}>
            <div className={styles.flex} >
                <OfferCard price={elem.price} title={elem.name} img={elem.img} data={elem} id={elem.id} active={active} setActive={setActive} busket={busket}
                           detail1={elem.detail1}
                           detail2={elem.detail2}
                           mainDetail2={elem.mainDetail2}
                           mainDetail={elem.mainDetail}

                />
            </div>
        </div>)
    const items1 =  data.ledAdditionals.map(elem  =>
        <div className="keen-slider__slide number-slide2" key={elem.id}>
            <div className={styles.flex} >
                <OfferCard price={elem.price} title={elem.name} img={elem.img} data={elem} id={elem.id} active={active} setActive={setActive} busket={busket}
                            Switch={elem.Switch}
                           detail1={elem.detail1}
                           detail2={elem.detail2}
                           mainDetail2={elem.mainDetail2}
                           mainDetail={elem.mainDetail}
                />
            </div>
        </div>


    )
    const items2 =  data.touchAdditionals.map(elem  =>
        <div className="keen-slider__slide number-slide2" key={elem.id}>
            <div className={styles.flex} >
                <OfferCard price={elem.price} title={elem.name} img={elem.img} data={elem} id={elem.id} active={active} setActive={setActive} busket={busket}
                           detail1={elem.detail1}
                           detail2={elem.detail2}
                           mainDetail2={elem.mainDetail2}
                           mainDetail={elem.mainDetail}
                />
            </div>
        </div>


    )
    const items3 =  data.projectorAdditionals.map(elem  =>
        <div className="keen-slider__slide number-slide2" key={elem.id}>
            <div className={styles.flex} >
                <OfferCard price={elem.price} title={elem.name} img={elem.img} data={elem} id={elem.id} active={active} setActive={setActive} busket={busket}
                           detail1={elem.detail1}
                           detail2={elem.detail2}
                           mainDetail2={elem.mainDetail2}
                           mainDetail={elem.mainDetail}
                />
            </div>
        </div>


    )
    const items4 =  data.laptopAdditionals.map(elem  =>
        <div className="keen-slider__slide number-slide2" key={elem.id}>
            <div className={styles.flex} >
                <OfferCard price={elem.price} title={elem.name} img={elem.img} data={elem} id={elem.id} active={active} setActive={setActive} busket={busket}
                           detail1={elem.detail1}
                           detail2={elem.detail2}
                           mainDetail2={elem.mainDetail2}
                           mainDetail={elem.mainDetail}
                />
            </div>
        </div>


    )

    return(
        <section>
            <div className={cs(styles.offer,busket === 1 ? styles.busket : null)}>
            <div className={styles.container}>
            <div className={styles.content}>


            <h2 className={cs(styles.title,busket === 1 ? styles.busket : null)}>
                {title}
            </h2>
                <div className={cs("navigation-wrapper", styles.navigation_wrapper)}>

                    <div ref={sliderRef} className={cs("keen-slider",styles.Slider_keen)}>
                        {count === 0 ?  items1 : null}
                        {count === 1 ?  items: null}
                        {count === 2 ?  items2: null}
                        {count === 3 ?  items3: null}
                        {count === 4 ?  items4: null}


                    </div>

                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 4
                                }
                            />
                        </>
                    )}

                </div>
                {loaded && instanceRef.current && (
                    <div className={styles.dots}>

                        {[
                            ...Array(instanceRef.current.track.details.slides.length -3).keys()
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
                )}


            </div>
            </div>
            </div>
        </section>
    )
}


 export function Arrow({
    disabled,
    left,
    onClick
}) {
    const disabeld = disabled ? "arrow--disabled" : "";
    return (
        <div className={`button-block ${
            left ? "button-block--left" : "button-block--right"
        } ${disabeld}`}  onClick={onClick}>
        <svg

            className={`arrow ${
                left ? "arrow--left" : "arrow--right"
            } `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
        </div>
    );
}
