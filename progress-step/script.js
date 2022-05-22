let progress = 0;

const circleList = document.getElementsByClassName('circle') 


function setActive(activeIndex) {
    for(let i = 0; i < circleList.length; i++) {
        console.log(activeIndex, i)
        if (activeIndex == i) {
            circleList[i].classList.add('active')
        } else {
            circleList[i].classList.remove('active')
        }
    }
}


const prev = document.getElementById('prev')

prev.addEventListener('click', function() {
    if (progress === 0) return 
    progress--
    setActive(progress)
})

const next = document.getElementById('next')

next.addEventListener('click', function() {
    if (progress === 3) return 
    progress++
    setActive(progress)
})