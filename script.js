/* ---------------------------- Validation Email ---------------------------- */


function validation(){

    var form = document.getElementById('form')
    var email = document.getElementById('email')
    var text = document.getElementById('text')
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    
    if(email.value.match(pattern)){
        text.innerText = ""

    }else if(email.value == ""){
         text.innerText = "Oops! Please add your email"
         text.style.color = "green"
       
        
    }else{
        text.innerText = "Oops! Please check your email"
        text.style.color = "red"
    }
}