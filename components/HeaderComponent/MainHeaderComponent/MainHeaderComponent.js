import React from "react";
import styles from './MainHeaderComponent.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";
import {MainHeaderComponent_360} from "./MainHeaderComponent_360";




const MainHeaderComponent = ({setSites} ) =>{
        const size = useWindowSize();

    return(
        <>
            {size.width > 720 ?
                <div className={styles.header_component}>

                    <div className={styles.container}>
                        <picture>
                            <source srcSet="/assets/images/tv.webp" type="image/webp" />
                            <img src="/assets/images/tv.jpg" alt=""/>
                        </picture>

                        <div className={styles.content}>
                            <div className={styles.title}> Аренда плазмы </div>
                            <div className={styles.description}> Организуем техническое обеспечение выставок, форумов и конференций</div>
                            <div className={styles.button}><button onClick={() =>setSites(true)}> Рассчитать стоимость</button> </div>
                            <div className={styles.free}> Это бесплатно</div>


                        </div>
                    </div>
                </div> : null

            }
            {size.width < 720 ? <MainHeaderComponent_360 setSites={setSites}/> : null}

            {/*<MainHeaderComponent_360 setSites={setSites}/>*/}
        </>
    )
}

export default MainHeaderComponent;