import React, {FunctionComponent, ReactNode, useState} from "react";
import styles from './ShopItem.module.scss'
import {Selector} from "../../Select/Select";
import {useDispatch} from "react-redux";
import {setItemInCart, updateTotalPrice} from '../../../redux/cart/reducer.js'


export const ShopItem = ( { data,children,price,count,img,title,id,active,setActive,...props}) =>{
    const dispatch = useDispatch();
    const [time, setTime] = useState('1 сутки');
    const [changedPrice,setChangedPrice] = useState(Number(price))
    const handleClick =() =>{
        dispatch(setItemInCart({img,changedPrice,id,title,time}))
        dispatch(updateTotalPrice(changedPrice))
        setActive(true);
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
                <div className={styles.flex}>
                    <div className={styles.title}>{title}</div>
                    {count === 1 ?
                        <>
                        <div className={styles.detail}>

                            <span> Рарешение:</span>
                            <p>4k,FullHD</p>
                        </div>
                            <div className={styles.detail}>

                                <span>Выходы:</span>
                                <p>AV, Wi-Fi, HDMI, USB 2.0</p>
                            </div>

                        </> : null
                    }

                    <div className={styles.card_footer}>
                        <Selector changedPrice={changedPrice} setChangedPrice={setChangedPrice} price={price} setTime={setTime}/>
                        <span> {changedPrice}₽ </span>
                        <div className={styles.bucket} onClick={handleClick}>
                            <img src="/ShopItem/busket.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}