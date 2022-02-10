import React, {FunctionComponent} from "react";
import styles from './Cleaning.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Cleaning_360} from "./Cleaning_360/Cleaning_360";
import Link from "next/link";
import cn from "classnames";


export const Cleaning:FunctionComponent = ( { }) =>{
        const size = useWindowSize();
    return(

        <section>
            {
                size.width > 720 ?
                    <div className={styles.cleaning}>

                        <div className={styles.container}>
                            {size.width < 1200 ?
                                <svg className={styles.background}   width="768" height="620" viewBox="0 0 768 620" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_463_12188)">
                                        <path d="M234.812 469.612C227.68 479.884 217.452 487.607 205.622 491.654C193.793 495.701 180.98 495.86 169.053 492.108C157.126 488.356 146.71 480.89 139.325 470.798C131.94 460.706 127.972 448.518 128 436.011C127.972 423.504 131.94 411.315 139.325 401.224C146.71 391.132 157.126 383.665 169.053 379.913C180.98 376.162 193.793 376.321 205.622 380.368C217.452 384.415 227.68 392.138 234.812 402.41H262.355C262.355 349.657 279.149 301.607 309.379 261.622L264.37 216.597C245.56 219.957 226.415 214.581 211.972 200.805C189.467 177.62 189.467 140.323 211.972 116.803C235.148 94.2901 272.431 94.2901 295.943 116.803C309.715 131.251 315.089 150.404 311.73 169.22L356.739 214.245C387.64 191.061 423.916 175.604 463.886 169.892V122.851C453.618 115.716 445.898 105.485 441.852 93.6507C437.807 81.8166 437.648 68.9989 441.398 57.068C445.149 45.137 452.612 34.7174 462.7 27.3294C472.788 19.9415 484.973 15.972 497.475 16.0001C509.977 15.972 522.162 19.9415 532.25 27.3294C542.338 34.7174 549.801 45.137 553.552 57.068C557.302 68.9989 557.143 81.8166 553.098 93.6507C549.052 105.485 541.332 115.716 531.064 122.851V169.892C561.293 174.26 589.508 184.004 615.035 198.789L652.319 145.363C645.937 127.891 647.616 107.73 659.036 91.6021C663.464 85.2632 669.097 79.8602 675.615 75.7024C682.133 71.5446 689.406 68.7136 697.019 67.3715C704.631 66.0295 712.434 66.2027 719.98 67.8812C727.525 69.5598 734.666 72.7107 740.993 77.1537C767.528 95.6341 774.245 132.259 755.436 158.804C744.016 175.268 725.878 184.004 707.404 184.004L667.769 240.454C682.213 254.902 693.633 271.031 703.373 288.839C713.962 284.701 725.518 283.704 736.659 285.969C747.799 288.233 758.05 293.663 766.184 301.607C788.688 325.128 788.688 362.089 766.184 385.609C756.443 394.682 744.687 400.058 732.595 402.41C732.595 420.554 730.244 438.027 726.55 454.827L770.551 466.587C784.658 454.827 804.139 449.787 823.621 454.827C838.676 458.927 851.486 468.841 859.234 482.389C866.982 495.937 869.032 512.009 864.935 527.069C860.837 542.129 850.926 554.945 837.383 562.695C823.84 570.446 807.774 572.497 792.719 568.398C773.574 563.022 759.13 548.91 753.085 531.437L702.366 517.661C687.251 544.205 667.098 567.726 643.586 587.214L680.533 654.416C699.007 657.104 715.801 667.521 725.542 685.329C729.203 692.124 731.49 699.574 732.273 707.254C733.056 714.933 732.319 722.692 730.105 730.087C727.89 737.482 724.241 744.367 719.367 750.352C714.492 756.336 708.487 761.301 701.694 764.963C694.901 768.625 687.454 770.913 679.777 771.697C672.1 772.48 664.344 771.743 656.952 769.527C649.56 767.312 642.677 763.662 636.695 758.786C630.713 753.909 625.75 747.902 622.089 741.106C612.684 723.634 613.02 703.473 621.417 687.009L585.477 620.815C558.27 631.568 528.712 637.616 497.475 637.616H491.429C495.796 646.352 497.475 656.432 497.475 667.184C494.788 699.777 466.573 723.97 434.328 721.618C402.083 719.266 377.564 690.705 379.915 658.448C381.258 641.648 389.656 626.863 401.747 617.119C385.961 610.063 370.846 600.991 356.739 590.575L278.141 669.201C281.5 688.017 276.126 707.17 262.355 721.618C238.843 744.13 201.895 744.13 178.383 721.618C154.871 699.105 155.879 661.136 178.383 637.616C192.826 623.839 211.972 618.463 230.781 621.823L309.379 543.197C292.92 521.357 280.157 496.492 272.095 469.612H234.812V469.612ZM547.858 402.41C575.737 402.41 598.241 379.897 598.241 352.009C598.241 324.12 575.737 301.607 547.858 301.607C519.979 301.607 497.475 324.12 497.475 352.009C497.475 379.897 519.979 402.41 547.858 402.41V402.41ZM430.298 503.212C448.772 503.212 463.886 488.092 463.886 469.612C463.886 451.131 448.772 436.011 430.298 436.011C411.824 436.011 396.709 451.131 396.709 469.612C396.709 488.092 411.824 503.212 430.298 503.212Z" fill="#E3E1FB"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_463_12188">
                                            <rect width="1494" height="1494" fill="white" transform="translate(-38 -814)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                : null
                            }
                            {size.width > 1200 ?
                                <svg className={styles.background} opacity='50%' width="1786" height="1786" viewBox="0 0 1786 1786" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                    <g >
                                        <path d="M364.475 1693.42C351.889 1711.55 333.843 1725.17 312.969 1732.31C292.094 1739.46 269.485 1739.74 248.44 1733.12C227.395 1726.5 209.016 1713.32 195.984 1695.51C182.952 1677.71 175.951 1656.2 176 1634.13C175.951 1612.06 182.952 1590.55 195.984 1572.75C209.016 1554.94 227.395 1541.76 248.44 1535.14C269.485 1528.52 292.094 1528.8 312.969 1535.95C333.843 1543.09 351.889 1556.71 364.475 1574.84H413.075C413.075 1481.75 442.709 1396.97 496.051 1326.41L416.631 1246.96C383.441 1252.89 349.658 1243.41 324.172 1219.1C284.462 1178.19 284.462 1112.37 324.172 1070.87C365.067 1031.15 430.856 1031.15 472.344 1070.87C496.644 1096.37 506.127 1130.16 500.2 1163.36L579.62 1242.81C634.147 1201.9 698.158 1174.63 768.687 1164.55V1081.54C750.568 1068.95 736.946 1050.9 729.807 1030.02C722.668 1009.14 722.388 986.519 729.006 965.466C735.624 944.414 748.794 926.028 766.595 912.991C784.395 899.955 805.895 892.951 827.956 893C850.017 892.951 871.517 899.955 889.317 912.991C907.118 926.028 920.288 944.414 926.906 965.466C933.524 986.519 933.243 1009.14 926.105 1030.02C918.966 1050.9 905.344 1068.95 887.225 1081.54V1164.55C940.567 1172.26 990.352 1189.45 1035.4 1215.54L1101.18 1121.27C1089.92 1090.44 1092.89 1054.86 1113.04 1026.4C1120.85 1015.22 1130.79 1005.68 1142.29 998.348C1153.79 991.011 1166.63 986.016 1180.06 983.648C1193.49 981.28 1207.26 981.585 1220.58 984.547C1233.89 987.509 1246.49 993.069 1257.65 1000.91C1304.48 1033.52 1316.33 1098.14 1283.14 1144.98C1262.99 1174.04 1230.98 1189.45 1198.39 1189.45L1128.45 1289.06C1153.93 1314.55 1174.09 1343.01 1191.27 1374.44C1209.96 1367.14 1230.35 1365.38 1250.01 1369.37C1269.66 1373.37 1287.75 1382.95 1302.11 1396.97C1341.82 1438.47 1341.82 1503.69 1302.11 1545.19C1284.92 1561.2 1264.17 1570.69 1242.84 1574.84C1242.84 1606.86 1238.69 1637.69 1232.17 1667.33L1309.81 1688.08C1334.7 1667.33 1369.08 1658.44 1403.46 1667.33C1430.02 1674.57 1452.62 1692.06 1466.3 1715.97C1479.97 1739.87 1483.59 1768.23 1476.36 1794.81C1469.12 1821.38 1451.64 1843.99 1427.74 1857.67C1403.84 1871.35 1375.49 1874.97 1348.93 1867.73C1315.14 1858.25 1289.66 1833.35 1278.99 1802.51L1189.5 1778.21C1162.82 1825.05 1127.26 1866.55 1085.77 1900.94L1150.97 2019.52C1183.57 2024.26 1213.2 2042.64 1230.39 2074.06C1236.85 2086.06 1240.89 2099.2 1242.27 2112.75C1243.65 2126.3 1242.35 2139.99 1238.44 2153.04C1234.53 2166.09 1228.1 2178.24 1219.49 2188.8C1210.89 2199.36 1200.3 2208.12 1188.31 2214.58C1176.32 2221.05 1163.18 2225.08 1149.64 2226.46C1136.09 2227.85 1122.4 2226.55 1109.36 2222.64C1096.32 2218.73 1084.17 2212.29 1073.62 2203.68C1063.06 2195.08 1054.3 2184.48 1047.84 2172.49C1031.25 2141.66 1031.84 2106.08 1046.66 2077.03L983.24 1960.23C935.232 1979.2 883.076 1989.87 827.956 1989.87H817.288C824.992 2005.29 827.956 2023.07 827.956 2042.05C823.214 2099.56 773.429 2142.25 716.531 2138.1C659.633 2133.95 616.367 2083.55 620.516 2026.63C622.886 1996.99 637.703 1970.9 659.04 1953.71C631.184 1941.25 604.513 1925.25 579.62 1906.87L440.931 2045.61C446.858 2078.81 437.375 2112.6 413.075 2138.1C371.587 2177.82 306.391 2177.82 264.903 2138.1C223.415 2098.37 225.193 2031.38 264.903 1989.87C290.389 1965.56 324.172 1956.08 357.362 1962.01L496.051 1823.27C467.01 1784.73 444.488 1740.85 430.263 1693.42H364.475ZM916.859 1574.84C966.052 1574.84 1005.76 1535.12 1005.76 1485.9C1005.76 1436.69 966.052 1396.97 916.859 1396.97C867.666 1396.97 827.956 1436.69 827.956 1485.9C827.956 1535.12 867.666 1574.84 916.859 1574.84ZM709.419 1752.71C742.016 1752.71 768.687 1726.03 768.687 1693.42C768.687 1660.81 742.016 1634.13 709.419 1634.13C676.821 1634.13 650.15 1660.81 650.15 1693.42C650.15 1726.03 676.821 1752.71 709.419 1752.71Z" fill="#E3E1FB"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_917_12439">
                                            <rect width="1786" height="1786" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                : null
                            }
                            <div className={styles.content}>
                                <h2 className={styles.title}>
                                    Обеспечим безопасность вашего мероприятия
                                </h2>
                                <div className={styles.subtitle}>
                                    <h3>
                                        Большой ассортимент сертифицированного
                                        оброрудования и средств защиты


                                    </h3>

                                </div>
                                <div className={styles.grid}>
                                    <div className={styles.item}>
                                     <div>    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M29.1866 16.5338L19.46 7.02242C22.5961 6.13351 26.1413 7.2002 28.1412 10.0003C29.5502 11.9559 29.8229 14.3559 29.1866 16.5338ZM92.046 47.779C89.3643 47.779 86.9554 49.1124 85.5464 51.1124H81.8194C81.8194 44.1345 79.5468 37.7787 75.4562 32.4897L81.5467 26.534C84.092 26.9785 86.6827 26.2673 88.6371 24.4451C91.6824 21.3783 91.6824 16.4449 88.6371 13.3337C85.501 10.3558 80.4559 10.3558 77.2743 13.3337C75.4107 15.2448 74.6835 17.7782 75.138 20.2672L69.0475 26.2229C64.866 23.1562 59.9572 21.1117 54.5485 20.3561V14.1337C55.938 13.1899 56.9827 11.8366 57.5301 10.2713C58.0776 8.7059 58.0991 7.01044 57.5916 5.43227C57.0841 3.8541 56.0741 2.47584 54.709 1.4986C53.3439 0.521359 51.6952 -0.0037079 50.0034 1.9711e-05C48.3116 -0.0037079 46.6628 0.521359 45.2977 1.4986C43.9326 2.47584 42.9227 3.8541 42.4151 5.43227C41.9076 7.01044 41.9292 8.7059 42.4766 10.2713C43.024 11.8366 44.0687 13.1899 45.4582 14.1337V20.3561C42.0948 20.845 38.9587 21.8228 36.0043 23.2006L78.5469 64.8017C79.3196 63.2461 80.0013 61.6905 80.5013 60.0015H85.5464C86.5116 61.3603 87.8955 62.3818 89.4963 62.9172C91.0971 63.4525 92.8309 63.4735 94.4448 62.9773C96.0587 62.481 97.4681 61.4933 98.4675 60.1585C99.4669 58.8236 100.004 57.2113 100 55.557C100 51.2458 96.4548 47.779 92.046 47.779ZM95.9548 93.1579L90.1825 98.8025L86.8191 95.558C85.001 95.3802 83.2284 94.6691 81.8194 93.3357C80.4559 91.9579 79.7286 90.2245 79.5468 88.4467L67.7294 76.8464C66.2295 77.7798 64.6387 78.802 62.957 79.5131C64.5933 80.802 65.7296 82.7577 65.9114 84.9799C66.2295 89.2467 62.9116 93.0246 58.5482 93.3357C54.1849 93.6468 50.367 90.4467 50.0034 86.1355C50.0034 84.7133 50.2306 83.3799 50.8215 82.2243H50.0034C45.7764 82.2243 41.7766 81.4243 38.0951 80.002L33.2318 88.7578C34.3681 90.9356 34.4135 93.6024 33.1409 95.9135C32.6455 96.8124 31.9739 97.607 31.1644 98.2521C30.3549 98.8971 29.4235 99.3799 28.4232 99.6729C27.4229 99.966 26.3734 100.063 25.3346 99.9599C24.2958 99.8563 23.2881 99.5536 22.3689 99.0692C21.4497 98.5847 20.6371 97.928 19.9774 97.1364C19.3178 96.3449 18.8241 95.4341 18.5244 94.4559C18.2247 93.4778 18.125 92.4515 18.231 91.4357C18.3369 90.4199 18.6464 89.4344 19.1418 88.5356C20.4599 86.18 22.7325 84.8021 25.2323 84.4466L30.232 75.5575C27.0504 72.9796 24.3233 69.8684 22.278 66.3572L15.4148 68.1795C14.5967 70.4907 12.6423 72.3574 10.0515 73.0685C9.0428 73.337 7.98988 73.4086 6.95287 73.2792C5.91586 73.1497 4.91508 72.8218 4.00766 72.3142C3.10023 71.8065 2.30395 71.1291 1.66426 70.3205C1.02458 69.512 0.554022 68.5881 0.279459 67.6017C0.00489528 66.6153 -0.0682967 65.5857 0.0640611 64.5716C0.196419 63.5576 0.531734 62.5789 1.05086 61.6916C1.56999 60.8043 2.26277 60.0256 3.08963 59.4001C3.9165 58.7746 4.86127 58.3144 5.86999 58.0459C8.50618 57.3792 11.1424 58.0459 13.0513 59.6015L19.0055 58.0459C18.4765 55.7706 18.2022 53.4458 18.1873 51.1124C16.5511 50.8013 14.9603 50.0902 13.6422 48.8901C10.5969 45.7789 10.5969 40.8899 13.6422 37.7787C15.9148 35.5565 19.3236 35.0231 22.1416 36.0898C22.5961 35.2898 23.1415 34.5342 23.6415 33.7342L0.506716 11.1114L6.3245 5.46682L95.9548 93.1579Z" fill="url(#paint0_linear_917_2590)" />
                                         <defs>
                                             <linearGradient id="paint0_linear_917_2590" x1="0" y1="50.0301" x2="100" y2="50.0301" gradientUnits="userSpaceOnUse">
                                                 <stop stop-color="#07F1D3"/>
                                                 <stop offset="0.572917" stop-color="#3A65F1"/>
                                                 <stop offset="0.984375" stop-color="#B93DF6"/>
                                             </linearGradient>
                                         </defs>
                                     </svg>
                                     </div>
                                        <h3> Дезинфекция воздуха и поверхностей в помещении</h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div>  <svg width="82" height="100" viewBox="0 0 82 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M66.5 0V10L46.5 9.995V20H61.5V30C72.55 30 81.5 38.95 81.5 50V90C81.5 92.6522 80.4464 95.1957 78.5711 97.0711C76.6957 98.9464 74.1522 100 71.5 100H11.5C8.84784 100 6.3043 98.9464 4.42893 97.0711C2.55357 95.1957 1.5 92.6522 1.5 90V50C1.5 38.95 10.45 30 21.5 30V20H36.5V9.995L19 10C15.85 10 12.15 12.45 8 18L0 12C5.85 4.2 12.15 0 19 0H66.5ZM46.5 50H36.5V60H26.5V70H36.495L36.5 80H46.5L46.495 70H56.5V60H46.5V50Z" fill="url(#paint0_linear_917_180)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_917_180" x1="0" y1="50.0301" x2="81.5" y2="50.0301" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#07F1D3"/>
                                                    <stop offset="0.572917" stop-color="#3A65F1"/>
                                                    <stop offset="0.984375" stop-color="#B93DF6"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        </div>
                                        <h3> Аренда санитайзеров, автоматов с масками и перчатками</h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div>   <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  clip-rule="evenodd" d="M87.8332 0.434754C87.4902 0.674446 87.1065 1.09172 86.9801 1.36213C86.1711 3.09469 86.3967 4.47275 87.7621 6.13915C91.717 10.9648 93.9127 16.971 94.1649 23.6528C94.4294 30.6658 92.2801 37.5166 88.2065 42.6452C86.7502 44.4787 86.5651 44.858 86.5495 46.0428C86.5164 48.5501 88.5858 50.1503 90.5643 49.1474C92.1338 48.3519 95.5031 43.334 97.1939 39.2743C99.1407 34.5995 100 30.125 100 24.6618C100 17.6172 98.4397 11.6626 95.094 5.93937C93.8966 3.89067 91.7214 0.989252 90.9409 0.399327C90.217 -0.147772 88.641 -0.12961 87.8332 0.434754ZM9.02163 6.81115C5.45684 7.80579 2.76857 11.2648 2.28023 15.4856C2.17418 16.4013 1.58683 22.8008 0.975029 29.7068C-0.0296466 41.0445 -0.115538 42.412 0.0910709 43.7961C0.411158 45.9419 1.16462 47.5568 2.79655 49.5943C3.56938 50.5595 4.41969 51.8777 4.68577 52.5237C5.70649 55.0005 5.7149 54.5749 4.2254 75.8081C3.47371 86.5241 2.85916 95.8719 2.85994 96.5809C2.86131 98.0197 3.23227 98.8751 4.1579 99.5744C4.69027 99.9767 5.28662 99.9971 16.4764 99.9984L28.2355 100L28.9003 99.4926C30.0241 98.6347 30.1791 97.9544 30.6222 91.928C31.1413 84.8669 31.724 75.4572 32.1076 67.9364C32.2743 64.6684 32.4997 61.3387 32.6085 60.5371C33.2923 55.4982 35.6462 50.8454 39.1521 47.6023C40.7969 46.081 43.9642 44.1531 45.5535 43.7062C46.0985 43.5531 46.5151 43.2964 46.5706 43.0791C46.753 42.3681 53.7282 6.93267 53.7282 6.71765C53.7282 6.37302 10.266 6.46383 9.02163 6.81115ZM59.7934 6.60845C59.7934 6.66809 58.2086 14.7194 56.2717 24.5001C54.3347 34.2811 52.7499 42.4051 52.7499 42.5535C52.7499 42.9782 64.5161 42.9358 65.2326 42.5087C66.0226 42.0376 66.5781 41.2481 66.8248 40.2452C67.5178 37.4278 72.7065 10.5177 72.7065 9.74037C72.7065 8.58227 72.072 7.43089 71.1374 6.89276C70.539 6.54813 69.8104 6.5006 65.125 6.50037C62.1925 6.50015 59.7934 6.54881 59.7934 6.60845ZM78.9744 10.8162C77.965 11.4092 77.4017 12.4734 77.4031 13.7835C77.4043 14.7501 77.6156 15.2017 78.9341 17.0544C82.2297 21.686 82.1217 28.1247 78.6711 32.7225C78.1668 33.3945 77.6749 34.1831 77.578 34.4748C76.6448 37.2879 79.2266 39.9561 81.6216 38.6536C82.3424 38.2617 84.0698 35.9639 84.9803 34.1856C87.6625 28.9485 87.9093 21.8167 85.5916 16.5161C84.3987 13.7884 82.405 11.0458 81.2536 10.5494C80.4359 10.1967 79.9274 10.2561 78.9744 10.8162ZM39.9012 21.6043C40.7383 22.005 41.5498 23.1322 41.7112 24.1176C41.8893 25.2053 41.3416 26.7628 40.5553 27.4056C39.9406 27.9083 39.8656 27.9137 32.5081 27.9769C27.4006 28.0209 24.918 27.9632 24.5582 27.7924C23.773 27.4197 22.9994 26.3834 22.8179 25.4605C22.5199 23.9463 23.2594 22.2171 24.4615 21.6171C25.3469 21.1756 38.9819 21.1642 39.9012 21.6043ZM47.9565 49.9714C46.8804 50.3073 45.6368 50.7997 45.1931 51.0654L44.3862 51.5486L44.0516 53.7446C43.235 59.1039 43.0016 60.1369 42.4205 60.9647C41.6248 62.0982 40.7662 62.7096 39.5223 63.0287C38.9322 63.1798 38.4012 63.3933 38.3423 63.5027C38.2028 63.761 37.8328 70.1988 37.9494 70.3327C38.1502 70.5625 42.6922 69.0131 43.811 68.3331C45.8729 67.0795 47.7923 64.541 48.5624 62.0486C48.824 61.2017 50.5978 50.3759 50.5978 49.6257C50.5978 49.2151 50.2207 49.2644 47.9565 49.9714Z" fill="url(#paint0_linear_917_226)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_917_226" x1="0" y1="50.0301" x2="100" y2="50.0301" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#07F1D3"/>
                                                    <stop offset="0.572917" stop-color="#3A65F1"/>
                                                    <stop offset="0.984375" stop-color="#B93DF6"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        </div>
                                        <h3> Проведение санитарного контроля на входе</h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div>  <svg width="72" height="100" viewBox="0 0 72 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M15.5375 0.131164C11.734 0.902258 8.64568 3.57413 7.41072 7.16183C6.64568 9.3837 6.79802 11.138 8.35173 18.0017L9.6781 23.861H35.9476H62.2172L63.5441 18.0017C65.0922 11.1655 65.2453 9.39776 64.481 7.1839C63.3879 4.01671 61.2297 1.8546 57.8461 0.536633L56.5531 0.032922L36.4359 0.00284385C25.3715 -0.0137577 15.9672 0.0440548 15.5375 0.131164ZM37.3199 4.23468C38.3775 4.77433 38.8773 5.79698 38.8773 7.4214V8.67296L40.3074 8.76476C41.9357 8.86925 42.8045 9.27823 43.383 10.2122C43.8812 11.0167 43.8843 12.5359 43.3894 13.2866C42.7244 14.2954 42.0634 14.581 40.391 14.5823L38.8773 14.5837V15.9732C38.8773 17.0398 38.7783 17.539 38.4508 18.1216C38.0013 18.9212 36.7976 19.6618 35.9476 19.6618C35.0976 19.6618 33.8939 18.9212 33.4445 18.1216C33.117 17.539 33.0179 17.0398 33.0179 15.9732V14.5837L31.5043 14.5823C29.8318 14.581 29.1709 14.2954 28.5058 13.2866C28.0109 12.5359 28.014 11.0167 28.5123 10.2122C29.0908 9.27823 29.9595 8.86925 31.5879 8.76476L33.0179 8.67296L33.0261 7.38019C33.0361 5.79659 33.4447 4.94484 34.5009 4.30538C35.4361 3.73937 36.306 3.71749 37.3199 4.23468ZM8.82498 31.7241C4.23181 36.3778 1.39041 42.519 0.308766 50.1308C-0.0515853 52.6665 -0.1176 67.5276 0.22322 69.3817C1.34959 75.5091 6.57009 80.6741 12.8597 81.8843L14.2838 82.1583L15.8383 81.3767C16.6933 80.9468 17.3929 80.5435 17.3929 80.4806C17.3929 80.4179 16.6926 79.6179 15.8367 78.703C12.239 74.8577 9.91443 70.3946 8.75623 65.1087C8.34412 63.2278 8.32009 62.6692 8.3156 54.9157C8.31091 46.7669 8.31384 46.7065 8.75623 45.8089C9.31248 44.6796 10.3392 43.6089 11.3701 43.0831C11.8051 42.8612 13.0965 42.5185 14.2398 42.3216C21.2574 41.113 26.7396 38.5468 31.1625 34.4003C33.4322 32.2726 35.1238 31.6829 37.3338 32.2489C38.7054 32.6005 38.822 32.6732 40.583 34.2755C45.3109 38.5778 50.7254 41.1339 57.615 42.3159C58.7806 42.5159 60.0902 42.8612 60.5252 43.0831C61.556 43.6089 62.5828 44.6796 63.139 45.8089C63.5814 46.7065 63.5843 46.7669 63.5797 54.9157C63.5752 62.6692 63.5511 63.2278 63.139 65.1087C61.9777 70.4083 59.6574 74.8565 56.0338 78.7296C55.164 79.6591 54.4857 80.4497 54.5263 80.4866C54.5668 80.5237 55.309 80.9085 56.1754 81.3421L57.7509 82.1302L59.105 81.871C65.2787 80.6895 70.3091 75.7608 71.5988 69.6306C72.0129 67.662 72.008 53.4312 71.592 50.2587C70.6099 42.7659 67.6808 36.3956 63.0703 31.7241L61.189 29.8181H35.9476H10.7062L8.82498 31.7241ZM34.6396 39.1677C31.8582 41.7626 27.157 44.5685 23.0105 46.1085C20.8541 46.9095 16.9791 47.8991 15.2207 48.098L14.0406 48.2315L14.1291 55.5774C14.199 61.3755 14.283 63.1964 14.5277 64.2179C16.4738 72.3411 22.1763 78.427 29.9535 80.6808C40.9972 83.8811 52.848 77.7187 56.59 66.8298C57.6267 63.813 57.672 63.379 57.7662 55.5774L57.8547 48.2315L56.6873 48.0995C53.4304 47.731 48.4441 46.1353 44.7574 44.2815C42.6679 43.231 38.8689 40.6515 37.2832 39.2067C36.5676 38.5546 35.9523 38.0251 35.916 38.0298C35.8797 38.0347 35.3054 38.5466 34.6396 39.1677ZM26.5687 53.4024C28.0718 54.1575 28.6242 56.1921 27.6957 57.5526C26.0283 59.9952 22.3783 58.8114 22.4232 55.8427C22.4545 53.778 24.6933 52.4601 26.5687 53.4024ZM48.059 53.4997C49.0543 54.1771 49.457 54.8448 49.472 55.8427C49.517 58.8114 45.867 59.9952 44.1996 57.5526C43.6017 56.6767 43.6033 55.3058 44.2035 54.4075C45.0779 53.0983 46.8547 52.6802 48.059 53.4997ZM32.1543 68.6548C34.5379 70.2335 37.355 70.2353 39.7343 68.6591C41.0504 67.7874 42.3254 67.678 43.3404 68.3499C44.5824 69.1718 45.025 70.547 44.4728 71.8685C43.6558 73.8239 39.4629 75.7165 35.9476 75.7165C32.4435 75.7165 28.2677 73.829 27.4275 71.8653C26.8767 70.5782 27.3 69.2042 28.5049 68.3675C29.491 67.6827 30.848 67.7896 32.1543 68.6548ZM17.8763 86.9058C15.0806 88.3249 12.0963 89.9694 11.2443 90.5602C9.47849 91.7847 6.17537 94.8583 5.75818 95.6649C5.33045 96.4919 5.40466 97.8132 5.92224 98.588C6.85837 99.9892 6.27263 99.9347 20.3715 99.9349L33.0179 99.9352V93.6255V87.3157L31.2113 86.9755C28.8433 86.5294 26.5152 85.8194 24.6838 84.9849C23.8697 84.6138 23.1486 84.3138 23.0814 84.3179C23.0142 84.3222 20.672 85.4866 17.8763 86.9058ZM47.608 84.8163C46.1689 85.5651 42.8965 86.5993 40.7816 86.9737L38.8773 87.3106V93.6229V99.9352L51.5238 99.9349C65.6226 99.9347 65.0369 99.9892 65.973 98.588C66.4906 97.8132 66.5648 96.4919 66.1371 95.6649C65.6925 94.8052 62.3652 91.7446 60.4525 90.4362C58.6933 89.2329 49.3103 84.3022 48.8117 84.3194C48.6652 84.3243 48.1234 84.5479 47.608 84.8163Z" fill="url(#paint0_linear_917_12289)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_917_12289" x1="0" y1="49.9977" x2="71.9067" y2="49.9977" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#07F1D3"/>
                                                    <stop offset="0.572917" stop-color="#3A65F1"/>
                                                    <stop offset="0.984375" stop-color="#B93DF6"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        </div>
                                        <h3> Выезд мед.работника для проведения экспресс  ПЦР-тестов</h3>
                                    </div>

                                </div>
                                <div className={styles.button}>
                                    <Link href='/desinfection' ><a className={cn(styles.a,
                                    )} >   <button> Каталог дезинфекции</button> </a></Link>
                                </div>
                            </div>
                        </div>
                    </div> : null

            }
            {size.width < 720 ? <Cleaning_360 /> : null}

        </section>
    )
}