window.onload=function(){
    renderUtilizadores()

    login()
    verificarlogin()
    rendertestemunhos()
    renderTestimonial()

    let input=document.getElementById("newTestemunho")
    input.style.visibility='hidden'

    let userID=localStorage.getItem("userID")
    let email=""
    if(userID!=0){
        for(let i=0;i<utilizadores.length;i++){
            if(utilizadores[i]._id==userID){
                email=utilizadores[i]._email
                if(utilizadores[i]._tipo==0){
                    input.style.visibility='visible'
                }

            }

        }
    }

    let frmTestemunho=document.getElementById("frmTestemunho")
    frmTestemunho.addEventListener("submit",function(){
        let modal1=document.getElementById("testemunhoModal")
        let texto=document.getElementById("inputTexto")

        let novoTeste= new Testemunho(email,texto.value)
        testemunhos.push(novoTeste)
        localStorage.setItem("testemunhos",JSON.stringify(testemunhos))
        renderTestimonial()
        $('#testemunhoModal').modal('hide')
    })
}

function renderTestimonial() {

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
            <div class="card">
               <div class="card-body">
                    <h5 class="card-title">${testemunhos[i]._email}</h5>
                    <p class="card-text">${testemunhos[i]._texto}</p>`

        strHtmlCard += `</div>
            </div>      
        </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }

    }

    testimonial.innerHTML = strHtmlCard

}

