const form = document.querySelector('#addForm');
const mainList = document.querySelector('#mainList');

form.addEventListener('submit',addExpense);

//Function to save/show expense
function addExpense(e){
    e.preventDefault();

    const amount = document.querySelector('#amount').value;
    const description = document.querySelector('#description').value;
    const category = document.querySelector('#category').value;
    // console.log(amount,description,category);
    // localStorage.setItem(description,[amount,category]);
    // console.log(localStorage.getItem(description));
    const expense = {
        amount,
        description,
        category
    };
    localStorage.setItem(description,JSON.stringify(expense));

    // const li

    //TO ADD
    const li = document.createElement('li');
    const br = document.createElement('br');
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(`Amount- Rs. ${amount}`));
    li.appendChild(br);
    li.appendChild(document.createTextNode(`    Description- ${description}`)); //UNABLE to BR 
    // console.log(li);
    li.appendChild(br);
    li.appendChild(document.createTextNode(`Category- ${category}`));
  
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.style = "margin-left:4px";
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.style.backgroundColor = '#f4f4f4';
    editBtn.style.color = 'black';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    mainList.appendChild(li);
    // console.log(li);
    //Reset fields
    // document.querySelector('#amount').value = '';
    // document.querySelector('#description').value = '';
    // document.querySelector('#category').value = '';
    form.reset();

    //TO DELETE
    deleteBtn.addEventListener('click',()=>{
        if(confirm('Do you want to delete this expense?')){
            mainList.removeChild(li);
            localStorage.removeItem(description);
        }else{
            console.log(`${localStorage.getItem(description)} is not deleted.`);
        }
    });

    //TO EDIT
    editBtn.addEventListener('click',()=>{
        document.querySelector('#amount').value = expense.amount;
        document.querySelector('#description').value = expense.description;
        document.querySelector('#category').value = expense.category;
        deleteExpense(expense.description);
    });
};

function deleteExpense(key){
    localStorage.removeItem(key);
    removeFromScreen();
}
function removeFromScreen(){

}