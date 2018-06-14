window.onload=function(){
    renderUtilizadores()
    renderDocentes()
    login()
    verificarlogin()
    let frmDocente=document.getElementById('frmDocente')
    let frmEstudante=document.getElementById('frmEstudante')
    frmDocente.style.display='none'
    frmEstudante.style.display='none'
    //Referências HTML FORM ESTUDANTE
    let nome=document.getElementById("inputNome1")
    let email=document.getElementById("inputEmail1")
    let oldpw=document.getElementById("oldPassword1")
    let newpw=document.getElementById("newPassword1")

    //Referências HTML FORM DOCENTE

    let nome2=document.getElementById("inputNome")
    let email2=document.getElementById("inputEmail")
    let oldpw2=document.getElementById("oldPassword")
    let newpw2=document.getElementById("newPassword")
    let uc=document.getElementById("inputUC")
    let formacao=document.getElementById("inputformacao")
    let cv=document.getElementById("inputCV")


    let userID=localStorage.getItem("userID")
    for(let i=0;i<utilizadores.length;i++){
        if(utilizadores[i]._id==userID){
            if(utilizadores[i]._tipo==0){
                console.log(userID)
                console.log(utilizadores[i])
                console.log(utilizadores[i]._tipo)
                console.log("Estudante")
                frmEstudante.style.display='block'
                console.log(utilizadores[i]._nome)
                nome.value=utilizadores[i]._nome
                email.value=utilizadores[i]._email
            }else if(utilizadores[i]._tipo==1){
                console.log("Docente")
                frmDocente.style.display='block'
                nome2.value=utilizadores[i]._nome
                email2.value=utilizadores[i]._email
                for(let j=0;j<docentes.length;j++){
                    if(docentes[j]._email==email2.value){
                        uc.value=docentes[j]._uc
                        cv.value=docentes[j]._cv
                        formacao.value=docentes[j]._formacao

                    }
                }
            }
        }
    }
    frmDocente.addEventListener("submit",function(){

    })

    frmEstudante.addEventListener("submit",function(){
        
    })
}