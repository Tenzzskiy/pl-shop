import React from "react";
import styles from './Offer.module.scss'
import {OfferCard} from "./OfferCard/OfferCard";
import {useState} from "react";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';
import data from './../Shop/cart_arenda-plasm77.ru.json'
import {useWindowSize} from "../../Hooks/useWindowSize";
import cs from 'classnames'


export const Offer = ({active,setActive,title=' С этим товаром часто берут',busket=0 }) =>{
    // const [currentSlide, setCurrentSlide] = React.useState(0);
    // const [loaded, setLoaded] = useState(false);
    // const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    //     initial: 0,
    //     loop: false,
    //     rtl: true,
    //     slides: {
    //         perView: 4.2,
    //         spacing: 10
    //     },
    //     slideChanged(slider) {
    //         setCurrentSlide(slider.track.details.rel);
    //     },
    //     created() {
    //         setLoaded(true);
    //     }
    // });


   const size = useWindowSize();

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
                <OfferCard price={elem.price} title={elem.name} img={elem.img} data={elem} id={elem.id} active={active} setActive={setActive} busket={busket} />
            </div>
        </div>

    )

    return(
        <>
            <div className={cs(styles.offer,busket === 1 ? styles.busket : null)}>
            <div className={styles.container}>
            <div className={styles.content}>


            <div className={cs(styles.title,busket === 1 ? styles.busket : null)}>
                {title}
            </div>
                <div className={cs("navigation-wrapper", styles.navigation_wrapper)}>
                    {/*<div ref={sliderRef} className="keen-slider">*/}
                    {/*    <div className="keen-slider__slide number-slide1"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide2"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide3"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide4"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide5"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide6"><OfferCard/></div>*/}
                    {/*</div>*/}
                    {/*{loaded && instanceRef.current && (*/}
                    {/*    <>*/}
                    {/*        <Arrow*/}
                    {/*            left*/}
                    {/*            onClick={(e: any) =>*/}
                    {/*                e.stopPropagation() || instanceRef.current?.prev()*/}
                    {/*            }*/}

                    {/*        />*/}

                    {/*        <Arrow*/}
                    {/*            onClick={(e: any) =>*/}
                    {/*                e.stopPropagation() || instanceRef.current?.next()*/}
                    {/*            }*/}

                    {/*        />*/}
                    {/*    </>*/}
                    {/*)}*/}

                    <div ref={sliderRef} className={cs("keen-slider",styles.Slider_keen)}>
                        {items}


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
        </>
    )
}
// function Arrow(props: {
//     disabled: boolean;
//     left?: boolean;
//     onClick: (e: any) => void;
// }) {
//
//     return (
//         <div className={`button-block ${
//             props.left ? "button-block--left" : "button-block--right"
//         } `} >
//         <svg
//             onClick={props.onClick}
//             className={`arrow ${
//                 props.left ? "arrow--left" : "arrow--right"
//             } `}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//         >
//             {props.left && (
//                 <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//             )}
//             {!props.left && (
//                 <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//             )}
//         </svg>
//         </div>
//     );
// }

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
