import React, {FunctionComponent} from "react";
import styles from './Cleaning.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Cleaning_360} from "./Cleaning_360/Cleaning_360";
import Link from "next/link";
import cn from "classnames";
import {MyImage} from "../MyImage";


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
                                    <g >
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
                                    ?????????????????? ???????????????????????? ???????????? ??????????????????????
                                </h2>
                                <div className={styles.subtitle}>
                                    <h3>
                                        ?????????????? ?????????????????????? ????????????????????????????????????
                                        ?????????????????????????? ?? ?????????????? ????????????


                                    </h3>

                                </div>
                                <div className={styles.grid}>
                                    <div className={styles.item}>
                                     <div>     <MyImage src={{default :'/Desinfection/desinfection_icon_1.svg'}}/>
                                     </div>
                                        <h3> ?????????????????????? ?????????????? ?? ???????????????????????? ?? ??????????????????</h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div>   <MyImage src={{default :'/Desinfection/desinfection_icon_2.svg'}}/>
                                        </div>
                                        <h3> ???????????? ????????????????????????, ?????????????????? ?? ?????????????? ????????????????????????</h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div>     <MyImage src={{default :'/Desinfection/desinfection_icon_3.svg'}}/>
                                        </div>
                                        <h3> ???????????????????? ?????????????????????? ???????????????? ???? ??????????</h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div>    <MyImage src={{default :'/Desinfection/desinfection_icon_4.svg'}}/>
                                        </div>
                                        <h3> ?????????? ??????.?????????????????? ?????? ???????????????????? ????????????????  ??????-????????????</h3>
                                    </div>

                                </div>
                                <div className={styles.button}>
                                    <Link href='/desinfection' ><a className={cn(styles.a,
                                    )} >   <button> ?????????????? ??????????????????????</button> </a></Link>
                                </div>
                            </div>
                        </div>
                    </div> : null

            }
            {size.width < 720 ? <Cleaning_360 /> : null}

        </section>
    )
}