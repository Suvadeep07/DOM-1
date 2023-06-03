//var items =document.getElementsByClassName('list-group-item');
////console.log(items);
//items[2].textContent='Hello2';
//items[1].style.fontWeight = 'bold';
//items[2].style.backgroundColor ='green';
//for(var i=0;i<items.length;i++){
  //items[i].style.fontWeight='bold'
//}

//var li = document.getElementsByTagName('li');
//console.log(li);
//for(var i=0;i<li.length;i++){
  //li[i].style.backgroundColor='#f4f4f4';
//}

var header = document.querySelector('#main-header');
header.getElementsByClassName.borderBottom = 'solid 4px #ccc';
var input = document.querySelector('input');
input.value='Hello World';
var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem =document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color= ' green';

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'hello';

var items = document.querySelectorAll('.list-group-item');
items[2].style.display = 'none';

var odd =document.querySelectorAll('li:nth-child(odd');
for(var i=0;i<odd.length;i++){
  odd[i].style.backgroundColor= '#f4f4f4';
}
var items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green';




