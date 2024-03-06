console.log("To do list")

const task=document.getElementById("task");

const todo=document.getElementById("to-do-list")
task.addEventListener("keyup",function(event){
    if(event.key=="Enter")
    {
        toDo(this.value)
        this.value="";
    }
})
const toDo=(items)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`${items}
    <i class="fas fa-times"></i>
    `;
    todo.appendChild(listItem);
    listItem.addEventListener("click",function(){
        this.classList.toggle("done");   // it changes hide and show like function
    })

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })
}

