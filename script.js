let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}




function validateForm(){
    var name=document.getElementById('name').value;
    var name = document.getElementById("name").value;
    var email=document.getElementById('email').value;
    
    document.getElementById('nameError').innerHTML='';
    document.getElementById("nameError").innerHTML = "";
    document.getElementById('emailError').innerHTML='';
    
    
    if (name==="") {
        document.getElementById('nameError').innerHTML='name is required';
        return false;
    }
    
   if (name === "") {
       document.getElementById("nameError").innerHTML = "Name is required";
       return false;
    }

    if (email==="") {
        document.getElementById('emailError').innerHTML='email is required';
        return false;
    }else if(!isvalidEmail(email)){
        document.getElementById('emailError').innerHTML='invalid email format';
        return false;

    }
    return true;

}


function isvalidEmail(email){
     var emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
 }