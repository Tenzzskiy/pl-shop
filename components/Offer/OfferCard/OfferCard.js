import React, {useState} from "react";
import styles from './OfferCard.module.scss'
import {Selector} from "../../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";
import cs from 'classnames'
import Link from "next/link";
import {MyImage} from "../../MyImage";
import BlobCoverReverse from "../../background/background";
import {useWindowSize} from "../../../Hooks/useWindowSize";
import {numberWithSpaces} from './../../../sources/utils/helpers'


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
    const [background,setBackground] = useState(false);
    const size =useWindowSize();
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
            <div className={cs(styles.container,busket === 1 ? styles.busket : null)} itemScope itemType="http://schema.org/Product" onMouseEnter={() => setBackground(true)}
                 onMouseLeave={() =>setBackground(false) }>
            <div className={styles.content}>
                <div className={styles.hit}>
                    {data.total === "1" ?  <img width='107' height='32' src="/hit.svg" alt=""/> : Number(data.total) === 2 ?  <img width='107' height='32' src="/profitable.svg" alt=""/> : null}

                </div>
            <div className={styles.img}>

                    <MyImage width='251' height='188' itemprop="image" src={{default: img}} alt={title} />

            </div>
                <h2 className={styles.title} itemProp="name"> {title}</h2>
                <div className={styles.subTitle}>
                    <div>{mainDetail} </div>
                    <div itemProp='description'>{detail1} </div>
                   </div>
                <div className={styles.subTitle}>
                    <div>{mainDetail2} </div>
                    <div itemProp='description'>{detail2} </div>
                </div>
                <div className={styles.flex} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                    <meta itemProp="price" content={changedPrice}/>
                        <meta itemProp="priceCurrency" content="RUB"/>
                            <link itemProp="availability" href="http://schema.org/InStock"/>

                            <div className={styles.select}>
                    <Selector changedPrice={changedPrice} setChangedPrice={setChangedPrice} price={price} setTime={setTime} time={time} check={check()}/>
                    </div>
                    <div className={styles.price}> {numberWithSpaces(changedPrice)}₽</div>
                    <div className={cs(styles.busket,check() ? styles.busket_disabled : null)} onClick={check() ? null : handleClick} >
                        {/*<picture>*/}
                        {/*    <img src="/ShopItem/whiteBusket.svg" alt="" />*/}
                        {/*</picture>*/}
                        { check() ?

                            <Link href="/busket"><a rel='nofollow'>  <div className={styles.disabled_busket}>
                                <img src="/ShopItem/selected_busket.svg" alt=""/>
                            </div></a></Link> :
                            <div className={styles.bucket}  >
                                {background && size.width>720 ? <BlobCoverReverse classNames={styles.svg} width={50} height={40} color1="#C038F5" color2='#3496FE'/> : null}
                                <svg className={styles.svg2} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.07848 0.810059C0.907899 0.810059 0.744305 0.875929 0.623685 0.993179C0.503066 1.11043 0.435303 1.26945 0.435303 1.43527C0.435303 1.60109 0.503066 1.76011 0.623685 1.87736C0.744305 1.99461 0.907899 2.06048 1.07848 2.06048H1.39492C1.53459 2.06072 1.67037 2.10514 1.78177 2.18702C1.89316 2.26891 1.97411 2.38382 2.01238 2.51439L4.05254 9.45424C4.16793 9.84588 4.41135 10.1904 4.74601 10.4356C5.08067 10.6808 5.48837 10.8134 5.90746 10.8135H11.7848C12.1705 10.8135 12.5474 10.7012 12.8668 10.491C13.1862 10.2808 13.4335 9.98243 13.5767 9.63431L15.4728 5.02524C15.5508 4.83558 15.5797 4.63025 15.5572 4.4272C15.5347 4.22415 15.4613 4.02955 15.3435 3.86042C15.2258 3.69129 15.0672 3.55277 14.8816 3.45698C14.696 3.36119 14.4892 3.31104 14.2791 3.31091H3.5843L3.24856 2.17052C3.13347 1.77885 2.89033 1.43425 2.55591 1.18881C2.22149 0.943362 1.81396 0.810414 1.39492 0.810059H1.07848ZM5.29001 9.10913L3.9522 4.56133H14.2778L12.3817 9.1704C12.3339 9.2863 12.2515 9.38563 12.1451 9.45561C12.0388 9.52559 11.9133 9.563 11.7848 9.56303H5.90746C5.7678 9.5628 5.63201 9.51838 5.52062 9.43649C5.40923 9.3546 5.32828 9.23969 5.29001 9.10913Z" fill="white"/>
                                    <path d="M6.22397 15.1897C6.47736 15.1897 6.72827 15.1412 6.96237 15.047C7.19647 14.9527 7.40918 14.8146 7.58836 14.6404C7.76753 14.4662 7.90966 14.2595 8.00663 14.0319C8.10359 13.8043 8.1535 13.5604 8.1535 13.3141C8.1535 13.0678 8.10359 12.8239 8.00663 12.5963C7.90966 12.3688 7.76753 12.162 7.58836 11.9878C7.40918 11.8137 7.19647 11.6755 6.96237 11.5813C6.72827 11.487 6.47736 11.4385 6.22397 11.4385C5.71222 11.4385 5.22144 11.6361 4.85958 11.9878C4.49772 12.3396 4.29443 12.8167 4.29443 13.3141C4.29443 13.8116 4.49772 14.2886 4.85958 14.6404C5.22144 14.9921 5.71222 15.1897 6.22397 15.1897ZM6.22397 13.9393C6.05339 13.9393 5.88979 13.8735 5.76917 13.7562C5.64855 13.639 5.58079 13.4799 5.58079 13.3141C5.58079 13.1483 5.64855 12.9893 5.76917 12.872C5.88979 12.7548 6.05339 12.6889 6.22397 12.6889C6.39455 12.6889 6.55814 12.7548 6.67876 12.872C6.79938 12.9893 6.86715 13.1483 6.86715 13.3141C6.86715 13.4799 6.79938 13.639 6.67876 13.7562C6.55814 13.8735 6.39455 13.9393 6.22397 13.9393Z" fill="white"/>
                                    <path d="M11.3694 15.1897C11.6227 15.1897 11.8737 15.1412 12.1078 15.047C12.3419 14.9527 12.5546 14.8146 12.7337 14.6404C12.9129 14.4662 13.055 14.2595 13.152 14.0319C13.249 13.8043 13.2989 13.5604 13.2989 13.3141C13.2989 13.0678 13.249 12.8239 13.152 12.5963C13.055 12.3688 12.9129 12.162 12.7337 11.9878C12.5546 11.8137 12.3419 11.6755 12.1078 11.5813C11.8737 11.487 11.6227 11.4385 11.3694 11.4385C10.8576 11.4385 10.3668 11.6361 10.005 11.9878C9.64311 12.3396 9.43982 12.8167 9.43982 13.3141C9.43982 13.8116 9.64311 14.2886 10.005 14.6404C10.3668 14.9921 10.8576 15.1897 11.3694 15.1897ZM11.3694 13.9393C11.1988 13.9393 11.0352 13.8735 10.9146 13.7562C10.7939 13.639 10.7262 13.4799 10.7262 13.3141C10.7262 13.1483 10.7939 12.9893 10.9146 12.872C11.0352 12.7548 11.1988 12.6889 11.3694 12.6889C11.5399 12.6889 11.7035 12.7548 11.8242 12.872C11.9448 12.9893 12.0125 13.1483 12.0125 13.3141C12.0125 13.4799 11.9448 13.639 11.8242 13.7562C11.7035 13.8735 11.5399 13.9393 11.3694 13.9393Z" fill="white"/>
                                </svg>

                            </div>

                        }
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}