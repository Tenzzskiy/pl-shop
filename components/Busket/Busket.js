import styles from './Busket.module.scss'
import Layout from "../Layout/Layout";
import {BusketCard} from "./BusketCard/BusketCard";
import {useSelector} from "react-redux";
import data from "../Shop/cart_arenda-plasm77.ru.json";
import {ShopItem} from "../Shop/ShopItem/ShopItem";
import React from "react";
import {useWindowSize} from "../../Hooks/useWindowSize";



export const ResultBusket = ( { }) => {

    const size = useWindowSize();
    const items = useSelector(state => state.cart.itemsInCart);
    let result = 0;
    items.map(elem => result += elem.changedPrice)
    const count = items.length;
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const goods =  items.map(elem  =>
        <BusketCard
            key={elem.id}
        id={elem.id}
        time={elem.time}
        price={elem.changedPrice}
        img={elem.img}
        title={elem.title}
            data={elem}
        />  )
    return(
        <>
        <div className={styles.container}>
<div className={styles.content}>
    <div className={styles.title} onClick={() => console.log(items)}>
        Моя корзина{size.height}
    </div>
    <div className={styles.flex}>
        <div className={styles.items}>{goods}</div>
        <div className={styles.menu}>
        <div className={styles.menu_container}>
            <div className={styles.menu_title}>Итого:</div>
            <div className={styles.total}>
                <div>{count} товаров</div>
                <div className={styles.toch}>....................................</div>
                <div className={styles.totalPrice}>{result}₽</div>
            </div>
            <div className={styles.add}>*финальная стоимость
                с учётом доставки рассчитывается менеджером</div>
            <div className={styles.contacts}>
            <div className={styles.number}> </div>
            <div className={styles.type}> </div>
            </div>
        </div>
        </div>
    </div>
</div>
        </div>
        </>
    )
}