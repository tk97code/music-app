window.addEventListener('mousemove',e =>{
    const body = $('body')
    const animate = document.createElement('span')
    const x = e.pageX
    const y = e.pageY
    const size = (Math.random() * 34).toFixed()
    const rotate = (Math.random() * 360).toFixed()

    animate.style.position = "absolute"
    animate.style.left = x - 10 + 'px'
    animate.style.top = y - 10 + 'px'
    animate.style.width = size + 'px'
    animate.style.height = size + 'px'
    animate.style.transform = `rotate(${rotate}deg)`
    animate.setAttribute("class" , "animate-cursor")

    body.appendChild(animate)

    setTimeout(function(){
        animate.remove()
    } , 700)
})

// jQuery(($) => {
//     $('.cursor-hover').on('mouseover', (event) => {
//         $('.cursor').css('width' , '120');
//         $('.cursor').css('height' , '120');
//         $('.cursor__inner').attr('cx', '23');
//         $('.cursor__inner').attr('cy', '23');
//         $('.cursor').css('transition', 'all .1s ease');
//     });
//     $('.cursor-hover').on('mouseout', (event) => {
//         $('.cursor').css('width' , '80');
//         $('.cursor').css('height' , '80');
//         $('.cursor__inner').attr('cx', '40');
//         $('.cursor__inner').attr('cy', '40');
//         $('.cursor').css('transition', '');
//     });
// });
