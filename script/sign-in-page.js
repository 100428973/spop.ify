function checkReg (string, re) {
    // Get the value of the input field with id="numb"
    var re = new RegExp(re);
    if (re.test(string)) {
        return true;
    }
    return false;
}

function checkForm() {
      let output = "";
      // Check name 
      let name = document.getElementById("name").value;
      if (!(checkReg(name, "^([A-Za-z][a-z]+)$"))){
          output = "Incorrect name format";
          return output;
      }
      // Check surname 
      let surname = document.getElementById("surname").value;
      if (!(checkReg(surname, "^([A-Za-z][a-z]+)$"))){
          output = "Incorrect surname format";
          return output;
      }
      // Check email 
      let email = document.getElementById("email").value;
      if (!(checkReg(email, "^([A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]{1,3})$"))){
          output = "Incorrect email format";
          return output;
      }
      // Check username 
      let username = document.getElementById("username").value;
      if (!(checkReg(username, "^([A-Za-z0-9]+)$"))){
          output = "Incorrect username format";
          return output;
      }
      // Check username 
      let password = document.getElementById("password").value;
      if (!(checkReg(password, "^([A-Za-z0-9]{1,8})$"))){
          output = "Incorrect password format";
          return output;
      }
      return output;
  }    

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function validateForm() {
    let output = checkForm();
    if (output == ""){
        alert("Correct form");
        let username = document.getElementById("username").value;
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let email = document.getElementById("email").value;
        let dob = document.getElementById("dob").value;
        let pict = document.getElementById("pict").value;
        let password = document.getElementById("password").value;
        var list = [password, name, surname, email, dob, pict];
        setCookie(username, JSON.stringify(list), 30);
        output = "cookie created";
    }
    document.getElementById("demo").innerHTML = output;
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
  
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
}