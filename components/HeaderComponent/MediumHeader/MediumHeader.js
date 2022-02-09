import React, {FunctionComponent, ReactNode} from "react";
import styles from './MediumHeader.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";
import Steps from "../../steps/steps";


const MediumHeaderComponent = ( {setSites,title,button_text,mainImg,img_360 }) =>{
const size = useWindowSize();
    return(
        <>
            <div className={styles.header_component}  itemScope itemType="http://schema.org/ImageObject">
                <div className={styles.back}>
                <Steps />
                </div>
                <img itemProp="contentUrl" className={styles.background} src={size.width < 720 ? img_360 : mainImg } alt={title}/>
                <div className={styles.container}>


                    <div className={styles.content}>
                        <h1 className={styles.title} itemProp="name">{title} </h1>
                        <div className={styles.button}><button onClick={() => setSites(true)}> {button_text}</button> </div>
                        <div className={styles.free}> Это бесплатно</div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default MediumHeaderComponent;