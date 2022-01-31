import React, {FunctionComponent, ReactNode, useState} from "react";
import styles from './ShopItem.module.scss'
import {Selector} from "../../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart, updateTotalPrice} from '../../../redux/cart/reducer.js'


export const ShopItem = ( { data,children,price,count,img,title,active,setActive,id,...props}) =>{
    const dispatch = useDispatch();
    const [time, setTime] = useState('1 сутки');
    const Priced = Number(price);
    const [changedPrice,setChangedPrice] = useState(Number(price))
    const items = useSelector(state => state.cart.itemsInCart);
    const handleClick =() =>{
        dispatch(setItemInCart({img,changedPrice,id,title,time,Priced}));
        dispatch(updateTotalPrice(Number(changedPrice)))
        setActive(true);

    }



    return(
        <>
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <picture>
                        <img src={img} alt="" width='251' height='188'/>
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
                        <Selector changedPrice={changedPrice} setChangedPrice={setChangedPrice} data={data} price={data.price} setTime={setTime} time={time}  />
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