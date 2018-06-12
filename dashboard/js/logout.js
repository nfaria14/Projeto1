
function logout(){
    let logout=document.getElementById("logout")
    logout.addEventListener("click",function(){
        localStorage.setItem("userID",0)
    })

}