function adicionarTarefa() {
    let item = document.querySelector("input").value.trim();

    if (item === "") {
        notificar()
        return;
    }

    let li = document.createElement("li")
    li.innerHTML = item + "<span onclick='excluir(this)' >❌</span>"
    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value
    // <li> </li>
    document.querySelector("input").value = "";
}
function excluir(li) {
    li.parentElement.remove()
}

function esvaziar() {
    input.value("");
}

function notificar() {
    if ("Notification" in window) {
        if (Notification.permission == "granted") {
            new Notification("Por favor, digite uma tarefa para adicionar!")
        } else {
            Notification.requestPermission().then((res) => {
                if (res == "granted") {
                    return
                } else if (res == "denied") {
                    console.log("Você negou.")
                }
            })
        }
    }
}