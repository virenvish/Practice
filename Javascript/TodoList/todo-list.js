let items = [];

const txtAddItem = document.getElementById("txt-add-item");
const btnAddItem = document.getElementById("btn-add-item");
const result = document.getElementById("div-result");
const ul = document.createElement("ul");
 



btnAddItem.addEventListener("click", () => {
  if (txtAddItem.value === "") {
    result.innerHTML = "<strong>Please enter todo item!!</strong>";

    setTimeout(() => {
      UpdateList();
    }, 3000);

    return;
  }

  items.push(txtAddItem.value);
  UpdateTodoList(txtAddItem.value,"+");
});

//Updte list depending on Items added in "items" array.
function UpdateTodoList(todoItem = null, operation) {

    txtAddItem.value = "";

    switch(operation)
    { 
        case "+" : {

            if (items.length > 0) { 
              
                //Empty the result text
                result.innerHTML = "";
                
                //Generating li element.
                const liItem  = document.createElement("li")
                liItem.id= items.length;

               
                const deleteButton = document.createElement("button")
                deleteButton.id = items.length;
                deleteButton.className="deleteBtn"
                deleteButton.innerHTML = "<span>Delete</span>";
                deleteButton.addEventListener("click", (e)=>{
                  //deleteItem(e,liItem);
                  UpdateTodoList(liItem.id,"-");
                }); 

                liItem.innerHTML =`<span class="li-item">${todoItem}</span>`;
                liItem.appendChild(deleteButton);

                ul.appendChild(liItem);
                result.appendChild(ul);

              }

            break;
        }
        case "-" :{  
            if(items.length>0){  
              const liNode = document.getElementById(todoItem);
              console.log(liNode); 
              ul.removeChild(liNode);

              //items = item.fil
            }

            break;
        }
        default:{
            result.textContent = "No items in todo list";
            break;
        }
    } 
}

//Invoking the List to update.
UpdateTodoList();


function deleteItem(event,any){  
  console.log(event);
  console.log(any);
}