let comentarios = []
let comentarioID = 0
class Comentario {
    constructor(nome, evento, texto) {
        this._id = Comentario.getLastId() + 1
        this.nome = nome
        this.evento = evento
        this.texto = texto
    }

    //PROPRIEDADE ID
    get id() {
        return this._id
    }

    //Ir buscar o último ID
    static getLastId() {
        let lastId = 0
        //ARRAY DE parcerias
        if (comentarios.length > 0) {
            lastId = comentarios[comentarios.length - 1].id
        }
        return lastId
    }

    //Propriedade Nome

    get nome() {
        return this._nome
    }

    set nome(value) {
        this._nome = value
    }
    //PROPRIEDADE evento
    get evento() {
        return this._evento
    }

    set evento(value) {
        this._evento = value
    }


    //Propriedade texto

    get texto() {
        return this._texto
    }

    set texto(value) {
        this._texto = value
    }
}

//Function preencher array

function rendercomentarios() {

    if (localStorage.getItem('comentarios')) {
        let a = JSON.parse(localStorage.getItem('comentarios'))

        //Maneira de encher o array sem ter que mexer nas variáceis internas
        for (let i = 0; i < a.length; i++) {
            let b = new Comentario(a[i]._nome, a[i]._evento, a[i]._texto)
            comentarios.push(b)
        }

    }
}