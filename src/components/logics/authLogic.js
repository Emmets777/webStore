export const initUsers = () => {
  const fakeData = [
    { id: 1, name: "Admin", email: "admin@test.com", password: "admin123" },
  ];

  const getUsers = JSON.parse(localStorage.getItem("users"));

  if (!getUsers || !Array.isArray(getUsers)) {
    localStorage.setItem("users", JSON.stringify(fakeData));
  }
};
