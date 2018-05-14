class Docente{
    constructor(nome,foto,formacao,uc,cv){
           this._id=Docente.getLastId()+1
           this.nome=nome
           this.foto=foto
           this.formacao=formacao
           this.uc=uc
           this.cv=cv 
    }
    //PROPRIEDADE ID
    get id(){
        return this._id
    }

     //Ir buscar o último ID
     static getLastId() {
        let lastId = 0
        //ARRAY DE Docentes
        if (docentes.length > 0) {
            lastId = docentes[docentes.length-1].id
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

    //Propriedade foto
    get foto(){
        return this._foto
    }

    set foto(value){
        this._foto=value
    }
    //Propriedade formacao

    get formacao(){
        return this._formacao
    }

    set formacao(value){
        this._formacao=value
    }
    //Propriedade uc

    get uc(){
        return this._uc
    }

    set uc(value){
        this._uc=value
    }
    //Propriedade cv
    get cv(){
        return this._cv
    }

    set cv(value){
        this._cv=value
    }
}