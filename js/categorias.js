let categorias=[]
let catID = 0
class Categoria{
    constructor(nome){
        this._id=Categoria.getLastID()+1
        this.nome=nome
    }

    //Propriedade ID

    get id(){
        return this._id
    }

     //Ir buscar o último ID
     static getLastID() {
        let lastId = 0
        //ARRAY DE CATEGORIAS
        if (categorias.length > 0) {
            lastId = categorias[categorias.length-1].id
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

}

//Function preencher array

function rendercategorias(){

    if (localStorage.getItem('categorias')) {
        let a = JSON.parse(localStorage.getItem('categorias'))

        //Maneira de encher o array sem ter que mexer nas variáceis internas
        for (let i = 0; i < a.length; i++) {
            let b = new Categoria(a[i]._nome)
            categorias.push(b)
        }

}
}