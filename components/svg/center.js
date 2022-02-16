import styles from "../HeaderComponent/MainHeaderComponent/MainHeaderComponent_360.module.scss";

export const Center_circle = () =>{
    return(
        <>
            <svg className={styles.center} width="1046" height="1046" viewBox="0 0 1046 1046" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1287_19555)">
                    <circle cx="523" cy="523" r="273" fill="url(#paint0_linear_1287_19555)"/>
                </g>
                <defs>
                    <filter id="filter0_f_1287_19555" x="0" y="0" width="1046" height="1046" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1287_19555"/>
                    </filter>
                    <linearGradient id="paint0_linear_1287_19555" x1="250" y1="523" x2="796" y2="523" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FC00FF"/>
                        <stop offset="1" stopColor="#00DBDE"/>
                    </linearGradient>
                </defs>
            </svg>



        </>
    )
}