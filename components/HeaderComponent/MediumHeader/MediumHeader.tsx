import React, {FunctionComponent, ReactNode} from "react";
import styles from './MediumHeader.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";

interface MediumHeaderComponentProps{
    children?:ReactNode,
    title:string,
    button_text:string,
    mainImg:string,
    img_360?:string
    setSites?:any
}
const MediumHeaderComponent:FunctionComponent = ( {setSites,title,button_text,mainImg,img_360 }:MediumHeaderComponentProps):JSX.Element =>{
const size = useWindowSize();
    return(
        <>
            <div className={styles.header_component}>
                <img className={styles.background} src={size.width < 720 ? img_360 : mainImg } alt=""/>
                <div className={styles.container}>

                    <div className={styles.content}>
                        <div className={styles.title}>{title} </div>
                        <div className={styles.button}><button onClick={() => setSites(true)}> {button_text}</button> </div>
                        <div className={styles.free}> Это бесплатно</div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default MediumHeaderComponent;