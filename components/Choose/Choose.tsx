import React, { FunctionComponent} from "react";
import styles from './Choose.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";


export const Choose:FunctionComponent = ({  }) =>{
    const size = useWindowSize();
   return(
       <>
       <section className={styles.choose}>
       <div className={styles.container}>
       <div className={styles.content}>
       <div className={styles.title}>
           Как выбрать проектор

       </div>
           <div className={styles.subTitle}>
               Учитывайте следующие критерии
           </div>
           {size.width > 720 ?
               <div className={styles.grid}>

               <picture>
               <img src="/Choose/1.svg" alt=""/>
               </picture> <picture>
               <img src="/Choose/2.svg" alt=""/>
               </picture> <picture>
               <img src="/Choose/3.svg" alt=""/>
               </picture>

               <div>1. Тип вашего контента (презентация, фото, видео)</div>
               <div>2. Размер экрана, на который планируется трансляция </div>
               <div>3. Разрешение проектора (XGA, WXGA, FullHD) </div>
               </div> : null

           }
           {size.width < 720 ?
               <div className={styles.grid}>

                   <picture>
                       <img src="/Choose/1.svg" alt=""/>
                   </picture>
                   <div>1. Тип вашего контента (презентация, фото, видео)</div>
                   <picture>
                   <img src="/Choose/2.svg" alt=""/>
               </picture>
                   <div>2. Размер экрана, на который планируется трансляция </div>
                   <picture>
                   <img src="/Choose/3.svg" alt=""/>
               </picture>
                   <div>3. Разрешение проектора (XGA, WXGA, FullHD) </div>



               </div> : null


           }


       </div>


       </div>
       </section>
       </>
   )

}