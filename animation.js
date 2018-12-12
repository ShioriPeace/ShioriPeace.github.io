function startAnimation() {
    anime({
       targets: "#animation-box",
        /*translateX: 400,
        translateY: 500,
        borderRadius: 10,
        rotate: 540,*/
        translateX: {
            value: '+=150',
            duration: 1000
        },
        width: {
            value: '-=10',
            duration: 1800,
            easing: 'easeInOutSine'
        },
        height: {
            value: '*=2',
            duration: 1800,
            easing: 'easeInOutSine'
        },
        backgroundColor:{
           value: '*=200'
        },
        direction: 'alternate'

    });

}