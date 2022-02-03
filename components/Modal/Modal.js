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
import {Slider} from "../Slider/Slider";
import {useEffect} from "react";
import Link from "next/link";
export const Modal = ( {active,setActive}) =>{

    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const itemsCount = items.length;
    const quantity = items[items.length-1];
    const size = useWindowSize();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [perView] =useState(size.width > 720 ? 1.5:3)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: perView,
            spacing:35,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = active ? 'hidden' : 'auto';
    }, [active])

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
                                    Итого:
                                </div>
                                <div className={styles.totalCount}>
                                    {itemsCount} товаров, {totalPrice}₽
                                </div>
                            </div>
                            {size.width > 720 ? <>
                                <div className={styles.back} onClick={() => setActive(false)}> Назад к покупкам</div>
                                    <Link href="/busket"><a><div onClick={() => setActive(false)} className={styles.button}> <button> Перейти в корзину</button> </div></a></Link>
                            </> :
                                <div className={styles.button_flex}>
                                    <div className={styles.back} onClick={() => setActive(false)}> Назад к покупкам</div>
                                    <Link href="/busket"><a><div onClick={() => setActive(false)} className={styles.button} > <button> Перейти в корзину</button> </div></a></Link>
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

                                    <div className={styles.flex}>

                                        <span className={styles.time}> {quantity.time}:</span>
                                        <span className={styles.price} > {quantity.changedPrice}₽</span>
                                    </div>

                          : null}
                        </div>
                        <div className={styles.item_content}>
                            <span className={styles.item_title}>{quantity.title} </span>
                            {size.width > 720 ?<>
                                <div className={styles.detail}>

                                    <span> {quantity.mainDetail}</span>
                                    <p>{quantity.detail1}</p>
                                </div>
                                <div className={styles.detail}>

                                    <span>{quantity.mainDetail2}</span>
                                    <p> {quantity.detail2}</p>
                                </div>
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
                        {size.width > 720 ? <Slider perView={3} setActive={setActive}/> : <Slider perView={1.5} setActive={setActive}/> }
                    </div>

                </div>
            </div> : null}
        </>
    )
}