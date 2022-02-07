import styles from './Relises.module.scss'
import React from "react";
import {MyImage} from "../MyImage";


const Releases = ( {setId,imgModal,setImgModal,children,text1,text2,text3,text4,text5,...props }) =>{
    return(
        <>
            <div className={styles.releases}>
            <div className={styles.container}>
                <div className={styles.content}>

                    <div className={styles.title}>
                        Реализованные проекты

                    </div>
                    <div className={styles.grid}>
                        <div className={styles.box1} onClick={ ( ) => {
                            setImgModal(true);
                            setId(0);
                        }}

                        ><MyImage src={{default: props.img1}} alt={'1'} /> <div className={styles.box1_description}><span>{ text1} </span> </div></div>
                        <div className={styles.box2}  onClick={ ( ) => {
                            setImgModal(true);
                            setId(1);
                        }}><MyImage src={{default: props.img2}} alt={'1'} /> <div className={styles.box2_description}><span>{ text1} </span> </div></div>
                        <div className={styles.box3}  onClick={ ( ) => {
                            setId(2);
                            setImgModal(true);

                        }}><MyImage src={{default: props.img3}} alt={'1'} /> <div className={styles.box3_description}><span>{ text1} </span> </div></div>
                        <div className={styles.box4}  onClick={ ( ) => {
                            setId(3);
                            setImgModal(true);

                        }}><MyImage src={{default: props.img4}} alt={'1'} /> <div className={styles.box4_description}><span>{ text1} </span> </div></div>
                        <div className={styles.box5}  onClick={ ( ) => {
                            setImgModal(true);
                            setId(4);
                        }}><MyImage src={{default: props.img5}} alt={'1'} /> <div className={styles.box5_description}><span>{ text1} </span> </div></div>

                    </div>

                </div>

            </div>

            </div>
        </>
    )
}

export default Releases;