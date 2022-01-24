import React, {FunctionComponent, ReactNode} from "react";
import styles from './MainHeaderComponent.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";
import {MainHeaderComponent_360} from "./MainHeaderComponent_360";




const MainHeaderComponent:FunctionComponent = ( ) =>{
        const size = useWindowSize();
    return(
        <>
            {size.width > 720 ?
                <div className={styles.header_component}>

                    <div className={styles.container}>
                        <img src='/header/backgroundHeaderComponent.png' alt=""/>
                        <div className={styles.content}>
                            <div className={styles.title}> Аренда плазмы </div>
                            <div className={styles.description}> Организуем техническое обеспечение выставок, форумов и конференций</div>
                            <div className={styles.button}><button> Рассчитать стоимость</button> </div>
                            <div className={styles.free}> Это бесплатно</div>


                        </div>
                    </div>
                </div> : null

            }
            {size.width < 720 ? <MainHeaderComponent_360 /> : null}


        </>
    )
}

export default MainHeaderComponent;