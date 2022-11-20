function chk(params) {
  let psw = document.getElementById("psw").value;
  let cpsw = document.getElementById("crfmpsw").value;
  if (psw != cpsw) {
    alert("Password does not match");
  }
}
function submit(params) {
  let psw = document.getElementById("psw").value;
  let cpsw = document.getElementById("crfmpsw").value;
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let dob = document.getElementById("date").value;
  let phnnum = document.getElementById("contactnum").value;
  let mail = document.getElementById("email").value;
  let ackn = document.getElementById("chkbox").value;
  if (
    fname == "" ||
    lname == "" ||
    dob == "" ||
    phnnum == "" ||
    mail == "" ||
    psw == "" ||
    cpsw == "" ||
    ackn == ""
  ) {
    alert("Please fill in all the required fields");
  } else {
    window.location.href = "http://127.0.0.1:5500/HTML/Registration.html";
  }
}
