function chkpassword(params) {
  let psw = document.getElementById("forgotpsw").value;
  let lower = /[a-z]/;
  let upper = /[A-Z]/;
  let num = /[0-9]/;
  let special = /[;:\!@#$%^&*-_+=()/]/;
  if (
    psw.length < 8 ||
    !upper.test(psw) ||
    !num.test(psw) ||
    !special.test(psw) ||
    !lower.test(psw)
  ) {
    alert("Please enter a strong Password");
  } else {
    alert("Password changed Successfully");
  }
}
// console.log(chkpassword());
