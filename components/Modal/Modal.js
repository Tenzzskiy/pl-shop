import React, {useState} from "react";
import styles from './Modal.module.scss'
import cs from 'classnames'
import {useSelector} from "react-redux";
import {Arrow, Offer} from "../Offer/Offer";
import {useWindowSize} from "../../Hooks/useWindowSize";
import {useKeenSlider} from "keen-slider/react";
import data from "../Shop/cart_arenda-plasm77.ru.json";
import {OfferCard} from "../Offer/OfferCard/OfferCard";
import {ModalCard} from "./ModalCard/ModalCard";


export const Modal = ( {active,setActive}) =>{
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const itemsCount = items.length;
    const quantity = items[items.length-1];
    const size = useWindowSize();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: size.width > 720 ? 3 : 1.5,
            spacing:35,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });
    const offers =  data.mainAdditionals.map(elem  =>
        <div className="keen-slider__slide number-slide2" key={elem.id}>
            <div className={styles.flex} >
                <ModalCard price={elem.price} title={elem.name} img={elem.img} data={elem} id={elem.id} />
            </div>
        </div>

    )
    return(
        <>
            {active ?  <div className={active ? cs(styles.modal,styles.active) : styles.modal } onClick={() => {
                setActive(false)

            }
            }>

                <div className={active ? cs(styles.content,styles.content_active) : styles.content} onClick={e => e.stopPropagation()}>
                    <div className={styles.exit} onClick={() => setActive(false)}>
                        <img src="/Modal/exit.svg" alt=""/></div>
                    <div className={styles.modal_footer}>
                        <div className={styles.footer_flex}>
                            <div className={styles.result_flex}>
                                <div className={styles.result}>
                                    Итого:{size.width}
                                </div>
                                <div className={styles.totalCount}>
                                    {itemsCount} товаров, {totalPrice}₽
                                </div>
                            </div>
                            {size.width > 720 ? <>
                                <div className={styles.back} onClick={() => setActive(false)}> Назад к покупкам</div>
                                <div className={styles.button}> <button> Перейти в корзину</button> </div>
                            </> :
                                <div className={styles.button_flex}>
                                    <div className={styles.back} onClick={() => setActive(false)}> Назад к покупкам</div>
                                    <div className={styles.button}> <button> Перейти в корзину</button> </div>
                                </div>

                            }
                        </div>
                    </div>

                    <div className={styles.title}>Товар добавлен в корзину </div>
                    <div className={styles.item}>
                        <div className={styles.img}>
                            <picture>
                                <img src={quantity.img} alt=""/>
                            </picture>
                            {size.width < 720 ?
                                <div>
                                    <div className={styles.flex}>

                                        <span className={styles.time}> {quantity.time}:</span>
                                        <span className={styles.price} > {quantity.changedPrice}₽</span>
                                    </div>
                                </div>
                          : null}
                        </div>
                        <div className={styles.item_content}>
                            <span className={styles.item_title}>{quantity.title} </span>
                            {size.width > 720 ?<>
                                <div className={styles.firstDescription}>1 </div>
                                <div className={styles.lastDescription}>2 </div>
                            </> : null}
                            {size.width > 720 ? <>
                                <div className={styles.flex}>

                                    <span className={styles.time}> {quantity.time}:</span>
                                    <span className={styles.price} > {quantity.changedPrice}₽</span>
                                </div>
                            </> : null}

                        </div>
                    </div>
                    <div className={styles.recommendation}>
                        Рекомендуем добавить к заказу:
                    </div>
                    <div className={styles.slider}>
                        <div className={cs("navigation-wrapper", styles.navigation_wrapper)}>


                            <div ref={sliderRef} className={cs("keen-slider",styles.Slider_keen)}>
                                {offers}


                            </div>

                            {size.width > 720 ?
                                loaded && instanceRef.current && (
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
                                                instanceRef.current.track.details.slides.length - 3
                                            }
                                        />
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
                    </div>

                </div>
            </div> : null}
        </>
    )
}