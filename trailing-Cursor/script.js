let smallCursor = document.querySelector('.smallCursor')
let shadowCursor = document.querySelector('.shadowCursor')
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove',function(e){
    mouseX=e.clientX
    mouseY=e.clientY
    smallCursor.style.left = mouseX + "px"
    smallCursor.style.top = mouseY + "px"
    
})
function animateshadowCursor(){
    
    let currentX = parseFloat(shadowCursor.style.left)  || 0
    let currentY = parseFloat(shadowCursor.style.top) || 0

    let distanceX=mouseX-currentX
    let distanceY=mouseY-currentY
    shadowCursor.style.left = currentX + distanceX*0.1 +"px"
   shadowCursor.style.top = currentY + distanceY*0.1 +"px"
   requestAnimationFrame(animateshadowCursor)
}
animateshadowCursor();