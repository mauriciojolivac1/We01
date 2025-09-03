document.getElementById("btnCargar").addEventListener("click", async () => {
  try {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const data = await res.json();
    const usuarios = data.data;

    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach(u => {
      const li = document.createElement("li");
      li.innerHTML = `<img src="${u.avatar}" width="50"> ${u.first_name} ${u.last_name} - ${u.email}`;
      lista.appendChild(li);
    });
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
});
