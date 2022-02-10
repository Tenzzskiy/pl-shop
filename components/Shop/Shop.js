import React, { useState} from "react";
import styles from './Shop.module.scss'
import {ShopItem} from "./ShopItem/ShopItem";
import {useWindowSize} from "../../Hooks/useWindowSize";
import {ShopSelector} from "../ShopSelect/ShopSelect";


export const Shop = ( { page,active,setActive,data,...props}) =>{
    const size = useWindowSize();
    const [step,setStep] = useState(true)
    const [buttonStyle,setButtonStyle] = useState(styles.button)
        const itemsLength = data.length;
        const [mainCatalogue,setMainCatalogue] = useState(data)
       const items =  (step ? mainCatalogue.slice(0,size.width > 1200 ? 12:6) :  data).map(elem  =>
           <ShopItem
               detail1={elem.detail1}
               detail2={elem.detail2}
               mainDetail={elem.mainDetail}
               mainDetail2={elem.mainDetail2}
               active={active} setActive={setActive}
               id={elem.id}
               data={elem}
               count={( elem.select1 !== undefined ?  0 : 1)}
               key={elem.id}
               img={elem.img}
               price={elem.price}
               title={elem.name}
                       select1={elem.select1}
                       select2={elem.select2}
               detail={elem.detail}
               total={elem.total}
           /> )


        const Else = () =>{
                if (step <= itemsLength){
                    setStep(false)
                    setButtonStyle(styles.button_none)
                }
        }

    return(
        <>
            <div className={styles.shop}>
            <div className={styles.container}>
            <div className={styles.content}>

            <h2 className={styles.title}>
                Каталог
            </h2>
                <ShopSelector setCatalogue={setMainCatalogue} data={data} mainCatalogue={mainCatalogue}
                />
                <div className={styles.grid}>

                    {items}
                </div>

                {
                    items.length < data.length ?  <div className={buttonStyle}>
                        <button onClick={Else}> Показать еще</button>
                    </div> : null
                }

            </div>

            </div>

            </div>
        </>
    )
}