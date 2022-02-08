import React, {FunctionComponent, ReactNode} from "react";
import styles from './PreferenceCard.module.scss'


interface PreferenceCardProps{
    children?:ReactNode,
    img?:string,
    title?:string,
    description?:string,
    secondDescription?:string,
}
 export const PreferenceCard:FunctionComponent = ( { img,title,description,secondDescription} :PreferenceCardProps ) =>{
    return(
        <>
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <img src={img} alt={title}/>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <h3 className={styles.description}>
                        {description}

                    </h3>
                    <div className={styles.second_description}>
                        {secondDescription}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}