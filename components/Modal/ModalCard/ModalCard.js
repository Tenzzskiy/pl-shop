import React, {useState} from "react";
import styles from './ModalCard.module.scss'
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import cs from "classnames";



export const ModalCard = ({img,title,price,id,setActive,detail1,detail2,mainDetail,mainDetail2 }) => {
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
        dispatch(setItemInCart({img,changedPrice,id,title,time,Priced,detail1,detail2,mainDetail,mainDetail2}))
        dispatch(updateTotalPrice(changedPrice))
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
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.img}>
                <picture>
                    <img src={img} alt={title}/>
                </picture> </div>
            <div className={styles.title}>{title} </div>
            <div className={styles.footer}>
            <div className={styles.price}>+{time === '1 сутки' ? a :
                                          time === '2 суток' ? b :
                                              time === '3 суток' ? c :
                                              time === '4 суток' ? d :
                                                time === '5 суток' ? e : null }₽</div>
            <div className={cs(styles.busket,check() ? styles.disabled_busket_background : null)} onClick={check() ? () => setActive(false) : handleClick}>


                { check() ?

                    <Link href="/busket"><a>  <div className={styles.disabled_busket}>
                        <img src="/ShopItem/selected_busket.svg" alt=""/>
                    </div></a></Link> :
                        <img src="/ShopItem/busket.svg" alt=""/>

                }
            </div>
            </div>
            </div>
        </div>
        </>
    )
}