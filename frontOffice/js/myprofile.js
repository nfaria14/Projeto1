window.onload=function(){
    renderUtilizadores()
    renderDocentes()
    login()
    verificarlogin()
    let frmDocente=document.getElementById('frmDocente')
    let frmEstudante=document.getElementById('frmEstudante')
    frmDocente.style.display='none'
    frmEstudante.style.display='none'

    let userID=localStorage.getItem("userID")
    for(let i=0;i<utilizadores.length;i++){
        if(utilizadores[i]._id==userID){
            if(utilizadores[i]._tipo==0){
                console.log(userID)
                console.log(utilizadores[i])
                console.log(utilizadores[i]._tipo)
                console.log("Estudante")
                frmEstudante.style.display='block'
            }else if(utilizadores[i]._tipo==1){
                console.log("Docente")
                frmDocente.style.display='block'
            }
        }
    }
    frmDocente.addEventListener("submit",function(){


    })

    frmEstudante.addEventListener("submit",function(){
        
    })
}