import React, { useState} from "react";
import styles from './Shop.module.scss'
import {ShopItem} from "./ShopItem/ShopItem";
import data from './cart_arenda-plasm77.ru.json'
import {useWindowSize} from "../../Hooks/useWindowSize";


export const Shop = ( { page,...props}) =>{
    const size = useWindowSize();
    const [step,setStep] = useState(size.width >1200 ? 12 : 6 );
    const [buttonStyle,setButtonStyle] = useState(styles.button)

       const items =  data.mainCatalogue.slice(0,step).map(elem  =>
           <ShopItem

               count={1}
               key={elem.id}
               img={elem.img}
               price={elem.price}
               title={elem.name}/> )
    const Screens =  data.ledScreenCatalogue.slice(0,step).map(elem  =>
        <ShopItem
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )

    const VideoWalls =  data.videoWallCatalogue.map(elem  =>
        <ShopItem
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const TouchScreen =  data.touchScreenCatalogue.map(elem  =>
        <ShopItem
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const Projectors =  data.projectorsCatalogue.map(elem  =>
        <ShopItem
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const Laptops =  data.laptopsCatalogue.map(elem  =>
        <ShopItem
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const Desinfection =  data.desinfectionCatalogue.map(elem  =>
        <ShopItem
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const Sound =  data.otherCatalogue.map(elem  =>
        <ShopItem
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
        const Else = () =>{
           setStep(step + step)
            if ( step >= 12 ){
                setButtonStyle(styles.button_none)
            }


        }
    return(
        <>
            <div className={styles.shop}>
            <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.title}>
                Каталог
            </div>

                <div className={styles.grid}>
                    {page === 1 ? items : null}
                    {page === 3 ? Screens : null}
                    {page === 4 ? VideoWalls : null}
                    {page === 5 ? TouchScreen : null}
                    {page === 6 ? Projectors : null}
                    {page === 7 ? Laptops : null}
                    {page === 8 ? Sound : null}
                    {page === 9 ? Desinfection : null}

                </div>
                {page === 1 ?
                    <div className={buttonStyle}>
                        <button onClick={Else}> Показать еще</button>
                    </div> : null
                }
                {(page === 3 || page ===5 || page=== 4 || page=== 6  || page=== 8 || page=== 9)  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else}> Показать еще</button>
                    </div> : null

                }

            </div>

            </div>

            </div>
        </>
    )
}