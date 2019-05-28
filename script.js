//Contact Form Validation

function validation() {
    var mobilenum = document.getElementById("num").value;
    var textarea = document.getElementById("textarea").innerHTML;

    if (mobilenum.length != 10) {
        document.getElementById("error1").innerHTML = "**Please enter a 10 digit mobile number.";
        document.getElementById("error1").style.color = "red";
        return false;
    }
}