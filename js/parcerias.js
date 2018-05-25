let parcerias=[]
let parceriaID=0
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
        return this._nome
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

//Function preencher array

function renderparcerias(){

    if (localStorage.getItem('parcerias')) {
        let a = JSON.parse(localStorage.getItem('parcerias'))

        //Maneira de encher o array sem ter que mexer nas variáceis internas
        for (let i = 0; i < a.length; i++) {
            let b = new Parceria(a[i]._nome,a[i]._local,a[i]._url)
           parcerias.push(b)
        }

}
}