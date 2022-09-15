// TASK 12
const form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    //Get text from Item Field 
    const newItem = document.querySelector('#item').value;
    const userName = document.querySelector('#user').value;
    const email = document.querySelector('#email').value;
    //Create li to store that item
    // const li = document.createElement('li');
    // li.className = 'list-group-item';
    //Add text to li
    // li.appendChild(document.createTextNode(newItem));
    // itemList.appendChild(li);
    //Adding rest of the data in local storage
    //Store data in local storage as object.
    const userObj = {
        email : email,
        userName : userName,
        itemName : newItem
    };
    //Convert obj into string
    const userObj_serialized = JSON.stringify(userObj);
    localStorage.setItem(`${email}`,userObj_serialized);
    //Convert string to its obj
    // const userObj_deserialized = JSON.parse(userObj_serialized);
    showNewUserOnScreen(userObj);
}

function showNewUserOnScreen(user){
    const ul = document.querySelector('#items');
    const childHTTML = `<li class="list-group-item"> Item: ${user.itemName}<br>User: ${user.userName}</li>`;
    ul.innerHTML = ul.innerHTML+childHTTML;
}

console.log(localStorage);
// Object.keys(localStorage).forEach(function(key){
//     console.log(localStorage.getItem(key));
//  });
 Object.keys(localStorage).forEach((key) => {
    stringifiedDetailsOfPeople = localStorage.getItem(key);
    detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
    const ul = document.querySelector('#items');
    const childHTTML = `<li class="list-group-item"> Item: ${detailsOfPeople.itemName}<br>User: ${detailsOfPeople.userName}</li>`;
    ul.innerHTML = ul.innerHTML+childHTTML;
    });
// for(let i=0;i<localStorage.length;i++){
//     const itemName = localStorage.getItem()
// }