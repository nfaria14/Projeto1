window.onload = function () {
    logout()

    rendertestemunhos()
    renderTestemonial()
  

}

function renderTestemonial() {

    let testimonial = document.getElementById("testimonial")
    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""
    for (var i = 0; i < testemunhos.length; i++) {

        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-4">
            <div class="card" style="width: 18rem;">
               <div class="card-body">
                    <h5 class="card-title">${testemunhos[i]._email}</h5>
                    <p class="card-text">${testemunhos[i]._texto}</p>`


        strHtmlCard += `<a id="${testemunhos[i]._id}" href="#" class="btn btn-danger remove">REMOVE</a>`

        strHtmlCard += `</div>
            </div>      
        </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }

    }

    testimonial.innerHTML = strHtmlCard

     // Obter todos os botões REMOVE
     let btnRemove = document.getElementsByClassName("remove")
     // Para cada botão, adicionar um listener para escutar pelo evento clique
     for (let i = 0; i < btnRemove.length; i++) {
         btnRemove[i].addEventListener("click", function() {
             // By clicking in a specific game, remove it from the array
             let testemunhoID = btnRemove[i].getAttribute("id")
             removeTestemunhoById(testemunhoID)
             renderTestemonial()
         })        
     }

}


function removeTestemunhoById(id) {
    console.log("ID: " + id)
    for (let i = 0; i < testemunhos.length; i++) {
        if(testemunhos[i]._id == id) {
            testemunhos.splice(i, 1)
            localStorage.setItem("testemunhos",JSON.stringify(testemunhos))
        }                  
    }
}