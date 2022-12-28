// Header scroll
let nav= document.querySelector(".navbar");
window.onscroll = function () {
     if (document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
     }else{
        nav.classList.remove("header-scrolled");
     }
}

// nav Hide
let navBar= document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse.navbar-collapse ");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
});

// hire me form 


function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 6){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }


    if(email.indexOf("@") == -1 || email.length < 6 || email.lastIndexOf(".") < email.indexOf("@") +2 || email.lastIndexOf(".") + 2 >=email.length){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }

    if(message.length <= 100){
      text = "Please Enter More Than 100 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
