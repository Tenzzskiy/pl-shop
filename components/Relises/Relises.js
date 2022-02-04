import styles from './Relises.module.scss'
import React from "react";
import {MyImage} from "../MyImage";


const Releases = ( {children,text1,text2,text3,text4,text5,...props }) =>{
    return(
        <>
            <div className={styles.releases}>
            <div className={styles.container}>
                <div className={styles.content}>

                    <div className={styles.title}>
                        Реализованные проекты

                    </div>
                    <div className={styles.grid}>
                        <div className={styles.box1}><MyImage src={{default: props.img1}} alt={'1'} /> <div className={styles.box1_description}><span>{ text1} </span> </div></div>
                        <div className={styles.box2}><MyImage src={{default: props.img2}} alt={'1'} /> <div className={styles.box2_description}><span>{ text1} </span> </div></div>
                        <div className={styles.box3}><MyImage src={{default: props.img3}} alt={'1'} /> <div className={styles.box3_description}><span>{ text1} </span> </div></div>
                        <div className={styles.box4}><MyImage src={{default: props.img4}} alt={'1'} /> <div className={styles.box4_description}><span>{ text1} </span> </div></div>
                        <div className={styles.box5}><MyImage src={{default: props.img5}} alt={'1'} /> <div className={styles.box5_description}><span>{ text1} </span> </div></div>

                    </div>

                </div>

            </div>

            </div>
        </>
    )
}

export default Releases;