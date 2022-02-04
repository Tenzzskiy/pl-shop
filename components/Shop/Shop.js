import React, { useState} from "react";
import styles from './Shop.module.scss'
import {ShopItem} from "./ShopItem/ShopItem";
import {useWindowSize} from "../../Hooks/useWindowSize";


export const Shop = ( { page,active,setActive,data,...props}) =>{
    const size = useWindowSize();
    const [step,setStep] = useState(size.width > 1200 ? 12 : 6);

    const [step_2,setStep_2] = useState( 6 );
    const [buttonStyle,setButtonStyle] = useState(styles.button)
        const itemsLength = data.mainCatalogue.length;
       const items =  data.mainCatalogue.slice(0,step).map(elem  =>
           <ShopItem
               detail1={elem.detail1}
               detail2={elem.detail2}
               mainDetail={elem.mainDetail}
               mainDetail2={elem.mainDetail2}
               active={active} setActive={setActive}
               id={elem.id}
               data={elem}
               count={1}
               key={elem.id}
               img={elem.img}
               price={elem.price}
               title={elem.name}/> )

    const Screens =  data.ledScreenCatalogue.slice(0,size.width > 1200 ? step : step_2).map(elem  =>
        <ShopItem
            total={elem.total}
            detail={elem.detail}
            select1={elem.select1}
            select2={elem.select2}
            active={active} setActive={setActive}
            id={elem.id}
            data={elem}
            count={0}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )

    const VideoWalls =  data.videoWallCatalogue.slice(0,size.width > 1200 ? step : step_2).map(elem  =>
        <ShopItem
            detail1={elem.detail1}
            detail2={elem.detail2}
            mainDetail={elem.mainDetail}
            mainDetail2={elem.mainDetail2}
            active={active} setActive={setActive}
            id={elem.id}
            data={elem}
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const TouchScreen =  data.touchScreenCatalogue.slice(0,size.width > 1200 ? step : step_2).map(elem  =>
        <ShopItem
            detail1={elem.detail1}
            detail2={elem.detail2}
            mainDetail={elem.mainDetail}
            mainDetail2={elem.mainDetail2}
            active={active} setActive={setActive}
            id={elem.id}
            data={elem}
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const Projectors =  data.projectorsCatalogue.slice(0,size.width > 1200 ? step : step_2).map(elem  =>
        <ShopItem
            detail1={elem.detail1}
            detail2={elem.detail2}
            mainDetail={elem.mainDetail}
            mainDetail2={elem.mainDetail2}
            active={active} setActive={setActive}
            id={elem.id}
            data={elem}
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const Laptops =  data.laptopsCatalogue.map(elem  =>
        <ShopItem
            detail1={elem.detail1}
            detail2={elem.detail2}
            mainDetail={elem.mainDetail}
            mainDetail2={elem.mainDetail2}
            active={active} setActive={setActive}
            id={elem.id}
            data={elem}
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const Desinfection =  data.desinfectionCatalogue.slice(0,size.width > 1200 ? step : step_2).map(elem  =>
        <ShopItem
            detail1={elem.detail1}
            detail2={elem.detail2}
            mainDetail={elem.mainDetail}
            mainDetail2={elem.mainDetail2}
            active={active} setActive={setActive}
            id={elem.id}
            data={elem}
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
    const Sound =  data.otherCatalogue.slice(0,size.width > 1200 ? step : step_2).map(elem  =>
        <ShopItem
            detail1={elem.detail1}
            detail2={elem.detail2}
            mainDetail={elem.mainDetail}
            mainDetail2={elem.mainDetail2}
            active={active} setActive={setActive}
            id={elem.id}
            data={elem}
            count={1}
            key={elem.id}
            img={elem.img}
            price={elem.price}
            title={elem.name}/> )
        const Else = () =>{

                if (step <= items.length){
                    setStep(itemsLength)
                    setButtonStyle(styles.button_none)
                }





        }
        const Else_2 = () =>{
        setStep_2(step_2+step_2);
            setButtonStyle(styles.button_none)

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
                {(page === 6 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_2}> Показать еще</button>
                    </div> : null

                } {(page === 3 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_2}> Показать еще</button>
                    </div> : null

                } {(page === 4 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_2}> Показать еще</button>
                    </div> : null

                } {(page === 5 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_2}> Показать еще</button>
                    </div> : null

                } {(page === 8 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_2}> Показать еще</button>
                    </div> : null

                }{(page === 9 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_2}> Показать еще</button>
                    </div> : null

                }

            </div>

            </div>

            </div>
        </>
    )
}