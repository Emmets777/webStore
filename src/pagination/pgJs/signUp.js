export default function signUp() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const newUser = [
    {
      id: users.length + 1,

      name: document.getElementById("userName").value,

      email: document.getElementById("userEmail").value,

      password: document.getElementById("userPassword").value,
    },
  ];

  // verifica email duplicado
  const userExists = users.find((user) => user.email === newUser.email);

  if (userExists) {
    alert("Email já cadastrado");
    return;
  }

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Cadastro realizado");
}
