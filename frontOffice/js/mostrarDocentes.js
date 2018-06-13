window.onload=function(){
    renderUtilizadores()
    login()
    verificarlogin()   

    renderDocentes()
    renderCatalogo()


}

function renderCatalogo(){
    let catDocentes=document.getElementById("catalogo")
    let strHtmlCard = ""
    for (let i = 0; i <docentes.length; i++) {
        // Inicia a linha
        if (i % 3== 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-1"></div><div class="col-sm-3">
                <div class="card" >
                    <img class="card-img-top" src="#" alt="Por preencher">
                    <div class="card-body">
                        <h5 class="card-title">${docentes[i]._nome}</h5>
                        <p class="card-text">${docentes[i]._formacao}</p>`

        strHtmlCard += `<a id="${docentes[i]._id}" href="../html/verdocente.html" class="btn btn-warning view" >Ver perfil</a>`

        strHtmlCard += `</div>
                </div>      
            </div>`

        // Fecha a linha
        if (i % 3== 2) {
            strHtmlCard += `</div>`
        }
    }
    catDocentes.innerHTML=strHtmlCard

     // Obter todos os botões REMOVE
     let btnView = document.getElementsByClassName("view")
     console.log(btnView.length)
     // Para cada botão, adicionar um listener para escutar pelo evento clique
     for (let i = 0; i < btnView.length; i++) {
         btnView[i].addEventListener("click", function () {
             //Ao carregar num docente ir para o perfil dele
             let docenteId = btnView[i].getAttribute("id")
            localStorage.setItem("docenteID",docenteId)
            console.log(docenteId)
         })
     }

}