export default function signIn() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const email = document.getElementById("emailSignIn").value;

  const password = document.getElementById("passwordSignIn").value;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    alert("Usuário ou senha inválidos");
    return;
  }

  localStorage.setItem("CurrentUser", JSON.stringify(user));

  alert("Login realizado");
}
