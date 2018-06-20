let eventos= []
let eventoID = 0
class Evento {
    constructor(nome,data,hora,sala,categoria,responsavel,imagem,descricao,pontuacao){
        this._id=Evento.getLastId()+1
        Evento._contador = 0;
        Evento._pontuar = 0;
        this.nome=nome
        this.data=data
        this.hora=hora
        this.sala=sala
        this.categoria=categoria
        this.responsavel=responsavel
        this.imagem=imagem
        this.descricao=descricao
        this.pontuacao=pontuacao
        
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
            lastId = eventos[eventos.length-1]._id
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

    //Propriedade descrição
    get descricao(){
        return this._descricao
    }

    set descricao(value){
        this._descricao=value
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
    get categoria(){
        return this._categoria
    }

    set categoria(value){
        this._categoria=value
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

    //Propriedade Pontuacao
    get pontuacao() {
        return this._pontuacao
    }

    set pontuacao(valor) {
        if (valor != 0 && valor != null) {
            console.log(valor)
            let pontos = Evento.fazerPontuacao(valor)
      
            this._pontuacao = pontos
        }
    }
     //só para poder ir sabendo onde vai o contador 
     get contador() {
        return this._contador
    }
    static fazerPontuacao(pontos) {

        let media = 0, soma = 0,  denominador = 0;
        Evento._contador++

        // Evento._pontuar = this._pontuacao

        if (Evento._contador == 0) denominador = Evento._contador
        else denominador = Evento._contador - 1

        console.log(Evento._contador)
        soma = Evento._pontuar * denominador



        soma += pontos
        console.log("Soma - " + soma)
        media = soma / Evento._contador
        Evento._pontuar = media
        console.log("Pontuacao - " + Evento._pontuar)



        return media
    }
}



//Function preencher array

function rendereventos(){

    if (localStorage.getItem('eventos')) {
        let a = JSON.parse(localStorage.getItem('eventos'))

        //Maneira de encher o array sem ter que mexer nas variáceis internas
        for (let i = 0; i < a.length; i++) {
            let b = new Evento(a[i]._nome,a[i]._data,a[i]._hora,a[i]._sala,a[i]._categoria,a[i]._responsavel,a[i]._imagem,a[i]._descricao,a[i]._pontuacao)
            eventos.push(b)
        }

}
}