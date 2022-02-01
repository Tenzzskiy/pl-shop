import React, {useState} from "react";
import styles from './OfferCard.module.scss'
import {Selector} from "../../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";
import cs from 'classnames'
import Link from "next/link";


export const OfferCard= ( {price,title,img,data,id,active,setActive,busket,...props }) =>{
    const dispatch = useDispatch();
    const [changedPrice,setChangedPrice] = useState(Number(price))
    const [time, setTime] = useState('1 сутки');
    const Priced = Number(price);
    const items = useSelector(state => state.cart.itemsInCart);
    const handleClick =() =>{
        dispatch(setItemInCart({img,changedPrice,id,title,time,Priced}))
        dispatch(updateTotalPrice(Number(changedPrice)))
        {busket === 1 ? null : setActive(true)}
    }
    const check = () =>{
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                return true;

            }
        }
        return false;

    }
    return(

        <>
            <div className={cs(styles.container,busket === 1 ? styles.busket : null)}>
            <div className={styles.content}>
            <div className={styles.img}>
                <picture>
                    <img src={img} alt=""/>
                </picture>
            </div>
                <div className={styles.title}> {title}</div>
                <div className={styles.subTitle}>
                    <div>Детали: </div>
                    <div>с полочкой-держателем </div>
                   </div>
                <div className={styles.flex}>
                    <div className={styles.select}>
                    <Selector changedPrice={changedPrice} setChangedPrice={setChangedPrice} price={price} setTime={setTime} time={time} check={check()}/>
                    </div>
                    <div className={styles.price}> {changedPrice}₽</div>
                    <div className={styles.busket} onClick={check() ? null : handleClick} >
                        {/*<picture>*/}
                        {/*    <img src="/ShopItem/whiteBusket.svg" alt="" />*/}
                        {/*</picture>*/}
                        { check() ?

                            <Link href="/busket"><a>  <div className={styles.disabled_busket}>
                                <img src="/ShopItem/selected_busket.svg" alt=""/>
                            </div></a></Link> :
                            <div className={styles.bucket} >
                                <img src="/ShopItem/whiteBusket.svg" alt=""/>
                            </div>

                        }
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}