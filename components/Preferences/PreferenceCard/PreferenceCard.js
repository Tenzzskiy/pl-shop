import React, {FunctionComponent, ReactNode} from "react";
import styles from './PreferenceCard.module.scss'


 export const PreferenceCard = ( { img,title,description,secondDescription}  ) =>{
    return(
        <>
            <div className={styles.container} itemScope itemType="http://schema.org/ImageObject">
            <div className={styles.content}>
                <div className={styles.img}>
                    <img itemProp="contentUrl" src={img} alt={title}/>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.title} itemProp="name">
                        {title}
                    </h2>
                    <h3 className={styles.description} itemProp="description">
                        {description}

                    </h3>
                    <div className={styles.second_description} itemProp="description">
                        {secondDescription}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}