let userContainer = document.querySelector('.userContainer');
let searchInput = document.querySelector('#searchInput');

const users = [
    {
        profileUrl: 'amrit.jpg',
        name: 'Amrit Rajput',
        email: 'amritrajsingh179@gmail.com',
    },
    {
        profileUrl: 'https://images.unsplash.com/photo-1634295889011-439a70d7799b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww" alt="error loading image"',
        name: 'Dieter Blom',
        email: 'dieterblom@gmail.com',
    },
    {
        profileUrl: 'https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww',
        name: 'nate johnston',
        email: 'natejohnston@gmail.com',
    }
]


function renderUsers(arr){
     userContainer.innerHTML=''
arr.map(function (obj) {
    let {profileUrl,name,email}=obj
    let divElem = document.createElement('div');
    divElem.className = 'userItem'
    divElem.innerHTML = ` <div class="image">
                    <img src=${profileUrl}  />
                </div>
                <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>
            </div>`
           

            userContainer.append(divElem)
})
}
renderUsers(users);


function handleSearch(e){
let searchValue=e.target.value;
let filteredUsers = users.filter(obj => {
   return ( obj.name.toLowerCase().includes(searchValue.toLowerCase()) || 
obj.email.toLowerCase().includes(searchValue.toLowerCase())
)
})
renderUsers(filteredUsers)
}

searchInput.addEventListener('input',handleSearch)