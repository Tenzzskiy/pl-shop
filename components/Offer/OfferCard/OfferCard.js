import React, {useState} from "react";
import styles from './OfferCard.module.scss'
import {Selector} from "../../Select/Select";
import {useDispatch} from "react-redux";
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";



export const OfferCard= ( {price,title,img,data,id,active,setActive,...props }) =>{
    const dispatch = useDispatch();
    const [changedPrice,setChangedPrice] = useState(Number(price))
    const [time, setTime] = useState('1 сутки');
    const handleClick =() =>{
        dispatch(setItemInCart({img,changedPrice,id,title,time}))
        dispatch(updateTotalPrice(Number(changedPrice)))
        setActive(true)
    }

    return(

        <>
            <div className={styles.container}>
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
                    <Selector changedPrice={changedPrice} setChangedPrice={setChangedPrice} price={price} setTime={setTime} />
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