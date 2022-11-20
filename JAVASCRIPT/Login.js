function showmessage() {
  let name = document.getElementById("name").value;
  let psw = document.getElementById("psw").value;
  let lower = /[a-z]/;
  let upper = /[A-Z]/;
  let num = /[0-9]/;
  let special = /[;:\!@#$%^&*-_+=()/]/;
  if (name == "" || psw == "") {
    alert("Please enter valid credentials");
  } else if (
    psw.length < 8 ||
    !upper.test(psw) ||
    !num.test(psw) ||
    !special.test(psw) ||
    !lower.test(psw)
  ) {
    alert("Please enter a strong Password");
  } else {
    alert("Login Successful");
    window.location.href = "http://127.0.0.1:5500/HTML/MainPage.html";
  }
}
