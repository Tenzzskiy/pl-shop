import React, {FunctionComponent} from "react";
import styles from './Partners.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Partners_360} from "./Partners_360/Partners_360";


export const Partners:FunctionComponent = ( { }) =>{
    const size = useWindowSize();
    return(
        <section>
            {size.width > 720 ?
                <div className={styles.partners}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                Наши клиенты
                            </h1>
                            <div className={styles.grid}>
                                <div className={styles.faded}><img src="/Clients/client_1.svg" alt="maximice"/></div>
                                <div><img src="/Clients/client_2.svg" alt="mega"/></div>
                                <div className={styles.faded}><img src="/Clients/3.jpg" alt="volkswagen"/></div>
                                <div ><img src="/Clients/client_4.svg" alt="porsche"/></div>
                                <div className={styles.faded}><img src="/Clients/client_5.svg" alt="lacoste"/></div>
                                <div><img src="/Clients/client_6.svg" alt="adidas"/></div>

                            </div>

                        </div>
                    </div>
                </div> : null

            }
            {size.width < 720 ?
                <Partners_360 /> : null
            }
        </section>
    )
}