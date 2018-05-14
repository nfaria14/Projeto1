class Evento {
    constructor(nome,data,hora,sala,categoria,responsavel,imagem){
        this._id=Evento.getLastId()+1
        this.nome=nome
        this.hora=hora
        this.sala=sala
        this.categoria=categoria
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
    //Propriedade categoria(MAIS TARDE SERÁ UMA CLASSE?)
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

}   

