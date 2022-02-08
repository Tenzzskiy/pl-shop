import React, {FunctionComponent, ReactNode} from "react";
import styles from './MediumHeader.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";
import Steps from "../../steps/steps";

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
                <div className={styles.back}>
                <Steps />
                </div>
                <img className={styles.background} src={size.width < 720 ? img_360 : mainImg } alt={title}/>
                <div className={styles.container}>


                    <div className={styles.content}>
                        <h2 className={styles.title}>{title} </h2>
                        <div className={styles.button}><button onClick={() => setSites(true)}> {button_text}</button> </div>
                        <div className={styles.free}> Это бесплатно</div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default MediumHeaderComponent;