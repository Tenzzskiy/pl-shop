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
                        <div itemScope itemType="http://schema.org/ImageObject">
                            <picture>
                                <source srcSet="/assets/images/tv.webp" type="image/webp" />
                                <img itemProp='contentUrl' src="/assets/images/tv.jpg" alt=""/>
                            </picture>
                        </div>





                        <div className={styles.content} >

                            <h1 className={styles.title} itemProp="name"> Аренда плазмы </h1>
                            <h2 className={styles.description} itemProp={"description"} > Организуем техническое обеспечение выставок, форумов и конференций</h2>
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