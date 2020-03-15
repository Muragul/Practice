var cnt=0;
function get(){
    alert('You need to sign up');
}
function modal1(){
    var modal = document.getElementById("myModal1");
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }   
}
function ok(){
    var modal = document.getElementById("myModal1");
    var first=document.getElementById("first");
    var last=document.getElementById("last");
    var age=document.getElementById("age");
    var mail=document.getElementById("mail");
    var login=document.getElementById("login");
    var password=document.getElementById("password");
    if (first.value.length==0 ||
        last.value.length==0 || age.value.length==0 ||
        mail.value.length==0 || login.value.length==0 ||
        password.value.length==0){
            alert('Fill the form');
        } else{
        modal.style.display="none";   
        alert('Registration completed successfully');
        first.value="";
        last.value="";
        age.value="";
        mail.value="";
        login.value="";
        password.value="";
        }
}