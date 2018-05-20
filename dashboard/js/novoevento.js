let eventoID=0
let eventos= []
let categorias=[]

window.onload=function(){
//Referencias HTML
    let nome=document.getElementById("inputNome")
    let data=document.getElementById("inputData")
    let hora=document.getElementById("inputTime")
    let sala=document.getElementById("inputSala")
    let categoria=document.getElementById("selCategorias")
    let responsavel=document.getElementById("inputResponsavel")
    let imagem=document.getElementById("inputPoster")
//Ir buscar o ID da categoria
    let categoriaID
//Submeter Evento
    let formEventos=document.getElementById("frmEventos")
formEventos.addEventListener("submit",function(event){
//Criar Objeto e enviar para o array
let newEvento=new Evento(nome.value,data.value,hora.value,sala.value,categoriaID.value,responsavel.value,imagem.value)
eventos.push(newEvento)
//enviar o array para localstorage


})


}

//Render categorias


//Render Calendário