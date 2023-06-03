var items =document.getElementsByClassName('list-group-item');
////console.log(items);
//items[2].textContent='Hello2';
//items[1].style.fontWeight = 'bold';
//items[2].style.backgroundColor ='green';
for(var i=0;i<items.length;i++){
  items[i].style.fontWeight='bold'
}

var li = document.getElementsByTagName('li');
console.log(li);
for(var i=0;i<li.length;i++){
  li[i].style.backgroundColor='#f4f4f4';
}
