// Your code goes here

Array.from(document.links).forEach(function (link) {
    link.addEventListener('click', function (event) {
        link.style.backgroundColor = "cyan"
    })
    link.addEventListener('dblclick', function (event){
        link.style.backgroundColor = "gray"
    })
    link.addEventListener('mouseover', function (event){
        link.style.fontSize = "2rem"
    })
    link.addEventListener('mouseout', function (event){
        link.style.fontSize = "1.6rem"
    })
    link.addEventListener('contextmenu', function (event){
        window.alert("You're a bold guy, guy.")
    })
    link.addEventListener('auxclick', function (event){
        window.alert ("Let's see how many event listeners I can add into these stupid links lol")
    })
  })

// const button1 = document.querySelector('.btn')
// const button2 = document.querySelector('button[]')
const Image1 = document.querySelector('img')
const Image2 = document.querySelector('#lol2')
const anyPara = document.querySelector('p')
const bodyStuff = document.querySelector('body')

anyPara.addEventListener('copy', function(event){
    window.alert("HEY! DON'T COPY ME!")
})

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        bodyStuff.style.backgroundColor = 'gray'
    }
})

window.addEventListener('resize', function(event){
    Image1.src = 'https://i.kym-cdn.com/entries/icons/original/000/032/993/doyou.jpg'
    //I'm so sorry, lol.
})

window.addEventListener('scroll', function(event){
    Image2.src = 'https://thumbs.gfycat.com/BlindBitesizedBrocketdeer-small.gif'
})




