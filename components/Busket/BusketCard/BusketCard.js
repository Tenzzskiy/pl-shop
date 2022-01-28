import React, {useEffect, useState} from "react";
import styles from './BusketCard.module.scss'
import {Selector} from "../../Select/Select";
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from './../../../redux/cart/reducer'
import {updateSelect} from './../../../redux/cart/reducer'
export const BusketCard = ( {img,title,time,price,id,data  }) => {
    const dispatch = useDispatch();
    const [changedPrice,setChangedPrice] = useState(price);
    const [duration,setTime] =useState(time);
    const handleClick =() =>{
        dispatch(setItemInCart({img,changedPrice,id,title,time}))
        dispatch(updateTotalPrice(Number(changedPrice)))

    }
    const deleteItem = ( ) =>{
        dispatch(deleteItemFromCart(id))
    }
    useEffect(() => {
        console.log(changedPrice)
        dispatch(updateSelect(data))
    }, [changedPrice])
    return(
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.exit} src="/Modal/exit.svg" alt="" onClick={deleteItem}/>
                <div className={styles.img}>
                    <picture>
                        <img src={img} alt=""/>
                    </picture>
                </div>
                <div className={styles.text_content}>
                    <div className={styles.title} onClick={ () => console.log(data)}>{title} </div>
                    <div className={styles.firstDescription}> 1</div>
                    <div className={styles.secondDescription}> 2</div>
                    <div className={styles.text_content_footer}>
                        <Selector setChangedPrice={setChangedPrice}  price={changedPrice} setTime={setTime} time={time} data={data} changedPrice={changedPrice}/>
                        <div className={styles.price}>
                        <div className={styles.number}>{changedPrice}₽</div>
                            <div className={styles.trigger}> </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}