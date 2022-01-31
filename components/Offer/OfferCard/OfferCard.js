import React, {useState} from "react";
import styles from './OfferCard.module.scss'
import {Selector} from "../../Select/Select";
import {useDispatch} from "react-redux";
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";
import cs from 'classnames'


export const OfferCard= ( {price,title,img,data,id,active,setActive,busket,...props }) =>{
    const dispatch = useDispatch();
    const [changedPrice,setChangedPrice] = useState(Number(price))
    const [time, setTime] = useState('1 сутки');
    const Priced = Number(price);
    const handleClick =() =>{
        dispatch(setItemInCart({img,changedPrice,id,title,time,Priced}))
        dispatch(updateTotalPrice(Number(changedPrice)))
        {busket === 1 ? null : setActive(true)}
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
                    <Selector changedPrice={changedPrice} setChangedPrice={setChangedPrice} price={price} setTime={setTime} time={time}/>
                    </div>
                    <div className={styles.price}> {changedPrice}₽</div>
                    <div className={styles.busket} onClick={handleClick} >
                        <picture>
                            <img src="/ShopItem/whiteBusket.svg" alt="" />
                        </picture>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}