const point = document.querySelector(".line-points").children
const linePoints = document.querySelector(".line-points")


window.addEventListener('scroll', () => {
    if(window.scrollY >= 700) {
        for(i = 0; point.length <= 5; i++) {
            point[i].classList.add('show')
        }
    }
})
