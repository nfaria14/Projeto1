let categorias=[]
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
     static getLastId() {
        let lastId = 0
        //ARRAY DE CATEGORIAS
        if (categorias.length > 0) {
            lastId = categorias[categorias.length-1].id
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

}