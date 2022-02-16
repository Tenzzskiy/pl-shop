import React from "react";
import styles from './Preferences.module.scss'
import {MyImage} from "../MyImage";




 export const Preferences = ( {setSites,button=false,count = 0,secondLeftImg,secondRightImg,leftImg,rightImg,leftTitle,rightTitle,leftText,rightText,rightSecondText,leftSecondText,leftSecondTitle,rightSecondTitle,...props } ) => {

    return(
       <section>
       <div className={styles.preferences}>
       <div className={styles.container}>
       <div className={styles.content}>
            <h2 className={styles.title}>
                {props.title}
            </h2>

           {count === 1 ? <LeftPreference leftImg={leftImg} leftTitle={leftTitle} leftText={leftText} />  : null}
           {count === 2 ? <LeftPreference leftImg={leftImg} leftTitle={leftTitle} leftText={leftText} /> : null}
           {count === 2 ? <RightPreference rightImg={rightImg} rightTitle={rightTitle} rightText={rightText} />: null}
           {count === 4 ? <LeftPreference leftImg={leftImg} leftTitle={leftTitle} leftText={leftText} />: null}
           {count === 4 ? <RightPreference rightImg={rightImg} rightTitle={rightTitle} rightText={rightText} />: null}
           {count === 4 ? <LeftPreference leftImg={secondLeftImg} leftTitle={leftSecondTitle}   leftText={leftSecondText} />: null}
           {count === 4 ? <RightPreference rightImg={secondRightImg} rightTitle={rightSecondTitle}   rightText={rightSecondText} />: null}
           {count === 5 ? <LeftPreference leftImg={leftImg} leftTitle={leftTitle} leftText={leftText} />: null}
           {count === 6 ? <RightPreference rightImg={rightImg} rightTitle={rightTitle} rightText={rightText} />: null}
           {button ?
           <div className={styles.button}>
           <button onClick={() => setSites(true)}> Заказать разработку</button>
           </div>

           : null}

       </div>


       </div>


       </div>

       </section>
    )
}

const LeftPreference = ( { leftImg,leftTitle,leftText}) =>{
     return(
         <>
             <div className={styles.container} itemScope itemType="http://schema.org/ImageObject">
                <div className={styles.flex}>
                    <div className={styles.img}>
                        <MyImage width='392' height='247' itemProp="contentUrl" src={{default: leftImg}} alt={leftTitle} />

                        <img width='392' height='247'  className={styles.background_img} src="/Preferences/background_image.svg" alt={leftTitle}/>
                    </div>

                    <div className={styles.text}>
                                <h2 className={styles.title_text} itemProp="name">
                                    {leftTitle}
                                </h2>
                        <h3 className={styles.description_text} itemProp="description">
                            {leftText}
                        </h3>
                    </div>
                </div>
                 <div className={styles.border}>  </div>
             </div>
         </>
     )
}

const RightPreference = ( { rightImg,rightText,rightTitle}) =>{
     return(
         <>
             <div className={styles.container} itemScope itemType="http://schema.org/ImageObject">
                 <div className={styles.flex_2}>


                     <div className={styles.text}>
                         <h2 className={styles.title_text} itemProp="name">
                             {rightTitle}
                         </h2>
                         <h3 className={styles.description_text} itemProp="description">
                             {rightText}
                         </h3>
                     </div>
                     <div className={styles.img}>
                        <MyImage width='392' height='247' itemProp="contentUrl" src={{default: rightImg}} alt={rightTitle} />
                         <img   className={styles.background_img_2} src="/Preferences/background_img2.svg" alt={rightTitle}/>
                     </div>
                 </div>
                 <div className={styles.border}>  </div>
             </div>
         </>
     )
}


