import React from "react";
import styles from './Modal.module.scss'
import cs from 'classnames'
import {useSelector} from "react-redux";


export const Modal = ( {active,setActive}) =>{
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const itemsCount = items.length;
    const quantity = items[items.length-1];
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
                            <div className={styles.back} onClick={() => setActive(false)}> Назад к покупкам</div>
                            <div className={styles.button}> <button> Перейти в корзину</button> </div>
                        </div>
                    </div>

                    <div className={styles.title}>Товар добавлен в корзину </div>
                    <div className={styles.item}>
                        <div className={styles.img}>
                            <picture>
                                <img src={quantity.img} alt=""/>
                            </picture>
                        </div>
                        <div className={styles.item_content}>
                            <span className={styles.item_title}>{quantity.title} </span>
                            <div className={styles.firstDescription}>1 </div>
                            <div className={styles.lastDescription}>2 </div>
                            <div className={styles.flex}>

                                <span className={styles.time}> {quantity.time}:</span>
                                <span className={styles.price} > {quantity.changedPrice}₽</span>
                            </div>

                        </div>
                    </div>
                    <div className={styles.recommendation}>
                        Рекомендуем добавить к заказу:
                    </div>
                    <div className={styles.slider}>

                    </div>

                </div>
            </div> : null}
        </>
    )
}