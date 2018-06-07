let testemunhos=[]

class Testemunho{
    constructor(email,texto){
        this._id=Testemunho.getLastID()+1
        this.email=email
        this.texto=texto
    }
    //GET ID
    get id(){
        return this._id
    }

     //Ir buscar o último ID
     static getLastID() {
        let lastId = 0
        //ARRAY DE Testemunhos
        if (testemunhos.length > 0) {
            lastId = testemunhos[testemunhos.length-1]._id
        }        
        return lastId
    }


    //GET E SET EMAIL
    get email(){
        return this._email

    }

    set email(value){
        this._email=value

    }
    //GET E SET TEXTO
    get texto(){
        return this._texto
    }

    set texto(value){
        this._texto=value
    }
}
  let testeTestemunho=new Testemunho("random123@hotmail.com","Porreiro PAH!!!")
testemunhos.push(testeTestemunho)

//Função para atualizar array
function rendertestemunhos(){

    if (localStorage.getItem('testemunhos')) {
        let a = JSON.parse(localStorage.getItem('testemunhos'))

        //Maneira de encher o array sem ter que mexer nas variáceis internas
        for (let i = 0; i < a.length; i++) {
            let b = new Testemunho(a[i]._email,a[i]._texto)
           testemunhos.push(b)
        }

}
}