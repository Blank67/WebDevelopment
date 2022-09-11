//EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 'Changed'; //We can also change document object
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// //GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// // headerTitle.textContent = 'Hello!'
// // headerTitle.innerText = 'GoodBye!'
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello!</h3>';
// // headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';

// //GET ELEMENT BY CLASS
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2!';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// //items.style.backgroundColor = '#f4f4f4'; //We can't change color of all the items, to do that we need to loop through it.
// for(let i=0;i<items.length;i++){ //To change color of all
//     items[i].style.backgroundColor = '#f4f4f4';
// }


//TASK 3
let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
let titleClass = document.getElementsByClassName('title');
titleClass[0].style.fontWeight = 'bold';
titleClass[0].style.color = 'green';