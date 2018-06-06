window.onload=function(){
    renderDocentes()
    let docenteID= localStorage.getItem("docenteID")

    //Referencias html
    let foto=document.getElementById("foto")
    let nome=document.getElementById("inputNome")
    let email=document.getElementById("inputEmail")
    let uc=document.getElementById("inputUC")
    let formacao=document.getElementById("inputformacao")
    let cv=document.getElementById("inputCV")

    for(let i=0;i<docentes.length;i++){
        if(docentes[i]._id==docenteID){
            foto.setAttribute("src",docentes[i]._foto)
            nome.value=docentes[i]._nome
            email.value=docentes[i]._email
            uc.value=docentes[i]._uc
            formacao.value=docentes[i]._formacao
            cv.value=docentes[i]._cv
        }

    }
}