
window.onload = function () {
    logout()

    //Atualizar o array
    rendercategorias()
    rendereventos()
    //Ir buscar a tabela
    let tblCat = document.getElementById("tblCategorias")
    //Mostrar a tabela
    renderTable()

    //Ir lbuscar a categoria
    let cat = document.getElementById("inputCategoria")


    //Adicionar eventlistener

    let frmCat = document.getElementById("frmCategorias")
    let existe = false
    frmCat.addEventListener("submit", function (event) {
        event.preventDefault()
        //Verificar se já existe a categoria
        for (let i = 0; i < categorias.length; i++) {
            if (categorias[i].nome == cat.value) {
                existe = true

            }

        }
        if (existe == true) {
            alert("Categoria já existe")

        }
        else {

            //Criar objeto e enviar para o array
            let newCat = new Categoria(cat.value)
            categorias.push(newCat)
            console.log(categorias)
            //Enviar para o localstorage
            localStorage.setItem("categorias", JSON.stringify(categorias))

            //Atualizar a tabela
            renderTable()
        }

    })
    //Functions
    // Função para renderizar a tabela 
    function renderTable() {
        let strHtml = "<thead class='thead-dark'><tr>" +
            "<th class='w-2'>#</th>" +
            "<th class='w-50'>Categoria</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < categorias.length; i++) {
            strHtml += "<tr>" +
                "<td>" + categorias[i]._id + "</td>" +
                "<td>" + categorias[i]._nome + "</td>" +
                "<td>" +
                "<a id='" + categorias[i]._id + "' class='remove'><i class='fa fa-remove'></i></a> " +
                "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"
        tblCat.innerHTML = strHtml

        // Get all the remove links from the table
        let tdRemove = document.getElementsByClassName("remove")
        // For each link, add a listener to listen the click event
        for (let i = 0; i < tdRemove.length; i++) {
            tdRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let categoriaId = tdRemove[i].getAttribute("id")
                removeCatById(categoriaId)
                renderTable()
            })
        }


    }


    //Função para eliminar por ID
    // Remove game based on its ID
    function removeCatById(id) {
       
        let categoriapararemover
        let str=prompt("Todos os eventos associados a essa categoria serão removidos deseja prosseguir?","Sim")
        if(str=="Sim"){
            for (let i = 0; i < categorias.length; i++) {
                if (categorias[i]._id == id) {
                  categoriapararemover=categorias[i]._nome
                  
                  categorias.splice(i, 1)
                }
            }
            console.log("Isto vai ser removido"+categoriapararemover)
            for(let j=0;j<eventos.length;j++){
                if(eventos[j]._categoria.indexOf(categoriapararemover)==true){
                    console.log("entra")
                    console.log(j+categoriapararemover)
                   eventos.splice(j, 1)
                }
            }
            
                   
    
                    //Atualizaar local storage        
                    localStorage.setItem("categorias", JSON.stringify(categorias))
                    localStorage.setItem("eventos", JSON.stringify(eventos))
    
    
        }

        }
        
}