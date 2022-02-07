import React, { useState} from "react";
import styles from './Shop.module.scss'
import {ShopItem} from "./ShopItem/ShopItem";
import {useWindowSize} from "../../Hooks/useWindowSize";


export const Shop = ( { page,active,setActive,data,...props}) =>{
    const size = useWindowSize();
    const [step,setStep] = useState(true)

    const [step_2,setStep_2] = useState( true);
    const [step_3,setStep_3] = useState(true );
    const [step_4,setStep_4] = useState(true );
    const [step_5,setStep_5] = useState( true);
    const [step_6,setStep_6] = useState( 4 );
    const [step_7,setStep_7] = useState( true );
    const [step_8,setStep_8] = useState(true );
    const [buttonStyle,setButtonStyle] = useState(styles.button)
        const itemsLength = data.mainCatalogue.length;
        const items2Length = data.ledScreenCatalogue.length;
        const items3Length = data.videoWallCatalogue.length;
        const items4Length = data.touchScreenCatalogue.length;
        const items5Length = data.projectorsCatalogue.length;
        const items6Length = data.laptopsCatalogue.length;
        const items7Length = data.desinfectionCatalogue.length;
        const items8Length = data.otherCatalogue.length;
       const items =  (step ? data.mainCatalogue.slice(0,size.width > 1200 ? 12:6) :  data.mainCatalogue).map(elem  =>
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

    const Screens = (step_2 ? data.ledScreenCatalogue.slice(0,size.width > 1200 ? 10:6) :  data.ledScreenCatalogue).map(elem  =>
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

    const VideoWalls =  (step_3 ? data.videoWallCatalogue.slice(0,size.width > 1200 ? 8:6) :  data.videoWallCatalogue).map(elem  =>
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
    const TouchScreen =  (step_4 ? data.touchScreenCatalogue.slice(0,size.width > 1200 ? 12:6) :  data.touchScreenCatalogue).map(elem  =>
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
    const Projectors =  (step_5 ? data.projectorsCatalogue.slice(0,size.width > 1200 ? 8:6) :  data.projectorsCatalogue).map(elem  =>
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
    const Desinfection =  (step_7 ? data.desinfectionCatalogue.slice(0,size.width > 1200 ? 20:6) :  data.desinfectionCatalogue).map(elem  =>
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
    const Sound =  (step_8 ? data.otherCatalogue.slice(0,size.width > 1200 ? 9:6) :  data.otherCatalogue).map(elem  =>
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
                if (step <= itemsLength){
                    setStep(false)
                    setButtonStyle(styles.button_none)
                }
        }
        const Else_2 = () =>{
            if (step_2 <= items2Length){
                setStep_2(false)
                setButtonStyle(styles.button_none)
            }
    }
    const Else_3 = () =>{
        if (step_3 <= items3Length){
            setStep_3(false)
            setButtonStyle(styles.button_none)
        }
    }
    const Else_4 = () =>{
        if (step_4 <= items4Length){
            setStep_4(false)
            setButtonStyle(styles.button_none)
        }
    }
    const Else_5 = () =>{
        if (step_5 <= items5Length){
            setStep_5(false)
            setButtonStyle(styles.button_none)
        }
    }

    const Else_7 = () =>{
        if (step_8 <= items8Length){
            setStep_8(false)
            setButtonStyle(styles.button_none)
        }
    }
    const Else_8 = () =>{
        if (step_7 <= items7Length){
            setStep_7(false)
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
                {(page === 6 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_5}> Показать еще</button>
                    </div> : null

                } {(page === 3 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_2}> Показать еще</button>
                    </div> : null

                } {(page === 4 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_3}> Показать еще</button>
                    </div> : null

                } {(page === 5 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_4}> Показать еще</button>
                    </div> : null

                } {(page === 8 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_7}> Показать еще</button>
                    </div> : null

                }{(page === 9 )  && size.width < 1200  ?
                    <div className={buttonStyle}>
                        <button onClick={Else_8}> Показать еще</button>
                    </div> : null

                }

            </div>

            </div>

            </div>
        </>
    )
}