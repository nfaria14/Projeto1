class Parceria{
    constructor(nome,local,url){
        this._id=Parceria.getLastId()+1
        this.nome=nome
        this.local=local
        this.url=url
    }

    //PROPRIEDADE ID
    get id(){
        return this._id
    }

     //Ir buscar o último ID
     static getLastId() {
        let lastId = 0
        //ARRAY DE parcerias
        if (parcerias.length > 0) {
            lastId = parcerias[parcerias.length-1].id
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
    //PROPRIEDADE local
    get local(){
        return this._local
    }

    set local(value){
        this._local=value
    }
    
    //Propriedade url

    get url(){
        return this._url
    }

    set url(value){
        this._url=value
    }
}