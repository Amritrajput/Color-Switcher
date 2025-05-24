let listContainer = document.querySelector(".listContainer");
let addBtn = document.querySelector(".addBtn");
let addInput = document.querySelector("#addInput");
let list = [
  
]


function renderList(arr){
    listContainer.innerHTML=''
arr.map(obj => {
    let divElem = document.createElement('div');
    divElem.classList.add('list');
    divElem.innerHTML = `
    <p>${obj.text}</p>
    ` 
    let buttonElement = document.createElement('button');
    buttonElement.innerText='❌';
    divElem.appendChild(buttonElement);
    divElem.onclick = () =>{
        handleDeleteList(obj.id)
    }
    listContainer.append(divElem);
});
}
renderList(list);

function handleAddList(){
    let obj={
        id:Date.now(),
        text:addInput.value
    }
    list.unshift(obj);
    renderList(list)
        addInput.value = '';
}

function handleDeleteList (id){
    let filteredList = list.filter(obj =>{
       return obj.id !== id
    })
    list = filteredList
    console.log(list);
    renderList(list)
}


addBtn.addEventListener('click', handleAddList);

