const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');

//Form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    //get input value
    const newItem = document.querySelector('#item').value;
    //create new li
    const li = document.createElement('li');
    li.className = 'list-group-item';
    //add text node with i/p value to the li
    li.appendChild(document.createTextNode(newItem));
    //create delete button element
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //add text node to button
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    //EDIT BUTTON
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            //select parent element(li) of delete button
            const li = e.target.parentElement;
            //remove li
            itemList.removeChild(li);
        }
    }
}

const list = document.querySelectorAll('.list-group-item');
// console.log(list);
for(let i=0;i<list.length;i++){
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    list[i].appendChild(editBtn);   
}