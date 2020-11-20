


const loadingEnter = () => {
    let timeline = gsap.timeline()
    timeline.fromTo('.pageload', {
        y: 0,
    }, {
        y: '-100%',
        delay: 2.2,
        duration: 1
    })
}
// loadingEnter();