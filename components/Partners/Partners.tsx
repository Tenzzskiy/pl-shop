import React, {FunctionComponent} from "react";
import styles from './Partners.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Partners_360} from "./Partners_360/Partners_360";


export const Partners:FunctionComponent = ( { }) =>{
    const size = useWindowSize();
    return(
        <section>
            {size.width > 720 ?
                <div className={styles.partners} itemScope itemType="http://schema.org/ImageObject" >
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h2 className={styles.title}  itemProp='Наши клиенты'>
                                Наши клиенты
                            </h2>
                            <div className={styles.grid}>
                                <div className={styles.faded}><img itemProp={"/Clients/client_1.svg"} src="/Clients/client_1.svg" alt="maximice"/></div>
                                <div><img itemProp={"/Clients/client_2.svg"} src="/Clients/client_2.svg" alt="mega"/></div>
                                <div className={styles.faded}><img itemProp={"/Clients/client_3.svg"} src="/Clients/3.jpg" alt="volkswagen"/></div>
                                <div ><img itemProp={"/Clients/client_4.svg"} src="/Clients/client_4.svg" alt="porsche"/></div>
                                <div className={styles.faded}><img itemProp={"/Clients/client_5.svg"} src="/Clients/client_5.svg" alt="lacoste"/></div>
                                <div><img itemProp={"/Clients/client_6.svg"} src="/Clients/client_6.svg" alt="adidas"/></div>

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