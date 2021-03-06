function BlobCoverReverse({ classNames = null,width=598,height   =230,color1,color2 }) {
    return (
        <svg
            version="1.1"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            baseProfile="full"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames}
        >
            <defs>
                <linearGradient id="blobGradient2">
                    <stop offset="0%" stopColor={color1}/>
                    <stop offset="100%" stopColor={color2} />
                </linearGradient>
            </defs>
            <path fill="url(#blobGradient2)" transform={`translate(${width-40} ${height+50}) rotate(180)`}>
                <animate
                    attributeName="d"
                    dur="0.8s"
                    fill="freeze"
                    values="
                                            m-11.444628,-8.048312c-3.140579,-5.378913 53.053023,-5.454973 53.198237,3.376171c0.145215,8.831144 -8.770224,19.502336 -24.251582,15.866166c-15.481357,-3.63617 -11.27162,10.726983 -23.339128,9.250349c-12.067516,-1.476638 -2.466941,-23.113776 -5.607528,-28.492685z;
                        m-28.795354,-5.908146c121.633194,-51.430897 616.10513,-42.270872 462.777242,67.878373c-153.327888,110.149245 115.868414,279.566312 -113.659648,224.562429c-229.528062,-55.003883 -154.634013,59.11043 -243.680104,96.834777c-89.046091,37.724347 -227.070684,-337.844682 -105.43749,-389.275579z;
                                                m-28.79535,-5.90815c121.63319,-51.43089 865.10513,-24.27087 711.77724,85.87838c-153.32789,110.14924 103.86841,416.56631 -170.65965,377.56243c-274.52806,-39.00388 -266.63401,-74.88957 -432.6801,-39.16523c-166.04609,35.72434 -230.07069,-372.84468 -108.43749,-424.27558z;

                    "
                />
            </path>
        </svg>
    );
}

export default BlobCoverReverse;