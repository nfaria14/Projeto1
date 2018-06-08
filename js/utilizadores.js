let utilizadores= []
let utilizadorID = 0
class Utilizador {
    constructor(nome,tipo,email,password){
        this._id=Utilizador.getLastId()+1
        this.nome=nome
        this.tipo=tipo
        this.email=email
        this.password=password
    }
    //Propriedade ID

    get id(){
        return this._id
    }

     //Ir buscar o último ID
     static getLastId() {
        let lastId = 0
        //ARRAY DE UTILIZADORES
        if (utilizadores.length > 0) {
            lastId = utilizadores[utilizadores.length-1]._id
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

    //Propriedade tipo
    get tipo(){
        return this._tipo
    }

    set tipo(value){
        this._tipo=value
    }
    //Propriedade email

    get email(){
        return this._email
    }

    set email(value){
        this._email=value
    }

    //Propriedade password
    get password(){
        return this._password
    }

    set password(value){
        this._password=value
    }
}   

//Function preencher array

function renderUtilizadores(){

    if (localStorage.getItem('utilizadores')) {
        let a = JSON.parse(localStorage.getItem('utilizadores'))

        //Maneira de encher o array sem ter que mexer nas variáceis internas
        for (let i = 0; i < a.length; i++) {
            let b = new Utilizador(a[i]._nome,a[i]._tipo,a[i]._email,a[i]._password)
            utilizadores.push(b)
        }

}
}