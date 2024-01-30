function check_the_input_is_true(){
    var email = document.getElementById("input_email");
    var emailvalue = email.value;
    var pass = document.getElementById("input_pass");
    var passvalue = pass.value;
    if(emailvalue.trim() === "")
        alert("email is empty")
    else if(passvalue.trim() === "")
        alert("pass is empty")
}

function enterkey(event){
    if(event=13)
        check_the_input_is_true();
}

document.getElementById("input_email").addEventListener("keypress", enterkey);
document.getElementById("input_pass").addEventListener("keypress", enterkey);