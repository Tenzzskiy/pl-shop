import React, {useState} from "react";
import styles from './OfferCard.module.scss'
import {Selector} from "../../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";
import cs from 'classnames'
import Link from "next/link";
import {MyImage} from "../../MyImage";


export const OfferCard= ( {total,detail1,detail2,mainDetail,mainDetail2,price,title,img,data,id,active,setActive,busket,...props }) =>{
    const dispatch = useDispatch();
    const [changedPrice,setChangedPrice] = useState(Number(price))
    const [time, setTime] = useState('1 сутки');
    const Priced = Number(price);
    const items = useSelector(state => state.cart.itemsInCart);
    const handleClick =() =>{
        dispatch(setItemInCart({total,img,changedPrice,id,title,time,Priced,detail1,detail2,mainDetail,mainDetail2}))
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
            <div className={cs(styles.container,busket === 1 ? styles.busket : null)} itemScope itemType="http://schema.org/Product">
            <div className={styles.content}>
                <div className={styles.hit}>
                    {data.total === "1" ?  <img src="/hit.svg" alt=""/> : Number(data.total) === 2 ?  <img src="/profitable.svg" alt=""/> : null}

                </div>
            <div className={styles.img}>
                <picture>
                    <MyImage itemprop="image" src={{default: img}} alt={title} />
                </picture>
            </div>
                <h2 className={styles.title} itemProp="name"> {title}</h2>
                <div className={styles.subTitle}>
                    <div>{mainDetail} </div>
                    <h3 itemProp='description'>{detail1} </h3>
                   </div>
                <div className={styles.subTitle}>
                    <div>{mainDetail2} </div>
                    <h3 itemProp='description'>{detail2} </h3>
                </div>
                <div className={styles.flex} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                    <meta itemProp="price" content={changedPrice}/>
                        <meta itemProp="priceCurrency" content="RUB"/>
                            <link itemProp="availability" href="http://schema.org/InStock"/>

                            <div className={styles.select}>
                    <Selector changedPrice={changedPrice} setChangedPrice={setChangedPrice} price={price} setTime={setTime} time={time} check={check()}/>
                    </div>
                    <div className={styles.price}> {changedPrice}₽</div>
                    <div className={cs(styles.busket,check() ? styles.busket_disabled : null)} onClick={check() ? null : handleClick} >
                        {/*<picture>*/}
                        {/*    <img src="/ShopItem/whiteBusket.svg" alt="" />*/}
                        {/*</picture>*/}
                        { check() ?

                            <Link href="/busket"><a rel='nofollow'>  <div className={styles.disabled_busket}>
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