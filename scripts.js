function adicionarTarefa(){
    let item = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = item + "<span onclick='excluir(this)' >❌</span>"
    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value
    // <li> </li>
}
function excluir(li){
    li.parentElement.remove()
}