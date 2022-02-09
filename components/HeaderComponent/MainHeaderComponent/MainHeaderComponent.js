import React from "react";
import styles from './MainHeaderComponent.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";
import {MainHeaderComponent_360} from "./MainHeaderComponent_360";
import {Steps} from "../../steps/steps";




const MainHeaderComponent = ({setSites} ) =>{
        const size = useWindowSize();

    return(
        <section>
            {size.width > 720 ?
                <div className={styles.header_component}>

                    <div className={styles.container}>
                        <picture>
                            <source srcSet="/assets/images/tv.webp" type="image/webp" />
                            <img src="/assets/images/tv.jpg" alt=""/>
                        </picture>

                        <div className={styles.content}>

                            <h1 className={styles.title}> Аренда плазмы </h1>
                            <h2 className={styles.description}> Организуем техническое обеспечение выставок, форумов и конференций</h2>
                            <div className={styles.button}><button onClick={() =>setSites(true)}> Рассчитать стоимость</button> </div>
                            <div className={styles.free}> Это бесплатно</div>


                        </div>
                    </div>
                </div> : null

            }
            {size.width < 720 ? <MainHeaderComponent_360 setSites={setSites}/> : null}

            {/*<MainHeaderComponent_360 setSites={setSites}/>*/}
        </section>
    )
}

export default MainHeaderComponent;