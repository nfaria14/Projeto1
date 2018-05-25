window.onload=function(){
    //Ir buscar as parcerias existentes
    renderparcerias()

    let nome=document.getElementById("inputNome")
    let link=document.getElementById("inputLink")
    let local=document.getElementById("inputLocalizacao")
    let frmParceiros=document.getElementById("frmParceiros")
    let existe=false
    let strerror=""
    frmParceiros.addEventListener("submit",function(event){
        for(let i=0;i<parcerias.length;i++){
            if(nome.value==parcerias[i]._nome){
                existe=true
            }

        }
        if(existe){
            strerror="Parceria já existe"
        }

        if(strerror!=""){
            alert(strerror)
        }else{
            //Criar Objeto adicionar ao array e enviar para a locarstorage

            let newParceria=new Parceria(nome.value,local.value,link.value)
            parcerias.push(newParceria)

            localStorage.setItem("parcerias", JSON.stringify(parcerias))

        }
        event.preventDefault()
    })

}