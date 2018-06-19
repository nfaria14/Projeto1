let pontuacoes=[]
let pontuacaoID=0

class Pontuacao{
    constructor(evento,email,valor){
        this._id=Pontuacao.getLastID()+1
        this.evento=evento
        this.email=email
        this.valor=valor
    }

    //ID

    get id(){
        return this._id
    }

     //Ir buscar o último ID
     static getLastId() {
        let lastId = 0
        //ARRAY DE parcerias
        if (pontuacoes.length > 0) {
            lastId = pontuacoes[pontuacoes.length-1]._id
        }        
        return lastId
    }


    //evento
    get evento(){
        return this._evento
    }

    set evento(value){
        this._evento=value
    }
    

    //email-->Para ver quem é que pontuou
    get email(){
        return this._email
    }

    set email(value){
        this._email=value
    }


    //Valor--> pontuação dada

    get valor(){
        return this._valor
    }

    set valor(value){
        this._valor=value
    }

    //Ir buscar todas as pontuações
    getTotal(){
        let total=0
        for(let i=0;i<pontuacoes.length;i++){
            total=total+pontuacoes[i]._valor
        }
        return total
    }
}


function renderpontuacoes(){
    if (localStorage.getItem('pontuacoes')) {
        let a = JSON.parse(localStorage.getItem('pontuacoes'))

        //Maneira de encher o array sem ter que mexer nas variáceis internas
        for (let i = 0; i < a.length; i++) {
            let b = new Pontuacao(a[i]._evento,a[i]._email,a[i]._valor)
           pontuacoes.push(b)
        }

}
}