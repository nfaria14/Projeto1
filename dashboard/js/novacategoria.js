let catID = 0
window.onload = function () {

    //Atualizar o array
    rendercategorias()
    //Ir lbuscar a categoria
    let cat = document.getElementById("inputCategoria")
    //Adicionar eventlistener

    let frmCat = document.getElementById("frmCategorias")
    let existe=false
    frmCat.addEventListener("submit", function (event) {
        event.preventDefault()
        //Verificar se já existe a categoria
        for (let i = 0; i < categorias.length; i++) {
            if (categorias[i].nome == cat.value) {
               existe=true
                
            } 

        }
        if(existe==true){
            alert("Categoria já existe")
            
        }
        else {         
           
            //Criar objeto e enviar para o array
            let newCat= new Categoria(cat.value)
            categorias.push(newCat)
            console.log(categorias)
            //Enviar para o localstorage

            localStorage.setItem("categorias", JSON.stringify(categorias))
        }
        
    })


}