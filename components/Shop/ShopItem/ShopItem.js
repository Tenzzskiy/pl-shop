import React, {FunctionComponent, ReactNode, useState} from "react";
import styles from './ShopItem.module.scss'
import { Selector} from "../../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart, updateTotalPrice} from '../../../redux/cart/reducer.js'
import Link from "next/link";
import {LedSelector} from "../LedSelector/LedSelector";
import {MyImage} from "../../MyImage";
import cn from "classnames";


export const ShopItem = ( { total,detail,select1,select2,data,children,price,count,img,title,active,setActive,detail1,detail2,mainDetail,mainDetail2,id,...props}) =>{
    const [checked,setCheck] = useState(false)
    const num = 1;
   const item = true;
    const dispatch = useDispatch();
    const [time, setTime] = useState('1 сутки');
    const Priced = Number(price);
    const [changedPrice,setChangedPrice] = useState(Number(price))
    const items = useSelector(state => state.cart.itemsInCart);
   const [Switch,setSwitch] = useState(1)
    const handleClick =() =>{
        dispatch(setItemInCart({img,changedPrice,id,title,time,Priced,select1,select2,mainDetail,mainDetail2,detail1,detail2,Switch,checked,detail}));
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
            <div className={styles.container} itemScope itemType="http://schema.org/Product">
            <div className={styles.content}>
                <div className={styles.hit}>
                    {data.total === "1" ?  <img src="/hit.svg" alt=""/> : Number(data.total) === 2 ?  <img src="/profitable.svg" alt=""/> : null}

                </div>
                <div className={styles.img} >
                    <picture>
                        <MyImage itemProp="contentUrl" src={{default: img}} alt={title} />

                    </picture>
                </div>
                <div className={styles.flex}>
                    <h4 className={styles.title} itemProp="name">{title}</h4>
                    {count === 1 ?
                        <>
                            {detail1 !== undefined ?  <div className={styles.detail}>

                                <span > {mainDetail}</span>
                                <p itemProp="description">{detail1}</p>
                            </div> : null}
                            {detail2 !== undefined ?  <div className={styles.detail}>

                                <span>{mainDetail2}</span>
                                <p itemProp="description"> {detail2}</p>
                            </div>
                             : null}
                        </> : null
                    } {count === 0 ?
                    <div className={styles.detailSelector}>

                        <span> {detail}</span>
                        <LedSelector check={check()} changedPrice={changedPrice} time={time} num={num} setChangedPrice={setChangedPrice} item={item} select1={select1} select2={select2} detail={detail} data={data} setSwitch={setSwitch} setCheck={setCheck} checked={checked}/>
                    </div>

                     : null}

                    <div className={cn(styles.card_footer,Number(data.count) === 1 ? styles.justify : null )} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <meta itemProp="price" content={changedPrice}   />
                        <meta itemProp="priceCurrency" content="RUB" />
                        <link itemProp="availability" href="http://schema.org/InStock" />


                                {Number(data.count) === 1 ? null : <Selector item={item} checked={checked} changedPrice={changedPrice} setChangedPrice={setChangedPrice} data={data} price={data.price} setTime={setTime} time={time} check={check()} />}
                        <span> {changedPrice}₽ </span>
                        { check() ?

                            <Link href="/busket"><a rel='nofollow'>  <div className={styles.disabled_busket}>
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