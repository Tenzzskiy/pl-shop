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
                   <svg width="141" height="93" viewBox="0 0 141 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path opacity="0.9" d="M40 89.1019V62.6574C40 60.5796 38 58.8796 35.5556 58.8796H4.44444C2 58.8796 0 60.5796 0 62.6574V89.1019C0 91.1796 2 92.8796 4.44444 92.8796H35.5556C38 92.8796 40 91.1796 40 89.1019ZM12.2222 78.713L17.7778 84.3985L25.5556 75.8796L35.5556 87.213H4.44444L12.2222 78.713Z" fill="url(#paint0_linear_357_8030)"/>
                       <path opacity="0.9" d="M137.024 58.8796H104.297C102.297 58.8796 100.66 60.5796 100.66 62.6574V89.1019C100.66 91.1796 102.297 92.8796 104.297 92.8796H137.024C139.024 92.8796 140.66 91.1796 140.66 89.1019V62.6574C140.66 60.5796 139.024 58.8796 137.024 58.8796ZM137.024 89.1019H104.297V62.6574H137.024V89.1019ZM113.387 81.5463C113.387 78.4107 115.824 75.8796 118.842 75.8796C119.478 75.8796 120.097 76.0119 120.66 76.2196V64.5463H129.751V68.3241H124.297V81.603C124.26 84.7007 121.842 87.213 118.842 87.213C115.824 87.213 113.387 84.6819 113.387 81.5463Z" fill="url(#paint1_linear_357_8030)"/>
                       <g filter="url(#filter0_d_357_8030)">
                           <path d="M33.2 15.2H24V68.4C24 72.58 28.14 76 33.2 76H97.6V68.4H33.2V15.2ZM106.8 0H51.6C46.54 0 42.4 3.42 42.4 7.6V53.2C42.4 57.38 46.54 60.8 51.6 60.8H106.8C111.86 60.8 116 57.38 116 53.2V7.6C116 3.42 111.86 0 106.8 0ZM70 47.5V13.3L97.6 30.4L70 47.5Z" fill="url(#paint2_linear_357_8030)"/>
                       </g>
                       <defs>
                           <filter id="filter0_d_357_8030" x="20" y="0" width="100" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                               <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                               <feOffset dy="4"/>
                               <feGaussianBlur stdDeviation="2"/>
                               <feComposite in2="hardAlpha" operator="out"/>
                               <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.0431373 0 0 0 0 0.85098 0 0 0 1 0"/>
                               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_357_8030"/>
                               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_357_8030" result="shape"/>
                           </filter>
                           <linearGradient id="paint0_linear_357_8030" x1="0" y1="75.8899" x2="40" y2="75.8899" gradientUnits="userSpaceOnUse">
                               <stop stopColor="#07F1D3"/>
                               <stop offset="0.572917" stopColor="#3A65F1"/>
                               <stop offset="0.984375" stopColor="#B93DF6"/>
                           </linearGradient>
                           <linearGradient id="paint1_linear_357_8030" x1="100.66" y1="75.8899" x2="140.66" y2="75.8899" gradientUnits="userSpaceOnUse">
                               <stop stopColor="#07F1D3"/>
                               <stop offset="0.572917" stopColor="#3A65F1"/>
                               <stop offset="0.984375" stopColor="#B93DF6"/>
                           </linearGradient>
                           <linearGradient id="paint2_linear_357_8030" x1="24" y1="38.0228" x2="116" y2="38.0228" gradientUnits="userSpaceOnUse">
                               <stop stopColor="#07F1D3"/>
                               <stop offset="0.572917" stopColor="#3A65F1"/>
                               <stop offset="0.984375" stopColor="#B93DF6"/>
                           </linearGradient>
                       </defs>
                   </svg>

               </picture> <picture>
                   <svg width="141" height="93" viewBox="0 0 141 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M5.71429 87.3035H34.2857V64.6369H5.71429V87.3035ZM11.4286 70.3035H28.5714V81.6369H11.4286V70.3035ZM2.85714 70.3035H0V60.3869L1.42857 58.9702H11.4286V61.8035H2.85714V70.3035ZM40 60.3869V70.3035H37.1429V61.8035H28.5714V58.9702H38.5714L40 60.3869ZM37.1429 81.6369H40V91.5535L38.5714 92.9702H28.5714V90.1369H37.1429V81.6369ZM2.85714 90.1369H11.4286V92.9702H1.42857L0 91.5535V81.6369H2.85714V90.1369Z" fill="url(#paint0_linear_357_8029)"/>
                       <g opacity="0.9">
                           <path d="M137.803 78.1876H122.089C120.511 78.1876 119.232 79.5113 119.232 81.1441V90.0137C119.232 91.6465 120.511 92.9702 122.089 92.9702H137.803C139.381 92.9702 140.66 91.6465 140.66 90.0137V81.1441C140.66 79.5113 139.381 78.1876 137.803 78.1876Z" fill="url(#paint1_linear_357_8029)"/>
                           <path d="M114.946 66.3615V71.6626L108.813 65.3164L106.793 67.4066L112.926 73.7528H107.803V76.7093H117.803V66.3615H114.946Z" fill="url(#paint2_linear_357_8029)"/>
                           <path d="M116.374 84.1006H103.517C102.76 84.0999 102.033 83.7881 101.498 83.2338C100.962 82.6796 100.661 81.928 100.66 81.1441V61.9267C100.661 61.1429 100.962 60.3913 101.498 59.837C102.033 59.2827 102.76 58.971 103.517 58.9702H134.946C135.703 58.971 136.43 59.2827 136.965 59.837C137.501 60.3913 137.802 61.1429 137.803 61.9267V75.2311H134.946V61.9267H103.517V81.1441H116.374V84.1006Z" fill="url(#paint3_linear_357_8029)"/>
                       </g>
                       <g filter="url(#filter0_d_357_8029)">
                           <path d="M48.3127 44.5989C48.6491 44.8735 49.2024 44.8735 49.5387 44.5989L60.583 35.5817L69.9241 43.2171C70.2604 43.4917 70.8137 43.4917 71.15 43.2171L95.7014 23.1542C96.0377 22.8796 96.0377 22.4279 95.7014 22.1533L91.709 18.8936C91.3726 18.619 90.8193 18.619 90.483 18.8936L70.5425 35.1919L61.2014 27.5565C60.8651 27.2819 60.3118 27.2819 59.9755 27.5565L44.3203 40.3383C43.984 40.6129 43.984 41.0647 44.3203 41.3392L48.3127 44.5989Z" fill="url(#paint4_linear_357_8029)"/>
                           <path d="M112.528 6.3776H73.9057V0.708622C73.9057 0.31888 73.5151 0 73.0377 0H66.9623C66.4849 0 66.0943 0.31888 66.0943 0.708622V6.3776H27.4717C25.5514 6.3776 24 7.64426 24 9.21209V55.2725C24 56.8404 25.5514 58.107 27.4717 58.107H66.1377V60.9415L48.2585 70.5168C47.8571 70.7293 47.7486 71.1634 48.009 71.4911L51.2962 75.672V75.6808C51.5566 76.0086 52.0991 76.0972 52.5005 75.8846L70 66.513L87.4995 75.8846C87.9009 76.0972 88.4434 76.0086 88.7038 75.6808V75.672L91.991 71.4911C92.2514 71.1634 92.1321 70.7293 91.7415 70.5168L73.9057 60.9681V58.107H112.528C114.449 58.107 116 56.8404 116 55.2725V9.21209C116 7.64426 114.449 6.3776 112.528 6.3776ZM108.189 51.7294H31.8113V12.7552H108.189V51.7294Z" fill="url(#paint5_linear_357_8029)"/>
                       </g>
                       <defs>
                           <filter id="filter0_d_357_8029" x="20" y="0" width="100" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                               <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                               <feOffset dy="4"/>
                               <feGaussianBlur stdDeviation="2"/>
                               <feComposite in2="hardAlpha" operator="out"/>
                               <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.0431373 0 0 0 0 0.85098 0 0 0 1 0"/>
                               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_357_8029"/>
                               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_357_8029" result="shape"/>
                           </filter>
                           <linearGradient id="paint0_linear_357_8029" x1="0" y1="75.9804" x2="40" y2="75.9804" gradientUnits="userSpaceOnUse">
                               <stop stopColor="#07F1D3"/>
                               <stop offset="0.572917" stopColor="#3A65F1"/>
                               <stop offset="0.984375" stopColor="#B93DF6"/>
                           </linearGradient>
                           <linearGradient id="paint1_linear_357_8029" x1="100.66" y1="75.9804" x2="140.66" y2="75.9804" gradientUnits="userSpaceOnUse">
                               <stop stopColor="#07F1D3"/>
                               <stop offset="0.572917" stopColor="#3A65F1"/>
                               <stop offset="0.984375" stopColor="#B93DF6"/>
                           </linearGradient>
                           <linearGradient id="paint2_linear_357_8029" x1="100.66" y1="75.9804" x2="140.66" y2="75.9804" gradientUnits="userSpaceOnUse">
                               <stop stopColor="#07F1D3"/>
                               <stop offset="0.572917" stopColor="#3A65F1"/>
                               <stop offset="0.984375" stopColor="#B93DF6"/>
                           </linearGradient>
                           <linearGradient id="paint3_linear_357_8029" x1="100.66" y1="75.9804" x2="140.66" y2="75.9804" gradientUnits="userSpaceOnUse">
                               <stop stopColor="#07F1D3"/>
                               <stop offset="0.572917" stopColor="#3A65F1"/>
                               <stop offset="0.984375" stopColor="#B93DF6"/>
                           </linearGradient>
                           <linearGradient id="paint4_linear_357_8029" x1="24" y1="38" x2="116" y2="38" gradientUnits="userSpaceOnUse">
                               <stop stopColor="#C038F5"/>
                               <stop offset="1" stop-Color="#3496FE"/>
                           </linearGradient>
                           <linearGradient id="paint5_linear_357_8029" x1="24" y1="38" x2="116" y2="38" gradientUnits="userSpaceOnUse">
                               <stop stopColor="#C038F5"/>
                               <stop offset="1" stopColor="#3496FE"/>
                           </linearGradient>
                       </defs>
                   </svg>

               </picture> <picture>
                   <svg width="141" height="93" viewBox="0 0 141 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M138.143 59H103.857C103.099 59 102.373 59.2755 101.837 59.766C101.301 60.2565 101 60.9217 101 61.6154V82.5385C101 83.2321 101.301 83.8973 101.837 84.3878C102.373 84.8783 103.099 85.1538 103.857 85.1538H115.286V90.3846H109.571V93H132.429V90.3846H126.714V85.1538H138.143C138.901 85.1538 139.627 84.8783 140.163 84.3878C140.699 83.8973 141 83.2321 141 82.5385V61.6154C141 60.9217 140.699 60.2565 140.163 59.766C139.627 59.2755 138.901 59 138.143 59ZM123.857 90.3846H118.143V85.1538H123.857V90.3846ZM138.143 82.5385H103.857V61.6154H138.143V82.5385Z" fill="url(#paint0_linear_530_16854)"/>
                       <path d="M10.4818 59C9.23522 58.9997 8.02274 59.3724 7.0291 60.0613C6.03547 60.7502 5.31517 61.7175 4.97798 62.8158L3.73491 66.8645C3.91494 66.854 4.10355 66.8462 4.28644 66.8462H10.0017C10.9403 66.8455 11.8699 67.0141 12.7374 67.3424C13.6048 67.6706 14.393 68.1522 15.057 68.7594C15.721 69.3666 16.2477 70.0876 16.6071 70.8812C16.9665 71.6749 17.1515 72.5255 17.1515 73.3846V85.1538H34.0543C34.9723 85.1541 35.878 84.9597 36.7002 84.586C37.5224 84.2122 38.2388 83.6692 38.7933 82.9996C39.3478 82.3299 39.7253 81.5519 39.8961 80.7263C40.067 79.9008 40.0266 79.0502 39.7781 78.2414L35.0345 62.8158C34.6977 61.7188 33.9787 60.7524 32.9868 60.0636C31.9949 59.3749 30.7843 59.0014 29.5393 59H10.4818ZM17.0114 90.3846C17.1067 89.9542 17.1546 89.5161 17.1543 89.0769V87.7692H30.0136C30.3926 87.7692 30.756 87.907 31.0239 88.1522C31.2919 88.3975 31.4424 88.7301 31.4424 89.0769C31.4424 89.4237 31.2919 89.7564 31.0239 90.0016C30.756 90.2468 30.3926 90.3846 30.0136 90.3846H17.0114ZM7.14406 78.6154C7.71248 78.6154 8.25761 78.4087 8.65954 78.0409C9.06147 77.673 9.28728 77.1741 9.28728 76.6538C9.28728 76.1336 9.06147 75.6347 8.65954 75.2668C8.25761 74.899 7.71248 74.6923 7.14406 74.6923C6.57564 74.6923 6.03051 74.899 5.62858 75.2668C5.22664 75.6347 5.00084 76.1336 5.00084 76.6538C5.00084 77.1741 5.22664 77.673 5.62858 78.0409C6.03051 78.4087 6.57564 78.6154 7.14406 78.6154ZM0 73.3846C0 72.3442 0.451605 71.3463 1.25547 70.6106C2.05933 69.8749 3.1496 69.4615 4.28644 69.4615H10.0045C11.1414 69.4615 12.2316 69.8749 13.0355 70.6106C13.8394 71.3463 14.291 72.3442 14.291 73.3846V89.0769C14.291 90.1174 13.8394 91.1152 13.0355 91.851C12.2316 92.5867 11.1414 93 10.0045 93H4.28929C3.72615 93.0003 3.16845 92.8991 2.64807 92.7021C2.12768 92.5051 1.65481 92.2162 1.25648 91.8519C0.858143 91.4876 0.542151 91.055 0.326559 90.5788C0.110966 90.1027 -1.25143e-07 89.5923 0 89.0769V73.3846ZM4.28644 72.0769C3.90749 72.0769 3.54407 72.2147 3.27611 72.4599C3.00816 72.7052 2.85762 73.0378 2.85762 73.3846V89.0769C2.85762 89.4237 3.00816 89.7564 3.27611 90.0016C3.54407 90.2468 3.90749 90.3846 4.28644 90.3846H10.0045C10.3835 90.3846 10.7469 90.2468 11.0149 90.0016C11.2828 89.7564 11.4334 89.4237 11.4334 89.0769V73.3846C11.4334 73.0378 11.2828 72.7052 11.0149 72.4599C10.7469 72.2147 10.3835 72.0769 10.0045 72.0769H4.28929H4.28644Z" fill="url(#paint1_linear_530_16854)"/>
                       <g filter="url(#filter0_d_530_16854)">
                           <path d="M60.6606 38.8387C61.559 39.7664 63.0152 39.7664 63.9136 38.8387L65.5394 37.1598C66.4379 36.2321 66.4379 34.7284 65.5394 33.8007L60.4047 28.5L65.538 23.1978C66.4364 22.2701 66.4364 20.7664 65.538 19.8387L63.9122 18.1598C63.0137 17.2321 61.5576 17.2321 60.6591 18.1598L52.2727 26.8197C51.3743 27.7474 51.3743 29.2511 52.2727 30.1788L60.6606 38.8387ZM74.462 37.1613L76.0878 38.8402C76.9863 39.7679 78.4424 39.7679 79.3409 38.8402L87.7272 30.1803C88.6257 29.2526 88.6257 27.7489 87.7272 26.8212L79.3409 18.1613C78.4424 17.2336 76.9863 17.2336 76.0878 18.1613L74.462 19.8402C73.5636 20.7679 73.5636 22.2716 74.462 23.1993L79.5953 28.5L74.462 33.8022C73.5636 34.7299 73.5636 36.2336 74.462 37.1613ZM113.7 61.75H78.8464C78.74 64.6905 76.7318 66.5 74.14 66.5H65.4C62.7133 66.5 60.6534 63.9068 60.6893 61.75H26.3C25.035 61.75 24 62.8187 24 64.125V66.5C24 71.725 28.14 76 33.2 76H106.8C111.86 76 116 71.725 116 66.5V64.125C116 62.8187 114.965 61.75 113.7 61.75ZM106.8 7.125C106.8 3.20625 103.695 0 99.9 0H40.1C36.305 0 33.2 3.20625 33.2 7.125V57H106.8V7.125ZM97.6 47.5H42.4V9.5H97.6V47.5Z" fill="url(#paint2_linear_530_16854)"/>
                       </g>
                       <defs>
                           <filter id="filter0_d_530_16854" x="20" y="0" width="100" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                               <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                               <feOffset dy="4"/>
                               <feGaussianBlur stdDeviation="2"/>
                               <feComposite in2="hardAlpha" operator="out"/>
                               <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.0431373 0 0 0 0 0.85098 0 0 0 1 0"/>
                               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_530_16854"/>
                               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_530_16854" result="shape"/>
                           </filter>
                           <linearGradient id="paint0_linear_530_16854" x1="101" y1="76.0102" x2="141" y2="76.0102" gradientUnits="userSpaceOnUse">
                               <stop stop-color="#07F1D3"/>
                               <stop offset="0.572917" stop-color="#3A65F1"/>
                               <stop offset="0.984375" stop-color="#B93DF6"/>
                           </linearGradient>
                           <linearGradient id="paint1_linear_530_16854" x1="0" y1="76.0102" x2="40" y2="76.0102" gradientUnits="userSpaceOnUse">
                               <stop stop-color="#07F1D3"/>
                               <stop offset="0.572917" stop-color="#3A65F1"/>
                               <stop offset="0.984375" stop-color="#B93DF6"/>
                           </linearGradient>
                           <linearGradient id="paint2_linear_530_16854" x1="24" y1="38" x2="116" y2="38" gradientUnits="userSpaceOnUse">
                               <stop stop-color="#C038F5"/>
                               <stop offset="1" stop-color="#3496FE"/>
                           </linearGradient>
                       </defs>
                   </svg>

               </picture>

               <div>1. Тип вашего контента (презентация, фото, видео)</div>
               <div>2. Размер экрана, на который планируется трансляция </div>
               <div>3. Разрешение проектора (XGA, WXGA, FullHD) </div>
               </div> : null

           }
           {size.width < 720 ?
               <div className={styles.grid}>

                   <picture>
                       <svg width="141" height="93" viewBox="0 0 141 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path opacity="0.9" d="M40 89.1019V62.6574C40 60.5796 38 58.8796 35.5556 58.8796H4.44444C2 58.8796 0 60.5796 0 62.6574V89.1019C0 91.1796 2 92.8796 4.44444 92.8796H35.5556C38 92.8796 40 91.1796 40 89.1019ZM12.2222 78.713L17.7778 84.3985L25.5556 75.8796L35.5556 87.213H4.44444L12.2222 78.713Z" fill="url(#paint0_linear_357_8030)"/>
                           <path opacity="0.9" d="M137.024 58.8796H104.297C102.297 58.8796 100.66 60.5796 100.66 62.6574V89.1019C100.66 91.1796 102.297 92.8796 104.297 92.8796H137.024C139.024 92.8796 140.66 91.1796 140.66 89.1019V62.6574C140.66 60.5796 139.024 58.8796 137.024 58.8796ZM137.024 89.1019H104.297V62.6574H137.024V89.1019ZM113.387 81.5463C113.387 78.4107 115.824 75.8796 118.842 75.8796C119.478 75.8796 120.097 76.0119 120.66 76.2196V64.5463H129.751V68.3241H124.297V81.603C124.26 84.7007 121.842 87.213 118.842 87.213C115.824 87.213 113.387 84.6819 113.387 81.5463Z" fill="url(#paint1_linear_357_8030)"/>
                           <g filter="url(#filter0_d_357_8030)">
                               <path d="M33.2 15.2H24V68.4C24 72.58 28.14 76 33.2 76H97.6V68.4H33.2V15.2ZM106.8 0H51.6C46.54 0 42.4 3.42 42.4 7.6V53.2C42.4 57.38 46.54 60.8 51.6 60.8H106.8C111.86 60.8 116 57.38 116 53.2V7.6C116 3.42 111.86 0 106.8 0ZM70 47.5V13.3L97.6 30.4L70 47.5Z" fill="url(#paint2_linear_357_8030)"/>
                           </g>
                           <defs>
                               <filter id="filter0_d_357_8030" x="20" y="0" width="100" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                   <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                   <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                   <feOffset dy="4"/>
                                   <feGaussianBlur stdDeviation="2"/>
                                   <feComposite in2="hardAlpha" operator="out"/>
                                   <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.0431373 0 0 0 0 0.85098 0 0 0 1 0"/>
                                   <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_357_8030"/>
                                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_357_8030" result="shape"/>
                               </filter>
                               <linearGradient id="paint0_linear_357_8030" x1="0" y1="75.8899" x2="40" y2="75.8899" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#07F1D3"/>
                                   <stop offset="0.572917" stop-color="#3A65F1"/>
                                   <stop offset="0.984375" stop-color="#B93DF6"/>
                               </linearGradient>
                               <linearGradient id="paint1_linear_357_8030" x1="100.66" y1="75.8899" x2="140.66" y2="75.8899" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#07F1D3"/>
                                   <stop offset="0.572917" stop-color="#3A65F1"/>
                                   <stop offset="0.984375" stop-color="#B93DF6"/>
                               </linearGradient>
                               <linearGradient id="paint2_linear_357_8030" x1="24" y1="38.0228" x2="116" y2="38.0228" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#07F1D3"/>
                                   <stop offset="0.572917" stop-color="#3A65F1"/>
                                   <stop offset="0.984375" stop-color="#B93DF6"/>
                               </linearGradient>
                           </defs>
                       </svg>
                   </picture>
                   <div>1. Тип вашего контента (презентация, фото, видео)</div>
                   <picture>
                       <svg width="141" height="93" viewBox="0 0 141 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.71429 87.3035H34.2857V64.6369H5.71429V87.3035ZM11.4286 70.3035H28.5714V81.6369H11.4286V70.3035ZM2.85714 70.3035H0V60.3869L1.42857 58.9702H11.4286V61.8035H2.85714V70.3035ZM40 60.3869V70.3035H37.1429V61.8035H28.5714V58.9702H38.5714L40 60.3869ZM37.1429 81.6369H40V91.5535L38.5714 92.9702H28.5714V90.1369H37.1429V81.6369ZM2.85714 90.1369H11.4286V92.9702H1.42857L0 91.5535V81.6369H2.85714V90.1369Z" fill="url(#paint0_linear_357_8029)"/>
                           <g opacity="0.9">
                               <path d="M137.803 78.1876H122.089C120.511 78.1876 119.232 79.5113 119.232 81.1441V90.0137C119.232 91.6465 120.511 92.9702 122.089 92.9702H137.803C139.381 92.9702 140.66 91.6465 140.66 90.0137V81.1441C140.66 79.5113 139.381 78.1876 137.803 78.1876Z" fill="url(#paint1_linear_357_8029)"/>
                               <path d="M114.946 66.3615V71.6626L108.813 65.3164L106.793 67.4066L112.926 73.7528H107.803V76.7093H117.803V66.3615H114.946Z" fill="url(#paint2_linear_357_8029)"/>
                               <path d="M116.374 84.1006H103.517C102.76 84.0999 102.033 83.7881 101.498 83.2338C100.962 82.6796 100.661 81.928 100.66 81.1441V61.9267C100.661 61.1429 100.962 60.3913 101.498 59.837C102.033 59.2827 102.76 58.971 103.517 58.9702H134.946C135.703 58.971 136.43 59.2827 136.965 59.837C137.501 60.3913 137.802 61.1429 137.803 61.9267V75.2311H134.946V61.9267H103.517V81.1441H116.374V84.1006Z" fill="url(#paint3_linear_357_8029)"/>
                           </g>
                           <g filter="url(#filter0_d_357_8029)">
                               <path d="M48.3127 44.5989C48.6491 44.8735 49.2024 44.8735 49.5387 44.5989L60.583 35.5817L69.9241 43.2171C70.2604 43.4917 70.8137 43.4917 71.15 43.2171L95.7014 23.1542C96.0377 22.8796 96.0377 22.4279 95.7014 22.1533L91.709 18.8936C91.3726 18.619 90.8193 18.619 90.483 18.8936L70.5425 35.1919L61.2014 27.5565C60.8651 27.2819 60.3118 27.2819 59.9755 27.5565L44.3203 40.3383C43.984 40.6129 43.984 41.0647 44.3203 41.3392L48.3127 44.5989Z" fill="url(#paint4_linear_357_8029)"/>
                               <path d="M112.528 6.3776H73.9057V0.708622C73.9057 0.31888 73.5151 0 73.0377 0H66.9623C66.4849 0 66.0943 0.31888 66.0943 0.708622V6.3776H27.4717C25.5514 6.3776 24 7.64426 24 9.21209V55.2725C24 56.8404 25.5514 58.107 27.4717 58.107H66.1377V60.9415L48.2585 70.5168C47.8571 70.7293 47.7486 71.1634 48.009 71.4911L51.2962 75.672V75.6808C51.5566 76.0086 52.0991 76.0972 52.5005 75.8846L70 66.513L87.4995 75.8846C87.9009 76.0972 88.4434 76.0086 88.7038 75.6808V75.672L91.991 71.4911C92.2514 71.1634 92.1321 70.7293 91.7415 70.5168L73.9057 60.9681V58.107H112.528C114.449 58.107 116 56.8404 116 55.2725V9.21209C116 7.64426 114.449 6.3776 112.528 6.3776ZM108.189 51.7294H31.8113V12.7552H108.189V51.7294Z" fill="url(#paint5_linear_357_8029)"/>
                           </g>
                           <defs>
                               <filter id="filter0_d_357_8029" x="20" y="0" width="100" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                   <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                   <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                   <feOffset dy="4"/>
                                   <feGaussianBlur stdDeviation="2"/>
                                   <feComposite in2="hardAlpha" operator="out"/>
                                   <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.0431373 0 0 0 0 0.85098 0 0 0 1 0"/>
                                   <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_357_8029"/>
                                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_357_8029" result="shape"/>
                               </filter>
                               <linearGradient id="paint0_linear_357_8029" x1="0" y1="75.9804" x2="40" y2="75.9804" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#07F1D3"/>
                                   <stop offset="0.572917" stop-color="#3A65F1"/>
                                   <stop offset="0.984375" stop-color="#B93DF6"/>
                               </linearGradient>
                               <linearGradient id="paint1_linear_357_8029" x1="100.66" y1="75.9804" x2="140.66" y2="75.9804" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#07F1D3"/>
                                   <stop offset="0.572917" stop-color="#3A65F1"/>
                                   <stop offset="0.984375" stop-color="#B93DF6"/>
                               </linearGradient>
                               <linearGradient id="paint2_linear_357_8029" x1="100.66" y1="75.9804" x2="140.66" y2="75.9804" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#07F1D3"/>
                                   <stop offset="0.572917" stop-color="#3A65F1"/>
                                   <stop offset="0.984375" stop-color="#B93DF6"/>
                               </linearGradient>
                               <linearGradient id="paint3_linear_357_8029" x1="100.66" y1="75.9804" x2="140.66" y2="75.9804" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#07F1D3"/>
                                   <stop offset="0.572917" stop-color="#3A65F1"/>
                                   <stop offset="0.984375" stop-color="#B93DF6"/>
                               </linearGradient>
                               <linearGradient id="paint4_linear_357_8029" x1="24" y1="38" x2="116" y2="38" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#C038F5"/>
                                   <stop offset="1" stop-color="#3496FE"/>
                               </linearGradient>
                               <linearGradient id="paint5_linear_357_8029" x1="24" y1="38" x2="116" y2="38" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#C038F5"/>
                                   <stop offset="1" stop-color="#3496FE"/>
                               </linearGradient>
                           </defs>
                       </svg>

                   </picture>
                   <div>2. Размер экрана, на который планируется трансляция </div>
                   <picture>
                       <svg width="141" height="93" viewBox="0 0 141 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M138.143 59H103.857C103.099 59 102.373 59.2755 101.837 59.766C101.301 60.2565 101 60.9217 101 61.6154V82.5385C101 83.2321 101.301 83.8973 101.837 84.3878C102.373 84.8783 103.099 85.1538 103.857 85.1538H115.286V90.3846H109.571V93H132.429V90.3846H126.714V85.1538H138.143C138.901 85.1538 139.627 84.8783 140.163 84.3878C140.699 83.8973 141 83.2321 141 82.5385V61.6154C141 60.9217 140.699 60.2565 140.163 59.766C139.627 59.2755 138.901 59 138.143 59ZM123.857 90.3846H118.143V85.1538H123.857V90.3846ZM138.143 82.5385H103.857V61.6154H138.143V82.5385Z" fill="url(#paint0_linear_530_16854)"/>
                           <path d="M10.4818 59C9.23522 58.9997 8.02274 59.3724 7.0291 60.0613C6.03547 60.7502 5.31517 61.7175 4.97798 62.8158L3.73491 66.8645C3.91494 66.854 4.10355 66.8462 4.28644 66.8462H10.0017C10.9403 66.8455 11.8699 67.0141 12.7374 67.3424C13.6048 67.6706 14.393 68.1522 15.057 68.7594C15.721 69.3666 16.2477 70.0876 16.6071 70.8812C16.9665 71.6749 17.1515 72.5255 17.1515 73.3846V85.1538H34.0543C34.9723 85.1541 35.878 84.9597 36.7002 84.586C37.5224 84.2122 38.2388 83.6692 38.7933 82.9996C39.3478 82.3299 39.7253 81.5519 39.8961 80.7263C40.067 79.9008 40.0266 79.0502 39.7781 78.2414L35.0345 62.8158C34.6977 61.7188 33.9787 60.7524 32.9868 60.0636C31.9949 59.3749 30.7843 59.0014 29.5393 59H10.4818ZM17.0114 90.3846C17.1067 89.9542 17.1546 89.5161 17.1543 89.0769V87.7692H30.0136C30.3926 87.7692 30.756 87.907 31.0239 88.1522C31.2919 88.3975 31.4424 88.7301 31.4424 89.0769C31.4424 89.4237 31.2919 89.7564 31.0239 90.0016C30.756 90.2468 30.3926 90.3846 30.0136 90.3846H17.0114ZM7.14406 78.6154C7.71248 78.6154 8.25761 78.4087 8.65954 78.0409C9.06147 77.673 9.28728 77.1741 9.28728 76.6538C9.28728 76.1336 9.06147 75.6347 8.65954 75.2668C8.25761 74.899 7.71248 74.6923 7.14406 74.6923C6.57564 74.6923 6.03051 74.899 5.62858 75.2668C5.22664 75.6347 5.00084 76.1336 5.00084 76.6538C5.00084 77.1741 5.22664 77.673 5.62858 78.0409C6.03051 78.4087 6.57564 78.6154 7.14406 78.6154ZM0 73.3846C0 72.3442 0.451605 71.3463 1.25547 70.6106C2.05933 69.8749 3.1496 69.4615 4.28644 69.4615H10.0045C11.1414 69.4615 12.2316 69.8749 13.0355 70.6106C13.8394 71.3463 14.291 72.3442 14.291 73.3846V89.0769C14.291 90.1174 13.8394 91.1152 13.0355 91.851C12.2316 92.5867 11.1414 93 10.0045 93H4.28929C3.72615 93.0003 3.16845 92.8991 2.64807 92.7021C2.12768 92.5051 1.65481 92.2162 1.25648 91.8519C0.858143 91.4876 0.542151 91.055 0.326559 90.5788C0.110966 90.1027 -1.25143e-07 89.5923 0 89.0769V73.3846ZM4.28644 72.0769C3.90749 72.0769 3.54407 72.2147 3.27611 72.4599C3.00816 72.7052 2.85762 73.0378 2.85762 73.3846V89.0769C2.85762 89.4237 3.00816 89.7564 3.27611 90.0016C3.54407 90.2468 3.90749 90.3846 4.28644 90.3846H10.0045C10.3835 90.3846 10.7469 90.2468 11.0149 90.0016C11.2828 89.7564 11.4334 89.4237 11.4334 89.0769V73.3846C11.4334 73.0378 11.2828 72.7052 11.0149 72.4599C10.7469 72.2147 10.3835 72.0769 10.0045 72.0769H4.28929H4.28644Z" fill="url(#paint1_linear_530_16854)"/>
                           <g filter="url(#filter0_d_530_16854)">
                               <path d="M60.6606 38.8387C61.559 39.7664 63.0152 39.7664 63.9136 38.8387L65.5394 37.1598C66.4379 36.2321 66.4379 34.7284 65.5394 33.8007L60.4047 28.5L65.538 23.1978C66.4364 22.2701 66.4364 20.7664 65.538 19.8387L63.9122 18.1598C63.0137 17.2321 61.5576 17.2321 60.6591 18.1598L52.2727 26.8197C51.3743 27.7474 51.3743 29.2511 52.2727 30.1788L60.6606 38.8387ZM74.462 37.1613L76.0878 38.8402C76.9863 39.7679 78.4424 39.7679 79.3409 38.8402L87.7272 30.1803C88.6257 29.2526 88.6257 27.7489 87.7272 26.8212L79.3409 18.1613C78.4424 17.2336 76.9863 17.2336 76.0878 18.1613L74.462 19.8402C73.5636 20.7679 73.5636 22.2716 74.462 23.1993L79.5953 28.5L74.462 33.8022C73.5636 34.7299 73.5636 36.2336 74.462 37.1613ZM113.7 61.75H78.8464C78.74 64.6905 76.7318 66.5 74.14 66.5H65.4C62.7133 66.5 60.6534 63.9068 60.6893 61.75H26.3C25.035 61.75 24 62.8187 24 64.125V66.5C24 71.725 28.14 76 33.2 76H106.8C111.86 76 116 71.725 116 66.5V64.125C116 62.8187 114.965 61.75 113.7 61.75ZM106.8 7.125C106.8 3.20625 103.695 0 99.9 0H40.1C36.305 0 33.2 3.20625 33.2 7.125V57H106.8V7.125ZM97.6 47.5H42.4V9.5H97.6V47.5Z" fill="url(#paint2_linear_530_16854)"/>
                           </g>
                           <defs>
                               <filter id="filter0_d_530_16854" x="20" y="0" width="100" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                   <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                   <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                   <feOffset dy="4"/>
                                   <feGaussianBlur stdDeviation="2"/>
                                   <feComposite in2="hardAlpha" operator="out"/>
                                   <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.0431373 0 0 0 0 0.85098 0 0 0 1 0"/>
                                   <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_530_16854"/>
                                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_530_16854" result="shape"/>
                               </filter>
                               <linearGradient id="paint0_linear_530_16854" x1="101" y1="76.0102" x2="141" y2="76.0102" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#07F1D3"/>
                                   <stop offset="0.572917" stop-color="#3A65F1"/>
                                   <stop offset="0.984375" stop-color="#B93DF6"/>
                               </linearGradient>
                               <linearGradient id="paint1_linear_530_16854" x1="0" y1="76.0102" x2="40" y2="76.0102" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#07F1D3"/>
                                   <stop offset="0.572917" stop-color="#3A65F1"/>
                                   <stop offset="0.984375" stop-color="#B93DF6"/>
                               </linearGradient>
                               <linearGradient id="paint2_linear_530_16854" x1="24" y1="38" x2="116" y2="38" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#C038F5"/>
                                   <stop offset="1" stop-color="#3496FE"/>
                               </linearGradient>
                           </defs>
                       </svg>

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