


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


const headPic = document.getElementsByClassName('playerimg')
const stat = document.getElementsByTagName('h6')
const btn = document.getElementsByClassName('btn')

$(function() { 

let time = gsap.timeline()
    time.fromTo(headPic , {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 1
    })
    .fromTo(stat, {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        delay: 1,
        duration: 1
    }, "<-1")

$(btn).on('click', () => {
    time.restart();
})

})