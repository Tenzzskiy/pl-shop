import React, {FunctionComponent} from "react";
import styles from './Partners.module.scss'


export const Partners:FunctionComponent = ( { }) =>{
    return(
        <>
            <div className={styles.partners}>
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Наши клиенты
                </div>
                <div className={styles.grid}>
                <div className={styles.faded}><img src="/client_1.svg" alt=""/></div>
                <div><img src="/client_2.svg" alt=""/></div>
                <div className={styles.faded}><img src="/client_3.svg" alt=""/></div>
                <div ><img src="/client_4.svg" alt=""/></div>
                <div className={styles.faded}><img src="/client_5.svg" alt=""/></div>
                <div><img src="/client_6.svg" alt=""/></div>

                </div>

            </div>
            </div>
            </div>
        </>
    )
}