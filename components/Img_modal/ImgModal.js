import React, {useState} from "react";
import styles from './ImgModal.module.scss'
import cs from 'classnames'
import {useSelector} from "react-redux";
import {useWindowSize} from "../../Hooks/useWindowSize";
import {useKeenSlider} from "keen-slider/react";
import {useEffect} from "react";
import {MyImage} from "../MyImage";
export const ImgModal = ( {id,active,setActive,text1,text2,text3,text4,text5,...props}) =>{
    const [currentSlide, setCurrentSlide] = useState(id);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: id,
        slides: {
            perView: "auto",

        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);

        }
    });
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = active ? 'hidden' : 'auto';
        instanceRef.current.update();
    }, [active])

    useEffect(() => {
        instanceRef && instanceRef.current?.moveToIdx(id)
    }, [id])

    return(
        <section>
            <div className={active ? cs(styles.modal,styles.active) : styles.modal } onClick={() => {
                setActive(false)

            }
            }>

                <div className={active ? cs(styles.content,styles.content_active) : styles.content} onClick={e => e.stopPropagation()}>
                    <div className={styles.exit} onClick={() => setActive(false)}>
                        <img src="/Modal/exit.svg" alt=""/></div>
                    <div className="navigation-wrapper">
                        <div ref={sliderRef} className="keen-slider">
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box1}><MyImage src={{default: props.img1}} alt={text1} /> <div className={styles.box1_description}><span>{ text1} </span> </div></div></div>
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box2}><MyImage src={{default: props.img2}} alt={text2} /> <div className={styles.box2_description}><span>{ text1} </span> </div></div>
                            </div>
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box3}><MyImage src={{default: props.img3}} alt={text3} /> <div className={styles.box3_description}><span>{ text1} </span> </div></div>
                            </div>
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box4}><MyImage src={{default: props.img4}} alt={text4} /> <div className={styles.box4_description}><span>{ text1} </span> </div></div>
                            </div>
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box5}><MyImage src={{default: props.img5}} alt={text5} /> <div className={styles.box5_description}><span>{ text1} </span> </div></div>
                            </div>

                        </div>
                        {loaded && instanceRef.current && (
                            <>
                                <div className={styles.prev_arrow}>
                                <Arrow
                                    left
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />
                                </div>
                                <div className={styles.next_arrow}>
                                <Arrow
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}
export default ImgModal;

export function Arrow({
                          disabled,
                          left,
                          onClick
                      }) {
    const disabeld = disabled ? "arrow--disabled" : "";
    return (
        <div className={`${styles.button_block} ${
            left ? styles.block_left : styles.block_right
        } ${disabeld}`}  onClick={onClick}>
            {/*<svg*/}

            {/*    className={`arrow ${*/}
            {/*        left ? "arrow--left" : "arrow--right"*/}
            {/*    } `}*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    viewBox="0 0 24 24"*/}
            {/*>*/}
            {/*    {left && (*/}
            {/*        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />*/}
            {/*    )}*/}
            {/*    {!left && (*/}
            {/*        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />*/}
            {/*    )}*/}
            {/*</svg>*/}
            <svg className={`arrow ${
                left ? "arrow--left" : "arrow--right"
            } `} width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                {left && (
                    <path d="M16 2.14579C15.8581 2.64627 15.6756 3.1313 15.3413 3.51668L5.29494 14.9979L14.9825 26.5005C15.1688 26.7196 15.3079 26.9717 15.3919 27.2424C15.4758 27.513 15.5029 27.7968 15.4717 28.0774C15.4404 28.3581 15.3514 28.6301 15.2097 28.8778C15.068 29.1255 14.8765 29.344 14.6462 29.5208C14.4168 29.6987 14.1528 29.8316 13.8695 29.9118C13.5862 29.9919 13.2891 30.0178 12.9953 29.988C12.7014 29.9581 12.4167 29.8731 12.1574 29.7378C11.8981 29.6025 11.6693 29.4195 11.4842 29.1995L0.652963 16.3474C0.323132 15.9641 0.142821 15.4833 0.142821 14.9872C0.142821 14.491 0.323132 14.0103 0.652963 13.627L11.8655 0.774896C12.0537 0.557998 12.2849 0.378706 12.5458 0.247289C12.8067 0.115873 13.0922 0.0349098 13.3859 0.00904421C13.6796 -0.0168233 13.9758 0.0129142 14.2575 0.0965476C14.5392 0.180181 14.8008 0.31607 15.0274 0.496431C15.2846 0.695755 15.4924 0.94704 15.6359 1.23222C15.7794 1.5174 15.8549 1.8294 15.8571 2.14579Z" fill="#CFCFDC"/>

                )}
                {!left && (
                    <path d="M16 2.14579C15.8581 2.64627 15.6756 3.1313 15.3413 3.51668L5.29494 14.9979L14.9825 26.5005C15.1688 26.7196 15.3079 26.9717 15.3919 27.2424C15.4758 27.513 15.5029 27.7968 15.4717 28.0774C15.4404 28.3581 15.3514 28.6301 15.2097 28.8778C15.068 29.1255 14.8765 29.344 14.6462 29.5208C14.4168 29.6987 14.1528 29.8316 13.8695 29.9118C13.5862 29.9919 13.2891 30.0178 12.9953 29.988C12.7014 29.9581 12.4167 29.8731 12.1574 29.7378C11.8981 29.6025 11.6693 29.4195 11.4842 29.1995L0.652963 16.3474C0.323132 15.9641 0.142821 15.4833 0.142821 14.9872C0.142821 14.491 0.323132 14.0103 0.652963 13.627L11.8655 0.774896C12.0537 0.557998 12.2849 0.378706 12.5458 0.247289C12.8067 0.115873 13.0922 0.0349098 13.3859 0.00904421C13.6796 -0.0168233 13.9758 0.0129142 14.2575 0.0965476C14.5392 0.180181 14.8008 0.31607 15.0274 0.496431C15.2846 0.695755 15.4924 0.94704 15.6359 1.23222C15.7794 1.5174 15.8549 1.8294 15.8571 2.14579Z" fill="#CFCFDC"/>

                )}

            </svg>

        </div>
    );
}
