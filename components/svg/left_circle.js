import styles from "../HeaderComponent/MainHeaderComponent/MainHeaderComponent_360.module.scss";

export const Left_circle = () =>{
    return(
        <>
            <svg className={styles.left} width="1011" height="1011" viewBox="0 0 1011 1011" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1287_19554)">
                    <circle cx="505.5" cy="505.5" r="205.5" fill="url(#paint0_linear_1287_19554)"/>
                </g>
                <defs>
                    <filter id="filter0_f_1287_19554" x="0" y="0" width="1011" height="1011" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1287_19554"/>
                    </filter>
                    <linearGradient id="paint0_linear_1287_19554" x1="300" y1="505.5" x2="711" y2="505.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#03001E"/>
                        <stop offset="0.333333" stopColor="#7303C0"/>
                        <stop offset="0.666667" stopColor="#EC38BC"/>
                        <stop offset="1" stopColor="#FDEFF9"/>
                    </linearGradient>
                </defs>
            </svg>


        </>
    )
}