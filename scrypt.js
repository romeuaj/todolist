console.log("deu certo!")
function addTarefa(){
    
    const tarefa = document.querySelector("input").value
   
    const li = document.createElement("li")
    li.innerHTML = tarefa + '<span onclick="delTarefa(this)">❌</span>';
    console.log(li)
    document.querySelector("ul").appendChild(li)
    document.querySelector("input").value = ""
}

function delTarefa(li){
    console.log(li)
    li.parentElement.remove()
}