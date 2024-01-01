let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");

let kitchenInputData;
let kitchenInputDataArray=[];


function setLocalStorage(){
    localStorage.setItem("kitchenInput",JSON.stringify(kitchenInputDataArray))

}
function getLocalStorage(){
    if(localStorage.getItem("kitchenInput")){
    kitchenInputDataArray=JSON.parse(localStorage.getItem("kitchenInput"))
    buildUI()
    }
}
function addKitchenItems(event){
kitchenInputData = kitchenInput.value
kitchenInputDataArray.push(kitchenInputData)
  setLocalStorage()
  getLocalStorage() 

}
function buildUI(){
    kitchenItemsList.textContent=""
    kitchenInputDataArray.forEach((item) =>{

    
    
    let li=document.createElement("li");
    let spanE1 =document.createElement('span')
    li.appendChild(spanE1)
    spanE1.innerText = item;

    li.style.cssText ="animation-name : slideIn;";
    kitchenItemsList.appendChild(li);
    kitchenInput.Value = "";
    kitchenInput.focus();
     
   

    let trashBtn = document.createElement("i");
    trashBtn.classList.add('fas','fa-trash');
    li.appendChild(trashBtn)


    let editBtn = document.createElement("i");
    editBtn.classList.add('fas','fa-edit');
    li.appendChild(editBtn)



})
}
    

function deleteKitchenItem(event)
{
    
   if(event.target.classList[1] === "fa-trash")
   {
    let item = event.target.parentElement;
    item.classList.add("slideOut");
    item.addEventListener("trasitionend",function(){
        item.remove();
    })

    
   } 
}
function editKitchenItem(event){
    if(event.target.classList[1] === "fa-edit")
    {
    let editedValue = prompt("please add new text")
    let item = event.target.parentElement;
    let spanE1 =item.querySelector('span')
     spanE1.innerText=editedValue
     }
 
    }  
    


    
addBtn.addEventListener("click",addKitchenItems);

kitchenItemsList.addEventListener("click",deleteKitchenItem)
kitchenItemsList.addEventListener("click",editKitchenItem)
getLocalStorage()