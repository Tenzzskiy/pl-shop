import React, {FunctionComponent, ReactNode, useState} from "react";
import styles from './ShopItem.module.scss'
import {Disabled_Selector, Selector} from "../../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart, updateTotalPrice} from '../../../redux/cart/reducer.js'
import Link from "next/link";


export const ShopItem = ( { data,children,price,count,img,title,active,setActive,detail1,detail2,mainDetail,mainDetail2,id,...props}) =>{
    const [checked,setCheck] = useState(false)
    const dispatch = useDispatch();
    const [time, setTime] = useState('1 сутки');
    const Priced = Number(price);
    const [changedPrice,setChangedPrice] = useState(Number(price))
    const items = useSelector(state => state.cart.itemsInCart);
    const handleClick =() =>{
        dispatch(setItemInCart({img,changedPrice,id,title,time,Priced,detail1,detail2,mainDetail,mainDetail2}));
        dispatch(updateTotalPrice(Number(changedPrice)))
        setActive(true);

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
                        <img src={img} alt="" width='251' height='188'/>
                    </picture>
                </div>
                <div className={styles.flex}>
                    <div className={styles.title}>{title}</div>
                    {count === 1 ?
                        <>
                        <div className={styles.detail}>

                            <span> {mainDetail}</span>
                            <p>{detail1}</p>
                        </div>
                            <div className={styles.detail}>

                                <span>{mainDetail2}</span>
                                <p> {detail2}</p>
                            </div>

                        </> : null
                    }

                    <div className={styles.card_footer}>
                       <Selector changedPrice={changedPrice} setChangedPrice={setChangedPrice} data={data} price={data.price} setTime={setTime} time={time} check={check()} />
                        <span> {changedPrice}₽ </span>
                        { check() ?

                            <Link href="/busket"><a>  <div className={styles.disabled_busket}>
                                <img src="/ShopItem/selected_busket.svg" alt=""/>
                            </div></a></Link> :
                            <div className={styles.bucket} onClick={handleClick}>
                                <img src="/ShopItem/busket.svg" alt=""/>
                            </div>





                        }


                    </div>
                </div>
            </div>
            </div>
        </>
    )
}