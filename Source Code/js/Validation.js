class Customer{
    constructor(){
    this.Customer_Name;
    this.Customer_Phone;
    this.Customer_Email;
    this.Customer_Password;
    this.Customer_Message;
    }
};

function Clear(){
    document.querySelector(".error0").textContent = null;
    document.querySelector(".error1").textContent =null;
    document.querySelector(".error2").textContent =null;
    document.querySelector(".error3").textContent =null;
    document.querySelector(".error4").textContent =null;
}
function validateForm() {
    let err0 = document.querySelector(".error0");
    var form = document.forms["ContactUsform"];
    if (form.Name.value == " " || form.Name.value == null) {
    err0.textContent = "You must enter your name!";
    return false;
    }
    let err1 = document.querySelector(".error1");
    let rePhone = /^(\d{11})$/;
    if(!(form.phone.value.match(rePhone))){
        err1.textContent = "Phone number must include only 11 digits!";
        return false;
    }
    let err2 = document.querySelector(".error2");
    let e = document.forms["ContactUsform"].email.value;  
    let at=e.indexOf("@");  
    let dot=e.lastIndexOf(".");  
    if (at<1 || dot<at+2 || dot+2>=e.length){  
    err2.textContent = "Please enter a valid e-mail address!";
    return false;  
    }
    let err3 = document.querySelector(".error3");
    var password=document.forms["ContactUsform"].password.value;
    if(password.length<8){
        err3.textContent = "Password must be at least 8 characters long!";
        return false
    }
    let err4 = document.querySelector(".error4");
    if (form.text.value == "" || form.text.value == null) {
        err4.textContent = "You should leave a message!";
        return false;
        }

}

var submitBtn = document.getElementById("sub");
const b = new Customer;
submitBtn.onclick = function () {
    b.Customer_Name=document.forms["ContactUsform"].Name.value;
    b.Customer_Phone=document.forms["ContactUsform"].phone.value;
    b.Customer_Email=document.forms["ContactUsform"].email.value;
    b.Customer_Password=document.forms["ContactUsform"].password.value;
    b.Customer_Message=document.forms["ContactUsform"].text.value;
    console.log(b);
}
