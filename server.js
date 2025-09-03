const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Permite que el frontend acceda
app.use(express.json());

const REQRES_URL = "https://reqres.in/api";

// Login (simulado)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await axios.post(`${REQRES_URL}/login`, { email, password });
    res.json({ token: response.data.token });
  } catch (error) {
    res.status(400).json({ error: "Credenciales incorrectas" });
  }
});

// Obtener usuarios
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(`${REQRES_URL}/users?page=1`);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});
