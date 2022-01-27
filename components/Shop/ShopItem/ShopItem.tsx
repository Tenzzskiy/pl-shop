import React, {FunctionComponent, ReactNode, useState} from "react";
import styles from './ShopItem.module.scss'
import {Selector} from "../../Select/Select";
import {useDispatch} from "react-redux";
import {setItemInCart} from '../../../redux/cart/reducer.js'

interface ShopItemProps{
    children?:ReactNode,
    price?:number,
    count?:number,
    img?:string,
    title?:string,
    data?:object
}
export const ShopItem:FunctionComponent = ( { data,children,price,count,img,title,...props} : ShopItemProps) =>{
    const dispatch = useDispatch();
    const handleClick =() =>{

        dispatch(setItemInCart(data))
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
                        <Selector />
                        <span> {price}₽ </span>
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