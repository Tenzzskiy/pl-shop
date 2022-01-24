import React, {useState} from "react";
import styles from '../Offer.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";
import data from "../../Shop/cart_arenda-plasm77.ru.json";
import {OfferCard} from "./OfferCard";
import {useKeenSlider} from "keen-slider/react";
import {Arrow} from "../Offer";
import styles2 from './Offer_360.module.scss'
import cs from 'classnames'
export const Offer_360 = ({item1,item2,item3,item4,item5,item6,item7,item8,item9,item10} ) =>{
    const size = useWindowSize();


    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 1.1
            // perView:"auto",
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
                <OfferCard price={elem.price} title={elem.name} img={elem.img} />
            </div>
        </div>

    )
            return(
            <>
                <div className={styles.offer}>
                    <div className={styles.container}>
                        <div className={styles.content}>


                            <div className={styles.title}>
                                С этим товаром часто берут
                            </div>
                            <div className={cs("navigation-wrapper", styles.navigation_wrapper)}>

                                <div ref={sliderRef} className="keen-slider">
                                    {items}

                                </div>

                                {/*{loaded && instanceRef.current && (*/}
                                {/*    <>*/}
                                {/*        <Arrow*/}
                                {/*            left*/}
                                {/*            onClick={(e) =>*/}
                                {/*                e.stopPropagation() || instanceRef.current?.prev()*/}
                                {/*            }*/}
                                {/*            disabled={currentSlide === 0}*/}
                                {/*        />*/}

                                {/*        <Arrow*/}
                                {/*            onClick={(e) =>*/}
                                {/*                e.stopPropagation() || instanceRef.current?.next()*/}
                                {/*            }*/}
                                {/*            disabled={*/}
                                {/*                currentSlide ===*/}
                                {/*                instanceRef.current.track.details.slides.length - 1*/}
                                {/*            }*/}
                                {/*        />*/}
                                {/*    </>*/}
                                {/*)}*/}

                            </div>
                            {loaded && instanceRef.current && (
                                <div className={styles2.dots}>

                                    {[
                                        ...Array(instanceRef.current.track.details.slides.length).keys()
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