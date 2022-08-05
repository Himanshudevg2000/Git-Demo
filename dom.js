

var header = document.getElementById('main-header')
header.style.borderBottom = 'solid 3px #000'

var addItems = document.getElementsByClassName('title')
console.log(addItems)

var items = document.getElementsByClassName('list-group-item')
console.log(items)

addItems[0].style.fontWeight = 'bold'
items[0].style.backgroundColor = 'yellow'
items[1].style.backgroundColor = 'red'
items[2].style.backgroundColor = 'green'
items[3].style.backgroundColor = 'lightblue'

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold'
}


// GETELEMENTBYCLASSNAME
var liitem = document.getElementsByClassName('item5')
liitem[0].style.fontWeight = 'bold'
liitem[0].style.backgroundColor = 'pink'

var li5 = document.getElementsByTagName('li')
li5[4].style.backgroundColor = 'pink'



// GETELEMENTBYTAGNAME
var li5 = document.getElementsByTagName('li')
li5[4].style.backgroundColor = 'pink'


// QUERYSELECTOR & QUERYSELECTORALL
let items = document.querySelectorAll('li')
items[1].style.color = 'green'

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green'
}



// CREATING NODES AND MANIPULATING DOM

let newDiv = document.createElement('div')

let newDivText = document.createTextNode('HEllo');
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')

container.insertBefore(newDiv, h1)

let secondText = document.createTextNode('HEllo');

let listgroup = document.querySelector('.list-group')
let li = document.querySelector('li')
listgroup.insertBefore(secondText,li)



// task 8
let form = document.getElementById('addForm')

let itemlist = document.getElementById('items')



form.addEventListener('submit', addItem)

itemlist.addEventListener('click',removeItem)



function addItem(e){

    e.preventDefault();



    let newItem = document.getElementById('item').value



    let li = document.createElement('li')

    li.className = 'list-group-item'

    li.appendChild(document.createTextNode(newItem))



    let editbtn = document.createElement('button');

    editbtn.className = 'btn btn-sm float-right';

    editbtn.appendChild(document.createTextNode('EDIT'))

    let deleteBtn = document.createElement('button')

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    deleteBtn.appendChild(document.createTextNode('X'))

    

    li.appendChild(deleteBtn)

    itemlist.appendChild(li)

    

    li.appendChild(editbtn)

    itemlist.appendChild(li)

}



function removeItem(e){

    if(e.target.classList.contains('delete')){

        if(confirm('Are you sure?')){

            let li = e.target.parentElement

            itemlist.removeChild(li)

        }

    }

}


// task 9

function filterItems(e){
    var text =e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li')
   Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 ){
        item.style.display = 'block';
    }else {
        item.style.display = 'none';
    }

   });

}

// task 10

function savetoLocalStorage(e){
    event.preventDefault();
    const name = event.target.username.value
    const email = event.target.emailId.value
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
  }


// task 11

function savetoLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value
    const email = event.target.emailId.value
    const obj = {
        name,
        email
    }
    localStorage.setItem('data',JSON.stringify(obj))
  }

the reason why older user get removed is because the key should be unique and in this the key is same.


// task 12

function savetoLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value
    const email = event.target.emailId.value
    const obj = {
        name,
        email
    }
    localStorage.setItem(obj.email,JSON.stringify(obj))
    onScreen(obj)
  }
function onScreen(user){
    const parentNode = document.getElementById('users');
    const childHTML = `<li> ${user.name} - ${user.email} </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML
}


// task 13

function onScreen(user){
    const parentNode = document.getElementById('users');
    const childHTML = `<li id=${user.email} > ${user.name} - ${user.email}  <button onclick=editUser('${user.email}','${user.name}')> Edit </button> <button onclick=deleteUser('${user.email}')> Delete </button> </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML
}
function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    remooveUserFromScreen(emailId);
}
function remooveUserFromScreen(emailId){
    const parentNode =  document.getElementById('users');
    const childNodeToBeDeleted = document.getElementById(emailId);
    parentNode.removeChild(childNodeToBeDeleted);
}
function editUser(emailId,name){
    // console.log(emailId)
    document.getElementById('email').value = emailId
    document.getElementById('name').value = name
    deleteUser(emailId)
}