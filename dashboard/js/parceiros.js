window.onload = function () {
    renderparcerias()
    let tblParceiros = document.getElementById("tblParceiros")
    renderTable()

}
//Functions
// Função para renderizar a tabela 
function renderTable() {
    let strHtml = "<thead class='thead-dark'><tr>" +
        "<th class='w-2'>#</th>" +
        "<th class='w-50'>Nome</th>" +
        "<th class='w-50'>Local</th>" +
        "<th class='w-50'>Link</th>" +
        "</tr>" +
        "</thead><tbody>"

    for (var i = 0; i < parcerias.length; i++) {
        strHtml += "<tr>" +
            "<td>" + parcerias[i]._id + "</td>" +
            "<td>" + parcerias[i]._nome + "</td>" +
            "<td>" + parcerias[i]._local + "</td>" +
            "<td>" + parcerias[i]._url + "</td>" +
            "<td>" +
            "<a id='" + parcerias[i]._id + "' class='edit' data-toggle='modal' data-target='#parceiroModal'><i class='fa fa-edit'></i></a> " +
            "</td>" +
            "<td>" +
            "<a id='" + parcerias[i]._id + "' class='remove'><i class='fa fa-remove'></i></a> " +
            "</td>" +
            "</tr>"
    }
    strHtml += "</tbody>"
    tblParceiros.innerHTML = strHtml

    // Get all the remove links from the table
    let tdRemove = document.getElementsByClassName("remove")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function () {
            // By clicking in a specific game, remove it from the array
            let parceiroId = tdRemove[i].getAttribute("id")
            removeParceiroById(parceiroId)
            renderTable()
        })
    }
    // Get all the edit links from the table
    let tdEdit = document.getElementsByClassName("edit")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdEdit.length; i++) {
        tdEdit[i].addEventListener("click", function () {
            // By clicking in a specific game, edit in the form
            let parceiroId = tdEdit[i].getAttribute("id")
            editParceiroById(parceiroId)
        })
    }

}
//Função para eliminar por ID
// Remove game based on its ID
function removeParceiroById(id) {
    for (let i = 0; i < parcerias.length; i++) {
        if (parcerias[i].id == id) {
            parcerias.splice(i, 1)
            //Atualizaar local storage        
            localStorage.setItem("parcerias", JSON.stringify(parcerias))
        }
    }
}

function editParceiroById(parceiroId){
   parceriaId=parceiroId
   let modal=document.getElementById("parceiroModal")
    let nome=document.getElementById("inputNome")
    let link=document.getElementById("inputLink")
    let local=document.getElementById("inputLocalizacao")
    let frmParceiros=document.getElementById("frmParceiros")
    let existe=false
    let strerror=""
    let aux=0

    //Preencher o form
    for(let i=0;i<parcerias.length;i++){
        if(parceriaId==parcerias[i]._id){
            console.log(parceriaId)
            nome.value=parcerias[i]._nome
            link.value=parcerias[i]._url
            local.value=parcerias[i]._local
            aux=i
        }
    }
    frmParceiros.addEventListener("submit",function(event){
        for(let i=0;i<parcerias.length;i++){
            if(nome.value==parcerias[i]._nome && parceriaId!=parcerias[i]._id){
                existe=true
            }

        }
        if(existe){
            strerror="Parceria já existe"
        }

        if(strerror!=""){
            alert(strerror)
        }else{
            //Criar Objeto adicionar ao array e enviar para a locarstorage

           parcerias[aux]._nome=nome.value
           parcerias[aux]._local=local.value
           parcerias[aux]._url=link.value

            localStorage.setItem("parcerias", JSON.stringify(parcerias))
            modal.modal('hide')
renderTable()
        }
        event.preventDefault()
    })

}