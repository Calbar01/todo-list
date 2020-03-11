let form = document.getElementById("form");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let btnClr = document.getElementById("btnClr");
let id = 1;

let LiItem = "";
let todoList = [];

btn.addEventListener("click",addTodoItem);

list.addEventListener("click", boxChecked);

btnClr.addEventListener("clicked", clearList);

if(localStorage.length < 0){
btnClr.style.display = "none";
    console.log("button");
}

if(localStorage.length <= 0){
    btnClr.style.display = "none";
}

function addTodoItem() {
    if(input.value === ""){
        alert("You need to enter something!")
    }

    else{
        if(list.style.borderTop === ""){
            console.log("here!")
            list.style.borderTop = "2px solid white";
            btnClr.style.display = "inline";
        }
        let text = input.value;
        let item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
        list.insertAdjacentHTML('beforeend', item);
        liItem = {item: text, checked: false};
        todoList.push(liItem);
        id++;
        addToLocalStorage();
        form.reset();
    
    }

}