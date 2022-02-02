import React from "react";
import styles from './Preferences.module.scss'




 export const Preferences = ( {setSites,button=false,count = 0,secondLeftImg,secondRightImg,leftImg,rightImg,leftTitle,rightTitle,leftText,rightText,rightSecondText,leftSecondText,leftSecondTitle,rightSecondTitle,...props } ) => {

    return(
       <>
       <div className={styles.preferences}>
       <div className={styles.container}>
       <div className={styles.content}>
            <div className={styles.title}>
                {props.title}
            </div>

           {count === 1 ? <LeftPreference leftImg={leftImg} leftTitle={leftTitle} leftText={leftText}/> : null}
           {count === 2 ? <LeftPreference leftImg={leftImg} leftTitle={leftTitle} leftText={leftText}/> : null}
           {count === 2 ? <RightPreference rightImg={rightImg} rightTitle={rightTitle} rightText={rightText}/>: null}
           {count === 4 ? <LeftPreference leftImg={leftImg} leftTitle={leftTitle} leftText={leftText}/>: null}
           {count === 4 ? <RightPreference rightImg={rightImg} rightTitle={rightTitle} rightText={rightText}/>: null}
           {count === 4 ? <LeftPreference leftImg={secondLeftImg} leftTitle={leftSecondTitle}   leftText={leftSecondText}/>: null}
           {count === 4 ? <RightPreference rightImg={secondRightImg} rightTitle={rightSecondTitle}   rightText={rightSecondText}/>: null}
           {count === 5 ? <LeftPreference leftImg={leftImg} leftTitle={leftTitle} leftText={leftText}/>: null}
           {count === 6 ? <RightPreference rightImg={rightImg} rightTitle={rightTitle} rightText={rightText}/>: null}
           {button ?
           <div className={styles.button}>
           <button onClick={() => setSites(true)}> Заказать разработку</button>
           </div>

           : null}

       </div>


       </div>


       </div>

       </>
    )
}

const LeftPreference = ( { leftImg,leftTitle,leftText}) =>{
     return(
         <>
             <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.img}>
                        <img src={leftImg} alt=""/>
                        <img  className={styles.background_img} src="/Preferences/background_image.svg" alt=""/>
                    </div>

                    <div className={styles.text}>
                                <div className={styles.title_text}>
                                    {leftTitle}
                                </div>
                        <div className={styles.description_text}>
                            {leftText}
                        </div>
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
             <div className={styles.container}>
                 <div className={styles.flex_2}>


                     <div className={styles.text}>
                         <div className={styles.title_text}>
                             {rightTitle}
                         </div>
                         <div className={styles.description_text}>
                             {rightText}
                         </div>
                     </div>
                     <div className={styles.img}>
                         <img src={rightImg} alt=""/>
                         <img  className={styles.background_img_2} src="/Preferences/background_img2.svg" alt=""/>
                     </div>
                 </div>
                 <div className={styles.border}>  </div>
             </div>
         </>
     )
}


