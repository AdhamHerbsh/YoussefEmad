
function valid(){
    var em=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var massage=document.getElementById("massage").value;
    if (em==""){
        alert("please enter in email")
    }
    if (phone==""){
        alert("please enter in phone")
    }
    if (massage==""){
        alert("please enter in massage")
    }
    if (em!="" && phone!="" && massage){
        alert("succesful")
    }
}
