

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



var liitem = document.getElementsByClassName('item5')
liitem[0].style.fontWeight = 'bold'
liitem[0].style.backgroundColor = 'pink'

var li5 = document.getElementsByTagName('li')
li5[4].style.backgroundColor = 'pink'