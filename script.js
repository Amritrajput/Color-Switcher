let randombtn=document.querySelector('.randomBtn')
let applyBtn=document.querySelector('.ApplyClr')
let colorInput=document.querySelector('#colorInput')
let currentColor=document.querySelector('.currentcolorvalue')
let container=document.querySelector('.container')

const colorArray = ['red','blue', 'green','Aqua','tomato','#1a1a1a','grey','lightblue','lightcoral','yellow']

const generateRandomColor = () =>{
const randomNumber=Math.floor(Math.random()*colorArray.length)
return colorArray[randomNumber];
}


const handleRandomButtonClick = () => {
    let color = generateRandomColor()
    changeColor(color)
}

const handleApplyButtonClick = () => {
    const color=colorInput.value;
    changeColor(color)
}

const changeColor = (color) => {
    container.style.backgroundColor=color;
    currentColor.innerText=color
}



randombtn.addEventListener('click',handleRandomButtonClick)
applyBtn.addEventListener('click',handleApplyButtonClick)

