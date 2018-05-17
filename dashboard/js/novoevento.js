let eventoID=0
let eventos= []
let categorias=[]

class Evento {
    constructor(nome,data,hora,sala,categoriaID,responsavel,imagem){
        this._id=Evento.getLastId()+1
        this.nome=nome
        this.hora=hora
        this.sala=sala
        this.categoriaID=categoriaID
        this.responsavel=responsavel
        this.imagem=imagem
    }
    //Propriedade ID

    get id(){
        return this._id
    }

     //Ir buscar o último ID
     static getLastId() {
        let lastId = 0
        //ARRAY DE EVENTOS
        if (eventos.length > 0) {
            lastId = eventos[eventos.length-1].id
        }        
        return lastId
    }

    //Propriedade Nome
    get nome(){
        return this._name
    }

    set nome(value){
        this._nome=value
    }

    //Propriedade data
    get data(){
        return this._data
    }

    set data(value){
        this._data=value
    }
    //Propriedade hora

    get hora(){
        return this._hora
    }

    set hora(value){
        this._hora=value
    }

    //Propriedade sala
    get sala(){
        return this._sala
    }

    set sala(value){
        this._sala=value
    }
    //Propriedade categoria
    get categoriaID(){
        return this._categoriaID
    }

    set categoriaID(value){
        this._categoriaID=value
    }
    //Propriedade responsavel
    get responsavel(){
        return this._responsavel
    }

    set responsavel(value){
        this._responsavel=value
    }
    //Propriedade imagem
    get imagem(){
        return this._imagem
    }

    set imagem(value){
        this._imagem=value
    }

}   

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