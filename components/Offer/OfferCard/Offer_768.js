import React, {useEffect, useState} from "react";
import styles from '../Offer.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";
import data from "../../../sources/data/cart_arenda-plasm77.ru.json";
import {OfferCard} from "./OfferCard";
import {useKeenSlider} from "keen-slider/react";
import {Arrow} from "../Offer";
import styles2 from './Offer_768.module.scss'
import cs from 'classnames'
export const Offer_768 = ({busket=0,active,setActive,title=' С этим товаром часто берут',count=0,selector} ) =>{
    const size = useWindowSize();

    const [perView,SetPerView] = useState()
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: size.width < 920 ? 2.1 : 3.1,

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
                <OfferCard selector={elem.selector}
                    price={elem.price} title={elem.name} img={elem.img} data={elem} id={elem.id} active={active} setActive={setActive} busket={busket}
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


                            <h1 className={cs(styles.title,busket === 1 ? styles.busket : null)}>
                                {title}
                            </h1>
                            <div className={cs("navigation-wrapper", styles.navigation_wrapper)}>

                                <div ref={sliderRef} className="keen-slider">
                                    {count === 0 ?  items1 : null}
                                    {count === 1 ?  items: null}
                                    {count === 2 ?  items2: null}
                                    {count === 3 ?  items3: null}
                                    {count === 4 ?  items4: null}
                                </div>


                            </div>
                            {loaded && instanceRef.current && (
                                <div className={styles2.dots} >

                                    {[
                                        ...Array(instanceRef.current.track.details.slides.length-(size.width>720 && size.width <920 ? 1  : size.width >920 && size.width <1200 ? 2: null)).keys()
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