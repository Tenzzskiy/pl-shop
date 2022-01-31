import React, {useState} from "react";
import styles from './ModalCard.module.scss'
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";
import {useDispatch, useSelector} from "react-redux";



export const ModalCard = ({img,title,price,id }) => {
    const roundHundred = (value) =>{
        return Math.round(value/100)*100
    }
    const [a] = useState(Number(price))
    const [b] = useState(roundHundred(Number(a) + (Number(a) * 0.5)))
    const [c] = useState(roundHundred(b + (Number(a) * 0.4)) )
    const [d] = useState(roundHundred(c + (Number(a) * 0.35)))
    const [e] = useState(roundHundred(d + (Number(a) * 0.3)))
    const items = useSelector(state => state.cart.itemsInCart);
    const quantity = items[items.length-1];
    const time = quantity.time;
    const dispatch = useDispatch();
    const [changedPrice,setChangedPrice] = useState(time === '1 сутки' ? a :
        time === '2 суток' ? b :
            time === '3 суток' ? c :
                time === '4 суток' ? d :
                    time === '5 суток' ? e : null )
    const Priced = Number(price);
    const handleClick =() =>{
        dispatch(setItemInCart({img,changedPrice,id,title,time,Priced}))
        dispatch(updateTotalPrice(changedPrice))
    }

    return(
        <>
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.img}>
                <picture>
                    <img src={img} alt=""/>
                </picture> </div>
            <div className={styles.title}>{title} </div>
            <div className={styles.footer}>
            <div className={styles.price}>+{time === '1 сутки' ? a :
                                          time === '2 суток' ? b :
                                              time === '3 суток' ? c :
                                              time === '4 суток' ? d :
                                                time === '5 суток' ? e : null }₽</div>
            <div className={styles.busket} onClick={handleClick}><img src='/ShopItem/busket.svg' alt=""/> </div>
            </div>
            </div>
        </div>
        </>
    )
}